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
person2.greet(); // Output: Hello, my name is Alice and I am 25 years old.