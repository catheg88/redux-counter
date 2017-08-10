import { connect } from 'react-redux'
import Counter from './Counter'

const mapStateToProps = state => {
  console.log("mapStateToProps called");
  console.log(state);
  return ({ count: state })
}

const CounterContainer = connect(
  mapStateToProps,
  null
)(Counter)

export default CounterContainer
