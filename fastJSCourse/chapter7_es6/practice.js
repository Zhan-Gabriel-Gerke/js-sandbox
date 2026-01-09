//1 

let name = "gregothy"
let special_string = `Hello my name is ${name}`
console.log(special_string)

//2 

function add(a, b) {
    return a + b;
}

let add_arrow = (a, b) => { return a + b }

console.log(add_arrow(2, 3))

//3 

const person = {
    name: 'Bob',
    age: 25
}

const { nameEx3, age } = person;

//4 

const colors_array = ['red', 'green', 'blue']
const [firstColor, secondColor, thirdColor] = colors_array

//5
let arr1 = [1, 2, 3]

let arr2 = [4, 5, 6]

let arr3 = [...arr1, ...arr2]

//6

let object1 = { a: 1, b: 2 }
let object2 = { c: 3, d: 4 }

let combinedObject = {
    ...object1,
    ...object2
}

//7

let objectOptional = { a: 1, b: 2, c: { d: 4 } }

console.log(objectOptional?.c?.d)

//8

/*class Person {
    constructor(name, greeting = 'Hello') {
        this.name = name;
        this.greeting = greeting;
    }

    greet() {
        console.log(this.greeting + ', ' + this.name);
    }
}*/

const greet = (name, greeting = 'Hello') => {
    console.log(`${greeting}, ${name}`);
}

greet('james', 'ni hao')


//10

let new_array = [1, 2, 3, 4, 5]

/*new_array.forEach((num) => {
    console.log(num)
})*/

for (let num of new_array) {
    console.log(num)
}

//11
let original_array = [1, 2, 3, 5, 7, 33, 66, 89]
let squared_array = original_array.map((number) => {
    return number * number
})

//12

let cur_age = 14

let ageStatus = cur_age >= 18 ? 'adult' : 'minor'

//13

let isLoggedIn = true

const logMessage = () => { console.log("logged in") }

if (isLoggedIn) {
    logMessage()
}

//or 

isLoggedIn && logMessage()

//14

const user = {
    name: null,
    age: 30
}

let userName = user.name || 'guest'