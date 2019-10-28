import actionCreatorFactory from 'typescript-fsa';
import { Dispatch } from 'redux';
//import { State } from '../reducers';
//import { Dispatch } from 'redux';
//import { CommonState } from '../reducers/common';
const actionCreator = actionCreatorFactory();
export const actions = {
  setApp: actionCreator<{ [key: string]: any }>('SET_COMMON')
};
//
// Set ScrollTop
//
export const setScrollTop = () => (dispatch: Dispatch<any>) => {
  const scrollTop = Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  );
  dispatch(
    actions.setApp({
      scrollTop: scrollTop
    })
  );
};
