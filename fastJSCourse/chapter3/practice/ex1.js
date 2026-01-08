const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function isEven(arrayOfNumbers) {
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] % 2 !== 0){
            console.log(arrayOfNumbers[i])
        }
    }
}

isEven(numArray)