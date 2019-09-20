import axios from 'axios';
const API_URL = 'https://naija-bdc.herokuapp.com/api';

export class CBNService {

  constructor() {
  }
  
  cbnRates() {
    const url = `${API_URL}/cbn/`;
    return axios.get(url).then(response => response.data);
  }

}
