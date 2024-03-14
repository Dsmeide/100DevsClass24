//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty.
 //Please create a function that reverses your list and prints it to the console. 
let listOfPoke = ['pikachu', 'charizard', 'spyduck'];
function swapTheListOfPokes() {
    console.log(listOfPoke.reverse());
}
swapTheListOfPokes();
//Given two integer arrays a, b, both of length >= 1, create a program that returns true if 
//the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
let a = [4,5,6];
let b = [2,3,4];
let aSquared;
let bCubed;
//function used reduce method
function compareArrays1(a, b) {
    return a.reduce((acc, c)=> acc + c**2, 0) > b.reduce((acc, c) => acc + c**3, 0);
}
//function using for loops
function compareArrays() {
    for(var i = 0; i<a;i++) {
        aSquared = aSquared + (a[i] * a[i]);  
    }
    console.log(aSquared);
    for(var j = 0; j<b; j++) {
        bCubed = bCubed + (b[i] * b[i] *b[i]);
    }
    console.log(bCubed);
    if(aSquared > bCubed){
    return true
    } else {
    return false;
    }
}
compareArrays();
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
let originalArr = [22, -6, 32, 82, 9, 25];
//let mappedArr = originalArr.map((x,i) => x % [i] === 0)
//console.log(mappedArr);
function isMultiple(arr) {
    return arr.filter((e,i) => e % i === 0);
}
isMultiple(originalArr);


//Given an array of integers as strings and numbers, return the sum of the array values as if 
//all were numbers.Return your answer as a number.
let mixedArr = [7, "8", 6, "9"];
function couldBeNumSum(arr) {
    return arr.reduce((acc, c)=> acc + Number(c), 0);
}
console.log(couldBeNumSum(mixedArr));