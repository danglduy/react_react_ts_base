import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import { Provider as StoreProvider } from 'react-redux'
import Routes from './routes'
import configureStore, { history } from './store'

const store = configureStore()

const App = () => (
  <StoreProvider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </StoreProvider>
)

export default hot(App)
