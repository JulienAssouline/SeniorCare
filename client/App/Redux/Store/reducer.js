const initialState = {
  address: '',
  city: '',
  province: '',
  postalCode: '',
  title: '',
  startDate: '',
	rate: 0,
	postJob: {
		position: {
			formPosition: 0,
			overviewPosition: 0,
			completedSections: []
		},
		seniorDetails: {
			seniorName: '',
			gender: '',
			birthdate: new Date(),
			relationship: '',
			bio: '',
			medicalCondition: '',
			language: '',
		},
	}
}

const reducer = (state = initialState, action )  => {
	switch (action.type) {
		case 'ADDRESS':
			return {
				...state,
				address: action.payload.address,
				city: action.payload.city,
				province: action.payload.province,
				postalCode: action.payload.postalCode,
			}

		case 'TITLE':
			return {
				...state,
				title: action.payload.title
			}

		case 'STARTDATE':
			return {
				...state,
				startDate: action.payload
			}

		case 'RATE':
			return {
				...state,
				rate: action.payload
			}

		case 'SENIORNAME':
			return {
				...state,
				postJob: {
					...state.postJob,
					seniorDetails: {
						...state.postJob.seniorDetails,
						seniorName: action.payload,
					},
				}
			}

		case 'SENIORGENDER':
			return {
				...state,
				postJob: {
					...state.postJob,
					seniorDetails: {
						...state.postJob.seniorDetails,
						gender: action.payload,
					},
				}
			}

		case 'CHANGEFORMPOSITION':
			return{
				...state,
				postJob: {
					...state.postJob,
					position: {
						...state.postJob.position,
						formPosition: action.payload,
					}
				}
			}

		case 'CHANGEOVERVIEWPOSITION':
			return{
				...state,
				postJob: {
					...state.postJob,
					position: {
						...state.postJob.position,
						overviewPosition: action.payload,
					}
				}
			}
		// default:
		// 	break;
	}

  return state
}

export default reducer