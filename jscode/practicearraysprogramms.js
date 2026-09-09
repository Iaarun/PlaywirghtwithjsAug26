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
secondmaxofarray()