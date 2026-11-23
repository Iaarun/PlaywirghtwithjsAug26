import { test, expect } from '@playwright/test';

test("playwrightlocators",async({page})=>{
    await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html")
 //   await page.locators("#my-check-2").click()
    await page.getByRole('checkbox',{name:'Default checkbox'}).click()
    await page.waitForTimeout(2000)
    await page.getByRole('link',{name:'Return to index'}).click()
    await page.waitForTimeout(2000)
    await page.goBack()
    await page.getByLabel('Textarea').fill("this is the test data for the test area")
    await page.waitForTimeout(2000)
    await page.getByPlaceholder('Disabled input').isDisabled()
    await page.waitForTimeout(2000)
    await page.getByRole('button',{name:'Submit'}).click()
    await page.waitForTimeout(2000)
    await page.getByText('Boni García').click()
    await page.waitForTimeout(2000)

})
test("playwrightlocators2",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
 //   await page.locators("#my-check-2").click()
    await page.getByAltText("Picture of Build your own cheap computer").isVisible()
    await page.waitForTimeout(2000)

})