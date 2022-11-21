class Address {
    constructor(zip, address) {
        this.zip = zip;
        this.address = address;
    }
}

class User {
    constructor(name) {
        this.name = name;
    }
}

class UserBuilder {
    constructor(name) {
        this.user = new User(name);
    }

    setAge(age) {
        this.user.age = age;
        return this;
    }

    setPhone(phone) {
        this.user.phone = phone;
        return this;
    }

    setAddress(address) {
        this.user.address = address
        return this;
    }

    build() {
        return this.user;
    }
}

// Create users from UserBuilder class
// set optional values from Builder set method 
//finally invoke build function
let user = new UserBuilder('lahiru')
                .setAge(20).setPhone('343940394')
                .setAddress(new Address('10', 'piliyandala'))
                .build();

console.log(user);