import { RouteConfig } from 'react-router-config'
import About from '../components/pages/About'
import Home from '../components/pages/Home'
import NotFound from '../components/pages/NotFound'

// tslint:disable-next-line:readonly-array
const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    exact: true,
    component: About,
  },
  {
    path: '*',
    component: NotFound,
  },
]

export default routes
