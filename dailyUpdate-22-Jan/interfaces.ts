//interface define the contract within our code

// function getFullName(person:{
//     firstName: string;
//     lastName: string
// }){
//     return `${person.firstName} ${person.lastName}`;
// }

// let person = {
//     firstName: "sneha",
//     lastName: 'bhagat'
// };

// console.log(getFullName(person));

//destructuring 
function getFullName({firstName, lastName} : Person){
    return `${firstName} ${lastName}`
}

let jane = {
    firstName: 'John',
    lastName: 
}