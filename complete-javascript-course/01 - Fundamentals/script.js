// let js = "amazing";
// if (js === "amazing") alert("JS is FUN!")
//
// console.log(40 + 8 + 23 - 10);
//
//
// const inputYear = "1991";
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);
//
// const age = 18;
// if (age === 18) console.log("You just became an adult")
//
// let favourite = prompt("What's your favourite number?")
//
// console.log(favourite)
//
// let scoreDolphins = (96 + 108 + 89) / 3
// let scoreKoalas = (88 + 91 + 110) / 3
//
// if (scoreDolphins === scoreKoalas){
//     console.log("Both win the trophy")
// }else if (scoreDolphins > scoreKoalas){
//     console.log("Dolphins win the trophy")
// }else{
//     console.log("Both win the trophy")
// }


const day = 'monday';

switch (day){
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');

}



const age = 15;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');


const drink = age >= 18 ? "Wine" : "Water";
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = "Wine";
} else {
    drink2 = "Water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "Wine" : "Water"}`)



const bill = 275;


let tip = 50 < bill < 300 ? bill * 0.15 : bill * 0.2

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)