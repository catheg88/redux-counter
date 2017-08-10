import { connect } from 'react-redux'
import Buttons from './Buttons'

const mapDispatchToProps = dispatch => {
  console.log("mapDispatchToProps called");
  return ({
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' })
  })
}

const ButtonContainer = connect(
  null,
  mapDispatchToProps
)(Buttons)

export default ButtonContainer
