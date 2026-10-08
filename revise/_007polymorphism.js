/* polymorphism: its the ability of the function to perform
 different action depending on the object/arguments

 method overriding method overloading
 methodoverriding: derived class overrides the base class function
 methodoverloading: having same name multiple function in the same class

*/

console.log("*****Method overriding*****")

class Animal{
    makesound(){
        console.log("Animal makes sound...")
    }
}

class Dog extends Animal{
    makesound(){
        console.log("Dog Barks...")
    }
}

class Cat extends Animal{
    makesound(){
        console.log("Cat Meows..")
    }
}


const dog = new  Dog()
dog.makesound()

const cat = new Cat()
cat.makesound()