function createUser(user) {
    user.isActive = true;
    return { name: "", email: "", isActive: true };
}
var myUser = {
    _id: "1234567",
    name: "g",
    email: "hjdbhjld",
    isActive: false
};
myUser.name = "gyan";
// myUser._id = "as" // Not Allowed
createUser({ _id: "", name: "", email: "", isActive: true });
