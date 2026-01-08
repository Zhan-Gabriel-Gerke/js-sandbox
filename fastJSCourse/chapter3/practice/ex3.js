const arrayOfNumbers = ["1", "5", "44", '3', "1245"]

const newArrayOfNumbers = []

for (let i = 0; i < arrayOfNumbers.length; i++) {
    let convertedString = parseInt(arrayOfNumbers[i])
    newArrayOfNumbers.push(convertedString)
}
console.log(arrayOfNumbers)
console.log(newArrayOfNumbers)
