import * as React from 'react'
import appHistory from '@common/history'
import Pages from '@common/Pages'

export default class Home extends React.Component {
  gotoList = () => {
    appHistory.push(Pages.List)
  }

  render() {
    return (
      <div className='home'>
        <h3>
          Home <button onClick={this.gotoList}>去列表</button>
        </h3>
      </div>
    )
  }
}
