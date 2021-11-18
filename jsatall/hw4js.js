// // - створити функцію яка обчислює та повертає площу прямокутника
//
// function squarerectangle(a, b) {
//     let srectangle = a * b;
//     return srectangle;
// }
//
// console.log(squarerectangle(10, 10))
// document.write('Площа прямокутника: ' + squarerectangle(10, 10))
//
// // - створити функцію яка обчислює та повертає площу круга
//
// function squarecircle(r) {
//     let scircle = 3.14 * Math.pow(r, 2);
//     return scircle;
// }
//
// console.log(squarecircle(10))
// document.write('Площа круга: ' + squarecircle(10))
//
// //- створити функцію яка обчислює та повертає площу циліндру S= 2πRH
//
// function squarecylinder(r, h) {
//     let scylinder = 2 * 3.14 * r * h;
//     return scylinder;
// }
//
// console.log(squarecylinder(10, 10))
// document.write('Площа циліндра: ' + squarecylinder(10, 10))
//
//
// // - створити функцію яка приймає масив та виводить кожен його елемент
//
// let array = [1, true, 3, false, 5, 'qq', 'true'];
//
// function massive(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
// }
//
// massive(array);
//
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function book(page) {
//     (page) = 'comics'
//     document.write(`<p>${page}</p>`)
//     document.write(`<p>${page}</p>`)
// }
//
// book(page)
//
//
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function list(magazine) {
//     document.write(`<ul>`);
//     document.write(`<li>${magazine}</li>`);
//     document.write(`<li>${magazine}</li>`);
//     document.write(`<li>${magazine}</li>`);
//     document.write(`</ul>`);
// }
//
// list()
//
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// function amount(spider, quantity) {
//     document.write(`<ul>`)
//     for (let f = 0; f < quantity; f++) {
//         document.write(`<li>${spider}</li>`)
//     }
//     document.write(`</ul>`)
// }
// amount('spider', 3)
//
//
// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array1 =[17,true,'DarkHorse',false]
function arrays(array2) {
    document.write(`<ul>`)
    for (let c = 0; c < array1.length; c++) {
        document.write(`<li>${array2[c]}</li>`)
    }
    document.write(`</ul>`)
}
arrays(array1);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let array = [{id:1, name:'Ilya', age:17 },{id:3, name:'Sofiya', age:16},{id:7, name:'Yaroslav', age:21}];
function object(array) {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`);
    }
}
object(array);
