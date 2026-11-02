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
      if( await disabledInput.is){
        console.log("INput field is disabled")
      }
        const readOnlyInput= await page.locator("input[name='my-readonly']")
         const editable=await readOnlyInput.isEditable()
         if(!editable){
            console.log("input field is readonly")
         }
      await page.waitForTimeout(2000)
 })
 test("select all the checkboxes ", async({page})=>{
       await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html")
       //locate the username field
      const checkboxes =  await page.locator("input[type='checkbox']").all()
      console.log(checkboxes.length)
     for(const checkbox of checkboxes){
        if(! await checkbox.isChecked()){
           await checkbox.click()
        }
     }
      await page.waitForTimeout(3000)
 })
 test("click on the link", async({page})=>{
       await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html")
       const returnlink = await page.locator("//a[contains(text(),'Return to index')]")
       const linkvisible = await returnlink.isVisible()
       console.log(`IS return link visible ${linkvisible}`)
       await returnlink.click()
       console.log(await page.title())
      await page.waitForTimeout(3000)
 })

 //write code to check whether  the image is visible and print  the "Hands-On Selenium WebDriver with Java" in console


 test("check image is displayed", async({page})=>{
       await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html")
       const image = await page.locator(".img-fluid")
       const imgdisplayed = await image.isVisible()
       console.log(`Is image visible ${imgdisplayed}`)
       const textdata = await page.locator(".display-4")
       // fetch the text from the element
       const data=  await textdata.textContent()
       console.log(data)
      await page.waitForTimeout(3000)
 })
 test("handle Dropdown", async({page})=>{
       await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html")
       const dropdown = await page.locator("select[name='my-select']")
       const alloptions=   await dropdown.locator('option').allInnerTexts()
       console.log(alloptions)
        const selectedvalue =  await dropdown.inputValue()
        console.log(`Default selected value is : ${selectedvalue}`)
        //select any value in dropdown
       await  dropdown.selectOption({index: 1})
      await page.waitForTimeout(2000)
      await  dropdown.selectOption({label: 'Three'})
      await page.waitForTimeout(2000)
      await dropdown.selectOption({value: '2'})
        const selectedvalue1 =  await dropdown.inputValue()
        console.log(`User selected value is : ${selectedvalue1}`)
      await page.waitForTimeout(2000)
 })
 test("select Dropdown using keyboard arrow ", async({page})=>{
       await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html")
       const dropdown = await page.locator("select[name='my-select']")
       const alloptions=   await dropdown.locator('option').allInnerTexts()
       await dropdown.click()
       await dropdown.press("ArrowDown")
        await page.waitForTimeout(2000)
       await dropdown.press("ArrowDown")
        await page.waitForTimeout(2000)
       await dropdown.press("Enter")
      await page.waitForTimeout(2000)
 })
 test("handle Datalist ", async({page})=>{
      await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html")
      const options =  await page.locator("#my-options option").evaluateAll(lists => lists.map(el=> el.value))
      console.log(options)
      await page.waitForTimeout(2000)
      await page.locator("//input[@name='my-datalist']").fill("Test data in datalist")
     // await page.locator("//input[@name='my-datalist']").fill(options[1])
      await page.waitForTimeout(2000)
 })

 test("perform left click , right click (context click ) and doubleclick ", async({page})=>{
       await page.goto("https://bonigarcia.dev/selenium-webdriver-java/dropdown-menu.html")
      // left click 
     const leftclickbtn=   await page.locator("#my-dropdown-1")
      await leftclickbtn.click({button:"left"})
      await page.waitForTimeout(2000)
     //double click 
      const doubleclickbtn = await page.locator("#my-dropdown-3")
      await doubleclickbtn.dblclick()
      await page.waitForTimeout(2000)
      //right click
      const rightclickbtn = await page.locator("#my-dropdown-2")
      await rightclickbtn.click({button: "right"})
      await page.waitForTimeout(2000)
 })
 test("handle frames ", async({page})=>{
       await page.goto("https://jqueryui.com/draggable/")
      const frames=  await page.frameLocator(".demo-frame")
      const drag=  await frames.locator("#draggable")
      console.log(`Is drag element visible ${await drag.isVisible()}`)
      await page.waitForTimeout(2000)
 })
 test("handle nested frames ", async({page})=>{
       await page.goto("https://demoqa.com/nestedframes")
      const parentframes=  await page.frameLocator("#frame1")
      const parenttext= await parentframes.locator("//body").textContent()
      console.log(`Parent frame text is ${parenttext}`)
      const childframe = await    parentframes.frameLocator("//iframe[@srcdoc='<p>Child Iframe</p>']") 
      const childtext = await childframe.locator("//p").textContent()
      console.log(`Child frame text is ${childtext}`)
      const mainpagetext= await page.locator("//h1[normalize-space()='Nested Frames']").textContent()
      console.log(`Main page text is ${mainpagetext}`)
      await page.waitForTimeout(2000)
 })
 test("drag and drop", async({page})=>{
       await page.goto("https://jqueryui.com/droppable/")
       const frames=  await page.frameLocator(".demo-frame")
       const source =  await frames.locator("#draggable")
       const target =  await frames.locator("#droppable")

      // await source.dragTo(target)
       await source.hover()
       await page.mouse.down()
       await target.hover()
       await page.mouse.up()
      await page.waitForTimeout(2000)
 })




