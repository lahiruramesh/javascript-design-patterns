'use strict';

class Address {
    constructor(zip, city) {
        this.zip = zip;
        this.city = city;
    }
}

class User {
    constructor(name, age, phone, address) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}

// Create user name and address only
// In here, we need to pass optional values as undefined
let user = new User('lahiru', undefined, undefined, new Address(10, 'Piliyandala'));

console.log('user', user);
