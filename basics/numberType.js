// // number example
// let Price : number = 10;
// let price = 9.95;
// let type: string = "mernTeam Member";
// let active : boolean = true;
// console.log(Price);
// console.log(price);
// console.log(type);
// console.log(active);
// // bigint
// // let big: bigint = 9007199254740991n;
// // console.log(big);
// // Arrays
// let members: string[] = ['Jon', 'Mary', 'Nick'];
// console.log(members)
// //Objects
// let animal :{
//     name: string,
//     age: number
// };
// animal = {
//      name: 'Lion',
//      age: 40
// };
// console.log(animal);
// //function argument and return type
// let greet : (name : string) => string;
// greet = function(name: string){
//     return `Hi ${name}`
// }
// console.log(greet('sneha'));
// // array types and methods
// let cities : string[] = [];
// cities[0] = 'Gwalior';
// cities[1] = 'Indore';
// cities.push('Kochi');
// console.log(cities);
// console.log(cities.length);
// let series = [2,4,8];
// let tripleIt = series.map(e =>  e*3);
// console.log(series);
// let scores : (string | number)[];
// scores = ['maths', 90, 'english', 95 ];
// union types
// function add(a : number| string , b: number| string){
//   if(typeof a === 'number' && b === 'number'){
//     return a+b;
//   }
//   if(typeof a === 'string' && b === 'string'){
//     return a.concat(b);
//   }
//   throw new Error('Plz provide valid parameter');
// }
// console.log(add('sneha', 6));
//tuples
var bgcolor, headercolor;
bgcolor = [0];
headercolor = [255, 255];
console.log(bgcolor);
console.log(headercolor);
//enum
var Day;
(function (Day) {
    Day[Day["Sunday"] = 0] = "Sunday";
    Day[Day["Monday"] = 1] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
    Day[Day["Wednesday"] = 3] = "Wednesday";
    Day[Day["Thursday"] = 4] = "Thursday";
    Day[Day["Friday"] = 5] = "Friday";
    Day[Day["Saturday"] = 6] = "Saturday";
})(Day || (Day = {}));
;
function isItWeekend(day) {
    var isWeekend;
    switch (day) {
        case Day.Saturday:
        case Day.Sunday:
            isWeekend = true;
        default:
            isWeekend = false;
    }
    return isWeekend;
}
console.log(isItWeekend(Day.Saturday));
