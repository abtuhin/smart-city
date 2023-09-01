import {
  USER_REGISTER_SUCCESS,
  USER_LOGIN_SUCCESS,
  SYNC_USER_FROM_STORAGE,
} from '../constants';

export const userDeafultState = {
  user: {},
};

export default (state = userDeafultState, action) => {
  switch (action.type) {
    case SYNC_USER_FROM_STORAGE: {
      return {
        ...state,
        user: {...action.payload},
      };
    }
    case USER_REGISTER_SUCCESS: {
      return state;
    }
    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        user: {...action.payload},
      };
    }
    default:
      return state;
  }
};
