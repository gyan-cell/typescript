"use strict";
// From Here On We will Learn about Classes...
class User {
    constructor(email, name) {
        this.city = '';
        this.email = email;
        this.name = name;
    }
}
const gyan = new User("gyan@gmail.com", "Gyanranjan");
gyan.city = "Boisar";
