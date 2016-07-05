import React, {
	Component,
	PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Intro from '../components/InitForm';
import Coowners from '../components/CoownersComponent';
import * as osbbActions from '../actions/osbb';

class Main extends Component {
	render() {
		// console.log(this.props);
		const {actions} = this.props;
		const {osbb} = this.props;
		//console.log(osbb);
		if (osbb.formComplete) {
			return <Coowners actions={actions} osbb={osbb}/>
		}
		else {
			return <Intro actions={actions} osbb={osbb}/>;

		}
	}
}

Main.propTypes = {
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	const props = { osbb: state.osbb };
	return props;
}

function mapDispatchToProps(dispatch) {
	//const actions = {};
	//const actionMap = { actions: bindActionCreators(actions, dispatch) };
	return { actions: bindActionCreators(osbbActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
