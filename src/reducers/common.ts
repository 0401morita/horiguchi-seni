import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { actions } from '../actions/header';
export interface CommonState {
  open_menu: boolean;
}

export const initialState: CommonState = {
  open_menu: false
};

export const commonReducer = reducerWithInitialState(initialState).case(
  actions.setCommon,
  (state: CommonState, data: any) => {
    return { ...state, ...data };
  }
);
