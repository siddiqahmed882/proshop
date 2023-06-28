import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Siddiq Ahmed',
    email: 'siddiqahmed882@gmail.com',
    password: bcrypt.hashSync('Siddiq@123', 10),
  },
  {
    name: 'Rana Kamran',
    email: 'ranakamran@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
