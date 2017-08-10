import React from 'react'
import Store from '../store'

class Counter extends React.Component {
  render() {
    return (
      <div>{this.props.count}</div>
    )
  }
}

export default Counter
