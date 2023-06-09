/*
|| Program to count consonants and vowels in a string ||

const txt = "My name is priyank";
let count = 0;
for(i=0; i<txt.length; i++){
let letters = txt[i].toLowerCase();
if(letters == 'a' || letters == 'e' || letters == 'i' || letters == 'o' || letters == 'u')
    {
        count ++;
    }
}
console.log('Vowels:' + count);
console.log('Consonants:' + (txt.length-count));
*/





/*
|| Program to count consonants and vowels in a string ||

const txt = "My name is priyank";
let count = 0;
let vowels = ['a','e','i','o','u'];

for(i=0; i<txt.length; i++){
    let letters = txt[i].toLowerCase();
        if(vowels.includes(letters)){
            count ++;
        }
}
console.log('Vowels:' + count);
console.log('Consonants:' + (txt.length-count));
*/


//Count the occurence of each letter in a string

//Way1
// function getCharString(str){
//     let charCount = {};
//     for(let i = 0; i < str.length; i++){
//       let char = str[i];
//       if(charCount[char]){
//         charCount[char]++;
//       } else {
//         charCount[char] = 1;
//       }
//     }
//     console.log(charCount);
//   }
  
//   getCharString("Hello World");


//Way2
//   function getCharString(str){
//     const charCount = str.split("").reduce(function(acc, char){
//       if(acc[char]){
//         acc[char]++;
//       } else {
//         acc[char] = 1;
//       }
//       return acc;
//     }, {});
//     console.log(charCount);
//   }
  
//   getCharString("Hello World");


//Way3
//   function getCharString(str){
//     const charCount = {};
//         str.split("").forEach((curElem) => {
//         charCount[curElem] = charCount[curElem] ? charCount[curElem]+1 : 1;
//         })
//     console.log(charCount);
//   }

//    getCharString("Hello World");


/*
Program to Reverse a number

num = 101
let newNum = num.toString().split(“”).reverse().join(“”);
*/



/*
Program to Calculate Age using year-
 
birth : 1995
let age = new Date().getFullYear()-birth;
return age	// 27
*/


/*
Program to find the minimum In an array

let array = [4, 6, 2, 1, 5]
let newArray = array.sort();
Console.log(newArray[0])					// minimum
Console.log(newArray[array.length-1])		// maximum
*/


// Usually array sorts in string way considering the first letter of element only even if it is in case of numbers //

/*
Program to sort array in descending 

const arr = [1,4,5,2,8,3];
arr.sort();
arr.reverse();
console.log(arr);
*/


/*
Program to sort array in asscending 
const arr = [20,30,10,2,3];     // here the 2digits numbers will give incorrect sort result becoz array consider elements as string not numbers, so we have to use number sort by using comparision method 

arr.sort((a, b) => a - b);  // Sort the array numerically in ascending order.
console.log(arr)
*/


/*
Program to capitalize each element of an array

let names = ['tony', 'shark', 'wanda', 'peter'];
names.map((curElem) => {
    const firstchar = curElem.charAt(0).toUpperCase();
    const restchar = curElem.slice(1);
    const finalname = firstchar + restchar ;
    console.log(finalname);
})
*/



/*
Program to remove a single element from an array
let arr = ['banana','grapes','apple','kiwi','litchi'];
let elem = arr.splice(arr.indexOf('grapes'),1);
console.log(arr);
*/



/*
Program to remove specific elements from an array like grapes
let arr = ['banana','grapes','apple','kiwi','litchi','grapes','litchi'];
let elem = arr.filter((curElem) => {
    return curElem.includes('grapes') != 1
})
console.log(elem);
*/




/*
Difference between arr = [] vs arr.lenth = 0 

arr = [] // creates a new array and doesn't affect other references

let foo = ['hello', 'world'];
let bar = foo;
foo = [];
console.log(foo); // []
console.log(bar); // ['hello', 'world']


arr.length = 0 // modifies the array and effect other references

let foo = ['hello', 'world'];
let bar = foo;
foo.length = 0;
console.log(foo); // []
console.log(bar); // []
*/




/*
Program to check whether it is an array or not

console.log( Array.isArray([]) );
console.log( [] instanceof Array );
*/


/*
Program to check factorial
let fac = 1;
for(i=4; i>=1; i--){
    fac = fac*i;
    console.log(fac);
}
*/



/*
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);       //print 10 10times
    }, 1000);
  }
*/

/*
"use strict";   // to avoid any bad practises

sum(5,10);
function sum(a,a)[
    comsole.log(a+b);   // will give error if we use strict else it will give 20
]
*/

/*
Covert an array to a list

var myArray = [1, 2, 3, 4, 5];
var myList = Array.from(myArray);
console.log(myList);
*/



/*
Covert an array to a list in key:value pair

var myArray = ["apple", "banana", "orange"];
var myList = myArray.map(function(item, index) {
  return { key: index, value: item };
});

console.log(myList);

Output - 
[
    { key: 0, value: "apple" },
    { key: 1, value: "banana" },
    { key: 2, value: "orange" }
]
*/


/*
Program to add k:9 in object c
var obj = {a: 1, b: 4, c: {n: 5, m: 8}};    

obj.c.k = 9;    //1st way

const newobj = {...obj,c:{...obj.c,k:9}};   // 2nd way


console.log(obj);
*/


/*
program to destructure the object and print value of n i.e 5
var obj = {a: 1, b: 4, c: {n: 5, m: 8}};
const { c:{n} } = obj
console.log(n);
*/


/* Output
var myObject = {
    foo: "bar",
    func: function() {        
        console.log("outer func: " + this.foo);         // bar
        
        function inner() {
            console.log("inner func: " + this.foo); };          // Undefined becoz the inner function has now new scope so this keyword won't work in this case
        inner();
        
    }
};
myObject.func();
*/