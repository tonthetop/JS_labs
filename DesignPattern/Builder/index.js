class User {
    constructor(email, password, { name, birth, gender, phone, address } = {}) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.birth = birth;
        this.gender = gender;
        this.phone = phone;
        this.address = address;
    }
}
const user = new User('email1@gmail.com', 'password1', { name: 'Tuan', address: 'Danang' })
console.log(user)