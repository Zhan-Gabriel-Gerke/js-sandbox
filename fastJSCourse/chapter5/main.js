//oop

const me = {
    name: "John",
    age: 30,
}


class Person {
    //class body
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log("Hellom my name is " + this.name)
    }

}

const you = new Person("James", 25)
const them = new Person("Alice", 28)

console.log(you.age)
console.log(them)

them.greet()
you.greet()


class Gamer extends Person {
    constructor (name, age, game){
        super (name, age)
        this.videogame = game
    }
}

const nerdyGuy = new Gamer ("Bob", 20, "Minecraft")
console.log(nerdyGuy)

class MyClass {
    constructor(name) {
        this._name = name
    }

    get name() {
        console.log("Getting name...")
        return this._name
    }

    set name(newName) {
        this._name = newName
    }

}


const obj = new MyClass("name1")

console.log (obj.name)

obj.name = "name2"
console.log (obj.name)