import { test, expect } from '@playwright/test';

test("playwrightlocators",async({page})=>{
    await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html")
 //   await page.locators("#my-check-2").click()
    await page.getByRole('checkbox',{name:'Default checkbox'}).click()
    await page.waitForTimeout(2000)
    await page.getByRole('link',{name:'Return to index'}).click()
    await page.waitForTimeout(2000)
    await page.goBack()
    await page.getByRole('button',{name:'Submit'}).click()
    await page.waitForTimeout(2000)

})