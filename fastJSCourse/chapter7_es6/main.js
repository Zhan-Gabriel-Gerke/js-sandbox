// arrow functions 

//regular function
function add(a, b) {
    return a + b;
}

//arrow function

const addArrow = (a, b) => a + b;

// ternary operator

let programingLanguages = ['javascript', 'python', 'ruby'];

let isProgramingLanguageInList = programingLanguages.includes('javascript') ? true : false;

// regular function

let isLanguageInList

if (programingLanguages.includes('javascript')) {
    isLanguageInList = true;
} else {
    isLanguageInList = false;
}

// optional chaining

const james = {
    hobbies: {
        pairs_of_skis: 1
    }
}

console.log(james?.['hobbies']?.football?.pairs_of_skis)


//object destructuring


let person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
}

const { name, age, city } = person;

console.log(name, age, city);

//array destructuring

let colors = ['red', 'green', 'blue'];

const [firstColor, secondColor, thirdColor] = colors;

//template literals

let myName = 'James'

console.log('Hello, my name is' + myName);

console.log(`Hello, my name is ${myName}`);

//short circuiting && ||

let person_dict = { name: 'Bob' }

let person_name_2 = person_dict.name && 'jonny' // if person_dict.name == 'jonny it will return true

if (person_dict.name) {
    person_name_2 = 'jonny'
} 

let person_name_3 = person_dict.name || 'default name'

// enhanced object literals

let breed = 'corgi'
let animal = 'dog'

const animal_info = {
    breed: breed,
    animal: animal,
}

//spread operator ...
let demo_array = [1, 2, 3, 4, 5]
let demo_array_2 = [...demo_array, 6, 7, 8]

let demo_object = {
    favorite_color: 'blue',
    favorite_food: 'cookies and cream icecream'
}

let new_object = {
    ...demo_object
}

//array methods

let my_cool_array = [8, 3, 93, 3, 123, 2, 34, 5, 6, 6]

// for each

my_cool_array.forEach((current_value, current_index) => {
    console.log(`The current value is: ${current_value} and the current index is: ${current_index}`)
})

//map 
let my_new_array = my_cool_array.map((current_value) => {
    return current_value * 2
})

console.log(my_new_array)

//filter

let filtered_array = my_cool_array.filter((curr, curr_index) => {
    let is_even = curr % 2 === 0
    return !is_even
})

console.log(filtered_array)

//reduce 
let reduced_array = my_cool_array.reduce((accumilator, current_value, current_index) => {
    return accumilator + `,${current_value}:${current_index}`
}, '1')

console.log(reduced_array)