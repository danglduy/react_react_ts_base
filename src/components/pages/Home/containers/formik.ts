import { FormikBag, withFormik } from 'formik'
import { DispatchProps, FormValues } from '../types'

const mapPropsToValues = () => ({
  name,
})

const handleSubmit = (
  values: FormValues,
  bag: FormikBag<DispatchProps, FormValues>
) => {
  bag.props.onSubmit && bag.props.onSubmit(values)
}

export default withFormik({
  mapPropsToValues,
  handleSubmit,
})
