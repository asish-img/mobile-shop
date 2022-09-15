import { UPDATE_COUNT, SET_PRODUCTS, SET_SEARCH } from "./constants";

export const updateCount = (payload) => {
  return {
    type: UPDATE_COUNT,
    payload,
  };
};
export const setProducts = (payload) => {
  return {
    type: SET_PRODUCTS,
    payload,
  };
};
export const setSearch = (payload) => {
  return {
    type: SET_SEARCH,
    payload,
  };
};
