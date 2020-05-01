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
        <p onClick={this.gotoList}>Home</p>
      </div>
    )
  }
}
