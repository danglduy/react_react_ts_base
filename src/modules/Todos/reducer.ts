import { Reducer } from 'redux'
import * as actionTypes from './actionTypes'
import { TodoParams } from './types'

export interface State {
  readonly [id: string]: TodoParams
}

export const initialState: ReadonlyArray<TodoParams> = [
  {
    key: '1',
    name: 'aaa',
  },
]

export const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO_SUCCEEDED: {
      return [
        ...state,
        {
          key: new Date(),
          name: action.payload.name,
        },
      ]
    }
    default:
      return state
  }
}
