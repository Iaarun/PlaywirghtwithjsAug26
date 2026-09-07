const { trace } = require('node:console')

  const prompt = require('prompt-sync')()
// decision making statement-> if else, switch case
/*
  if(conditional statement){
     code block1
  }else{
     code block2
    }
*/
 function ifelseblock(){
    const isticketBooked = false

    if(isticketBooked){
        console.log("I will go for a movie")
    }else{
        console.log("I will go office")
    }
 }

 function nestedif(){
    userage = Number(prompt("Enter your age: "))
    
    if(userage >=18){
        isDrivingTestClear = prompt("Is Driving test clear: ")
        if(isDrivingTestClear == "yes"){
            console.log("you are eligible for driving license")
        }else{
            console.log("Clear the test first")
        }
    }else{
        console.log("Minor's not allowed")
    }
 }

 function ladderif(){
    trafficStatus = prompt("Check traffic status: ")
if(trafficStatus == "green"){
    console.log("Go")
}else if(trafficStatus == "orange"){
    console.log("continue")
}else if(trafficStatus == "red"){
    console.log("stop")
}else{
    console.log("traffic signal not working ")
}
}

/*
  switch(expression){
    case 1:
        code
        break;
    default:
        code block
        break;    
  }
*/

function calculator(){
    let num1 = Number(prompt("Enter first Number: "))
    let num2 = Number(prompt("Enter second Number: "))
    let op = prompt("Choose the arithmetic operation +, -, *, / : ")
    let result

    switch(op){
        case '+':
            result=num1+num2
            break;
        case '-':
            result= num1-num2
            break;
        case '*':
            result= num1*num2
            break;
        case '/':
            result=num1/num2
            break;
        default:
            console.log("Choose correct arithmetic operation")
            break;   
    }
    console.log("Result is: "+result)
}

function switchcaseforsameoutput(){
    let month = prompt("Enter month name: ")
    let getSeason

    switch(month){
        case 'december':
        case 'january':    
        case 'february':
            getSeason= 'winter'
            break;
        case 'march':    
        case 'april':
        case 'may':
            getSeason= 'summer'   
            break; 
        case 'june':
        case 'july':    
        case 'august':
            getSeason='rainy'
            break;
        case 'september':    
        case 'october':
        case 'november':
            getSeason='autumn' 
            break;
        default:
            getSeason = 'enter correct month'       
    }
    console.log("Season is: "+getSeason)
}

/*Loop
for
while
do-while
 for(initialization; condition; increment/decrement){
   code block
 }
*/

function forloopex(){
    console.log('Programm starts')
    for(let i=1; i<=5; i++){
        console.log("Hello world!!!!")
    }

    console.log('Programm ends')
}

function iterateoverarray(){
    fruits = ["apple","banana","cherry","kiwi"]

    for(let i=0; i<fruits.length; i++){
        console.log(fruits[i])
    }
}

/*nested for loop - for  iterating over rows and columns
 outer for loop is for rows/ inner for loop is for columns
 for(initialization; condition; increment/decrement){
    for(initialization; condition; increment/decrement){
    }
 }

*/

function nestloop1(){
    for(let i=1; i<=3; i++){
          row = ""
          for(let j=1;j<=5; j++){
            row += "*"
          }
          console.log(row)
    }
}

function count1to100(){
    let row = ""
    for(let i=1; i<=100; i++){
        row += i+" "    
        if(i%10 === 0){
            console.log(row)
            row=""
        }
        
    }
}

/*
*
**
***
****
*****
*/
function starpattern1(){

    for(let i = 1; i<=5; i++){
        row=""
        for(let j=1;j<=i; j++){
            row += "* "
        }
        console.log(row)
    }

}
/*

* * * * * 
* * * * 
* * * 
* *
*
* 
*/

function starpattern2(){
    for(let i = 5; i>=1; i--){
        row=""
        for(let j=1;j<=i; j++){
            row += "* "
        }
        console.log(row)
    }

}
/*
        *
      * *
    * * *
  * * * *
* * * * *
*/

function starpattern3(){
    let n=5
    for(let i = 1; i<=n; i++){
        row=""
       for(let k =1; i<=(n-i);k++){
        row += " "
       }
        for(let j=1;j<=i; j++){
            row += "*"
        }
        console.log(row)
    }
}

/*
 initialization;
 while(condition){
 code block}
 increment/decrement
 })
*/

function whileloopexample(){
   let i=1;
   while(i<=5){
       console.log("Hello world!!!!")
       i++   
   }
}
// calculate the number of digits in a number 98989564- 8

function countDigits(){
    let num=    98989564
     count=0
    if(num==0){
        count=1
        return count
    }
    num = Math.abs(num)
    while(num>0){
        num = Math.floor(num/10)
        count++
    }
    return count
}
// let digit= countDigits()
// console.log("Number of digits: "+digit)

function checkmathfloor(){
    console.log(Math.floor(0.87))

}

/*
  initialization;
  do{
  codeblock
  increment/decrement
  }while(condition)
*/

function dowhileexample(){
    let i=1;
    do{
        console.log("Hello world!!!!")
        i++
    }while(i>=5)   
}     
dowhileexample()