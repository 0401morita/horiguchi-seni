import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { actions } from '../../actions/wp';
export interface WpPostsState {
  isLoading: boolean;
  isError: boolean;
  data: [];
  headers: {
    'x-wp-total': number;
    'x-wp-totalpages': number;
  };
}

const initialState: WpPostsState = {
  isLoading: false,
  isError: false,
  data: [],
  headers: {
    'x-wp-total': 0,
    'x-wp-totalpages': 0
  }
};

export const WpPostsReducer = reducerWithInitialState(initialState)
  .case(actions.setWp, (state: WpPostsState, data: any) => {
    return { ...state, ...data };
  })
  .case(actions.setWpPosts, (state: WpPostsState, data: any) => {
    return { ...state, data: data };
  })
  .case(actions.setWpPostsHeaders, (state: WpPostsState, data: any) => {
    return { ...state, headers: data };
  });
