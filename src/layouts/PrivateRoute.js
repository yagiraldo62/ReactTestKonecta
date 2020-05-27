import React from 'react';
import { navigate } from '@reach/router';
import { getUser } from '../utils/helpers/UserStorage';
import RedirectionMessage from './RedirectionMessage';
import { setUser } from '../store/actions/User.actions';
import { useSelector, useDispatch } from 'react-redux';
export default ({ Component, ...props }) => {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.User.loading);
	const SetUser = (user) => dispatch(setUser(user));
	// if access-token does not exists, redirect to login
	// else returns component
	if (!getUser(SetUser, true)) {
		navigate('/login');
		return <RedirectionMessage>Unauthorized</RedirectionMessage>;
	}
	return <Component {...props} />;
};
