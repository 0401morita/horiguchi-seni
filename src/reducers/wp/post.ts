import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { actions } from '../../actions/wp';
export interface WpPostState {
  isLoading: boolean;
  isError: boolean;
  data: { [key: string]: any } | null;
}

const initialState: WpPostState = {
  isLoading: false,
  isError: false,
  data: null
};

export const WpPostReducer = reducerWithInitialState(initialState)
  .case(actions.setWp, (state: WpPostState, data: any) => {
    return { ...state, ...data };
  })
  .case(actions.setWpPost, (state: WpPostState, data: any) => {
    return { ...state, data: data };
  });
