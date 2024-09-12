let number = parseInt(prompt("enter number"))
let romanNumber
// switch (number) {
//     case 1:
//         romanNumber = 'I'
//         break
//     case 2:
//         romanNumber = "II"
//         break
//     case 3: 
//         romanNumber = "III"
//         break 
//     case 4:
//         romanNumber = "IV"
//         break 
//     case 5:
//         romanNumber = "V"
//         break 
//     case 6:
//         romanNumber = "VI"
//         break 
//     case 7:
//         romanNumber = "VII"
//         break 
//     case 8: 
//         romanNumber = "VIII"
//         break 
//     case 9:
//         romanNumber = "IX"
//         break
//         default:
//             console.log("error")
// }


if (number === 1){
    romanNumber = 'I'
}else if(number === 2){
    romanNumber = "II"
}else if(number === 3){
    romanNumber = "III"
}else if(number === 4){
    romanNumber = "IV"
}else if(number === 5){
    romanNumber = "V"
}else if(number === 6){
     romanNumber = "VI"
}else if(number === 7){
    romanNumber = "VII"
}else if(number === 8){
    romanNumber = "VIII"
}else if(number === 9){
    romanNumber = "IX"
}else {
    console.log("error");
}
console.log(`${number} => ${romanNumber}`);

let degree = Number(prompt('enter degree'))
let feel
if(degree < -10){
    feel = "морозно"
}else if (degree > -10 && degree === 0){
    feel = "Очень холодно"
}else if (degree > 0 && degree <= 10){
    feel = 'Холодно'
}else if(degree >= 11 && degree <= 20){
    feel = "Прохладно"
}else if (degree >= 21 && degree <= 25){
    feel = " Облачно"
}else if (degree >= 26 && degree <= 32){
    feel = 'Тепло'
}else if (degree >= 33){
    feel = "Жарко"
}else{
    console.log ("error")
}
console.log (`${degree} это ${feel}`)

// Operators:
// 1. String
// 2. Number
// 3. boolean
// 4. undefined
// 5. null
// 6. object
