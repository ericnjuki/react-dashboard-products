import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  Reducer,
} from 'redux';
import localforage from 'localforage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import appReducer from './AppReducer';

const persistConfigApp = {
  key: 'app',
  storage: localforage,
  whitelist: ['product'],
};

const allReducers = combineReducers({
  app: persistReducer(persistConfigApp, appReducer as Reducer),
});

const rootReducer = (state: any, action: { payload: any; type: string }) => {
  return allReducers(state, action);
};

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
