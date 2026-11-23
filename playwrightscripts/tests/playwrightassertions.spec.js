
import { test, expect } from '@playwright/test';

test("PLaywright assertion", {tag: '@regrression'},async({page})=>{
    await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html")
  //  await page.getByPlaceholder("Disabled input").isEnabled()
   let disbaledinput=  await page.getByPlaceholder("Disabled input")
   await expect(disbaledinput).toBeDisabled()
   const pagetitle = await page.title()
   await expect(page).toHaveTitle(pagetitle)
   await expect(pagetitle).toContain("Selenium")

})