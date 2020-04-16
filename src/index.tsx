import * as React from 'react'
import { render } from 'react-dom'
import App from './app/index'
import { Print } from './test/decorator'

const print = new Print()
print.exec()

render(<App />, document.getElementById('root'))
