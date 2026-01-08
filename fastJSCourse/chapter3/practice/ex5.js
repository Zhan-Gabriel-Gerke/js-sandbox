let demo_array = [0, 1 ,2, 3, 4, 5]

function trimArray(arr) {
    let new_array = []
    for (i = 1; i < arr.length - 1; i++){
        new_array.push(arr[i])
    }
    console.log(new_array)
}

trimArray(demo_array)

function trimArrayV2(arr){
    const trimmedArray = arr.slice(1, arr.length - 1)
    console.log(trimmedArray)
}

trimArrayV2(demo_array)

