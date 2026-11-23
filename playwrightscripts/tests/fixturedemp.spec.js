import{test, expect} from '@playwright/test'

test("understanding fixtures", async({browser, context})=>{
    const context1=  await browser.newContext({
        viewport:{width:1280, height:720}
      })

     const page1= await  context1.newPage()
      await page1.goto("https://playwright.dev/docs/test-assertions")
      const page1title =  await page1.title()
      console.log(page1title)
      await page1.waitForTimeout(2000)
      const page3= await  context1.newPage()
      await page3.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html")
      const page3title =  await page1.title()
      console.log(page3title)
await page3.waitForTimeout(2000)
       const context2=  await browser.newContext()
       const page2=  await context2.newPage()
       await page2.goto("https://demowebshop.tricentis.com/register")
       const page2title =  await page2.title()
      console.log(page2title)
      await page2.waitForTimeout(2000)
      await page2.close()
      await context2.close()
      await page1.close()
      await context1.close()

})