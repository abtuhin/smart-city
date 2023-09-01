import {FETCH_PARKINGS_SUCCESS, FETCH_BOOKINGS_SUCCESS} from '../constants';

export const userDeafultState = {
  parkings: [],
  bookings: [],
};

export default (state = userDeafultState, action) => {
  switch (action.type) {
    case FETCH_PARKINGS_SUCCESS: {
      return {
        ...state,
        parkings: action.payload,
      };
    }
    case FETCH_BOOKINGS_SUCCESS: {
      return {
        ...state,
        bookings: action.payload,
      };
    }
    default:
      return state;
  }
};
