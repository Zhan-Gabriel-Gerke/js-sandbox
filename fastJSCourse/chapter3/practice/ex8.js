let student = {
    chemistry: {
        grade : 9
    },
    physics: {
        grade : 7
    }
}


function findAverageGrade(students_object) {

    let totalGrade = 0;
    let numberOfSubjects = 0;

    let keys = Object.keys(students_object);

    for (let i = 0; i < keys.length; i++) {
        let currentSubject = keys[i];

        totalGrade += students_object[currentSubject].grade
        numberOfSubjects++
    }

    console.log(totalGrade / numberOfSubjects)
}

findAverageGrade(student);