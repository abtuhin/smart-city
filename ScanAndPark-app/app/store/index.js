import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducers from '../reducers';

const LoggerMiddleware = createLogger();

export const checkToken = store => next => async action => {
  if (store.getState().user.accessToken) {
    axios.defaults.headers.common.authorization = `Bearer ${
      store.getState().user.accessToken
    }`;
  } else {
    axios.defaults.headers.common.Authorization = `Bearer ${await AsyncStorage.getItem(
      'accessToken',
    )}`;
  }
  return next(action);
};

export default createStore(
  reducers,
  {},
  applyMiddleware(thunk, checkToken, LoggerMiddleware),
);
