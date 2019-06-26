const { Pool } = require('pg')
const squel = require('squel').useFlavour('postgres')
const config = require('../config/development.json')


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
	{
		id: 'b5926162-57e9-44cb-8540-eda1ce2f6b36',
		fullname: 'Vincent Dumouchel',
		email: 'vdumouchel@me.com',
		phone_number: '5147466616',
		location: '245 Google Drive',
		avatar: 'https://www.argospetinsurance.co.uk/assets/uploads/2017/12/cat-pet-animal-domestic-104827.jpeg',
	},
	{
		id: '835e2722-9ec2-4ffa-94f5-6c5051741261',
		fullname: 'Jeff Johnson',
		email: 'jeffalanjohnson22@gmail.com',
		phone_number: '5147466616',
		location: '245 Mulholland',
		avatar: 'https://amp.businessinsider.com/images/55c906efdd0895b0558b45bc-1136-852.jpg',
	},
	{
		id: '90908eda-ec5c-4b9d-b432-3ee2f71b228e',
		fullname: 'Alam Talash',
		email: 'mail@alamtalash.com',
		phone_number: '5147466616',
		location: '245 Mulholland',
		avatar: 'https://amp.businessinsider.com/images/55c906efdd0895b0558b45bc-1136-852.jpg',
	},
	{
		id: 'aa0ea0ef-5d2d-494e-abaa-5198d6786aa1',
		fullname: 'Marl Olech',
		email: '	mark@olechconsulting.com',
		phone_number: '5147466616',
		location: '2356 Apollo Circle',
		avatar: 'https://amp.businessinsider.com/images/55c906efdd0895b0558b45bc-1136-852.jpg',
	},
	{
		id: 'ea488fc4-babc-436f-883b-c873f2a4629d',
		fullname: 'Julien Assouline',
		email: 'jassouline@ryerson.ca',
		phone_number: '5147466616',
		location: '2356 Apollo Circle',
		avatar: 'https://amp.businessinsider.com/images/55c906efdd0895b0558b45bc-1136-852.jpg',
	},
	{
		id: '642ebd5d-821e-485c-94e1-66dcc167a1f3',
		fullname: 'Kevin Li',
		email: 'unbakedmuffins@gmail.com',
		phone_number: '5147466616',
		location: '2356 Apollo Circle',
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
		gender: 'MALE',
		years_experience: 5,
		description: 'I am a cat',
		average_rating: '4.20',
		hourly_rate: 18,
		availability: 'LIVEIN',
		avatar: 'https://www.catster.com/wp-content/uploads/2018/05/A-gray-cat-crying-looking-upset.jpg',
	},
	{
		id: 'ThisIsJeffreyJohnsonCaregiverSeed',
		fullname: 'Jeffrey Johnson',
		email: 'jeffrey@jeffrey.com',
		phone_number: '905-905-0004',
		location: '123 Avocado Way',
		birthdate: '2001-06-22 19:10:25-07',
		gender: 'MALE',
		years_experience: 2,
		description: 'I am a cat',
		average_rating: '4.20',
		hourly_rate: 18,
		availability: 'LIVEIN',
		avatar: 'https://cdn.britannica.com/s:300x500/67/197567-131-1645A26E.jpg',
	},
	{
		id: 'ThisIsMarkOlechCaregiverSeed',
		fullname: 'Mark Olech',
		email: 'mark@mark.com',
		phone_number: '905-905-0005',
		location: '123 Avocado Way',
		birthdate: '2001-06-22 19:10:25-07',
		gender: 'FEMALE',
		years_experience: 5,
		description: 'I am a cat',
		average_rating: '4.20',
		hourly_rate: 18,
		availability: 'LIVEIN',
		avatar: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg',
	},
	{
		id: 'ThisIsVincentDumouchelCaregiverSeed',
		fullname: 'Vincent Dumouchel',
		email: 'vincent@vincent.com',
		phone_number: '905-905-0006',
		location: '123 Avocado Way',
		birthdate: '2001-06-22 19:10:25-07',
		gender: 'MALE',
		years_experience: 3,
		description: 'I am a cat',
		average_rating: '4.20',
		hourly_rate: 18,
		availability: 'LIVEIN',
		avatar: 'https://timedotcom.files.wordpress.com/2018/08/new-zealand-cat-ban.jpg',
	},
	{
		id: 'ThisIsJulienAssoulineCaregiverSeed',
		fullname: 'Julien Assouline',
		email: 'julien@julien.com',
		phone_number: '905-905-0007',
		location: '123 Avocado Way',
		birthdate: '2001-06-22 19:10:25-07',
		gender: 'MALE',
		years_experience: 16,
		description: 'I am a cat',
		average_rating: '4.20',
		hourly_rate: 18,
		availability: 'LIVEIN',
		avatar: 'https://amp.businessinsider.com/images/55c906efdd0895b0558b45bc-1136-852.jpg',
	},
	{
		id: 'ThisIsKevinLiCaregiverSeed',
		fullname: 'Kevin Li',
		email: 'kevin@kevin.com',
		phone_number: '905-905-0008',
		location: '123 Avocado Way',
		birthdate: '2001-06-22 19:10:25-07',
		gender: 'MALE',
		years_experience: 7,
		description: 'I am a cat',
		average_rating: '4.20',
		hourly_rate: 18,
		availability: 'LIVEOUT',
		avatar: 'https://www.petfinder.com/?attachment_id=15491',
	},
	{
		id: 'b3f6986c-8555-41c0-b264-69c9cdfc9e93',
		fullname: 'Alam Talash',
		email: 'talash.alam@gmail.com',
		phone_number: '905-905-0008',
		location: '123 Avocado Way',
		birthdate: '2001-06-22 19:10:25-07',
		gender: 'MALE',
		years_experience: 7,
		description: 'I am a cat',
		average_rating: '4.20',
		hourly_rate: 18,
		availability: 'LIVEOUT',
		avatar: 'https://www.petfinder.com/?attachment_id=15491',
	},
	{
		id: 'b4a92e58-899b-4762-b08a-952810670fa8',
		fullname: 'Julien Assouline',
		email: 'julien1993@hotmail.ca',
		phone_number: '905-905-0003',
		location: '1233 Apple Circle',
		birthdate: '2001-06-22 19:10:25-07',
		gender: 'MALE',
		years_experience: 5,
		description: 'I am a cat',
		average_rating: '4.20',
		hourly_rate: 18,
		availability: 'LIVEIN',
		avatar: 'https://www.catster.com/wp-content/uploads/2018/05/A-gray-cat-crying-looking-upset.jpg',
	},
	{
		id: 'bb515b7b-c037-4564-9c44-bdf60e54c636',
		fullname: 'Vincent Dumouchel',
		email: 'vincent@storydoc.ai',
		phone_number: '905-905-0008',
		location: '453 Apple Circle',
		birthdate: '2001-06-22 19:10:25-07',
		gender: 'MALE',
		years_experience: 7,
		description: 'I am a cat',
		average_rating: '4.20',
		hourly_rate: 18,
		availability: 'LIVEOUT',
		avatar: 'https://www.petfinder.com/?attachment_id=15491',
	},
	{
		id: '31f71974-f547-4701-a0b2-7dad4ae19832',
		fullname: 'Kevin Li',
		email: 'munchedmuffins@gmail.com',
		phone_number: '905-905-0008',
		location: '1233 Google Drive',
		birthdate: '2001-06-22 19:10:25-07',
		gender: 'MALE',
		years_experience: 7,
		description: 'I am a cat',
		average_rating: '4.20',
		hourly_rate: 18,
		availability: 'LIVEOUT',
		avatar: 'https://amp.businessinsider.com/images/55c906efdd0895b0558b45bc-1136-852.jpg',
	},
]

const seniorSeeds = [
	{
		fullname: 'Navi',
		key_contact_id: 'ThisIsSimonSternKeyContactSeed',
		birthdate: '1950-06-22 19:10:25-07',
		gender: 'FEMALE',
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
		gender: 'MALE',
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
		gender: 'FEMALE',
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
		gender: 'MALE',
		avatar: 'https://www.petfinder.com/?attachment_id=15491',
		relation: 'Uncle',
		language: 'English, Persian',
		medical_condition: 'Nothing serious',
		bio: 'So lovely persone likes singing, walking and waching movies and drinking.',
	},
	{
		fullname: 'Eirian',
		key_contact_id: 'ThisIsAkshayManchandaKeyContactSeed',
		birthdate: '1950-06-22 19:10:25-07',
		gender: 'FEMALE',
		avatar: 'https://amp.businessinsider.com/images/55c906efdd0895b0558b45bc-1136-852.jpg',
		relation: 'Mom',
		language: 'English, German',
		medical_condition: 'Always has headaches and coughs a lot',
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
		address: 'Somewhere',
		city: 'Toronto',
		province: 'Ontario',
		postal_code: 'B2B2B2',
		availability: 'LIVEIN',
		hourly_rate: 12,
		gender_pref: 'FEMALE',
		req_drivers_license: true,
		cig_smoking: false,
		pets: true,
		cannabis: true
	},
	{
		key_contact_id: 'ThisIsSimonSternsKeyContactSeed',
		date_created: '2001-07-22 19:10:25-07',
		title: "Take Care of Dad",
		start_date: "2001-08-22 19:10:25-07",
		end_date: "2001-09-22 19:10:25-07",
		address: '',
		city: '',
		province: '',
		postal_code: '',
		availability: 'LIVEOUT',
		hourly_rate: 12,
		gender_pref: 'MALE',
		req_drivers_license: true,
		cig_smoking: false,
		pets: true,
		cannabis: true
	},
	{
		key_contact_id: 'ThisIsGeorgeWuKeyContactSeed',
		date_created: '2001-07-22 19:10:25-07',
		title: "Take Care of Uncle",
		start_date: "2001-08-22 19:10:25-07",
		end_date: "2001-09-22 19:10:25-07",
		address: '',
		city: '',
		province: '',
		postal_code: '',
		availability: 'LIVEOUT',
		hourly_rate: 14,
		gender_pref: 'MALE',
		req_drivers_license: true,
		cig_smoking: false,
		pets: true,
		cannabis: true
	},
	{
		key_contact_id: 'ThisIsGenevieveDebraKeyContactSeed',
		date_created: '2001-07-22 19:10:25-07',
		title: "Take Care of Sister",
		start_date: "2001-08-22 19:10:25-07",
		end_date: "2001-09-22 19:10:25-07",
		address: '',
		city: '',
		province: '',
		postal_code: '',
		availability: 'LIVEOUT',
		hourly_rate: 14,
		gender_pref: 'FEMALE',
		req_drivers_license: true,
		cig_smoking: false,
		pets: true,
		cannabis: true
	},
	{
		key_contact_id: 'ThisIsJaimieBautistaKeyContactSeed',
		date_created: '2001-07-22 19:10:25-07',
		title: "Take Care of Aunt",
		start_date: "2001-08-22 19:10:25-07",
		end_date: "2001-09-22 19:10:25-07",
		address: '',
		city: '',
		province: '',
		postal_code: '',
		availability: 'LIVEOUT',
		hourly_rate: 16,
		gender_pref: 'FEMALE',
		req_drivers_license: true,
		cig_smoking: false,
		pets: true,
		cannabis: true
	},
]

const services = [ 
	{ title: 'appointments' },
	{ title: 'bathing' },
	{ title: 'companionship' },
	{ title: 'dressing' },
	{ title: 'driving' },
	{ title: 'errands' },
	{ title: 'feeding' },
	{ title: 'grooming' },
	{ title: 'housekeeping' },
	{ title: 'laundry' },
	{ title: 'meal_prep' },
	{ title: 'mobility' },
	{ title: 'shopping' },
]

const applicantsSeeds = [
	{
		id: '1',
		jobpost_id: '1',
		date_created: '2001-06-22 19:10:25-07',
		caregiver_id: '31f71974-f547-4701-a0b2-7dad4ae19832',
		keycontact_id: 'ea488fc4-babc-436f-883b-c873f2a4629d'
	},
	{
		id: '2',
		jobpost_id: '2',
		date_created: '2001-06-22 19:10:25-07',
		caregiver_id: 'b3f6986c-8555-41c0-b264-69c9cdfc9e93',
		keycontact_id: 'ea488fc4-babc-436f-883b-c873f2a4629d'
	}
]

const servicesJobJoin = [
	{
		job_id: 1,
		service_id: 1,
	},
	{
		job_id: 1,
		service_id: 2,
	},
	{
		job_id: 1,
		service_id: 3,
	},
	{
		job_id: 1,
		service_id: 4,
	},
	{
		job_id: 1,
		service_id: 5,
	},
	{
		job_id: 1,
		service_id: 6,
	},

	{
		job_id: 2,
		service_id: 2,
	},
	{
		job_id: 2,
		service_id: 4,
	},
	{
		job_id: 2,
		service_id: 6,
	},
	{
		job_id: 2,
		service_id: 8,
	},
	{
		job_id: 2,
		service_id: 10,
	},

	{
		job_id: 3,
		service_id: 1,
	},
	{
		job_id: 3,
		service_id: 3,
	},
	{
		job_id: 3,
		service_id: 5,
	},
	{
		job_id: 3,
		service_id: 7,
	},
	{
		job_id: 3,
		service_id: 9,
	},

	{
		job_id: 4,
		service_id: 5,
	},
	{
		job_id: 4,
		service_id: 8,
	},
	{
		job_id: 4,
		service_id: 12,
	},

	{
		job_id: 5,
		service_id: 5,
	},
	{
		job_id: 5,
		service_id: 8,
	},
	{
		job_id: 5,
		service_id: 12,
	},
	{
		job_id: 5,
		service_id: 1,
	},
	{
		job_id: 5,
		service_id: 2,
	},
	{
		job_id: 5,
		service_id: 3,
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
			),
			services.map(seed =>
				pg.query(
					squel
						.insert()
						.into('seniorcare.services')
						.setFields(seed)
						.toParam()
				)
			),
			servicesJobJoin.map(seed =>
				pg.query(
					squel
						.insert()
						.into('seniorcare.services_job')
						.setFields(seed)
						.toParam()
				)
			),
			applicantsSeeds.map(seed => 
				pg.query(
					squel
						.insert()
						.into('seniorcare.applicants')
						.setFields(seed)
						.toParam()
				)
			),
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
