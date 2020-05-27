import config from '../../config';
import axios from 'axios';
import { getToken } from './UserStorage';
const { apiUrl } = config;
const token = getToken();
export const Fetch = axios.create({
	baseURL: apiUrl,
	headers: !token
		? {}
		: {
				Authorization: `Barear ${token}`,
		  },
});

export const body = (obj) => {
	const formData = new FormData();
	Object.keys(obj).map((key) => {
		formData.append(key, obj[key]);
	});
	return formData;
};
