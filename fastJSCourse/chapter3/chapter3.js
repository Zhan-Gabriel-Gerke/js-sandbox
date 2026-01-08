const { addString, exampleArray } = require('./chapter2')

addString('JavaScript', 'JavaScript')

const brokenObject = {
    word: 'JavaScript'
}
//
// try{
//     console.log("Attempting to insert a new word")
//     const sub_object = brokenObject.g.word
//     console.log(sub_object)
// } catch(e){
//     console.log(e.message)
// }

try{
    throw new Error("Custom Error")
} catch (error) {
    console.log(error.message)
}