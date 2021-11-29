// -- отримує текст з параграфа з id "content"
let www =document.getElementById('content');
console.log(www)

// -- отримує текст з блоку з id "rules"

let zzz =document.getElementById('rules');
console.log(zzz)

// -- замініть текст параграфа з id 'content' на будь-який інший
// -- замініть текст параграфа з id 'rules' на будь-який інший

www.innerText='Hello Menthor'
zzz.innerText='Hi Guys'

// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій

www.style.color='firebrick'
zzz.style.color='blue'

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

zzz.children
console.log(zzz)

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let yyy= document.getElementsByClassName('fc_rules')
for (const yyyElement of yyy) {
    yyyElement.style.color='red'

}


