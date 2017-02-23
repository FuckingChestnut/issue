import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleWare from 'redux-promise'
import { Provider } from 'react-redux'

import reducers from './redux/reducers'
import status from './redux/status'
import Routers from './Routers'
import DevTools from './DevTools'

const middleWares = compose(
  applyMiddleware(promiseMiddleWare),
  DevTools.instrument()
);
const store = createStore(reducers, status, middleWares);
ReactDom.render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById('root')
);