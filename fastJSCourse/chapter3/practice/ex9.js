 function inception() {
    let number_of_invocations = 0;

    return function() {
        number_of_invocations++

        console.log(number_of_invocations)
    }
 }

 const incementer = inception()

    incementer() // 1
    incementer() // 2
    incementer() // 3
    incementer() // 4