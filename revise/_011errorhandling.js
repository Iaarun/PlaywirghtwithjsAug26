/*
Syntax error 
Reference error
Range error
Internal error 
 try{
   code  that may potentially throw error
 }catch(){
   code to handle the errorError
 }finally{
    optional: code that runs irrespective of result (success or error)
 }

Try
Catch
Finally
*/
// function errorexample(){
//  let arr = new Array(-1)
//  console.log(arr.length)
// }
// function errorexample1(){
//  let arr = new Array(-1)
//  console.log(arr.length)
//  let num =10
//  num.toUpperCase()
// }
function tryCatchdemo(){
 console.log("Programm Starts ")
 try{
  let arr = new Array(-1)
  console.log(arr.length)
 }catch(error){
    console.log(" Inside Catch block")
    console.log("Error Message : "+ error.message)
 } finally {
    console.log("Inside finally block")
 }
 
 console.log("Programm Ends")
}
//tryCatchdemo()

// custom error

function checkAge(age){
  if(age<6){
    throw new ("Age must be equal or greater than 6")
  }else{
    console.log("Admission granted")
  }
}

function newAdmission(age){
   checkAge(age)
}
newAdmission(5)








