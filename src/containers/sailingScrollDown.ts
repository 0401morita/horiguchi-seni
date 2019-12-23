import { connect } from 'react-redux';
import SailingScrollDown from '../components/shares/sailingScrollDown';
import { State } from '../reducers';
//
// Map State To Props
//
const mapStateToProps = (state: State) => {
  return state.app;
};
//
// Connect
//
export default connect(mapStateToProps)(SailingScrollDown);
