/* polymorphism: its the ability of the function to perform
 different action depending on the object/arguments

 method overriding method overloading
 methodoverriding: derived class overrides the base class function
 methodoverloading: having same name multiple function in the same class

*/
console.log("Sub type polymorphism")
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


const dog1 = new  Dog()
dog1.makesound()

const cat = new Cat()
cat.makesound()

console.log("Duck type polymorphism(method overriding)")

 const dog = {
    makesound: ()=> console.log("Dog is barking........")
 };

 const cat1 = {
    makesound:()=>console.log("cat meows...........")
 }

 function acitvateSound(entity){
    entity.makesound()
 }

 acitvateSound(dog)
 acitvateSound(cat1)


// method overloading

class Calculator{
    //  add(a){
    //     return a
    //  }

    // add(a, b){
    //     return a+b
    //  }

   add(a, b){
    if(b=== undefined)
        return a
    else
        return a+b
   }
}
const calc = new Calculator()
console.log(calc.add(10,20))