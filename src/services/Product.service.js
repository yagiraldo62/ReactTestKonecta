import { Fetch, body } from '../utils/helpers/restClient';
export const findAll = () => {
	return new Promise((resolve, reject) => {
		Fetch.get('/product')
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};

export const create = (data) => {
	return new Promise((resolve, reject) => {
		Fetch.post('/product', body(data))
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};

export const findCateories = () => {
	return new Promise((resolve, reject) => {
		Fetch.get('/category')
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};
