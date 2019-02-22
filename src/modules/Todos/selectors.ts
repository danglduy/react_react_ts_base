import { createSelector } from 'reselect'
import { State } from '~/types/redux'
import { TodoParams } from './types'

export const root = (state: State) => state.todos

export const getTodos = createSelector(
  root,
  (todos): ReadonlyArray<TodoParams> => Object.keys(todos).map(id => todos[id])
)
