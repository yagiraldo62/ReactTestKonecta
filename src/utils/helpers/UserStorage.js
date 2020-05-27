// encapsulate user comprobation

import jwt from 'jwt-decode';
/**
 *
 * @param {Function} searchUser function to be called to seach user if does not exist in localStorage
 * @param {Boolean} loading user search loading status, if true, @returns true
 * @returns {Boolean} acces to private routes
 */
export const getUser = (setUserToStore, Protected = false) => {
	let flag = localStorage.getItem('access-token');
	if (flag && !Protected) return true;
	const user = localStorage.getItem('user');
	verifyUser(flag, user, setUserToStore);
	return Boolean(flag);
};

// Set user in localStorage
export const setUser = (user) => {
	const User = JSON.stringify(user);
	localStorage.setItem('user', User);
};

// Set user in localStorage
export const logOut = (user) => {
	localStorage.removeItem('user');
	localStorage.removeItem('access-token');
	window.location.reload();
};

// Get token from localStorage
export const getToken = () => {
	return localStorage.getItem('access-token');
};

// Set token in localStorage
export const setToken = (token) => {
	return localStorage.setItem('access-token', token);
};

/**
 * @param {String||null} token acces-token
 * @param {Object||null} user user in localStogare
 * @param {Function} calback user in localStogare
 * if user does not exist, make a request to fetch user information
 * *    save user information in localStorage
 * *    @returns true
 * else @returns true
 */
const verifyUser = (token, user, setUserToStore) => {
	if (!token) return true;
	if (user) return true;
	user = jwt(token).data[0];
	setUserToStore(user);
};
