class Animal{
    speak(){
        console.log("Animal Speak")
    }
}

class Dog extends Animal{
    eat(){
        console.log("Dog likes the dog food")
    }

    speak(){
        console.log("Dog Barks")
    }
}

let dog1 =  new Dog()
dog1.eat()
dog1.speak()

let dog2 = new Animal()
dog2.speak()


//overloading
class AreaCalculator{
     calculateArea(length){
       return length*length               
     }

     calculateArea(length, width){
           return length*width
     }
}

let shape = new AreaCalculator()
console.log(shape.calculateArea(5))
console.log(shape.calculateArea(5,4))
 
