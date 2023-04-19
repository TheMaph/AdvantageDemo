import { faker } from "@faker-js/faker"

const randomMonth = Math.floor(Math.random() * (12 - 1 + 1) + 1);
const randomYear = Math.floor(Math.random() * (2032 - 2023 + 1) + 2023);

class Credentials{
    SafePay = {
        userName : faker.internet.userName(),
        password : faker.internet.password(12)
    }

    safePay(){
        return this.SafePay
    }

    MasterCredit = {
        cardNumber : faker.random.numeric(12),
        cvvNumber: faker.random.numeric(3),
        month : randomMonth,
        year : randomYear,
        cardName :  faker.name.fullName()
    }

    masterCredit(){
        return this.MasterCredit
    }
} export default Credentials