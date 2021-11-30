// a) змінює колір тексту елементу з ід main_header на назву групи в якій ви вчитесь (mon-year)

let www = document.getElementById('main_header');
www.innerText = 'mon-year';

// b) робить шириниу елементу ul 400px

let xxx = document.getElementsByTagName('ul');
xxx[0].style.width = '400px';


// c) робить шириниу всіх елементів з класом linkList шириною 50%

let hhh = document.getElementsByClassName('linkList');
console.log(hhh);


for (const el of hhh) {
    el.style.width = '50%';
    el.style.border = '1px solid blue'
}

// d) отримує текст який зберігається в елементі з класом listElement2

let yyy = document.getElementsByClassName('listElement2');
console.log(yyy[0].innerText);

// e) отримує всі елементи li та змінює ім колір фону на сірий

let zzz = document.getElementsByTagName('li');
for (const element of zzz) {
    element.style.background = 'silver'
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let nnn = document.getElementsByTagName('a')

for (const elem of nnn) {
    elem.classList.add('anchor');
    console.log(elem);

}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let jjj = document.getElementsByTagName('a');
for (const jjjElement of jjj) {
    if (jjjElement.innerText.includes('link3')) {
        jjjElement.style.fontSize = '40px'
    }
}
console.log(jjj);

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let kkk = document.getElementsByTagName('a');
for (const kkkElement of kkk) {
    let a = kkkElement.innerText
    kkkElement.classList.add(`element_${a}`);
    console.log(kkkElement)
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let lll=document.getElementsByClassName('sub-header');
// lll[0].style.background =prompt('Введіть колір');

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let iii=document.getElementsByClassName('sub-header');
// for (const iiiElement of iii) {
//     if(iiiElement.innerText==='content 2 segment'){
//         iiiElement.style.color=prompt('Введи колір');
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому текст на довільний. Текст отримати з prompt()

// let uuu = document.getElementsByClassName('content_1');
// for (const uuuElement of uuu) {
//     if (uuuElement.innerText.includes('ipsa ')) {
//         uuuElement.innerText = prompt('Введіть текст')
//     }
// }

// l) отримати елементи p та змінити їм padding на 20px

let bbb=document.getElementsByTagName('p');
for (const bbbElement of bbb) {
    bbbElement.style.padding='20px'

}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let ccc=document.getElementsByClassName('text2');
for (const cccElement of ccc) {
    cccElement.innerText='sep-2021'

}