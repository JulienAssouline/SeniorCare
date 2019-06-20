const { Pool } = require('pg')
const squel = require('squel').useFlavour('postgres')
const config = require('../config/default.json')

const keyContactSeeds = [
	{
		id: 'ThisIsSimonSternKeyContactSeed',
		email: 'simon@simon.stern',
		fullname: 'Simon Stern',
		phone_number: '905-905-0001',
		location: '123 Avocado Way',
		avatar: 'https://amp.businessinsider.com/images/55c906efdd0895b0558b45bc-1136-852.jpg',
	},
	{
		id: 'ThisIsAkshayManchandaKeyContactSeed',
		fullname: 'Akshay Manchanda',
		email: 'akshay@akshay.com',
		phone_number: '905-905-0002',
		location: '123 Avocado Way',
		avatar: 'https://www.argospetinsurance.co.uk/assets/uploads/2017/12/cat-pet-animal-domestic-104827.jpeg',
	},
]

const caregiverSeeds = [
	{
		id: 'ThisIsAlamTalashCaregiverSeed',
		fullname: 'Alam Talash',
		email: 'alam@alam.com',
		phone_number: '905-905-0003',
		location: '123 Avocado Way',
		birthdate: '2001-06-22 19:10:25-07',
		gender: 'male',
		years_experience: 5,
		description: 'I am a cat',
		average_rating: '4.20',
		hourly_rate: 18,
		availability: 'live in',
		avatar: 'https://www.catster.com/wp-content/uploads/2018/05/A-gray-cat-crying-looking-upset.jpg',
	},
	{
		id: 'ThisIsJeffreyJohnsonCaregiverSeed',
		fullname: 'Jeffrey Johnson',
		email: 'jeffrey@jeffrey.com',
		phone_number: '905-905-0004',
		location: '123 Avocado Way',
		birthdate: '2001-06-22 19:10:25-07',
		gender: 'male',
		years_experience: 2,
		description: 'I am a cat',
		average_rating: '4.20',
		hourly_rate: 18,
		availability: 'live in',
		avatar: 'https://cdn.britannica.com/s:300x500/67/197567-131-1645A26E.jpg',
	},
	{
		id: 'ThisIsMarkOlechCaregiverSeed',
		fullname: 'Mark Olech',
		email: 'mark@mark.com',
		phone_number: '905-905-0005',
		location: '123 Avocado Way',
		birthdate: '2001-06-22 19:10:25-07',
		gender: 'female',
		years_experience: 5,
		description: 'I am a cat',
		average_rating: '4.20',
		hourly_rate: 18,
		availability: 'live in',
		avatar: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg',
	},
	{
		id: 'ThisIsVincentDumouchelCaregiverSeed',
		fullname: 'Vincent Dumouchel',
		email: 'vincent@vincent.com',
		phone_number: '905-905-0006',
		location: '123 Avocado Way',
		birthdate: '2001-06-22 19:10:25-07',
		gender: 'male',
		years_experience: 3,
		description: 'I am a cat',
		average_rating: '4.20',
		hourly_rate: 18,
		availability: 'live in',
		avatar: 'https://timedotcom.files.wordpress.com/2018/08/new-zealand-cat-ban.jpg',
	},
	{
		id: 'ThisIsJulienAssoulineCaregiverSeed',
		fullname: 'Julien Assouline',
		email: 'julien@julien.com',
		phone_number: '905-905-0007',
		location: '123 Avocado Way',
		birthdate: '2001-06-22 19:10:25-07',
		gender: 'male',
		years_experience: 16,
		description: 'I am a cat',
		average_rating: '4.20',
		hourly_rate: 18,
		availability: 'live in',
		avatar: 'https://amp.businessinsider.com/images/55c906efdd0895b0558b45bc-1136-852.jpg',
	},
	{
		id: 'ThisIsKevinLiCaregiverSeed',
		fullname: 'Kevin Li',
		email: 'kevin@kevin.com',
		phone_number: '905-905-0008',
		location: '123 Avocado Way',
		birthdate: '2001-06-22 19:10:25-07',
		gender: 'male',
		years_experience: 7,
		description: 'I am a cat',
		average_rating: '4.20',
		hourly_rate: 18,
		availability: 'live out',
		avatar: 'https://www.petfinder.com/?attachment_id=15491',
	},
]

const seniorSeeds = [
	{
		fullname: 'Navi',
		key_contact_id: 'ThisIsSimonSternKeyContactSeed',
		birthdate: '1950-06-22 19:10:25-07',
		gender: 'female',
		avatar: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg',
		relation: 'Gran Dad',
		language: 'English',
		medical_condition: 'Vision Sickness',
		bio: 'So lovely persone likes singing, walking and waching movies and drinking.',
	},
	{
		fullname: 'Jorrin',
		key_contact_id: 'ThisIsSimonSternKeyContactSeed',
		birthdate: '1950-06-22 19:10:25-07',
		gender: 'male',
		avatar: 'https://timedotcom.files.wordpress.com/2018/08/new-zealand-cat-ban.jpg',
		relation: 'Dad',
		language: 'French',
		medical_condition: 'Fractured leg',
		bio: 'So lovely persone likes singing, walking and waching movies and drinking.',
	},
	{
		fullname: 'Eirian',
		key_contact_id: 'ThisIsAkshayManchandaKeyContactSeed',
		birthdate: '1950-06-22 19:10:25-07',
		gender: 'female',
		avatar: 'https://amp.businessinsider.com/images/55c906efdd0895b0558b45bc-1136-852.jpg',
		relation: 'Mom',
		language: 'English, German',
		medical_condition: 'Always has headaches and coughs a lot',
		bio: 'So lovely persone likes singing, walking and waching movies and drinking.',
	},
	{
		fullname: 'Vaughn',
		key_contact_id: 'ThisIsAkshayManchandaKeyContactSeed',
		birthdate: '1950-06-22 19:10:25-07',
		gender: 'male',
		avatar: 'https://www.petfinder.com/?attachment_id=15491',
		relation: 'Uncle',
		language: 'English, Persian',
		medical_condition: 'Nothing serious',
		bio: 'So lovely persone likes singing, walking and waching movies and drinking.',
	},
]

const JobPostings = [
	{
		key_contact_id: 'ThisIsAkshayManchandaKeyContactSeed',
		date_created: '2001-06-22 19:10:25-07',
		title: "Take Care of Mom",
		start_date: "2001-07-22 19:10:25-07",
		end_date: "2001-06-22 19:10:25-07",
		address: '',
		city: '',
		province: '',
		postal_code: '',
		availability: '',
		hourly_rate: 12,
		gender_pref: 'female',
		req_drivers_license: true,
		cig_smoking: false,
		pets: true,
		cannabis: true
	},
]

const seed = async () => {
	const pg = await new Pool(config.db).connect()

	try {
		await pg.query('BEGIN')

		console.log('Seeding...')

		await Promise.all(
			keyContactSeeds.map(seed =>
				pg.query(
					squel
						.insert()
						.into('seniorcare.key_contact')
						.setFields(seed)
						.toParam()
				)
			),
			caregiverSeeds.map(seed =>
				pg.query(
					squel
						.insert()
						.into('seniorcare.caregiver')
						.setFields(seed)
						.toParam()
				)
			),
			seniorSeeds.map(seed =>
				pg.query(
					squel
						.insert()
						.into('seniorcare.senior')
						.setFields(seed)
						.toParam()
				)
			),
			JobPostings.map(seed =>
				pg.query(
					squel
						.insert()
						.into('seniorcare.job_posting')
						.setFields(seed)
						.toParam()
				)
			)
		)
		await pg.query('COMMIT')
	} catch (e) {
		await pg.query('ROLLBACK')
		throw e
	} finally {
		pg.release()
	}
}

seed().catch(e => {
	setImmediate(() => {
		throw e
	})
})
