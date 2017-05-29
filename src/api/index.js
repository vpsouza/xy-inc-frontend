import axios from 'axios';

const baseURL = 'https://xy-inc-node.herokuapp.com';

export default class Api {
	static getEndpoints(){
		return axios.get('/endpoints').then((response) => Promise.resolve(response.data));
	}
};