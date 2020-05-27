import { Product } from '../actionTypes';
export const setProducts = (products) => ({
	type: Product.SET,
	payload: products,
});

export const setUserLoading = (flag) => ({
	type: Product.SET_LOADING,
	payload: flag,
});

export const setCategories = (categories) => ({
	type: Product.SET_CATEGORIES,
	payload: categories,
});
