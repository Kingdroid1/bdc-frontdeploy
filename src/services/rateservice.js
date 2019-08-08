import axios from 'axios';
const API_URL = 'https://naija-bdc.herokuapp.com/api';
const C_URL = 'https://free.currconv.com/api/v7';

export class RateService {

  constructor() {
  }

  getLocations() {
    const url = `${API_URL}/locations/`;
    return axios.get(url).then(response => response.data);
  }

  getCurrencies() {
    const url = `${API_URL}/currency/`;
    return axios.get(url).then(response => response.data);
  }

  createRate(rate) {
    const url = `${API_URL}/rates/`;
    return axios.post(url, rate);
  }

  getRates() {
    const url = `${API_URL}/rates/listrates`;
    return axios.get(url).then(response => response.data);
  }

  convertCurrency(amount, fromCurrency, toCurrency, cb) {
    // console.log(amount, fromCurrency, toCurrency, cb);
    var apiKey = '2c2ec6613d9d0a088c2c';

    fromCurrency = encodeURIComponent(fromCurrency);
    toCurrency = encodeURIComponent(toCurrency);
    var query = fromCurrency + '_' + toCurrency;

    console.log("query===>", query);

    var url = `${C_URL}/convert?q=${query}&compact=ultra&apiKey=` + apiKey;
    console.log("url", url);
    return axios.get(url)
      .then((res) => {
        var body = '';

        console.log("res", res);
        let { data } = res;
        try {
            var val = data[query];
            if (val) {
              var total = val * amount;

              console.log(total);
              cb(null, Math.round(total * 100) / 100);
            } else {
              let err = new Error("Value not found for " + query);
              console.log(err);
              cb(err);
            }
          } catch (e) {
            console.log("Parse error: ", e);
            cb(e);
          }
      })
      .catch('error', function (e) {
        console.log("Got an error: ", e);
        cb(e);
      });


  }



}
