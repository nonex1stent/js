// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function one(num1,num2,num3){
//     if(num1<num2 && num1<num3){
//        console.log(num1)
//         document.write(num1)
//     }
//     else if(num2<num1 && num2<num3){
//         console.log(num2)
//         document.write(num2)
//     }
//     else if(num3<num2 &&num3<num1){
//         console.log(num3)
//         document.write(num3)
//         return one;
//     }
//
// }
// one(10,20,30)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function two(num1,num2,num3){
//     if(num1>num2 && num1>num3){
//         console.log(num1)
//         document.write(num1)
//     }
//     else if(num2>num1 && num2>num3){
//         console.log(num2)
//         document.write(num2)
//     }
//     else if(num3>num2 &&num3>num1){
//         console.log(num3)
//         document.write(num3)
//         return two;
//     }
//
// }
// two(100,200,300)


// - створити функцію яка повертає найбільше число з масиву
// let a = [1,2,3];

// function name() {
//     let max = a[0];
//     for (let element of a) {
//         if (element > max) {
//             max = element;
//         }
//     }
//     return max;
// }
// console.log(name(a));

// function name() {
//     let max = a[0];
//     for (let element of a) {
//         if (element < max) {
//             max = element;
//         }
//     }
//     return max;
// }
// console.log(name(a));


// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let a =[1,2,3];
// function array(arr){
//     let sum=0;
//     for(const element of a){
//         sum +=element
//     }
// return sum
// }
// console.log(array()

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let a =[1,2,3]
// function array(arr){
//     let sum=0
//     let result=0
//     for(const element of a){
//         sum+=element
//
//     }
//     result=sum/a.length
//     return result
// }
//
// console.log(array())

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function array(arg,arg1,arg2){
//     let max =arguments[0];
//     let min =arguments[0];
//     for (const element of arguments) {
//         if(element>max){
//             max=element
//
//         }
//         if(element<min){
//             min=element
//
//         }
//     }
//     console.log(max)
//     return min
// }
// document.write(array(3,5,7))

// - створити функцію яка заповнює масив рандомними числами


// function funRandom (length) {
//     let arrayEmpty = [];
//     for (let i = 0; i < length; i++){
//         arrayEmpty.push(Math.floor(Math.random()*100));
//     }
// return arrayEmpty
// };
//
// document.write(funRandom(12))


// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function randomNumber(length,limit) {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.round(Math.random() * limit));
//     }
//     return emptyArray;
// }
// document.write(randomNumber(10,100));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function reverse(arr) {
//     let arr = [];
//     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//         newArr[ri] = newArr[i];
//     }
//
//     return newArr;
// }


