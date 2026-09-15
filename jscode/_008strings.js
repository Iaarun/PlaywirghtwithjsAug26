/*
 string is a sequence of characters.
 they are immutable in nature.
 create using literals or using constructor.
*/
 function stringbasic(){
// using literals
    let str1 = "Sachin";
    let str2 = 'Sachin';
    let str4 = 'SAchin';
// using constructor
    let str3 = new String("Hello World");
    console.log("Hello "+str1+" and "+str2);
    console.log(`Hello ${str1} and ${str2}`);

 // multi line string
 let str6 = `this is 
 multi line 
 string`;   

 console.log(str6);
 }

 function stringmethods(){
   let str1 = "Sachin tEnDulkar"; // Sachin Tendulkar
   console.log("Length of string: ",str1.length);
    console.log("Uppercase: ",str1.toUpperCase());
    console.log("Lowercase: ",str1.toLowerCase()); 
    console.log("Index of 't': ",str1.indexOf('a'));
    console.log("Index of 'T': ",str1.lastIndexOf('a'));

    //concatenation
    let str2 = " is a great cricketer";
    console.log("Concatenation: ",str1.concat(str2));
    console.log("Concatenation: ",str1+str2);

    str3 = "   Sachin Tendulkar   ";
    console.log("Trim: ",str3.trim());
    console.log("Trim Start: ",str3.trimStart());
    console.log("Trim End: ",str3.trimEnd());
    str3 = ", He makes cricket look easy";
   str1= str1.concat(str3);
    console.log(str1)
    str4 = `Hello, I love JS!`
    console.log(str4.length)
    console.log(str4.charAt(1))
    console.log(str4.at(0))
    console.log(typeof (str2.at(0)))
    //substring
    str5= str4.substring(1, str4.length)
    console.log(str5)
    //indexof()
    console.log(str4.indexOf('!!!!'))
  // abcdef@gmail.com -> abcdef
    str6 = "abcdefkjvnsjdhvksjvosjvjsvjsvonjlvjhof@gmail.com"
    console.log(str6.substring(0, str6.indexOf('@')))
    //replace
   str6=    str6.replace(str6.substring(0, str6.indexOf('@')), "myname")
   console.log(str6)
    str7 = "Sachin Tendulkar is a great player and he makes cricket look easy and makes country proud"
     console.log(str7.indexOf("Sachin"))
    // str7= str7.replace("Sachin", "Arjun")
     console.log(str7)
     console.log(str7.bold())
     console.log(str7.indexOf('a'))
     console.log(str7.lastIndexOf('a'))
     // startswith and endswith
     console.log(str7.startsWith("Sa"))
     console.log(str7.endsWith("ar"))
     console.log(str7.valueOf())
     //split
    str8 = str7.split("and")
    console.log(str8)
    str7 = "Sachin Tendulkar is a great player and he makes cricket look easy and makes country proud"
    // includes
    console.log(str7.includes("cricket"))
    console.log(str7.includes("cricket",10))
    console.log(str7.search("cricket"))
    str9 = "Hello" 
    insertChar(str9, "T",4)
 }

 function insertChar(str, str1, position){
  let str2=  str.slice(0,position)+str1+str.slice(position)
  console.log(str2)
 }

 

