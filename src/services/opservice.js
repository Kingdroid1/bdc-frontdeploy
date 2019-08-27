import axios from 'axios';
const API_URL = 'http://localhost:5000/api/operators';

export class OpService {

  constructor() {
  }

  getOperators() {
    const url = `${API_URL}/operators/`;
    return axios.get(url).then(response => response.data);
  }

}
