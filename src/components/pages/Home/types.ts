import { RouteConfigComponentProps } from 'react-router-config'
import { TodoParams } from '~/modules/Todos'

export interface StateProps {
  readonly todos: ReadonlyArray<TodoParams>
}

export interface ExternalProps {
  readonly name?: string
  readonly handleSubmit: () => void
}

export interface FormValues {
  readonly name?: string
}

export interface DispatchProps {
  readonly addTodoRequested?: (e: React.MouseEvent) => void
  readonly onSubmit?: (values: FormValues) => void
}

export type Props = DispatchProps &
  StateProps &
  ExternalProps &
  RouteConfigComponentProps
