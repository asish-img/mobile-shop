import { UPDATE_COUNT, SET_PRODUCTS, SET_SEARCH } from "./constants";
const INIT_STATE = {
  cartCount: 0,
  products: [],
  search: "",
};

export const mobile = (state = INIT_STATE, action) => {
  switch (action.type) {
    case UPDATE_COUNT:
      return {
        ...state,
        cartCount: action.payload,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
