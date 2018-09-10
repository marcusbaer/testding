require('dotenv').config()

var foo = process.env.FOO || 'Welt';
console.log('Hallo', foo);
