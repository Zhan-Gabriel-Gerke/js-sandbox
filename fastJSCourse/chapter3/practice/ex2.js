const names_and_ages = [
    {
        name: 'John',
        age: 4
    },
    {
        name: 'John1',
        age: 5
    },
    {
        name: 'John2',
        age: 6
    },
    {
        name: 'John3',
        age: 9
    }
]

function whoIsOlder (arrayObject) {
    let theOldest = 0

    for (let i = 0; i < arrayObject.length; i++) {
        if (theOldest < arrayObject[i].age){
            theOldest = arrayObject[i].age
        }
    }

    console.log(theOldest)
}

whoIsOlder(names_and_ages)