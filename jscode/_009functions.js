/*
reusable block of code
organize code, modularize , minimize the maintinance effort
*/
//Named non-returning non-parameterized function
 const prompt = require('prompt-sync')()
function  testfunction1(){
   console.log("executing test function1") 
}
function  testfunction2(){
   console.log("executing test function2") 
}
///Named non-returning non-parameterized function
// function sayHello(){
//     console.log("Hello Sachin")
// }

//Named non-returning parameterzied function
function sayHello(username){
 //console.log("Hello "+username)
 console.log(`Hello ${username}`)
}

sayHello('Arun')

//let userdata = prompt("Say your name: ")
//sayHello(userdata)

// Named parameterzied returning function

function sayHi(username){
    str = `My name is ${username}`
    return str
}

sayHi('Amit')

