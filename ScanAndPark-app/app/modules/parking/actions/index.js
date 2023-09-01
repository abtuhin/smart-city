import axios from 'axios';
import {
  FETCH_PARKINGS_SUCCESS,
  FETCH_PARKINGS_FAILED,
  FETCH_PARKINGS_PENDING,
  BOOK_SLOT_FAILED,
  BOOK_SLOT_PENDING,
  BOOK_SLOT_SUCCESS,
  UNBOOK_SLOT_FAILED,
  UNBOOK_SLOT_PENDING,
  UNBOOK_SLOT_SUCCESS,
  FETCH_BOOKINGS_FAILED,
  FETCH_BOOKINGS_PENDING,
  FETCH_BOOKINGS_SUCCESS,
} from '../constants';
import baseURL from '../../../configs/network';

export const getBookings = () => async dispatch => {
  dispatch({type: FETCH_BOOKINGS_PENDING});
  try {
    const res = await axios.get(`${baseURL.api}/bookings`);
    dispatch({type: FETCH_BOOKINGS_SUCCESS, payload: res.data.data});
    return res;
  } catch (e) {
    dispatch({type: FETCH_BOOKINGS_FAILED, payload: e.message});
    throw new Error(e);
  }
};

export const getParkings = () => async dispatch => {
  dispatch({type: FETCH_PARKINGS_PENDING});
  try {
    const res = await axios.get(`${baseURL.api}/parkings`);
    dispatch({type: FETCH_PARKINGS_SUCCESS, payload: res.data.data});
    return res;
  } catch (e) {
    dispatch({type: FETCH_PARKINGS_FAILED, payload: e.message});
    throw new Error(e);
  }
};

export const bookSlot = payload => async dispatch => {
  dispatch({type: BOOK_SLOT_PENDING});
  try {
    const res = await axios.post(`${baseURL.api}/bookings/book-slot`, payload);
    dispatch({type: BOOK_SLOT_SUCCESS, payload: res.data.data});
    return res;
  } catch (e) {
    dispatch({type: BOOK_SLOT_FAILED, payload: e.message});
    throw new Error(e);
  }
};

export const unBookSlot = payload => async dispatch => {
  dispatch({type: UNBOOK_SLOT_PENDING});
  try {
    const res = await axios.post(
      `${baseURL.api}/bookings/unbook-slot`,
      payload,
    );
    dispatch({type: UNBOOK_SLOT_SUCCESS, payload: res.data.data});
    return res;
  } catch (e) {
    dispatch({type: UNBOOK_SLOT_FAILED, payload: e.message});
    throw new Error(e);
  }
};
