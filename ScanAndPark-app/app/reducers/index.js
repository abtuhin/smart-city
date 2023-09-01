import {combineReducers} from 'redux';
import userReducer from '../modules/user/reducers';
import parkingReducer from '../modules/parking/reducers';

const reducers = combineReducers({
  user: userReducer,
  parking: parkingReducer,
});

export default reducers;
