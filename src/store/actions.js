import * as types from "./actionTypes";

// Action creators: plain functions that return action objects.

// ----- Cart -----
export const addToCart = (bookId) => ({ type: types.ADD_TO_CART, payload: bookId });
export const removeFromCart = (bookId) => ({ type: types.REMOVE_FROM_CART, payload: bookId });
export const increaseQty = (bookId) => ({ type: types.INCREASE_QTY, payload: bookId });
export const decreaseQty = (bookId) => ({ type: types.DECREASE_QTY, payload: bookId });
export const clearCart = () => ({ type: types.CLEAR_CART });

// ----- Favorites -----
export const toggleFavorite = (bookId) => ({ type: types.TOGGLE_FAVORITE, payload: bookId });

// ----- Filters -----
export const setSearch = (text) => ({ type: types.SET_SEARCH, payload: text });
export const setCategory = (category) => ({ type: types.SET_CATEGORY, payload: category });
export const setSort = (sort) => ({ type: types.SET_SORT, payload: sort });
export const resetFilters = () => ({ type: types.RESET_FILTERS });

// ----- Theme -----
export const toggleTheme = () => ({ type: types.TOGGLE_THEME });
