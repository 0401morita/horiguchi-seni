import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { actions } from '../actions/app';
export interface AppState {
  open_menu: boolean;
  windows: { [key: string]: number };
}

export const initialState: AppState = {
  open_menu: false,
  windows: {
    scrollTop: 0,
    windowWidth: 0,
    windowHeight: 0,
    vw: 0,
    vh: 0
  }
};

export const appReducer = reducerWithInitialState(initialState).case(
  actions.setApp,
  (state: AppState, data: any) => {
    return { ...state, ...data };
  }
);
