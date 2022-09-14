import { combineReducers } from "redux";

import { mobile } from "./mobile/reducer";
const reducers = combineReducers({
  mobile,
});

export { reducers };
