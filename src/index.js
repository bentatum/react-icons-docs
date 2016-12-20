
import React from 'react'
import { render } from 'react-dom'
import { App } from './components'
import { Provider } from 'react-redux'
import createStore from './redux/createStore'

const ReactIconsDocs = () =>
  <Provider store={createStore()}>
    <App />
  </Provider>

render(<ReactIconsDocs />, document.getElementById('root'))
