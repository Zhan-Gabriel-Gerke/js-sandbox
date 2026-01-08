// 'use strict';
//
//
// let hasDriverLicense = false;
// const passTest = true;
//
// if (passTest) hasDriverLicense = true
// if (hasDriverLicense) console.log('I can drive')
//
// const calc = function (intt) {
//     return 2000 - intt;
// }
// const calcAge = calc(111);
//
// console.log(calcAge);
//
// const yearsUntilRetirement = function (birtYear, firstName){
//     const age = 2025 - birtYear;
//     const retirement = 65 - age;
//
//     if (retirement > 0){
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//
//     } else {
//         console.log(`${firstName} has already retired`)
//         return -1;
//
//     }
// }
//
//

// let calcAverage = (first, second, third) => (first + second + third) / 3;
//
// console.log(calcAverage(44, 23, 71));
//
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
//
// console.log(scoreDolphins, scoreKoalas);
//
// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
//     } else if (avgKoalas >= 2 * avgDolphins){
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
//     } else {
//         console.log('No team wins...');
//     }
// }
//
// checkWinner(scoreDolphins, scoreKoalas);

// function calcTip(bill) {
//     if (50 <= bill && bill <= 300){
//         return bill * 0.15
//     } else {
//         return bill * 0.2
//     }
// }
//
// let bills = [125, 555, 44]
// let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
//
//
// console.log(bills)
// console.log(tips)


//BMI = mass / (height * height)

// let mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI : function () {
//         this.bmi = this.mass / (this.height * this.height)
//         return this.bmi;
//     }
// }
//
// let john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI : function () {
//         this.bmi = this.mass / (this.height * this.height)
//         return this.bmi;
//     }
// }
//
// mark.calcBMI();
// john.calcBMI();
//
// if (mark.bmi > john.bmi){
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// }else {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// }

// for (let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}`)
// }

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
//
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const tips = []
// const totals = []
//
// for (let i = 0; i < bills.length; i++){
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
//     console.log(`The bill was ${bills[i]}, the tip was ${tip}, and the total value ${tip + bills[i]}`)
//     console.log(i)
// }


