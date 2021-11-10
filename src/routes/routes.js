// import NotFound from 'containers/NotFound'
import Home from '@/containers/Home'
import About from '@/containers/About'
import Login from '../containers/Login'
import NotFound from '@/containers/NotFound'


const routes= [
  {
		path: '/',
		element: Home,
		exact: true,
    auth: false
	},
  {
    path: '/about',
		element: About,
		exact: true,
    auth: true
  },
  {
    path: '/login',
    element: Login,
    exact: true,
    auth: false
  },
  {
    path: '*',
		element: NotFound
  }
]


export default routes