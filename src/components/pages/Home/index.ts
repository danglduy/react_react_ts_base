import { compose } from 'recompose'
import containers from './containers'
import { Props } from './types'
import Home from './views'

export default compose<Props, {}>(containers)(Home)
