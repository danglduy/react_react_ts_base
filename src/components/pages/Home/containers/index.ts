import { connect } from 'react-redux'
import { compose, pure } from 'recompose'
import {
  actions as todosActions,
  selectors as todosSelectors,
} from '~/modules/Todos'
import { MapDispatchToProps, MapStateToProps } from '~/types/redux'
import { DispatchProps, StateProps } from '../types'

const mapStateToProps: MapStateToProps<StateProps, {}> = state => ({
  todos: todosSelectors.getTodos(state),
})

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
  addTodoRequested: () => dispatch(todosActions.addTodoRequested('newTodo')),
})

const containers = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  pure
)

export default containers
