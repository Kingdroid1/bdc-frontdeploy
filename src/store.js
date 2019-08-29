import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { RateService } from "./services/rateservice";

const rateService = new RateService();

const baseURL = 'https://naija-bdc.herokuapp.com/api';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		token: localStorage.getItem('token'),
		id: "",
		firstname: "",
		user: {},
		rates: [],
		historicalRates: []
	},
	mutations: {
		auth_request(state) {
			state.status = 'loading'
		},
		auth_success(state, token, user) {
			state.status = 'success'
			state.token = token
			state.user = user
		},
		auth_error(state) {
			state.status = 'error'
		},
		updateRates(state, rates) {
			Vue.set(state, 'rates', rates);
			//state.rates = rates;
			console.log("updating", state.rates);
		},
		updateHistoryRates(state, rates) {
			Vue.set(state, 'historicalRates', rates);
		},
		// authUser(state, userData) {
		// 	state.token = userData.token;
		// 	state.id = userData.userId;
		// },
		// storeUser(state, user) {
		// 	state.user = user;
		// }
	},
	actions: {
		// eslint-disable-next-line
		signup({ commit }, user) {
			return new Promise((resolve, reject) => {
				commit('auth_request')
				axios({ url: `${baseURL}/users/add`, data: user, method: 'POST' })
					.then(response => {
						const token = response.data.token
						const user = response.data.user
						localStorage.setItem('token', token)

						axios.defaults.headers.common['Authorization'] = token
						commit('auth_success', token, user)
						resolve(response)

					})
					.catch(err => {
						commit('auth_error', err)
						localStorage.removeItem('token')
						reject(err)
					})
			})
		},

		// this method is for users to sign up form the signup.vue page
		CreatePassword({ commit }, user) {
			return new Promise((resolve, reject) => {
				// commit('auth_request')
				axios({ url: `${baseURL}/users/createPassword`, data: user, method: 'POST' })
					.then(response => {
						const email = response.data.email
						const password = response.data.password
						// localStorage.setItem('token', token)

						// axios.defaults.headers.common['Authorization'] = token
						// commit('auth_success', token, user)
						resolve(response)

					})
					.catch(err => {

						reject(err)
					})
			})
		},


		login({ commit }, user) {
			return new Promise((resolve, reject) => {
				commit('auth_request')
				axios({ url: `${baseURL}/users/login`, data: user, method: 'POST' })
					.then(response => {
						const token = response.data.token;
						const user = response.data.user.firstname;
						const last = response.data.user.lastname;
						const id = response.data.id;
						const role = response.data.role;
						localStorage.setItem('user', user);
						localStorage.setItem('token', token);
						localStorage.setItem('id', id);
						localStorage.setItem('last', last);
						localStorage.setItem('role', role);

						axios.defaults.headers.common['Authorization'] = token
						commit('auth_success', token, user)
						resolve(response)

					})
					.catch(err => {
						Vue.$toast.error('Wrong Username or Password, Please try again', {
							// optional options Object
							position: 'top',
							duration: 5000,
							dismissible: true
						})
						commit('auth_error')
						localStorage.removeItem('token')
						reject(err)
					})
			})
		},

		updateUser({ commit }, userDet) {
			return new Promise((resolve, reject) => {

				axios({ url: `${baseURL}/users/${userDet._id}`, data: userDet, method: 'put' })
					.then((response) => {

						resolve(response)



					})
					.catch(err => {
						reject(err)
						console.error('Error from UpdateUser in Store', err)
					})
			})
		},

		logout({ commit }) {
			return new Promise((resolve, reject) => {
				commit('logout')
				localStorage.removeItem('token')
				delete axios.defaults.headers.common['Authorization']
				resolve()
			})
		},

		getUserId({ commit }, _id) {
			return new Promise((resolve, reject) => {
				axios({ url: `${baseURL}/users/user/${_id}`, method: 'GET' })
					.then(({ data }) => {
						commit('set_user', data)
						resolve(data)
					})
					.catch(err => {
						reject(err)
						console.error('Error From Get User Store', err)
					})
			})
		},

		async fetchRatesApi({ commit }) {
			try {

				rateService.getRates().then(data => {
					let rates = data;
					commit('updateRates', rates.result);
				})
			} catch (e) {
				console.error(e);

				commit('updateRates', []);
			}
		},

		async fetchHistoricalRatesApi({ commit }) {
			try {

				rateService.getHistoricalRates().then(data => {
					let rates = data;
					commit('updateHistoryRates', rates.result);
				})
			} catch (e) {
				console.error(e);

				commit('updateHistoryRates', []);
			}
		},

	},
	getters: {
		isLoggedIn: (state) => !!state.token,
		authStatus: state => state.status,
		rates: state => state.status,
		historicalRates: state => state.status
	}
});
