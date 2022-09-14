import { UPDATE_COUNT } from "./constants";

export const updateCount = (payload) => {
  return {
    type: UPDATE_COUNT,
    payload,
  };
};
