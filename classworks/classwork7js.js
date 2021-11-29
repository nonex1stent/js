// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function car(model, manufacturer, year, maxspeed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxspeed = maxspeed;
    this.engine = engine;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    };
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        console.log(this.maxspeed = this.maxspeed + newSpeed)
    };
    this.changeYear = function (newValue) {
        console.log(this.year = newValue)
    };
    this.addDriver = function (driver) {
        console.log(this.driver = driver);
    };

}

let newcar = new car('chevrolet', 'America', 2007, 300, 3.0);
newcar.drive()
newcar.info()
newcar.increaseMaxSpeed(100)
newcar.changeYear(2012)
newcar.addDriver('Водій')
console.log(newcar)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class car2 {
    constructor(model, manufacturer, year, maxspeed, engine){
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.engine = engine;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
        };
        this.info = function () {
            for (const key in this) {
                if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
            }
        };
        this.increaseMaxSpeed = function (newSpeed) {
            console.log(this.maxspeed = this.maxspeed + newSpeed)
        };
        this.changeYear = function (newValue) {
            console.log(this.year = newValue)
        };
        this.addDriver = function (driver) {
            console.log(this.driver = driver);
        };


    }
}

let newcar2 = new car2('chevrolet', 'America', 2007, 300, 3.0);
newcar2.drive()
newcar2.info()
newcar2.increaseMaxSpeed(100)
newcar2.changeYear(2012)
newcar2.addDriver('Водій')
console.log(newcar2)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


function popelushka (name,age,legsize){
    this.name = name;
    this.age = age;
    this.legsize = legsize;
}


let array = [new popelushka('Katya',18, 35),
    new popelushka('Vika',18, 37),
    new popelushka('Nastya',18, 38),
    new popelushka('Yana',18, 39),
    new popelushka('Kristya',18, 39),
    new popelushka('Yulya',18, 40),
    new popelushka('Alina',18, 36),
    new popelushka('Katya',18, 34),
    new popelushka('Tanya',18, 37),
    new popelushka('Evelina',19, 41),]

class princee{
    constructor(name,age,shoesWhichHeFind) {
        this.name = name;
        this.age = age;
        this.shoesWhichHeFind = shoesWhichHeFind;
    }
}
let prince = new princee('Yaroslav',24,36)


for (const string of array) {
    if (string.legsize === 36) {
        console.log('Popelushka 7(Sofia) has to be with a prince')
    }
}

let findpopelushka = array.find((item) => item.legsize === 36);
console.log(findpopelushka)