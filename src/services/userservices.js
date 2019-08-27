import axios from 'axios';
const API_URL = 'http://localhost:5000/api';

export class UserService {

  constructor() {
  }

  getUsers() {
    const url = `${API_URL}/users/`;
    return axios.get(url).then(response => response.data);
  }

  suscribe(email) {
    const url = `${API_URL}/suscribe/`;
    return axios.post(url,email);
  }

  getUsersId() {
    this.id =localStorage.id;

    const url = `${API_URL}/user/${this.id}`;
    const token = localStorage.getItem('id_token')

    var header ={
      'Content-Type':'application/json',
      "Authorization":'Bearer' + localStorage.getItem('id_token')
    
    
    }
    
    return axios.get(url,header).then(response => {
      response.data
 
    });
    
  }

}
