import { connect } from 'react-redux';
import { State } from '../../reducers';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import RecentEntries from '../../components/recent_entries/list';
import { getWpRecentPosts } from '../../actions/recentPosts';
export interface RecentEntriesActions {
  getWpRecentPosts: (limit: number) => Action<number>;
}
//
// Map State To Props
//
const mapStateToProps = (state: State) => {
  return state.recentPosts;
};
//
// Map Dispatch To Props
//
const mapDispatchToProps = (dispatch: ThunkDispatch<State, void, Action>) => ({
  getWpRecentPosts: (limit: number) => dispatch(getWpRecentPosts(limit))
});
//
// Connect
//
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentEntries);
