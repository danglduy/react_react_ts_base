import {
  MapDispatchToProps as _MapDispatchToProps,
  MapStateToProps as _MapStateToProps,
} from 'react-redux'

import { Action as TodosAction, State as TodosState } from '~/modules/Todos'

import { Action, State } from '~/types/redux'

export type MapStateToProps<
  StateProps = object,
  OwnProps = object
> = _MapStateToProps<StateProps, OwnProps, State>

export type MapDispatchToProps<
  DispatchProps = object,
  OwnProps = object
> = _MapDispatchToProps<DispatchProps, OwnProps>

export type Action = TodosAction

export interface State {
  readonly todos: TodosState
}
