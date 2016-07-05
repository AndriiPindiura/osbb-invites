import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './containers/App';
import Main from './containers/Main';
import InviteList from './containers/InviteList';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

// require('./components/main.scss');
require('normalize.css');

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);


render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Main}/>
				<Route path="coowners" component={InviteList} />
			</Route>
		</Router>
	</Provider>,
  document.getElementById('app')
);
