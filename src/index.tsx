import * as React from 'react'
import { render } from 'react-dom'
import App from './app/index'
import { Print } from './test/decorator'
import './test/hooks'

const print = new Print()
print.exec()

console.log(process.env.NODE_ENV)

render(<App />, document.getElementById('root'))
