const bcrypt = require('bcryptjs')

const seed_data = [
  {
    // id: 1,
    username: 'Catherine',
    password: `${bcrypt.hashSync('testpassword', 8)}`
  },
  { 
    // id: 2, 
    username: 'Lou', 
    password: `${bcrypt.hashSync('testpassword2', 8)}` 
  },
  {
    // id: 3,
    username: 'Yurika',
    password: `${bcrypt.hashSync('testpassword3', 8)}`
  },
  {
    // id: 4,
    username: 'adminUser',
    password: `${bcrypt.hashSync(process.env.ADMIN_PASSWORD, 8)}`
  }
]
exports.users_data = seed_data

exports.seed = knex => knex('users').insert(seed_data);
