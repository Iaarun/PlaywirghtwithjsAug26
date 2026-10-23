import {test, expect, chromium } from '@playwright/test'

test("Launch Test Application", async({page})=>{
    await page.goto("https://bonigarcia.dev/selenium-webdriver-java/index.html")
    await page.waitForTimeout(2000)
})
    

// Browser context Page  chrome

test("Example for  browser context and page", async()=>{
    const browser =   await chromium.launch({headless: false})
     const context1= await  browser.newContext();
     const context2= await  browser.newContext();
     const page1= await  context1.newPage();
     const page2 =  await context1.newPage()
     await page1.goto("https://bonigarcia.dev/selenium-webdriver-java/index.html")
     await page1.waitForTimeout(4000)
     await page2.goto("https://playwright.dev/")
     await page2.waitForTimeout(4000)
     await context1.close()
     const page3= await  context2.newPage();
     const page4 =  await context2.newPage()
     await page3.goto("https://demowebshop.tricentis.com/login")
     await page3.waitForTimeout(4000)
     await page3.close()
     await page4.goto("https://www.google.com")
     await page4.waitForTimeout(4000)
})

test("Example Browser Navigation commands", async()=>{
    const browser =   await chromium.launch({headless: false})
    const context= await  browser.newContext();
    const page1= await  context.newPage();
    await page1.goto("https://bonigarcia.dev/selenium-webdriver-java/index.html")
    await page1.waitForTimeout(2000)
    await page1.goto("https://demowebshop.tricentis.com/login")
    await page1.waitForTimeout(2000)
    await page1.goBack()
    await page1.waitForTimeout(2000)
    await page1.goForward()
    await page1.waitForTimeout(2000)
    await page1.reload()

})


