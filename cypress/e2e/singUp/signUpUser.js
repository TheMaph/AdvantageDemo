import { faker } from '@faker-js/faker';

const random = Math.floor(Math.random() * (241 - 1 + 1) + 1);
const name = faker.name.firstName(), lastname = faker.name.lastName();
class User {
    
    campo = {
        userName : faker.internet.userName(), 
        email: faker.internet.email(name , lastname),
        password : faker.internet.password(12),
        firstName:name,
        lastName: lastname,
        phoneNumber : faker.phone.number('+## ### ### ####'),
        country : random,
        city : faker.address.cityName(),
        address : faker.address.streetAddress(),
        SPR : faker.address.state(),
        postalCode : faker.address.zipCodeByState()
    }

    campoMtd(){
        return this.campo
    }

} export default User