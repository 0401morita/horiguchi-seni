import actionCreatorFactory from 'typescript-fsa';
import { State } from '../reducers';
import { Dispatch } from 'redux';
//import { CommonState } from '../reducers/common';
const actionCreator = actionCreatorFactory();
export const actions = {
  setCommon: actionCreator<{ [key: string]: any }>('SET_COMMON')
};
//
// ToggleMenu
//
export const toggleMenu = () => (
  dispatch: Dispatch<any>,
  getState: () => State
) => {
  dispatch(
    actions.setCommon({
      open_menu: !getState().app.open_menu
    })
  );
  if (getState().app.open_menu) {
    document.body.classList.add('open-menu');
  } else {
    document.body.classList.remove('open-menu');
  }
};
