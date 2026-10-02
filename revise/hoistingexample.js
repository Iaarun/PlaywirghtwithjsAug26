// hoisting example of a function
add(25,34)

function add(a,b){
    console.log(a+b)
}

//hoisting example of a function expression
//addExpression(25,34)

const addExpression = function(a,b){
    console.log(a+b)
} 

//hoisting example of an arrow function
addArrow(25,34)

const addArrow = (a,b) => {
    console.log(a+b)
}