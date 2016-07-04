import { combineReducers } from 'redux';
import users from './users';
import sessions from './sessions';
import notifications from './notifications';
import gallery from './gallery';

const reducers = combineReducers({
  users,
  sessions,
  notifications,
  gallery
});

export default reducers;
