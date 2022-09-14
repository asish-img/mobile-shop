import { createStore ,applyMiddleware} from "redux";
import { reducers } from "./reducers";
import logger from 'redux-logger'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// eslint-disable-next-line import/prefer-default-export

const persistConfig = {
  key: "primary",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);



const store = createStore(persistedReducer,applyMiddleware(logger));
const persistor = persistStore(store);

export { store as default, persistor };
