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

forloopex()





