import axios from 'axios';
const baseURL = 'https://naija-bdc.herokuapp.com/api';

export class AuthService {

  constructor() {
  }

  signup(authData) {
    const url = `${baseURL}/users/createPassword`;
    return axios.post(url, authData);
  }

  login(authData) {
    const url = `${baseURL}/users/login`;
    return axios.post(url, authData);
  }

  createUser(user) {
    const url = `${baseURL}/users/add`;
    return axios.post(url, user);
  }

  updateUser(id) {
    const url = `${baseURL}/users/${id}`;
    return axios.put(url, id);
  }

  updatePassword(password) {
  
      let obj ={password:password}
      this.id = localStorage.id;
      
      const url = `${baseURL}/users/password/${this.id}`;
      
      return axios.put(url, obj)
  
   }


   comparePassword(password) {
  
    let obj ={password:password}
    this.id = localStorage.id;
  
    const url = `${baseURL}/users/comparepassword/${this.id}`;
    
    return axios.post(url, obj);

 }

  createPassword(user) {
    // this.id = localStorage.id
    const url = `${baseURL}/users/createPassword`;
    // Vue.localStorage.get('token')

    //const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZDM5ZTBmNzlmNmYyYjA3OWNlNjUxMzQiLCJyb2xlIjoib3BlcmF0b3IiLCJpYXQiOjE1NjQxNjc5MjYsImV4cCI6MTU2NDE3MTUyNn0.Auz-SP6-XRWxek0pc6kER8MSwhiTMgic7-PTgmnmrMs";
    // const token = localStorage.getItem('token')
    return axios.put(url, user).then(response => {
      
    }).catch(err => console.log("error on id", err));
  }

}