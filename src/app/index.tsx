import * as React from 'react'
import { Router, Switch } from 'react-router-dom'
import appHistory from '@common/history'
import appRouter from './routes'
import routes from './routes/routes'
import './style'

export default class App extends React.Component {
  readonly id = 'unique'

  render() {
    return (
      <Router history={appHistory}>
        <h1 className='title'>react template</h1>
        <Switch>{appRouter.renderRoutes(routes)}</Switch>
      </Router>
    )
  }
}
