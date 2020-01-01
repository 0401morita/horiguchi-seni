import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { actions } from '../actions/recentPosts';
export interface RecentPostsState {
  isLoading: boolean;
  isError: boolean;
  error: {
    code?: number | string;
    message?: string;
  };
  posts: [];
}

const initialState: RecentPostsState = {
  isLoading: false,
  isError: false,
  error: {
    code: '',
    message: ''
  },
  posts: []
};

export const RecentPostsReducer = reducerWithInitialState(initialState).case(
  actions.setRecentPosts,
  (state: RecentPostsState, data: any) => {
    return { ...state, ...data };
  }
);
