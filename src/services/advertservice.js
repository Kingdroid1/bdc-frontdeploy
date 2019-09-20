import axios from 'axios';
// const API_URL = 'http://localhost:5000/api';
const API_URL = 'http://localhost:5000/api';


export class AdvertService {
    constructor() {

    }


    getAdvert(_id) {
        const url = `${API_URL}/adverts/${_id}`;
        return axios.get(url)
        .then(response => response.data);
    }

    async getAdverts (type = null) {
        const url = `${API_URL}/adverts${ !!type ? '?type=' + type : '' }`;
        return await axios.get(url)
        
    }

    getAdvertsLeft () {
        const url = `${API_URL}/leftadverts`;
        return axios.get(url)
        
    }

    getAdvertsRight () {
        const url = `${API_URL}/rightadverts`;
        return axios.get(url)
        
    }

    getAdvertsBase () {
        const url = `${API_URL}/baseadverts`;
        return axios.get(url)
        
    }
    
    addAdvert(fd) {
        console.log("fd in advertservice", fd)
        const url = `${API_URL}/adverts`;
        return axios.post(url, fd)
    }
    addAdvertLeft(fdleft) {
        console.log("fdleft in advertservice", fdleft)
        const url = `${API_URL}/leftadverts`;
        return axios.post(url, fdleft)
    }

    addAdvertRight(fdrght) {
        console.log("fd in advertservice", fdrght)
        const url = `${API_URL}/rightadverts`;
        return axios.post(url, fdrght)
    }
    addAdvertBase(fdbase) {
        console.log("fd in base advertservice", fdbase)
        const url = `${API_URL}/baseadverts`;
        return axios.post(url, fdbase)
    }
}