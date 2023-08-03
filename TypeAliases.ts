type User = {
  readonly _id:string
  name:string
  email:string
  isActive:boolean
}

function createUser(user:User) {
  user.isActive = true;
  return {name:"",email:"",isActive:true}  
}

let myUser : User = {
  _id:"1234567",
  name:"g",
  email:"hjdbhjld",
  isActive:false
}

myUser.name = "gyan";


type cardName={
  name:string
}

type cardType = {
  ctype:string
} 
// Combining Them
type cardDetails = cardName & cardType &{
  cvv:number
}


// myUser._id = "as" // Not Allowed

createUser({_id:"",name:"",email:"",isActive:true});
