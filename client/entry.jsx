'use strict';
import 'babel-polyfill';

import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { browserHistory, Router, Route } from 'react-router';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import reducers from './reducers';
import rootSaga from './sagas/index';

// import CSS
import './entry.scss';

// Components
import Main from './pages/main';

// Sagas
const sagaMiddleware = createSagaMiddleware();


// Middleware
const createStoreWithMiddleware = applyMiddleware(
  thunk,
  promise,
  sagaMiddleware,
  createLogger(),
)(createStore);

const store = createStoreWithMiddleware(reducers);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} >
      <Route path='/' component={Main} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
