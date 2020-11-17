var faker = require('faker');

var firstName = faker.name.firstName();
var lastName = faker.name.lastName();

var jobTitle = faker.name.jobTitle();
var prefix = faker.name.prefix(); 
var suffix = faker.name.suffix();
var jobArea = faker.name.jobArea();

var phone = faker.phone.phoneNumber();

var futureDate = faker.date.future();
var recentDate = faker.date.recent();
var weekday = faker.date.weekday();

console.log(`Employee: ${prefix} ${firstName} ${lastName} ${suffix}`);
console.log(`Job title: ${jobTitle}`);
console.log(`Job area: ${jobArea}`);
console.log(`Phone: ${phone}`);
console.log(futureDate);
console.log(recentDate);
console.log(weekday);


