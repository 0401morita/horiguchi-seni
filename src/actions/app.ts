import actionCreatorFactory from 'typescript-fsa';
import { Dispatch } from 'redux';
//import { State } from '../reducers';
//import { Dispatch } from 'redux';
//import { CommonState } from '../reducers/common';
const actionCreator = actionCreatorFactory();
export const actions = {
  setApp: actionCreator<{ [key: string]: any }>('SET_APP')
};
//
// Set ScrollTop
//
export const setScrollTop = (scrollTop: number) => (
  dispatch: Dispatch<any>
) => {
  dispatch(
    actions.setApp({
      scrollTop: scrollTop
    })
  );
};

export const closeMenu = () => (dispatch: Dispatch<any>) => {
  dispatch(
    actions.setApp({
      open_menu: false
    })
  );
  document.body.classList.remove('open-menu');
};
