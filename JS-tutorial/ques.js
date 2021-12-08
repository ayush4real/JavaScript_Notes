'use strict';

// copying array using slice
// const arr = new Array('apple', 'banana', 'mango', 'guava', 'grapes');
// let arrCopy;
// arrCopy = arr.slice();
// console.log(arrCopy);
// console.log(arr);

// using for loop
// for(let i = 0;i<arr.length;i++){
//     arrCopy[i] = arr[i];
// }
// console.log(arrCopy);


// Empty an array, arr = [] is a bad practice
// let oArr = ['a', 'b', 'c'];
// let array2 = oArr;
// oArr.length = 0;
// console.log(oArr);
// console.log(array2);

// let arrItems = oArr.splice(0, oArr.length);
// console.log(oArr);
// console.log(arrItems);

// function emptyArray(arr){
//     'use strict';
//     while(arr.length){
//         arr.pop();
//     }
//     console.log(arr);
// }
// emptyArray(oArr);


// console.log(typeof([1,2,3]));


// let arr = [1,2,3];
// let a = Array.isArray([1,2,3]);
// let b = Array.isArray({
//     foo: 123
// })
// let c = Array.isArray('foobar');
// let d = Array.isArray(undefined);
// let e = Array.isArray(arr);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(typeof {a: 1});
// function checkIfArray(array){
//     'use strict';
//     if(Object.prototype.toString.call(array) === '[object Array]'){
//         console.log('array it is');
//     }else{
//         console.log('not an array');
//     }
// }
// function checkIfArray2(array){
//     if(array.constructor === Array){
//         console.log('array it is');
//     }else{
//         console.log('not an array');
//     }
// }
// checkIfArray('abc');
// checkIfArray2(['a','b']);


let arr = ['a', 1, 3, 'b'];
console.log(arr);
arr.push('c');
arr[arr.length] = 2;
console.log(arr);


console.log(arr.indexOf(2));
console.log(arr.indexOf(7));


console.log(arr.includes('milk'));


arr.splice(3,1, 'd');
console.log(arr);


let numbers = [1, 12, 2 ,23,77,7,33,5,99,234];
let numbers2 = numbers.sort((a, b) => {
    return a-b;
});

console.log(numbers2);


let letters = ['a','z','e','y'];
console.log(letters.sort());


let numSum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(numSum);
// console.log(letters.concat(['b','c','d']));


// flatten using reduce, IMPORTANT//////////////////
let nested = [[1,2], [2,3], [3,4]];
let flattened = nested.reduce(function(a,b){
    return a.concat(b);
}, []);
console.log(flattened);
console.log(nested);


let animals = [
    { name: "Jason", species:"rabbit"},
    { name: "Jessica", species:"dog"},
    { name: "Jack", species:"dog"},
    { name: "Jacky", species:"owl"},
    { name: "Luke", species:"fish"},
    { name: "Junior", species:"rat"},
    { name: "Thomas", species:"cat"}
]

let dogArray = animals.filter((animal) =>
    animal.species === 'dog'
)
console.log(dogArray);

//Important-- check arrow function
let species = animals.map(animal => {return animal.species})
console.log(species);