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
    
 }
 stringmethods()