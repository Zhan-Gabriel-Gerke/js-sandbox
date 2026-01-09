//1

let someString = "zxcvbnmlkjhgfdsaz"

let testC

function isUnique(str){
    let unuque_dict = []

    for (let letter of str){
        if (unuque_dict.includes(letter)){
            return false
        } else {
            unuque_dict.push(letter)
        }
    }
    return true
}

testC = isUnique(someString)


if (testC){
    console.log("Unique")
} else {
    console.log("Not Unique")

}

//2 

let arr1 = [1, 2, 3, 8]

let arr2 = [4, 5, 6]

function mergeSort(array1, array2){
    let merged_array = [...array1, ...array2]
    merged_array.sort()
    console.log(merged_array)
}

mergeSort(arr1, arr2)

//3

let dummy_array = [1, 2, 3, 4, 5, 6, 7, 8, 5, 6, 88, 44, 33, 55, 55]

function findAllDuplicates(nums) {
    let duplicates = []
    let countDict = {}

    for (let cur_var of nums){
        if (countDict[cur_var]){
            duplicates.push(cur_var)
            countDict[cur_var] += 1
        } else {
            countDict[cur_var] = 1
        }
    }

    console.log(duplicates)
}

findAllDuplicates(dummy_array)

//

const data = ['(', ')', '{', '}', '[', ']']

function isValid(str) {
    const combos = {
        '{': '}',
        '[': ']',
        '(': ')'
    }

    let stack = []

    for (let current_bracket of str) {
        if (stack.length === 0) {
            stack.push(current_bracket)
        } else if (current_bracket in combos){
            stack.push(current_bracket)
        } else {
            let last_value_on_stack = stack[stack.length - 1]
            if (!(last_value_on_stack in combos)) {
                stack.push(current_bracket)
            } else {
                if (combos[last_value_on_stack] === current_bracket) {
                    stack.pop()
                }
            }
        }
    }

    return stack.length === 0
}
