import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { actions } from '../actions/header';
export interface AppState {
  open_menu: boolean;
  scrollTop: number;
}

export const initialState: AppState = {
  open_menu: false,
  scrollTop: 0
};

export const appReducer = reducerWithInitialState(initialState).case(
  actions.setCommon,
  (state: AppState, data: any) => {
    return { ...state, ...data };
  }
);
