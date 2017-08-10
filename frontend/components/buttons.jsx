import React from 'react'

class Buttons extends React.Component {

  increment() {
    this.props.dispatch({ type: 'INCREMENT' })
  }

  decrement() {
    this.props.dispatch({ type: 'DECREMENT' })
  }

  reset() {
    this.props.dispatch({ type: 'RESET' })
  }

  render() {
    return (
      <div>
        <button onClick={this.increment.bind(this)}>+</button>
        <button onClick={this.decrement.bind(this)}>-</button>
        <button onClick={this.reset.bind(this)}>reset</button>
      </div>
    )
  }
}

export default Buttons
