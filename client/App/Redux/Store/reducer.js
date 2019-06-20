

const initialState = {
  address: '',
  city: '',
  province: '',
  postalCode: '',
  title: '',
  startDate: '',
  endDate: '',
  rate: 0
}

const reducer = (state = initialState, action )  => {
  console.log("REDUCER: ", action, state)

  if (action.type === 'ADDRESS') {
    return {
      ...state,
      address: action.payload.address,
      city: action.payload.city,
      province: action.payload.province,
      postalCode: action.payload.postalCode,
    }
  }
  if (action.type === 'TITLE') {
    return {
      ...state,
      title: action.payload.title
    }
  }
  if (action.type === 'STARTDATE') {
    return {
      ...state,
      startDate: action.payload
    }
  }
  if (action.type === 'RATE') {
    return {
      ...state,
      rate: action.payload
    }
  }
  if (action.type === 'ENDDATE') {
    return {
      ...state,
      endDate: action.payload
    }
  }

  return state
}

export default reducer