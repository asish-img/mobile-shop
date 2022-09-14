import { UPDATE_COUNT } from "./constants";
const INIT_STATE = {
  cartCount: 0,
};

export const mobile = (state = INIT_STATE, action) => {
  switch (action.type) {
    case UPDATE_COUNT:
      return {
        ...state,
        cartCount: action.payload,
      };
    default:
      return state;
  }
};
