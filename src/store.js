import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const baseURL = 'https://naija-bdc.herokuapp.com/api';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		token: localStorage.getItem('token'),
		id: "",
		firstname: "",
		user: {}
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
						console.log(response)
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
						console.log(response)
					})
					.catch(err => {
		
						reject(err)
					})
			})
		},

		getUserId({commit}, user) {
			return new Promise((resolve, reject) => {
				commit('auth_request')
					const id = localStorage.id;
				axios({ url: `${baseURL}/user/${id}`, data:user, method: 'GET'})
				.then(response => {
					
					axios.defaults.headers.common['Authorization'] = token
					commit('auth_success', user)
					resolve(response)
					console.log("response####",id)
				})
				.catch(err => {
					commit('auth_error')
				
					reject(err)
					console.log('errrrrr', err)
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
						const  id = response.data.id;
						const role = response.data.role;
						console.log("new usssssssssssssser", user)
						localStorage.setItem('user', user);
						localStorage.setItem('token', token);
						localStorage.setItem('id', id);
						localStorage.setItem('last', last);
						localStorage.setItem('role', role);
						
						axios.defaults.headers.common['Authorization'] = token
						commit('auth_success', token, user)
						resolve(response)
						// console.log(response);
						// console.log("local Storage", localStorage.user)
						// console.log("local storage", localStorage.token)
						// console.log("local storage", localStorage.id)
						
						getUserId();
					})
					.catch(err => {
						commit('auth_error')
						localStorage.removeItem('token')
						reject(err)
					})
			})
		},

		updateUser({ commit}, id, updatedId) {
			return new Promise((resolve, reject) => {
				commit('auth_request')
				// const id = null;
				// const user = {id: null}
				// const token = localStorage.token;
				// console.log("iddddddddddd", id)
				// console.log("toooooooken", token)
				// console.log("users from updateuser", user)
				axios({url: `${baseURL}/users/ ${id}` , data:updatedId, method: 'PUT'})
				.then(response => {
					const id = response.updatedId;
					// user.id = id;
					// this.user.push(user)
					// const token = response.data.token;
					// const user = response.data.user;
					console.log("Update user", id)
					console.log('response', response)
					// localStorage.getItem('token', token)
					// localStorage.getItem('id', id)
					console.log("Update user after localstorage", user)
					console.log('token after local storage', token)
					

					axios.defaults.headers.common['Authorization'] = token
					commit('auth_success', token, user)
					resolve(response)
					console.log("response####",id)
				})
				.catch(err => {
					commit('auth_error')
					localStorage.removeItem('token')
					reject(err)
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

	},
	getters: {
		isLoggedIn: (state) => !!state.token,
		authStatus: state => state.status,
	}
});
