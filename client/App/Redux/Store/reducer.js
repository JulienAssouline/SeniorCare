const initialState = {
  address: ''
}

const reducer = (state = initialState, action )  => {
  if(action.type === 'ADDRESS') {
    return {
      address: action.val
    }
  }

  return state
}

export default reducer