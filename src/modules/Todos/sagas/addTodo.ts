import { SagaIterator } from 'redux-saga'
import { all, put, takeEvery } from 'redux-saga/effects'
import { Actions, addTodoFailed, addTodoSucceeded } from '../actions'
import { ADD_TODO_REQUESTED } from '../actionTypes'
import { TodoParams } from '../types'

export function* addTodo(
  payload: TodoParams & Actions[typeof ADD_TODO_REQUESTED]
): SagaIterator {
  try {
    yield put(addTodoSucceeded(payload.payload))
  } catch (error) {
    yield put(addTodoFailed(error))
  }
}

export default function* rootSaga(): SagaIterator {
  yield all([takeEvery(ADD_TODO_REQUESTED, addTodo)])
}
