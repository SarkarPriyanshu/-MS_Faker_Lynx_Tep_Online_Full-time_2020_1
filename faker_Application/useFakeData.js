//Write a program that uses the current Faker functions to generate fake data


var faker = require('faker');

function returnFakeData(){
    let info = faker.helpers.createCard();
    let {name, email, address:{streetA, city, country, zipcode}, phone} = info;
    console.log(`Name : ${name}`);
    console.log(`Email : ${email}`);
    console.log(`Address : ${streetA}, ${city}, ${country}, ${zipcode}`);
    console.log(`Phone : ${phone}`)
}

returnFakeData()