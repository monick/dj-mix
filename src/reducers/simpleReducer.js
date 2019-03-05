export default (state = {count: 0}, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      }
    case 'INCREMENT':
        return {
          count: state.count + 1
        }
    case 'DECREMENT':
        return {
          count: state.count - 1
        }
    case 'LOAD TRACK':
        return {
            
        }

    default:
      return state;
  }
}