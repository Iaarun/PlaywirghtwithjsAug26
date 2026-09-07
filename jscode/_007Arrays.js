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
    allCharacters[10] = "Hulk";
    console.log(allCharacters);
}  

function checkdata(){
  console.log(9=="9");
  console.log(9==="9");
}

arraysMethods();