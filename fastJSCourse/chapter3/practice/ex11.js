let array_of_short_strings = ['hello', 'world', 'js', 'is', 'fun', 'programming', 'code', 'chatgpt', 'openai', 'developer'];

function sortOfShortStrings(arr) {
    newArray = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 5 || arr[i].length === 5) {
            newArray.push(arr[i])
        }
    }

    console.log(newArray)
}


sortOfShortStrings(array_of_short_strings);