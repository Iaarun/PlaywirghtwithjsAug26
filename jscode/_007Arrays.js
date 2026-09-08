const console = require("node:console");

/*
 Arrays - non primitive data type
  used to store multiple values in a single variable
  values can of same type or mixtype
  resizable - can add or remove values
  indexed - each value has an index starting from 0
*/
function arraybasic(){
let numbers = [12,65,98,64];
console.log(numbers)
console.log(numbers.length)
console.log(numbers[numbers.length-1])//undefined
}

function differentwaystoCreateArray(){
    const fruits = new Array("Apple", "Banana", "Mango");
    console.log(fruits);
    fruits[3] = "Orange";
    console.log(fruits);
    fruits[3] = "Pineapple";
    console.log(fruits);
    fruits[4] = "Pineapple";
    console.log(fruits);
    //check if it is an array
    console.log(Array.isArray(fruits));
    console.log(fruits instanceof Array);

    console.log(fruits.indexOf("Mangoos"));
}

function arraysMethods(){
    // adding two arrays
   const superHeroes = ["Iron Man", "Spider Man", "Thor"]
   const superVillains = ["Thanos", "Loki", "Ultron"] 
   const allCharacters = superHeroes.concat(superVillains);
   console.log(allCharacters);
   console.log(superHeroes.length);
   //fill function
    const numbers = [1,2,3,4,5,6,7,8,9];
    console.log(numbers);
    //numbers.fill(0);// fills all the values with 0
     numbers.fill("amitabh",3,6);// fills values from index 3 to 5 with 0
    console.log(numbers);

    const numbers1 = [5,6,7,8,9,15,9,10,11,9,9];
    console.log(numbers1.findIndex((value)=>value===9));
    console.log(numbers1.findLastIndex((value)=>value===9));

     console.log(numbers1.findIndex((value)=>value>10));
    console.log(numbers1.findLastIndex((value)=>value>10));

    console.log(numbers1.find((value)=>value>10));
    console.log(numbers1.findLast((value)=>value>10));

    console.log(allCharacters)
   // console.log(allCharacters.join(" | "))

    //keys
    const keys = allCharacters.keys();
    console.log(keys);

    for (const key of keys) {
        console.log(key);
    }

    // to store new data
    allCharacters[6] = "Hulk";
    console.log(allCharacters);
    allCharacters.push("Hawkeye"); // adds at the end of the array
    allCharacters.unshift("Black Panther"); // adds at the start of the array
    console.log(allCharacters);
  //  allCharacters.pop(); // removes last element
  //  allCharacters.shift(); // removes first element
    console.log(allCharacters);
  const newsortedheros=  allCharacters.toSorted();
    console.log("Sorted:\n" , newsortedheros);
    console.log("Original: ",allCharacters);
    console.log("Sort original array: ",allCharacters.sort());
    const newreversedheros = allCharacters.toReversed();
    console.log("Reversed: ", newreversedheros);
    console.log("Original: ",allCharacters);
    console.log("Reverse original array: ",allCharacters.reverse());
    //splice
    const removed = allCharacters.splice(2,3,"Doctor Strange","Scarlet Witch");
    console.log("Removed: ",removed);
    console.log("New Array: ",allCharacters);
    const removed1 = allCharacters.splice(2,0,"Doctor Strange","Scarlet Witch");
    console.log("Removed: ",removed1);
    console.log("New Array: ",allCharacters);

    //slice
    const sliced = allCharacters.slice(5,-1);
    console.log("Sliced: ",sliced);

    //toString
    array = [1,2,3,"four","five"];
    console.log(typeof array);
    console.log("String representation: ",array.toString());
    console.log(typeof array.toString());
    
}  

function checkdata(){
  console.log(9=="9");
  console.log(9==="9");
}

function iterateoverarray(){
    allCharacters = ["Iron Man", "Spider Man", "Thor","Thanos", "Loki", "Ultron"];
   // for loop. it works on indexes
   for (let i = 0; i <=allCharacters.length; i++) {
       console.log(allCharacters[i]);
   }
   console.log("****while loop******");
   let j = 0;
   while (j < allCharacters.length) {
       console.log(allCharacters[j]);
       j++;
   }
   // for  of work on values
   console.log("****for of loop******");
   for (const character of allCharacters) {
       console.log(character);
   }
   // for  in works on indexes
   console.log("****for in loop******");
   for (const index in allCharacters) {
       console.log(allCharacters[index]);
   }

   //forEach works on values
   console.log("****forEach loop******");
    allCharacters.forEach((value,index)=>{  
        console.log(index + ": " + value);
    });
}


iterateoverarray();