import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from './store'

import CounterContainer from './components/CounterContainer'
import ButtonsContainer from './components/ButtonsContainer'

window.Store = Store

const RootEl = () => (
  <Provider store={Store}>
    <div>
      <CounterContainer />
      <ButtonsContainer />
    </div>
  </Provider>
)

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root')
  ReactDOM.render(<RootEl />, root)
})
