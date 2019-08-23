import axios from 'axios';
const API_URL = 'https://naija-bdc.herokuapp.com/api/operators';

export class OpService {

  constructor() {
  }

  getOperators() {
    const url = `${API_URL}/operators/`;
    return axios.get(url).then(response => response.data);
  }

}
