import { combineSagas } from '~/lib/redux/sagaHelpers'
import { saga as TodosSaga } from '~/modules/Todos'

export default combineSagas([TodosSaga])
