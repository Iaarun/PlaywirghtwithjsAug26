// function is block of code written to perform specific task
// Named non prarmeterised non returning fucntion

function sayHi(){
    console.log("Hi I am leanring javascript")
}

//sayHi()
// Named parameterised nonreturning function

function sayHii(language){
    console.log(`Hi, I am learning ${language}`)
}

//sayHii('JavaScript')

// Named parameterised returning fucntion 

function simpleinterest(principle, time, interest){
    si = (principle*time*interest)/100
    console.log(si)
    return si
}

function totalamount(principle, si){
   console.log(principle+si)
}

intrest = simpleinterest(5000,2,5)
//totalamount(5000,intrest)

function sayHello(name = "Guest"){
    console.log(`Hello, ${name}!`)
}

sayHello()
sayHello("John")


//Arrow function
function add(a,b){
    return a+b  
}
console.log(add(5,10))

//CONVERT TO ARROW FUNCTION
//const addArrow = (a,b) => a+b
//console.log(addArrow(5,10))

//FUNCTION EXPRESSION

  const addexpression = function (a,b){
    return a+b  
   }
   console.log(addexpression(20,10))

   // constructorfunction CONSTUCTORFUNCTION  ConstructorFunction(pascalcase)
   /*
   function Person(name, age) {
    this.name = name;
    this.age = age;
  }*/

  function Person(name, age){
    const  user={
        name:name,
        age:age
    }
    return user;
  }

   const person1 = new Person("John", 30);
   console.log(person1.name);
   console.log(person1.age);
//    console.log(person1.name);  
//    console.log(person1.age);  
