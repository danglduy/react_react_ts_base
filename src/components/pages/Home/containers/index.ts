import { compose, pure } from 'recompose'
import formik from './formik'
import mapToProps from './mapToProps'

const containers = compose(
  mapToProps,
  formik,
  pure
)

export default containers
