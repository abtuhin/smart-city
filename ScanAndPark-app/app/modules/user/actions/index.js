import axios from 'axios';
import {
  USER_REGISTER_FAILED,
  USER_REGISTER_PENDING,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_PENDING,
  USER_LOGIN_FAILED,
  SYNC_USER_FROM_STORAGE,
} from '../constants';
import baseURL from '../../../configs/network';

export const loginUser = credential => async dispatch => {
  dispatch({type: USER_LOGIN_PENDING});
  try {
    const res = await axios.post(`${baseURL.api}/users/login`, credential);
    dispatch({type: USER_LOGIN_SUCCESS, payload: res.data.data});
    return res;
  } catch (e) {
    dispatch({type: USER_LOGIN_FAILED, payload: e.message});
    throw new Error(e);
  }
};

export const registerUser = credential => async dispatch => {
  dispatch({type: USER_REGISTER_PENDING});
  try {
    const res = await axios.post(`${baseURL.api}/users/register`, credential);
    dispatch({type: USER_REGISTER_SUCCESS, payload: res.data.data});
    return res;
  } catch (e) {
    dispatch({type: USER_REGISTER_FAILED, payload: e.message});
    throw new Error(e);
  }
};

export const syncUserFromStorage = user => {
  return {
    type: SYNC_USER_FROM_STORAGE,
    payload: user,
  };
};
