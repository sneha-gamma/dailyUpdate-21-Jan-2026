 
 
 // functions generics

// function oneArg<t> (arg:t):t{
//     return arg;
// }

// console.log(oneArg<string>('abc'))
// console.log(oneArg<number>(8))

// function arrayArg<t>(arr:t[]):void{
//     for(const x of arr){
//         console.log(x)
//     }
// }


// let e1:number[] = [12,23,4,5];
// console.log(arrayArg(e1))

// function mergeArray<t,u>(arr1:t[],arr2:u[]):(t|u)[]{
//     return[...arr1,...arr2];
// }

// const num:number[]=[1,2,3];
// const word:string[]=['1','2','3'];

// const finalans:(number|string)[] = mergeArray(num,word)
// console.log(finalans)


// GENERIC CLASSES


// class Box<t>{
//     private value:t;

//     constructor(value:t){
//         this.value = value;
//     }

//     setValue(val:t):t{
//        return this.value = val
//     }

//     getValue():t{
//         return this.value
//     }
// }

// let box = new Box<number>(43)
// console.log(box.getValue())
// box.setValue(23);
// console.log(box.getValue())

// let box1 = new Box<string>('abb')
// console.log(box1.getValue())
// box1.setValue('anj');
// console.log(box1.getValue())


// GENERIC WITH INTERFACE

// interface Pair<t,u>{
//     first:t,
//     second:u
// }

// let pair:Pair<number,string>={first:1,second:'two'}
// console.log(pair)

// GENERIC CONSTRAINTS WITH keyof

// function getProperty<t,k extends keyof t>(obj:t,key:k): t[k]{
//       return obj[key]
// }

// let person = {name:'john',islogged:false}
// console.log(getProperty(person,'name'))
// console.log(getProperty(person,'islogged'))

// Generic Constraints

function mergeObj<T extends object,U extends object> (obj1:T,obj2:U) {
    return {
        ...obj1,
        ...obj2}
}

const person = mergeObj(
    {name:'abc'},
    {age:'abcd'}
)

console.log(person)


