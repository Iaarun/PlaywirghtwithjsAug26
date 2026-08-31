/*
 Arithmetic 
 Logical
 Assignment
 Ternary
 comparison
 Relational 

*/
//Arithmetic

function arithmeticOperator(){
    let a= 10
    let b = 15
    const sum = a+b
    const sub = a-b
    const multi = a*b
    const div = b/a
    const mod = b%a

    console.log(sum, sub, multi, div, mod)
}

function comparisonOperator(){
    // > < === !== >= <=  ==
     let a = 10
     let b = 15
     let c= 10
     console.log(a>b) //false
     console.log(a<b) //true
     console.log(a===b) //false
     console.log(a!==b) //true
     console.log(a>=c) //true
  console.log("********************")
   console.log(10 == 10) // == only check for value
   console.log(10 == '10')
   console.log(10 === '10') // it checks for value and type both

}

function assignmentOPerator(){
      let a = 10
      let b = 20
      let c = a+b
      console.log("Value of c: "+c)

    //  a = a+10
       a += 10
    console.log("Value of a: "+a)
       a*=10
    console.log("Value of a: "+a)
}

function logicaloperator(){
    let a = true, b= false, c=true, d=false
    console.log(a && b) //false
    console.log(a && c) //true
    console.log(b && d) // false
    console.log(a || b) //true
    console.log(a || c) // true
    console.log(b || d) // false

}
function commaoperator(){
    let a, b, c
    c = (a=10, b=20, a+b)
    console.log("result c: "+c)
}

function ternaryOperator(){
    // (condition)? statement1:statement2
    age = 18
    const isMinor = (age>=18)?"Adult":"Minor"
    console.log(isMinor)
    let a = 10, b=45, c = 30   //find the max of three
    const max = (a>b ? (a>c? a:c):(b>c?b:c))
    console.log(max)
}
 ternaryOperator()
//commaoperator()
//logicaloperator()
// assignmentOPerator()
//comparisonOperator() 
//arithmeticOperator()