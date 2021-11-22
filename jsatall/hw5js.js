// // - створити функцію яка обчислює та повертає площу прямокутника

// const kubsquare = (a, b) => {
//     return a * b;
// }
// console.log(kubsquare(7, 2));

// // - створити функцію яка обчислює та повертає площу круга
//
// const krugsquare = (a) => {
//     let radius = a ** 2;
//     return 3.14 * radius;
// }
// console.log(krugsquare(7));

// //- створити функцію яка обчислює та повертає площу циліндру S= 2πRH

// const cylindersquare = (r, h) => {
//     return 2 * 3.14 * r * h;
// }
// console.log(cylindersquare(5,6));

// //- створити функцію яка приймає масив та виводить кожен його елемент

// let array = [5,6,7,8,9, 'hello mentor',true];
//
// const dataArray =  (array) => {
//     for (let i = 0; i < array.length; i++) {
//        console.log(array[i]);
//     }
// }
// dataArray(array);

// //- створити функцію яка створює параграф з текстом. Текст задати через аргумент

// const pages =  (comics) => {
//     document.write(`<p>${comics}</p>`);
//     document.write(`<p>${comics}</p>`);
//     document.write(`<hr>`);

//     }
// }
// pages('comics');

// //  - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// const elements = (argument) => {
//     document.write(`<ul>`);
//     document.write(`<li>${argument}</li>`);
//     document.write(`<li>${argument}</li>`);
//     document.write(`<li>${argument}</li>`);
//     document.write(`</ul>`);
// }
// elements('argument');


// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// const elements = (arg, arg1) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < arg1; i++) {
//         document.write(`<li>${arg}</li>`);
//     }
//     document.write(`</ul>`)
// }
// elements('notebook', 3);


// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array1 = [1,'Gucci', 7, true];
//
// const primitives = (array) => {
//     document.write(`<ol>`)
//         for (let i = 0; i < array.length; i++) {
//             document.write(`<li>${array[i]}</li>`);
//         }
//     document.write(`</ol>`)
// }
// primitives(array1);


// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let Array = [{id: 1, name: 'Sveta', age: 29}, {id: 2, name: 'Iluha', age: 21}, {id: 3, name: 'Yaroslav', age: 21}];
//
// const objArray = (array) => {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`);
//     }
// }
// objArray(Array);



