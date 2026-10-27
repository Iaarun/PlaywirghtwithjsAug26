import test from "@playwright/test";

test("get page title", async({page})=>{
   await page.goto("https://www.saucedemo.com/")
   const pageTitle= await page.title()
   console.log(`Page Title is ${pageTitle}`)

})


test("get current url",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
   const pageUrl= await page.url()
   console.log(`Current open url is ${pageUrl}`)
})


test("get DOM content of a page ",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    const pagehtml= await page.content()
    console.log(`page DOM content is:  ${pagehtml}`)
    
})

test("open new tab in the context ",async({page, context})=>{
    await page.goto("https://www.saucedemo.com/")
    const pageTitle= await page.title()
   console.log(`Page Title is ${pageTitle}`)
     const page1= await context.newPage()
   await page1.goto("https://demowebshop.tricentis.com/login")
   const newpagetitle = await page1.title()
   console.log(`New page title is: ${newpagetitle}`)
    
})

// locators

 test("send data to input field userame", async({page})=>{
       await page.goto("https://www.saucedemo.com/")
       //locate the username field
      const username =  await page.locator("#user-name")
      //send data to username field
      await username.fill("standard_user")
      await page.waitForTimeout(2000)
      const password =  await page.locator("#password")
      await password.fill("standard_user")
      await page.waitForTimeout(2000)
 })
 test("locate element using xpath", async({page})=>{
       await page.goto("https://demowebshop.tricentis.com/login")
       //locate the username field
      const subscribeBtn =  await page.locator("xpath=/html[1]/body[1]/div[4]/div[1]/div[4]/div[1]/div[3]/div[2]/div[1]/div[2]/input[1]")
      await subscribeBtn.click()
      await page.waitForTimeout(2000)
    
 })
 test("check if anyelement is disabled", async({page})=>{
       await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html")
       //locate the username field
      const disabledInput =  await page.locator("input[name='my-disabled']")
      if( await disabledInput.isDisabled()){
        console.log("INput field is disabled")
      }
        const readOnlyInput= await page.locator("input[name='my-readonly']")
         const editable=await readOnlyInput.isEditable()
         if(!editable){
            console.log("input field is readonly")
         }
      await page.waitForTimeout(2000)
    
 })







