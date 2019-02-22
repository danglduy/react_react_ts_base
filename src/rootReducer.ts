import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import { reducer as todosReducer } from '~/modules/Todos'

const reducer = (history: any) =>
  combineReducers({
    todos: todosReducer,
    router: connectRouter(history),
  })

export default reducer
