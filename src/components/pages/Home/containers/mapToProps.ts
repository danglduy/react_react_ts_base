import { connect } from 'react-redux'
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
  onSubmit: values => dispatch(todosActions.addTodoRequested(values)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
