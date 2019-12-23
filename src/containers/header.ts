import { connect } from 'react-redux';
import Header from '../components/shares/header';
import { State } from '../reducers';
import { ThunkDispatch } from 'redux-thunk';
import { toggleMenu } from '../actions/header';
import { Action } from 'redux';
//
// Map State To Props
//
const mapStateToProps = (state: State) => {
  return state.app;
};
//
// Map Dispatch To Props
//
const mapDispatchToProps = (dispatch: ThunkDispatch<State, void, Action>) => ({
  toggleMenu: () => {
    dispatch(toggleMenu());
  }
});
//
// Connect
//
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
