import React from 'react'

class Buttons extends React.Component {

  increment() {
    this.props.increment()
  }

  decrement() {
    this.props.decrement()
  }

  reset() {
    this.props.reset()
  }

  render() {
    console.log(this.props);
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
