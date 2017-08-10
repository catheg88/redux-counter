const Reducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      console.log('reducing');
      console.log(action.type);
      return state + 1
    case 'DECREMENT':
      console.log('reducing');
      console.log(action.type);
      return state - 1
    case 'RESET':
      console.log('reducing');
      console.log(action.type);
      return 0
    default:
      return state
  }
}

export default Reducer
