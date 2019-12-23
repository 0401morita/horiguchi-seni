import { connect } from 'react-redux';
import { State } from '../../reducers';
import { ThunkDispatch } from 'redux-thunk';
import { getWpPostBySlug } from '../../actions/wp';
import { Action } from 'redux';
import Entry from '../../components/entries/show';
export interface EntryActionsTypes {
  getWpPostBySlug: (slug: string) => Action;
}
//
// Map State To Props
//
const mapStateToProps = (state: State) => {
  return state;
};
//
// Map Dispatch To Props
//
const mapDispatchToProps = (dispatch: ThunkDispatch<State, void, Action>) => ({
  getWpPostBySlug: (slug: string) => dispatch(getWpPostBySlug(slug))
});
//
// Connect
//
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entry);
