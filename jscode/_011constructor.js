// constructor functions
function Person(name, age){
    //this keyword refers to th new object being create
    this.name = name
    this.age = age
    this.describe = function(){
        console.log(`Hello my name is ${this.name} and age is ${age}`)
    }
}

// p1 = new Person("Ajay", 35)

// p2 = new Person("Sachin", 52)

// p1.describe()
// p2.describe()


class Box{
  constructor(length, width, height){
          this.length = length
          this.width = width
          this.height = height
  }

  boxarea(){
    return this.length*this.width*this.height
  }
}
b1 = new Box(12,10,10)
console.log(b1.boxarea())