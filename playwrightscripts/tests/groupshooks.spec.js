import{test,expect} from '@playwright/test';

test.describe("Smoke test Suit",{tag: '@alltestcase'},()=>{

   test.beforeAll("Before all test",async()=>{
       console.log("Before all tests one time")
   }); 
   test.beforeEach("Before eachand every test",async()=>{
       console.log("Before each and every testcase")
   }); 
   test.afterEach("Before eachand every test",async()=>{
       console.log("After each and every testcase")
   }); 
   test.afterAll("After all test",async()=>{
       console.log("After all tests one time")
   }); 

   test('testcase1',{tag: '@smoke'},async({page})=>{
       await page.goto("")
          console.log("Smoke Testcase 1")
   })
   test('testcase2',{tag: '@smoke'},()=>{
          console.log("Smoke Testcase 2")
   })
   test('testcase3',{tag: '@smoke'},()=>{
          console.log("Smoke Testcase 3")
   })
   test('testcase4',{tag: '@regression'},()=>{
          console.log("regreesion Testcase 4")
   })
   test('testcase5',{tag: '@regression'},()=>{
          console.log("regression Testcase 5")
   })
   test('testcase6',{tag: '@regression'},()=>{
          console.log("regression Testcase 6")
   })

})