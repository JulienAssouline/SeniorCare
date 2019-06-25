const initialState = {
	key_contact_id: '',
	postJob: {
		position: {
			formPosition: 0,
			overviewPosition: 0,
			completedSections: []
		},
		serviceDetails: {
			bathing: true,
			grooming: false,
			dressing: false,
			feeding: false,
			companionship: false,
			driving: false,
			appointments: false,
			mobility: true,
			errands: false,
			mealPrep: false,
			housekeeping: false,
			laundry: false,
			shopping: false
		},
		basicInformation: {
			title: '',
			startDate: '',
			endDate: '',
			address: '',
			city: '',
			province: '',
			postalCode: '',
			rate: 0,
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
		case 'BATHING':
			return {
				...state,
				postJob: {
					...state.postJob,
					serviceDetails: {
						...state.postJob.serviceDetails,
						bathing: action.payload
					}
				}
			}

		case 'GROOMING':
			return {
				...state,
				postJob: {
					...state.postJob,
					serviceDetails: {
						...state.postJob.serviceDetails,
						grooming: action.payload
					}
				}
			}

		case 'DRESSING':
			return {
				...state,
				postJob: {
					...state.postJob,
					serviceDetails: {
						...state.postJob.serviceDetails,
						dressing: action.payload
					}
				}
			}

		case 'FEEDING':
			return {
				...state,
				postJob: {
					...state.postJob,
					serviceDetails: {
						...state.postJob.serviceDetails,
						feeding: action.payload
					}
				}
			}

		case 'COMPANIONSHIP':
			return {
				...state,
				postJob: {
					...state.postJob,
					serviceDetails: {
						...state.postJob.serviceDetails,
						companionship: action.payload
					}
				}
			}

		case 'DRIVING':
			return {
				...state,
				postJob: {
					...state.postJob,
					serviceDetails: {
						...state.postJob.serviceDetails,
						driving: action.payload
					}
				}
			}

		case 'APPOINTMENTS':
			return {
				...state,
				postJob: {
					...state.postJob,
					serviceDetails: {
						...state.postJob.serviceDetails,
						appointments: action.payload
					}
				}
			}

			case 'MOBILITY':
				return {
					...state,
					postJob: {
						...state.postJob,
						serviceDetails: {
							...state.postJob.serviceDetails,
							mobility: action.payload
						}
					}
				}

			case 'ERRANDS':
				return {
					...state,
					postJob: {
						...state.postJob,
						serviceDetails: {
							...state.postJob.serviceDetails,
							errands: action.payload
						}
					}
				}


			case 'MEALPREP':
				return {
					...state,
					postJob: {
						...state.postJob,
						serviceDetails: {
							...state.postJob.serviceDetails,
							mealPrep: action.payload
						}
					}
				}

			case 'HOUSEKEEPING':
				return {
					...state,
					postJob: {
						...state.postJob,
						serviceDetails: {
							...state.postJob.serviceDetails,
							housekeeping: action.payload
						}
					}
				}

			
			case 'LAUNDRY':
				return {
					...state,
					postJob: {
						...state.postJob,
						serviceDetails: {
							...state.postJob.serviceDetails,
							laundry: action.payload
						}
					}
				}
				case 'SHOPPING':
				return {
					...state,
					postJob: {
						...state.postJob,
						serviceDetails: {
							...state.postJob.serviceDetails,
							shopping: action.payload
						}
					}
				}

		case 'KEYCONTACTID':
			return {
				...state,
				key_contact_id: action.payload
			}
		
		case 'TITLE':
			return {
				...state,
				postJob: {
					...state.postJob,
					basicInformation: {
						...state.postJob.basicInformation,
						title: action.payload.title,
					}
				}
			}

		case 'ADDRESS':
			return {
				...state,
				postJob: {
					...state.postJob,
					basicInformation: {
						...state.postJob.basicInformation,
						address: action.payload.address,
						city: action.payload.city,
						province: action.payload.province,
						postalCode: action.payload.postalCode,
					}
				}
			}

		case 'STARTDATE':
			return {
				...state,
				postJob: {
					...state.postJob,
					basicInformation: {
						...state.postJob.basicInformation,
						startDate: action.payload
					}
				}
			}

		case 'ENDDATE':
				return {
					...state,
					postJob: {
						...state.postJob,
						basicInformation: {
							...state.postJob.basicInformation,
							endDate: action.payload
						}
					}
				}

		case 'RATE':
			return {
				...state,
				postJob: {
					...state.postJob,
					basicInformation: {
						...state.postJob.basicInformation,
						rate: action.payload
					}
				}
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

		case 'HOUSEDETAILS':
			return {
				...state,
				postJob: {
					...state.postJob,
					houseDetails: action.payload
				}
			}

		case 'CAREGIVERPREF1':
			return {
				...state,
				postJob: {
					...state.postJob,
					caregiverPreferences: {
						...state.postJob.caregiverPreferences,
						availability: action.payload.availability,
						preferredGender: action.payload.preferredGender, 
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