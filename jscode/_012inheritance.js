// prototype based inheritance

let a = {
    name1: "Arun",
    language: "Javascript",
    codeproficiency:()=>{
        console.log("A is expert")
    }
}

let b ={
   name1: "Amit",
    language: "Python",
   
}

let p = {
    codeproficiency:()=>{
        console.log("expert")
    }
}

a.__proto__ = p
console.log(a.codeproficiency())


function Person(name){
    this.name = name
}

Person.prototype.sayHello = function(){
    console.log(`my name is ${this.name}`)
}

let p1 =  new Person("Arun")
p1.sayHello()


class Animal {
    speak(){
        console.log("Animal makes sound")
    }
}

class Dog extends Animal{
   eat(){
    console.log("Dog eats")
   }
  
}


let dog1 = new Dog();
dog1.eat()
dog1.speak()