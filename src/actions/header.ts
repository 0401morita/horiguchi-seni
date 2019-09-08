import actionCreatorFactory from 'typescript-fsa';
import { State } from '../reducers';
import { Dispatch } from 'redux';
import { CommonState } from '../reducers/common';
const actionCreator = actionCreatorFactory();
export const actions = {
  setCommon: actionCreator<CommonState>('SET_COMMON')
};
//
// ToggleMenu
//
export const toggleMenu = () => (
  dispatch: Dispatch<any>,
  getState: () => State
) => {
  dispatch(actions.setCommon({ open_menu: !getState().common.open_menu }));
  if (getState().common.open_menu) {
    document.body.classList.add('open-menu');
  } else {
    document.body.classList.remove('open-menu');
  }
};
