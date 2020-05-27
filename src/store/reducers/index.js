import { combineReducers } from 'redux';
import App from './App.reducers';
import User from './User.reducers';
import Product from './Product.reducers';
export default combineReducers({
	App,
	User,
	Product,
});
