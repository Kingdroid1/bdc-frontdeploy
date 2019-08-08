import axios from 'axios';
const API_URL = 'https://naija-bdc.herokuapp.com/api';

export class UserService {

  constructor() {
  }

  getUsers() {
    const url = `${API_URL}/users`;
    return axios.get(url).then(response => response.data);
  }

  getUsersId() {
    this.id =localStorage.id;
    // this.token = localStorage.token;
    console.log('gfg',this.id);
    const url = `${API_URL}/user/${this.id}`;
    const token = localStorage.getItem('id_token')

    var header ={
      'Content-Type':'application/json',
      "Authorization":'Bearer' + localStorage.getItem('id_token')
    
    
    }
    
    console.log('token',localStorage.id_token);
    return axios.get(url,header).then(response => {
      response.data
      console.log('res', response)
    });
    
  }

}
