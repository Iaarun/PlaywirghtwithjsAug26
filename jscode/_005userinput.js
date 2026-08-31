  const prompt = require('prompt-sync')()

function ternaryOperator(){
    // (condition)? statement1:statement2
    let a =   Number(prompt("enter first number"))
    let b =   Number(prompt("enter second number"))
    let c =   Number(prompt("enter third number"))
   
    const max = (a>b ? (a>c? a:c):(b>c?b:c))
    console.log(max)
}

function addtwonumber(){
  let a =   Number(prompt("enter first number"))
  let b =   Number(prompt("enter second number"))

  console.log("Sum: "+(a+b))

  a = 65
  b = Number("65")
  s = a+b
  console.log(s)
}

addtwonumber()