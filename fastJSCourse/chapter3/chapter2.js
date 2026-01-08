function addString(string1 = "default", string2 = "default2"){
    let concatString = string1 + ' ' + string2
    console.log(concatString)
    return concatString
}

let exampleArray = [1, 2, 3, 4, 5, 6]

let newString = addString("hello", "hello2")
console.log(newString)

module.exports = {
    addString,
    exampleArray
}