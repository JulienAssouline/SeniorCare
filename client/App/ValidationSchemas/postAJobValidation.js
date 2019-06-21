import * as Yup from 'yup'

export const seniorDetailsValidation = Yup.object().shape({
	seniorName: Yup
		.string()
		.min(2, 'We shall not pass')
		.required('needs stuff')
})