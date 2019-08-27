import axios from 'axios';
const API_URL = 'http://localhost:5000/api';

export class CBNService {

  constructor() {
  }
  
  cbnRates() {
    const url = `${API_URL}/cbn/`;
    return axios.get(url).then(response => response.data);
  }

}
