import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

export const history = createBrowserHistory()

export default function configureStore(): any {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer(history),
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  )

  sagaMiddleware.run(rootSaga)

  return store
}
