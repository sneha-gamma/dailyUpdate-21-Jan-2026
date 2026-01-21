// function greet(name: string, date: Date){
//     console.log(`Hello ${name}, today is ${date}`)
// }
// greet("madhav");
// function greet(name: string, date: Date){
//     console.log(`Hello ${name}, today is ${date.toDateString()}`)
// }
// greet("madhav", Date());
// function greet(name: string, date: Date){
//     console.log(`Hello ${name}, today is ${date.toDateString()}`)
// }
// greet("madhav", new Date());
function greet(name, date) {
    console.log("Hello ".concat(name, ", today is ").concat(date.toDateString()));
}
greet("abc", new Date());
