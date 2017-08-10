import { connect } from 'react-redux'
import Counter from './Counter'

const mapStateToProps = state => {
  return ({ count: state })
}

const CounterContainer = connect(
  mapStateToProps,
  null
)(Counter)

export default CounterContainer
