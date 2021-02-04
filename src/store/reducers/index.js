import { combineReducers } from 'redux';
import alert from './alert';
import restaurants from './restaurants';
import city from './city';
import params from './params';
import options from './options';

export default combineReducers({
  alert,
  restaurants,
  city,
  params,
  options
});
 