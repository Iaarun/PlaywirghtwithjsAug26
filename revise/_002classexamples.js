// class  are template for creating the objects.
// properties = datamembers /variables
// behaviors = methods / functions
class Person {
    name;
    age;
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person();
// access properties and methods of an object using . notation
person1.name = "John";
person1.age = 30;
 // Output: Hello, my name is John and I am 30 years old.   
console.log(person1.name); // undefined
console.log(person1.age);
person1.greet();

 
const person2 = new Person();
person2.name = "Alice";
person2.age = 32;
console.log(person2.name);  
console.log(person2.age);
person2.greet(); 

// Box Class with constructor
class Box1
 {
    length;
    width;
    height;
  
    boxVolume(){
        return this.length * this.width * this.height;
    }
}
// explicitly calling the box properties  and methods
// to assign the values to the properties of the box class and calling the method to calculate the volume of the box
const box1 =  new Box1(); // create an object of Box1 class
box1.length = 5;
box1.width = 4;
box1.height = 3;
console.log("Box1 volume is: "+box1.boxVolume());

/*
  constructor is a special method which is used to create and initialize the object 
  that is called when an object is created from a class. 
*/
class Box2{
    
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    boxVolume(){
        return this.length * this.width * this.height;
    }
}

 const box2 =  new Box2(5, 4, 3); // create an object of Box2 class

 console.log("Box2 volume is: "+box2.boxVolume());


 class Circle{
    constructor(radius){
        this.radius = radius;
    }
  getCircleArea(){
    return Math.PI*Math.pow(this.radius,2)
}
 }