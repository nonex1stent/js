//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


// let minimal = (a,b,c) => {
//     if (a < b && a < c ){
//         console.log(a)
//     }
//     else if (b < a && b < c ){
//         console.log(b)
//     }
//     else if (c < a && c < b){
//         console.log(c)
//     }
// }
// minimal(7,5,3);
//
// // - створити функцію яка приймає три числа та виводить найбільше.
//
//
// let max = (a,b,c) => {
//     if (a > b && a > c){
//         console.log(a)
//     }
//     else  if (b > a && b > c){
//         console.log(b)
//     }
//     else  if (c > a && c > b)
//         console.log(c)
// }
// max(7,5,30);


// - створити функцію яка повертає найбільше число з масиву

// let array = [2,3,1,4,5,6,7];
//
// let max = (array) => {
//     let element = array[0];
//     for (const elementElement of array) {
//         if ( elementElement > element ){
//             element = elementElement
//         }
//     }
//     return element
// }
// console.log(${max(array)})
//
// //- створити функцію яка повертає найменьше число з масиву
//
// let array2 = [2,3,1,4,5,6,7,10,12];
//
// let min = (array2) => {
//     let element = array2[0];
//     for (const elementElement of array2) {
//         if (  elementElement < element){
//             element = elementElement
//         }
//     }
//     return element
// }
// console.log(${min(array2)})

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let array = [1,2,3,4,5,6,7];
// let take =(array)=>{
//  let sum=0
//     for (const element of array) {
//         sum= element+ sum
//
//
//     }
//     return sum
// }
// console.log(take(array))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let array =[2,2,2]
// let take =(array)=>{
//     let a=0
//     for (const element of array) {
//         a=a+element
//     }
//     return a=a/array.length
// }
// console.log(take(array))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let empty =(...argument)=>{
//     let min=argument[0]
//     let max=argument[0]
//     for (const element of argument) {
//         if(element>max){
//             max=element
//
//
//         }
//         if(element<min){
//             min=element
//
//         }
//
//     }
//     console.log(max)
//     return min
//
// }
// document.write(empty(1,2,3,4,5))

// - створити функцію яка заповнює масив рандомними числами
// let random = (num) =>{
//     let array5 = [];
//
//     for (let i = 0; i < num; i++) {
//         array5[i] = Math.floor(Math.random()*10)
//     }
//     return array5
// }
// console.log(  random(100))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// const randomNumber = (length,limit) => {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.round(Math.random() * limit));
//     }
//     return emptyArray;
// }
// document.write(randomNumber(10,100));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let array = [1, 2, 3, 4]
// const reverse = (arr) => {
//     let newArr = [];
//     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//         newArr[ri] = arr[i];
//     }
//
//     return newArr;
// }
// console.log(reverse(array));