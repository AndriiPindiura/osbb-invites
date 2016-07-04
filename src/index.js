import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './containers/App';
import Main from './containers/Main';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

require('./components/main.scss');

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);


render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Main}/>
			</Route>
		</Router>
	</Provider>,
  document.getElementById('app')
);
