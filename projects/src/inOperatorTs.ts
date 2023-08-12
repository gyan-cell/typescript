interface User {
  name1: string;
  email: string;
}

interface Admin {
  name1: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account:User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}
