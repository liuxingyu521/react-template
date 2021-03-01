import React, { Component } from 'react'
import appHistory from '@common/history'
import Pages from '@common/Pages'

export default class ListPage extends Component {
  gotoHome = () => {
    appHistory.push(Pages.Home)
  }

  render() {
    return (
      <>
        <h3>
          List <button onClick={this.gotoHome}>去首页</button>
        </h3>
        <ul>
          <li>条目一</li>
          <li>条目二</li>
          <li>条目三</li>
        </ul>
      </>
    )
  }
}
