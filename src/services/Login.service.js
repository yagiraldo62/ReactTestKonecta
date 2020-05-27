import { Fetch, body } from '../utils/helpers/restClient';
export const Login = (Username, Password) => {
	return new Promise((resolve, reject) => {
		Fetch.post('/login', body({ username: Username, pass: Password }))
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};
