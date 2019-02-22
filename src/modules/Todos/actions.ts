import { createAction } from 'redux-actions'
import * as actionTypes from './actionTypes'

export interface Actions {
  readonly [actionTypes.ADD_TODO_REQUESTED]: ReturnType<typeof addTodoRequested>
  readonly [actionTypes.ADD_TODO_SUCCEEDED]: ReturnType<typeof addTodoSucceeded>
  readonly [actionTypes.ADD_TODO_FAILED]: ReturnType<typeof addTodoFailed>
}

export type Action = Actions[keyof Actions]

export const addTodoRequested = createAction(actionTypes.ADD_TODO_REQUESTED)
export const addTodoSucceeded = createAction(actionTypes.ADD_TODO_SUCCEEDED)
export const addTodoFailed = createAction(actionTypes.ADD_TODO_FAILED)

export default {
  addTodoRequested,
  addTodoSucceeded,
  addTodoFailed,
}
