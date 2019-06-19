

const initialState = {
  address: '',
  city: '',
  province: '',
  postalCode: '',
  title: '',
  startDate: '',
  rate: 0
}

const reducer = (state = initialState, action )  => {
  console.log("REDUCER: ", action, state)

  if (action.type === 'ADDRESS') {
    return {
      address: action.payload.address,
      city: action.payload.city,
      province: action.payload.province,
      postalCode: action.payload.postalCode,
    }
  }
  if (action.type === 'TITLE') {
    return {
      title: action.payload.title
    }
  }
  if (action.type === 'STARTDATE') {
    return {
      startDate: action.payload
    }
  }
  if (action.type === 'RATE') {
    return {
      rate: action.payload
    }
  }

  return state
}

export default reducer