import axios from 'axios'

export default function (token) {
	console.log('Setting token', token);
	if (token) {
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
	} else {
		axios.defaults.headers.common['Authorization'] = null
	}
}