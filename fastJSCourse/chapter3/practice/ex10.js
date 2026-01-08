const grades_array = [
    { subject: 'marhs', score: 90 },
    { subject: 'english', score: 85 },
    { subject: 'science', score: 915 },
    { subject: 'math', score: 80 },
]

function sortByGrade(arr) {
    let sorted_array = grades_array.sort(function (a, b) {
        return b.score - a.score
    })

    console.log(sorted_array)
}

sortByGrade(grades_array)