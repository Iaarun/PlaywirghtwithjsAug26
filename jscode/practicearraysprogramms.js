// calculate sum of all elements in an array
function sumofarray(){
    let sum = 0;
    const numbers = [1,2,3,4,5];
    for(const number of numbers){
      //  sum += number;
      sum = sum + number;
    }
    console.log(sum);
}

function iterateoverarray(){
    const numbers = [1,2,3,4,5];
    for(const number of numbers){
        console.log(number)
    }

    console.log("itrate using normal for loop ")

    for(let i=0; i<numbers.length; i++){
        console.log(numbers[i])
    }
}
//iterateoverarray()

// find the maximum number in an array
// find the second maximum number in an array
function maxofarray(){
    const numbers = [1,2,30,4,5,54];
    let max = numbers[0];
    for(const number of numbers){
        if(number>max){
            max = number;
        }
    }
    console.log(max);
    
}

function secondmaxofarray(){
    const numbers = [1,2,30,4,61,54,87,5,54];
    let max = -Infinity;
    let secondMax = -Infinity;
    for(const number of numbers){
        if(number>max){
            secondMax = max;
            max = number;
        }
        else if(number>secondMax){
            secondMax = number;
        }
    }
    console.log("Maximum:", max);
    console.log("Second Maximum:", secondMax);
}
//secondmaxofarray()

//[1,0,2,3,0,4,5,0] => [1,2,3,4,5,0,0,0]
//

// reverse the string I/P "Hello world"  O/p  dlrow olleH

function reverseString(){
    str = "HelloWorld"
     revstr=""
     for(let i = str.length-1; i>=0; i--){
          revstr = revstr+str[i]
     }

     console.log(revstr)
}

function reverseStringUsingInbuiltfunction(){
    str = "HelloWorld"
   console.log(str.split("").reverse().join(''))
}
//reverseStringUsingInbuiltfunction()

// remove the dupliate character form the String I/P "HelloWorld" O/P "HeloWrd"

function removeDuplicateFromTheString(str){
  //  str = "HelloWorld"
    let result=""
     for(let i=0; i<str.length; i++){
        isDuplicate = false
        for(let j=0;j<result.length; j++ ){
            if(str[i]===result[j]){
                isDuplicate = true;
                break;
            }
    }
       if(!isDuplicate){
         result = result+str[i]
       }
     }

     console.log(result)
}

//removeDuplicateFromTheString("JavaScript")

// insert data  in the begining of the array

function insertdatainArray(num){
    arr=[54,48,34,94]
    arr.unshift(num)
    console.log(arr)

    //insert data in the end
    arr.push(num)
    console.log(arr)
}

//insertdatainArray(85)
function insertdataatanyindex(){
    arr=[54,48,34,94]
    // arr=[54,48,25,34,94]
    //insert value 25 at index 2

    arr.splice(2,0,25)
    console.log(arr)
}

insertdataatanyindex()
// withoutusing inbuilt function