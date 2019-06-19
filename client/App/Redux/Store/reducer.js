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
	formPosition: 0,
	overviewPosition: 0,
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
      startDate: action.payload
    }
  }
  if (action.type === 'RATE') {
    return {
      rate: action.payload
    }
  }
	switch (action.type) {
		case 'SENIORNAME':
			return {
				seniorName: action.payload
			}
		case 'CHANGEFORMPOSITION':
			return{
				formPosition: action.payload
			}
		case 'CHANGEOVERVIEWPOSITION':
			return{
				overviewPosition: action.payload
			}
		// default:
		// 	break;
	}

  return state
}

export default reducer