import { combineReducers } from 'redux';
import { appReducer, AppState } from './app';
import { serviceReducer, ServiceState } from './service';
import { reducer as reduxFormReducer } from 'redux-form';
import { WpPostsReducer, WpPostsState } from './wp_posts';
import { WpPostReducer, WpPostState } from './wp/post';
import { RecentPostsReducer, RecentPostsState } from './recentPosts';

export interface State {
  app: AppState;
  service: ServiceState;
  wpPosts: WpPostsState;
  wpPost: WpPostState;
  recentPosts: RecentPostsState;
}

const reducers = combineReducers({
  app: appReducer,
  service: serviceReducer,
  form: reduxFormReducer,
  wpPosts: WpPostsReducer,
  wpPost: WpPostReducer,
  recentPosts: RecentPostsReducer
});

export default reducers;
