import { combineReducers } from 'redux';
import { commonReducer, CommonState } from './common';

export interface State {
  common: CommonState;
}

const reducers = combineReducers({
  common: commonReducer
});

export default reducers;
