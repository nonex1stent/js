{// --створити масив з:
 // - з 5 числових значень
 // - з 5 стічкових значень
 // - з 5 значень стрічкового, числового та булевого типу
 // - та вивести його в консоль
let xxx = [0, 1, 2, 3, 4];
let www = [`Do not`, `be`, `so`, `shy`, `:)`];
let together = [5, 6, 7, 8, 9, 10, `present`, 'for', `my`, `dear`, `sweetie`, true, false, false, true, true];
console.log(xxx);
console.log(www);
console.log(together);


 // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль


let empty = [];
empty[0] = 'hello'
empty[1] = 'okten'
empty[2] = 17
console.log(empty);




//  - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let a = 0; a <= 9; a++) {
//     document.write(`<div>gift</div>`);
// }
//  - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
// for (let b = 0; b <= 9; b++) {
//     document.write(`<div>present ${b}</div>`);
// }
//  - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// let c = 0;
// while (c <= 19) {
//     document.write(`<div><h1>Meow</h1></div>`);
//     c++
// }
//
//  - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let d = 0;
// while (d <= 19) {
//     document.write(`<div><h1>Woof ${d}</h1></div>`);
//     d++
// }
//
//  - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let numelements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let f = 0; f < 10; f++) {
//     console.log(numelements[f]);
// }
//  - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі
//
// let stringelements = [`flash`, `joker`, `catwoman`, `batman`, `superman`, `supergirl`, `penguin`, 'supergirl', `greenarrow`, `aquaman`];
// for (let g = 0; g < 10; g++) {
//     console.log(stringelements[g]);
// }
//  - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let allelements = [0, `flash`, 2, `joker`, 4, false, `iphone`, 7, true, 9];
// for (let h = 0; h < 10; h++) {
//     console.log(allelements[h]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let hhh = [0, `flash`, 2, `joker`, 4, false, `iphone`, 7, true, 9];
// for (j = 0; j < hhh.length; j++) {
//     if(typeof hhh[j]==='boolean')
//     console.log(hhh[j]);
// }
//  - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let ggg = [0, `flash`, 2, `joker`, 4, false, `iphone`, 7, true, 9];
// for (g = 0;  g< ggg.length; g++) {
//     if(typeof ggg[g]==='number')
//         console.log(ggg[g]);
// }
//  - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let zzz = [0, `flash`, 2, `joker`, 4, false, `iphone`, 7, true, 9];
// for (z = 0;  z< zzz.length; z++) {
//     if (typeof zzz[z] === 'string')
//         console.log(zzz[z]);
// }

// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let array =[];
// array[0]=1;
// array[1]=`ice`;
// array[2]=true;
// array[3]=`meow`;
// array[4]=7;
// array[5]=false;
// array[6]=3;
// array[7]=`bubble`
// array[8]=5;
// array[9]=`home`
//
// for (let i=0; i<=array.length; i++){
//  console.log(array[i]);
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let m=0; m<10; m++){
//     console.log('Крок циклу : ' + m + ' ')
//     document.write('Крок циклу : ' + m + ' ')
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let n=0; n<100; n++){
//     console.log('Крок циклу : ' + n + ' ');
//     document.write('Крок циклу : ' + n + ' ')
// }
 // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let l=0; l<100; l+=2) {
//     console.log('Крок циклу : ' + l + ' ');
//     document.write('Крок циклу : ' + l + ' ')
}
//
//  - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if(i % 2 === 0){
//         console.log(' Крок циклу : ' + i + ' ');
//         document.write('Крок циклу : ' + i + ' ');
//     }
// }
//  - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for (let s = 0; s < 100; s++) {
//     if(s % 2 === 1){
//         console.log('Крок циклу : ' + s + ' ');
//         document.write('Крок циклу : ' + s + ' ');
//     }
// }
