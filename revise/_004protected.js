//Protected members can be used with in the class and 
//can be accessed by the derived class but not outside of the class
class Vehicle{
    constructor(brand){
        this._brand = brand; // protected property
    }

    getBrand(){
        return this._brand; // protected method
    }
}


class Car extends Vehicle{
    constructor(brand, model){
        super(brand)
        this.model = model; // public property
    }

    displayInfo(){
        console.log("Car brand is: "+this.getBrand()+" and model is: "+this.model);
    }   
}


const car1 = new Car("Toyota", "Camry"); // Output: Car brand is: Toyota and model is: Camry
car1.displayInfo();
const car2 = new Car("Honda", "Civic"); // Output: Car brand is: Honda and model is: Civic
car2.displayInfo();