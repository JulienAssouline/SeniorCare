const initialState = {
  address: '',
  city: '',
  province: '',
  postalCode: '',
  title: '',
  startDate: '',
	rate: 0,
	seniorName: '',
	gender: '',
	birthdate: new Date(),
	relationship: '',
	bio: '',
	medicalCondition: '',
	language: '',
}

const reducer = (state = initialState, action )  => {
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
      startDate: action.payload.startDate
    }
  }
  if (action.type === 'RATE') {
    return {
      rate: action.payload.rate
    }
  }
	switch (action.type) {
		case 'SENIORNAME':
			return {
				seniorName: action.payload
			}
		// default:
		// 	break;
	}

  return state
}

export default reducer