// 1) mapped type -> allow us to create new type by transforming properties
// of existing type
// type flags<t> = {
//     [k in keyof t]:boolean;
// }
// interface user{
//     id:number,
//     name:string,
//     email:strings
// }
// type userflag = flags<user>
// const Userflag: userflag = {
//     id:false,
//     name:true,
//     email:true,
// }
// const User:user = {
//     id: 9,
//     name: 'nick',
//     email:'abc234',
// }
// type Features = {
//     darkmode:()=>void,
//     newuserprofile:()=>void
// };
// type featureOptions = flags<Features>;
// const mode:featureOptions = {
//     darkmode: false,
//     newuserprofile: true
// }
// interface todo{
//     title:string,
//     description: string,
//     completed:boolean
// }
// type optionalTodo = {
//     [k in keyof todo]?: todo[k]
// }
// type concrete<t> = {
//     -readonly [k in keyof t]-?: t[k]
// }
// type ReadonlyRequired<t> = {
//     +readonly [k in keyof t]-?:t[k]
// }
// // type extractPii<type> = {
// //     [property in keyof type]: type[property] extends {pii:true}?true:false;
// // };
// // type dbfields = {
// //     id:{format:'incrementing'};
// //     name:{type:string, pii:true};
// // }
// type IsString<t> = t extends string ? true:false
// type A = IsString<string>
// type B = IsString<number>
// type C = IsString<'hello'>
// type D = IsString<string|number>
// type ArrayElement<t> = t extends (infer u)[]?u:never
// type numbers = ArrayElement<number[]>
// type greeting = `hello ${string}`
// const validGreeting: greeting  = 'hello world'
// type color = 'red'| 'black' | 'blue'
// type size = 'small'|'medium'
var z = 'not null';
z !== null && z !== void 0 ? z : (z = 'default value');
console.log(z);
