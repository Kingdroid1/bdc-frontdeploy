import axios from 'axios';
const API_URL = 'https://naija-bdc.herokuapp.com/api';

export class AdvertService {
    constructor() {

    }

    getAdvert(_id) {
        const url = `${API_URL}/adverts/${_id}`;
        return axios.get(url)
        .then(response => response.data);
    }

    getAdverts () {
        const url = `${API_URL}/adverts`;
        return axios.get(url)
        
    }
    
    addAdvert(fd) {
        console.log("fd", fd)
        const url = `${API_URL}/adverts`;
        return axios.post(url, fd)
    }
}