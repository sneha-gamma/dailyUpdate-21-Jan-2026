
enum directions{
    north, east, west, south
}

console.log(directions.north, directions.east, directions.west, directions.south)

let currentDirection = directions.east;

console.log(currentDirection)

interface details{
    name:string,
    age:number,
    isLoggedIn:boolean,
    acc:acctype
}

type acctype = 'SELF'|'SAVING'

const p1:details = {
     name:'anb',
    age:8,
    isLoggedIn:false,
    acc:'SELF'
}

const p:{name:string,age:number, isLoggedIn:boolean,acc:acctype} = {
     name:'anb',
    age:8,
    isLoggedIn:false,
    acc:'SELF'
}

interface bankDetails extends details{
    accNo:number,
    branch:string
}

const p3: bankDetails={
    name:'anbgh',
    age:8,
    isLoggedIn:false,
    acc:'SELF',
    accNo:29837,
    branch:'abc'
}

// function print():never{
//    throw new Error('not found')
   
// }

// print()


// CASTING -> USING as and <> -> process of overriding a type

let x : unknown = '7985'
console.log((x as string).length)
console.log(typeof x)

console.log(( <string>x).length)
console.log(typeof x)