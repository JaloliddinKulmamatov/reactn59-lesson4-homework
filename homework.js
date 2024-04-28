//1

// const filterEvens = (array) =>  array.filter(el => el % 2 != 0) ;

// console.log(filterEvens([1, 2, 3, 4, 5, 6]));


//2

// const sortNames =(arr1) => arr1.sort()

// console.log(sortNames(["John", "Alice", "Bob", "Emily", "David"]));


//3

// const students = [
//     {id: 123, name: 'Husanjon', score: 79},
//     {id: 456, name: 'Isfandiyor', score: 85},
//     {id: 789, name: 'Umar', score: 70},
// ]

// const sortScore = (students) =>  students.map(el => el.score).sort((a,b) => b - a)

// console.log(sortScore(students));


//4

// const  doubleNum = (array)  => array.map(el => el * 2)

// console.log(doubleNum([1, 2, 3]));

//5

// const sayHi = (array) => array.map(el => `Salom ,${el}`);

// console.log(  sayHi(['Husanjon', 'Isfandiyor', 'Umar']));


//6

// const isPositive = (arr) =>  arr.every(el => el > 0)


// console.log(isPositive([1, 2, 3]));

//7

// const isPositive = (arr) =>  arr.some(el => el < 0)


// console.log(isPositive([1, -2, 3]));

//8

// function addUp(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }

// console.log(addUp(4));

//9

// function minMax(array) {
//     newArr = [];
//     newArr.push(Math.min(...array),Math.max(...array))
//     return newArr;
// }

// console.log(minMax([1, 2, 3, 4]));

//10

// function comp(str1,str2) {
//     len1 = str1.length
//     len2 = str2.length
//     return len1 == len2
// }

// console.log(comp("Ab","BOP"));