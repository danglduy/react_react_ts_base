import { SagaIterator } from 'redux-saga'
import { all, call } from 'redux-saga/effects'
import addTodo from './addTodo'

export default function* todosSaga(): SagaIterator {
  yield all([call(addTodo)])
}
