import { connect } from 'react-redux';
import { State } from '../../reducers';
import { ThunkDispatch } from 'redux-thunk';
import { getWpPosts } from '../../actions/wp';
import { Action } from 'redux';
import Entries from '../../components/entries';
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
  getWpPosts: () => dispatch(getWpPosts())
});
//
// Connect
//
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entries);
