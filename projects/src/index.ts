// From Here On We will Learn about Classes...


class User {
  email:string
  name:string
  city:string = ''
  constructor(email:string,name:string) {
    this.email = email;
    this.name = name;
  }
}

const gyan = new User("gyan@gmail.com","Gyanranjan");
gyan.city = "Boisar"
