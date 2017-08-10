import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from './store'

import CounterContainer from './components/CounterContainer'
import Buttons from './components/buttons'

window.Store = Store

const RootEl = () => (
  <Provider store={Store}>
    <div>
      <CounterContainer />
      <Buttons dispatch={Store.dispatch} />
    </div>
  </Provider>
)

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root')
  ReactDOM.render(<RootEl />, root)
})
