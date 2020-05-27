import { Product } from '../actionTypes';
const ProductsState = {
	products: [],
	loading: false,
	categories: [],
};
export default (state = ProductsState, action) => {
	switch (action.type) {
		case Product.SET:
			return {
				...state,
				products: action.payload,
			};
		case Product.LOADING:
			return {
				...state,
				loading: action.payload,
			};
		case Product.SET_CATEGORIES:
			return {
				...state,
				categories: action.payload,
			};

		default:
			return state;
	}
};

/**
 *
 * @param {*} theme "light" || "dark"  - current theme
 * revert the theme, save it into localStorage
 * @returns reverted theme
 */
const revertAndSaveTheme = (theme) => {
	const Theme = theme === 'light' ? 'dark' : 'light';
	localStorage.setItem('theme', Theme);
	return Theme;
};
