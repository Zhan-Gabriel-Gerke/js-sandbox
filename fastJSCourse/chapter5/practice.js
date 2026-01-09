//1
class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
}

const myRect = new Rectangle(10, 5)

//2

class Circle {
    constructor(radius) {
        this.radius = radius
    }
}

const myCircle = new Circle(4)

//3

class RectangleEx3 {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    getArea() {
        return this.width * this.height
    }
}

const myRectEx3 = new RectangleEx3(10, 5)
console.log(myRectEx3.getArea())

//4

class Animal {
    constructor(species) {
        this.species = species
    }   
}

class Dog extends Animal {
    constructor(species, breed) {
        super(species)
        this.breed = breed
    }
}

const myDog = new Dog("Buddy", "Golden Retriever")
console.log(myDog.species)
console.log(myDog.breed)