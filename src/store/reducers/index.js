import { combineReducers } from 'redux';
import todos from './todos';
import screens from './screens';

export default combineReducers({
  screens,
  todos
});
