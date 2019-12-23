import { combineReducers } from 'redux';
import { appReducer, AppState } from './app';
import { serviceReducer, ServiceState } from './service';
import { reducer as reduxFormReducer } from 'redux-form';
import { WpPostsReducer, WpPostsState } from './wp_posts';
import { WpPostReducer, WpPostState } from './wp/post';

export interface State {
  app: AppState;
  service: ServiceState;
  wpPosts: WpPostsState;
  wpPost: WpPostState;
}

const reducers = combineReducers({
  app: appReducer,
  service: serviceReducer,
  form: reduxFormReducer,
  wpPosts: WpPostsReducer,
  wpPost: WpPostReducer
});

export default reducers;
