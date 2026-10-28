import { combineReducers } from "redux";
import * as types from "./actionTypes";

// ---------------------------------------------------------------
// Cart state shape: { items: [{ id, qty }] }
// ---------------------------------------------------------------
const cartInitial = { items: [] };

function cartReducer(state = cartInitial, action) {
  switch (action.type) {
    case types.ADD_TO_CART: {
      const exists = state.items.find((item) => item.id === action.payload);
      if (exists) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
          ),
        };
      }
      return { ...state, items: [...state.items, { id: action.payload, qty: 1 }] };
    }
    case types.REMOVE_FROM_CART:
      return { ...state, items: state.items.filter((item) => item.id !== action.payload) };
    case types.INCREASE_QTY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
        ),
      };
    case types.DECREASE_QTY:
      return {
        ...state,
        items: state.items
          .map((item) => (item.id === action.payload ? { ...item, qty: item.qty - 1 } : item))
          .filter((item) => item.qty > 0),
      };
    case types.CLEAR_CART:
      return cartInitial;
    default:
      return state;
  }
}

// ---------------------------------------------------------------
// Favorites state shape: { ids: [bookId, ...] }
// ---------------------------------------------------------------
const favoritesInitial = { ids: [] };

function favoritesReducer(state = favoritesInitial, action) {
  switch (action.type) {
    case types.TOGGLE_FAVORITE:
      return state.ids.includes(action.payload)
        ? { ids: state.ids.filter((id) => id !== action.payload) }
        : { ids: [...state.ids, action.payload] };
    default:
      return state;
  }
}

// ---------------------------------------------------------------
// Filters state shape: { search, category, sort }
// ---------------------------------------------------------------
const filtersInitial = { search: "", category: "All", sort: "default" };

function filtersReducer(state = filtersInitial, action) {
  switch (action.type) {
    case types.SET_SEARCH:
      return { ...state, search: action.payload };
    case types.SET_CATEGORY:
      return { ...state, category: action.payload };
    case types.SET_SORT:
      return { ...state, sort: action.payload };
    case types.RESET_FILTERS:
      return filtersInitial;
    default:
      return state;
  }
}

// ---------------------------------------------------------------
// Theme state shape: { mode: "light" | "dark" }
// ---------------------------------------------------------------
const themeInitial = { mode: "light" };

function themeReducer(state = themeInitial, action) {
  switch (action.type) {
    case types.TOGGLE_THEME:
      return { mode: state.mode === "light" ? "dark" : "light" };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoritesReducer,
  filters: filtersReducer,
  theme: themeReducer,
});

export default rootReducer;
