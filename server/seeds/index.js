const { Pool } = require('pg')
const squel = require('squel').useFlavour('postgres')
const config = require('../config/default.json')

const keyContactSeeds = [
  {
		email: 'simon@simon.stern',
		password: '$2b$12$sxeBj9l3HbhXG1H037P1J.uStvUhON8yuysPxMmQZS.CgzFy3qDBm',
		fullname: 'Simon Stern',
		phone_number: '905-905-0001',
		location: '123 Avocado Way',
  },
  {
    fullname: 'Akshay Manchanda',
    password: '$2b$12$sxeBj9l3HbhXG1H037P1J.uStvUhON8yuysPxMmQZS.CgzFy3qDBm',
		email: 'akshay@akshay.com',
		phone_number: '905-905-0002',
		location: '123 Avocado Way',
  },
]

const caregiverSeeds = [
	{
    fullname: 'Alam Talash',
    password: '$2b$12$sxeBj9l3HbhXG1H037P1J.uStvUhON8yuysPxMmQZS.CgzFy3qDBm',
		email: 'alam@alam.com',
		phone_number: '905-905-0003',
		location: '123 Avocado Way',
		birthdate: '2001-06-22 19:10:25-07',
		gender: 'male',
		years_experience: 5,
		description: 'I am a cat',
		average_rating: '4.20',
		hourly_rate: 1800,
		availability: 'live-in',
	},
	{
    fullname: 'Jeffrey Johnson',
    password: '$2b$12$sxeBj9l3HbhXG1H037P1J.uStvUhON8yuysPxMmQZS.CgzFy3qDBm',
		email: 'jeffrey@jeffrey.com',
		phone_number: '905-905-0004',
		location: '123 Avocado Way',
		birthdate: '2001-06-22 19:10:25-07',
		gender: 'male',
		years_experience: 5,
		description: 'I am a cat',
		average_rating: '4.20',
		hourly_rate: 1800,
		availability: 'live-in',
	},
	{
    fullname: 'Mark Olech',
    password: '$2b$12$sxeBj9l3HbhXG1H037P1J.uStvUhON8yuysPxMmQZS.CgzFy3qDBm',
		email: 'mark@mark.com',
		phone_number: '905-905-0005',
		location: '123 Avocado Way',
		birthdate: '2001-06-22 19:10:25-07',
		gender: 'male',
		years_experience: 5,
		description: 'I am a cat',
		average_rating: '4.20',
		hourly_rate: 1800,
		availability: 'live-in',
	},
	{
    fullname: 'Vincent Dumouchel',
    password: '$2b$12$sxeBj9l3HbhXG1H037P1J.uStvUhON8yuysPxMmQZS.CgzFy3qDBm',
		email: 'vincent@vincent.com',
		phone_number: '905-905-0006',
		location: '123 Avocado Way',
		birthdate: '2001-06-22 19:10:25-07',
		gender: 'male',
		years_experience: 5,
		description: 'I am a cat',
		average_rating: '4.20',
		hourly_rate: 1800,
		availability: 'live-in',
	},
	{
    fullname: 'Julien Assouline',
    password: '$2b$12$sxeBj9l3HbhXG1H037P1J.uStvUhON8yuysPxMmQZS.CgzFy3qDBm',
		email: 'julien@julien.com',
		phone_number: '905-905-0007',
		location: '123 Avocado Way',
		birthdate: '2001-06-22 19:10:25-07',
		gender: 'male',
		years_experience: 5,
		description: 'I am a cat',
		average_rating: '4.20',
		hourly_rate: 1800,
		availability: 'live-in',
	},
	{
    fullname: 'Kevin Li',
    password: '$2b$12$sxeBj9l3HbhXG1H037P1J.uStvUhON8yuysPxMmQZS.CgzFy3qDBm',
		email: 'kevin@kevin.com',
		phone_number: '905-905-0008',
		location: '123 Avocado Way',
		birthdate: '2001-06-22 19:10:25-07',
		gender: 'male',
		years_experience: 5,
		description: 'I am a cat',
		average_rating: '4.20',
		hourly_rate: 1800,
		availability: 'live-in',
  },
]

const seniorSeeds = [
	{
		fullname: 'Navi',
		key_contact_id: 1,
		birthdate: '1950-06-22 19:10:25-07',
		gender: 'female'
	},
	{
		fullname: 'Jorrin',
		key_contact_id: 1,
		birthdate: '1950-06-22 19:10:25-07',
		gender: 'male'
	},
	{
		fullname: 'Erien',
		key_contact_id: 2,
		birthdate: '1950-06-22 19:10:25-07',
		gender: 'female'
	},
	{
		fullname: 'Vaughn',
		key_contact_id: 2,
		birthdate: '1950-06-22 19:10:25-07',
		gender: 'male'
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
