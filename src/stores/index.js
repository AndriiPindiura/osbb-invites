const redux = require('redux');
const rootReducer = require('../reducers');
import createLogger from 'redux-logger';


export default function store(initialState) {
	const logger = createLogger();
	// const store = redux.createStore(rootReducer, initialState);
	const store = redux.createStore(rootReducer, initialState, redux.compose(redux.applyMiddleware(logger),
		window.devToolsExtension ? window.devToolsExtension() : f => f))

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers').default;
			store.replaceReducer(nextReducer)
		})
	}

	return store
}
