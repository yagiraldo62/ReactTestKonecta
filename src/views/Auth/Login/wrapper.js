import React, { useState } from 'react';
import { Login } from '../../../services/Login.service';
import { setToken } from '../../../utils/helpers/UserStorage';
const location = window.location;
export default (LoginComponent) => {
	return () => {
		const [Username, setUsername] = useState('');
		const [Password, setPassword] = useState('');
		const [loading, setLoading] = useState(false);

		const login = (e) => {
			e.preventDefault();
			setLoading(true);
			Login(Username, Password)
				.then(({ data }) => {
					setToken(data.token);
					setLoading(false);
					location.reload();
				})
				.catch((err) => {
					setLoading(false);
					console.error(err);
				});
		};

		const props = {
			Username,
			setUsername,
			Password,
			setPassword,
			loading,
			login,
		};
		return <LoginComponent {...props} />;
	};
};
