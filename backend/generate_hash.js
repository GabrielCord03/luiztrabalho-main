const bcrypt = require('bcryptjs');
const plain = 'Saruman!Faramir?';
const hash = bcrypt.hashSync(plain, 10);
console.log(hash);
