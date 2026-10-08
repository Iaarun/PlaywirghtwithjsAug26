// object oriented programming concepts - class based, prototype based
// inheritance, encapsulation, polymorphism, abstraction

/*
  class: a blueprint or template to create object.
  object: an instance of the class.
  Inheritance: a mechanism where one class can inherit properties and methods from another class.
   IS-A relationship between classes.
  */

class vehicle{
    constructor(brand, speed){
        this.brand = brand;
        this.speed = speed;
    }
    accelerate(){
        this.speed += 10;
        console.log(`${this.brand} is accelerating. Current speed: ${this.speed} km/h`);
    }

    slowDown(){
        this.speed -= 10;
        console.log(`${this.brand} is slowing down. Current speed: ${this.speed} km/h`);
    }
}
// inheritance
class Car extends vehicle{
    constructor(brand, speed, doors){
        super(brand, speed);
        this.doors = doors;
    }


    convertibleroof(){
        console.log(`opening the doors of ${this.brand} with ${this.doors} doors`);
    }
}

const car1 = new Car("Toyota", 60, 4);
car1.accelerate();  
car1.slowDown();
car1.convertibleroof();

const vehicle1 = new Vehicle("Honda", 50);
vehicle1.accelerate();
vehicle1.convertibleroof() // Output: Honda is accelerating. Current speed: 60 km/h

