class User {
  name!: string;

  setName = (name: string): void => {
    this.name = name;
  };
  getName = (): string => {
    return this.name;
  };
}

interface CustomerInterface {
  setFirstName(fname: string): void;
  getFirstName(): string;
  setLastName(lname: string): void;
  getLastName(): string;
}
class Customer implements CustomerInterface {
  firstName!: string;
  lastName!: string;

  setFirstName(fname:string): void{
    this.firstName = fname;
  }

  getFirstName() :string{
    return this.firstName;
  }

  setLastName(lname:string): void{
    this.lastName = lname;
  }

  getLastName():string {
    return this.lastName;
  }
}
class UserToCustomerAdapter implements CustomerInterface
{
	//Sử dụng để lưu trữ object User khi chuyển đổi
	user:User;
    firstName:string;
    lastName:string;
    constructor(user: User)
    {
		this.user = user;
        const fullName = this.user.getName()
        const pieces=fullName.split(" ")
        this.firstName=pieces[0]
        this.lastName=pieces[1]
    }
    setFirstName(fname:string): void{
        this.firstName = fname;
      }
    
      getFirstName() :string{
        return this.firstName;
      }
    
      setLastName(lname:string): void{
        this.lastName = lname;
      }
    
      getLastName():string {
        return this.lastName;
      }
}
// User
const user =new User()
user.setName('Tuan Le')
// Adapter for User
const adapter=new UserToCustomerAdapter(user)

// Customer
const customer=new Customer()
customer.setFirstName('Tuan')
customer.setLastName('Le')
//
console.log(adapter.getFirstName())
console.log(customer.getFirstName())

