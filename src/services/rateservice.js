import axios from 'axios';
const API_URL = 'http://localhost:5000/api';
const C_URL = 'https://free.currconv.com/api/v7';

export class RateService {

  constructor() {
  }

  getLocations() {
    const url = `${API_URL}/locations/locations`;
    return axios.get(url).then(response => response.data);
  }

  getCurrencies() {
    const url = `${API_URL}/currency`;
    return axios.get(url).then(response => response.data);
  }

  createRate(rate) {
    const url = `${API_URL}/rates/`;
    return axios.post(url, rate);
  }

  createWesternRate(rate) {
    const url = `${API_URL}/western/`;
    return axios.post(url, rate);
  }

  createBankRate(rate) {
    const url = `${API_URL}/bank/bankrate`;
    return axios.post(url, rate);
  }

  getWesternRate(rate) {
    const url = `${API_URL}/western/westernrate`;
    return axios.get(url, rate);
  }

  getBankRate(rate) {
    const url = `${API_URL}/bank/bankrate`;
    return axios.get(url, rate);
  }

  getCbnRate(rate) {
    const url = `${API_URL}/cbn/cbnrate`;
    return axios.get(url, rate);
  }

  getRates() {
    const url = `${API_URL}/rates`;
    return axios.get(url).then(response => response.data);
  }

  getListRates() {
    const url = `${API_URL}/rates/listrates`;
    return axios.get(url).then(response => response.data);
  }

  convertCurrency(amount, fromCurrency, toCurrency, cb) {
    var apiKey = '2c2ec6613d9d0a088c2c';

    fromCurrency = encodeURIComponent(fromCurrency);
    toCurrency = encodeURIComponent(toCurrency);
    var query = fromCurrency + '_' + toCurrency;

   

    var url = `${C_URL}/convert?q=${query}&compact=ultra&apiKey=` + apiKey;

    return axios.get(url)
      .then((res) => {
        var body = '';

       
        let { data } = res;
        try {
            var val = data[query];
            if (val) {
              var total = val * amount;
              
              cb(null, Math.round(total * 100) / 100);
            } else {
              let err = new Error("Value not found for " + query);
             
              cb(err);
            }
          } catch (e) {
            
            cb(e);
          }
      })
      .catch('error', function (e) {
        
        cb(e);
      });
  }

}
