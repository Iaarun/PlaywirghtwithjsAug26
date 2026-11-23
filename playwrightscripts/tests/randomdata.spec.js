import { randomUUID } from "node:crypto";
import{test,expect} from '@playwright/test';
import{faker} from '@faker-js/faker'


test("Generate RandomData using UUID", async({page})=>{
    let username = 'TestUser_'+randomUUID()
    let email = `testuser_${randomUUID()}@example.com`
    console.log(username)
    console.log(email)

})

test.only("Generate RandomData using faker", async({page})=>{
    let firstname = faker.person.firstName();
    let lastname = faker.person.lastName();

    let email = `${firstname}.${lastname}@example.com`
    console.log(firstname)
    console.log(lastname)
    console.log(email)

})

