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
		houseDetails: {
			cigSmoking: '',
			pets: '',
			cannabis: '',
		},
		caregiverPreferences: {
			availability: '',
			preferredGender: '',
			validDriverLicense: '',
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
		
		case 'SENIORBIRTHDATE':
			return {
				...state,
				postJob: {
					...state.postJob,
					seniorDetails: {
						...state.postJob.seniorDetails,
						birthdate: action.payload,
					},
				}
			}

			case 'SENIORRELATION':
			return {
				...state,
				postJob: {
					...state.postJob,
					seniorDetails: {
						...state.postJob.seniorDetails,
						relationship: action.payload,
					},
				}
			}

			case 'SENIORBIO':
			return {
				...state,
				postJob: {
					...state.postJob,
					seniorDetails: {
						...state.postJob.seniorDetails,
						bio: action.payload,
					},
				}
			}

			case 'SENIORMEDICALCONDITION':
			return {
				...state,
				postJob: {
					...state.postJob,
					seniorDetails: {
						...state.postJob.seniorDetails,
						medicalCondition: action.payload,
					},
				}
			}

			case 'SENIORLANGUAGE':
			return {
				...state,
				postJob: {
					...state.postJob,
					seniorDetails: {
						...state.postJob.seniorDetails,
						language: action.payload,
					},
				}
			}


		case 'CAREGIVERPREF1':
			console.log('caregiver pref 1 action payload', action.payload)
			return {
				...state,
				postJob: {
					...state.postJob,
					caregiverPreferences: {
						...state.postJob.caregiverPreferences,
						availability: action.payload,
						preferredGender: action.payload 
					}
				}
			}
		
		case 'CAREGIVERPREF2':
			return {
				...state,
				postJob: {
					...state.postJob,
					caregiverPreferences: {
						...state.postJob.caregiverPreferences,
						validDriverLicense: action.payload
					}
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
	}

  return state
}

export default reducer