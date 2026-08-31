// declare a variable -- var, let, const
/*
 var -  function-scoped, globally scoped reassign/ redeclaration is allowed
*/

var num = 10
var num =20
console.log(num)

/*
let - value can be updated- reassignment is allowed but redeclaration is not allowed
*/

let num1 = 50
 num1 = 60  // reassignment 
 // let num1 = 60 --> redeclaration 
console.log("num1: "+num1)

/*
 const-> redecalartion and reassignment is not allowed
*/
const name = "virat"
//name = "sachin" ->> reassignment is not allowed
//const name = "Rahul"  -> redeclaration is not allowed
console.log(name)

var1 = 4646
// declaration and assignment
// javascript is dynamically typed language 
var name1 = "Sachin"
console.log(typeof name1)

name1 = 100
console.log(typeof name1)

