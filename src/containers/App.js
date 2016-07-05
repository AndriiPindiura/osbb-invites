/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as osbbActions from '../actions/osbb'

/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    return (<div>{this.props.children}</div>);
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.object.isRequired,
  osbb: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = { osbb: state.osbb };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  // const actions = { osbb: require('../actions/osbb.js') };
  // const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return { actions: bindActionCreators(osbbActions, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
