import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://naija-bdc.herokuapp.com/api'
})

// instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance