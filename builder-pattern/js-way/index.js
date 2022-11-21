'use strict'

class Address {
    constructor(zip, city) {
        this.zip = zip;
        this.city = city;
    }
}

// User class second parameter in constructor for pass optional values to user
// ES6 object destructure method used. if value not set these variables are undefined 
class User {
    constructor(name, {age, phone = '1234354545', address} = {}) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}

let user = new User('Lahiru', {age: 20, address: new Address(10, 'Piliyandala')});
console.log(user);

