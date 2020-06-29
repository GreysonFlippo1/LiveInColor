import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory, createMemoryHistory } from 'history';
import {
  connectRouter,
  routerMiddleware as historyMiddleware
} from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import playlist from './playlist';
import cart from './cart';

export const history = process.browser
  ? createBrowserHistory()
  : createMemoryHistory();
const middlewareList = [thunkMiddleware, historyMiddleware(history)];

const reducer = combineReducers({
  playlist,
  cart,
  router: connectRouter(history)
});

let middleware;
if (process.env.NODE_ENV === 'development' && process.browser) {
  console.log('App running in development mode. Redux dev tools enabled.');
  middlewareList.push(createLogger({ collapsed: true }));
  middleware = composeWithDevTools(applyMiddleware(...middlewareList));
} else {
  middleware = applyMiddleware(...middlewareList);
}

const store = createStore(reducer, middleware);

export default store;