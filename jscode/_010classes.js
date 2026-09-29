

//Access modifier public private and protected

class Student{
    constructor(){

    }
    studentName = "Ajay" // public property- can be accessed, modified out side the class (in the project)
    #studentUID = 3215  // private members can be accessed- modifed with in the clas body  
    _studentHobbies = "Basketball"
    callstudentID(){
        console.log(this.#studentUID);
    }
    callStudentName(){
        return `Hello My name is ${this.studentName}`
    }
}

class HelloWorld extends Student{
   prompt = require('prompt-sync')()
    username = ""
  s1=  new Student();

    sayHello(){
       console.log("Hello World!!")
    }

    greet(){
    
       this.username = this.prompt("Enter your name: ")
       console.log(this.s1.studentName)
      // console.log(this.s1.#studentUID)
    console.log(this.s1._studentHobbies)
    console.log(`Welcome to the community ${this.username}`)
    }


}

let h1 = new HelloWorld()
//  h1.sayHello()
 h1.greet()

