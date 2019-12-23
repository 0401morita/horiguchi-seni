import actionCreatorFactory from 'typescript-fsa';
import { State } from '../reducers';
import { Dispatch } from 'redux';
import { actions } from './app';
//import { CommonState } from '../reducers/common';
const actionCreator = actionCreatorFactory();

//
// ToggleMenu
//
export const toggleMenu = () => (
  dispatch: Dispatch<any>,
  getState: () => State
) => {
  dispatch(
    actions.setApp({
      open_menu: !getState().app.open_menu
    })
  );

  if (getState().app.open_menu) {
    document.body.classList.add('open-menu');
  } else {
    document.body.classList.remove('open-menu');
  }
};
