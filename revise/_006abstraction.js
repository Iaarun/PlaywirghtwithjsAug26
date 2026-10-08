// Abstraction is the process of hiding complex implementation details and showing only the essential features of an object.

class CoffeeMachine {
    #boilWater(){
        console.log("Adding boiled water...")
    }

    #addingMilk(){
        console.log("Addig milk...")
    }

    #brewcoffee(){
        console.log("Brewing Coffee...")
    }

    makeCoffee(){
        this.#boilWater()
        this.#addingMilk()
        this.#brewcoffee()
        console.log("Your coffee is ready...")
    }
}

const coffee1 = new CoffeeMachine()
coffee1.makeCoffee();


