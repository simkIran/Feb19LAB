/*var msg = require('./message.js');
console.log(msg);

var msg = require('./log.js');
msg.log('Hello World');

var person = require('./data.js');
console.log(person.firstName + ' ' + person.lastName);*/

var person = require('./person.js');
var person1 = new person('Ramp', 'Dhesi');
console.log(person1.fullName());


