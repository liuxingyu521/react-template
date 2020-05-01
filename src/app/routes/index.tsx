import React from 'react'
import { Route } from 'react-router-dom'
import { IRoute } from './interface'

// 渲染路由的 key
let keyIndex: number = 1

/** 路由控制类 */
export default class AppRouter {
  /**
   * 渲染路由 - 静态方法
   */
  static renderRoutes(routes: AppRouter[]) {
    return routes.map((route) => {
      return route.render()
    })
  }

  /** 路由对象 */
  route: IRoute

  constructor(route: IRoute) {
    this.route = route
  }

  /** 路由组件自渲染 */
  render() {
    const { path, component, exact } = this.route

    return <Route key={keyIndex++} path={path} component={component} exact={exact} />
  }
}
