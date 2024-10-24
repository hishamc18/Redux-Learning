import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/CounterSlice';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({
  counter: counterReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);



export const store = configureStore({
reducer: persistedReducer,
});

export const persistor = persistStore(store);