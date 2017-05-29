import axios from 'axios';

const baseURL = 'http://localhost:3001' //https://xy-inc-node.herokuapp.com';

export default class Api {
	static getEndpoints(){
		return axios.get(baseURL + '/endpoints').then((response) => Promise.resolve(response.data));
	}

	static saveEndpoint(endpoint){
		return axios.post(baseURL + '/endpoints', endpoint).then((response) => Promise.resolve(response.data));
	}

	static updateEndpoint(endpoint){
		return axios.post(baseURL + '/endpoints/' + endpoint._id.toString(), endpoint).then((response) => Promise.resolve(response.data));
	}
};