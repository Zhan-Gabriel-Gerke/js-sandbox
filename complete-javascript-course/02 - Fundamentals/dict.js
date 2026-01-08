const bio = {
    name: 'james',
    age: 25,
    hobbies: ['one', 'two', 'three'],
    friends: {
        'juan': {
            description: "one+"
        }
    }
}

bio.age = 400




console.log(bio)
console.log(bio.hobbies)
console.log(bio.hobbies[2])

delete bio.age

console.log(bio)


console.log(bio['friends']['juan'])

console.log('joke' in bio)
console.log('name' in bio)