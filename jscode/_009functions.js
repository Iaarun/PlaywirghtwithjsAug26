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


//function expression
function addition(a, b){
   //standard function
   return a+b
}

console.log(addition(5,5))

const add= function(a,b){
   // function expression
   return a+b
};
console.log(add(6,8))
//function hoisting - where function is invoked even before declaration

//Arrowfunction  =>
const multiply = (a,b)=>{
   return a*b
};  

let result = multiply(5,10)
console.log(result)

const multiply1 = (a,b) => (a*b)
let result1 = multiply1(10,20)
console.log(result1)

function multiply2(a,b){
   return a*b
}

console.log(typeof add)
console.log(typeof multiply)
console.log(typeof multiply1)
console.log(typeof multiply2)







