import Home from '@src/pages/home'
import List from '@src/pages/list'
import Router from './index'

const routes: Router[] = [
  new Router({
    title: '首页',
    path: '/',
    exact: true,
    component: Home,
  }),
  new Router({
    title: '列表页',
    path: '/list',
    component: List,
  }),
]

export default routes
