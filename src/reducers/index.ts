import { combineReducers } from 'redux';
import { appReducer, AppState } from './app';

export interface State {
  app: AppState;
}

const reducers = combineReducers({
  app: appReducer
});

export default reducers;
