
// utility -> ts provide utility type that help transform or manipulate types more flexible

// 1) PARTIAL -> changes all the properties in an obj to be optional

interface Point{
    x:number,
    y:number
}

let pointPart: Partial<Point> = {};
pointPart.x = 10;
console.log(pointPart)

// 2) REQUIRED -> changes all properties in an object to be required

interface car{
    make:string,
    model:string;
    mileage?:number;
}

type RequiredCar = Required<car>
let myCar: RequiredCar = {
    make:'ford',
    model:'focus',
    mileage:1200
}
console.log(myCar)
 
// 3) record -> defining an object type with a specific key type and value type

const details: Record<string,number> = {
    'alice':30,
    'bob':25,
    'charlie':24
}

console.log(details)

type Roles = 'admin'|'user'|'guest'
const userRole: Record<Roles, boolean> = {
    admin:true,
    user:false,
    guest:true
}
console.log(userRole)


// 4) omit -> removes keys from an object type

interface Person{
    name:string,
    age:number,
    location?:string
}

const p1: Omit<Person,'name'|'location'> = {
    age:23,
    //name:'abc'
}

const p2: Person = {
    name:'abc',
    age:120
}

// 5) pick -> remove all but specified key are remaining

const p3: Pick<Person,'location'|'age'> = {
  location:'mk',
  age:98
}

// 6) exclude -> removes types from a union 

type jobs = 'full-time'|'part-time'|'contract'
type val= Exclude<jobs,'full-time'> 
const job :val = 'part-time'
console.log(typeof job)

// 7) extract -> extract type from union

type etractedJob = Extract<jobs,'part-time'|'contract'>
const job1 :val = 'part-time'
console.log(typeof job1)

// 7) ReturnType -> extracts returnType ofa function type

type PointGenerator = ()=>{x:number,y:number}
const point: ReturnType<PointGenerator> = {
    x:10,
    y:20
}
console.log(point)
console.log(typeof point)


// 8) Parameters -> it extract the parameter type of a funtion type as an array

type PointPrinter = (p:{x:number,y:number})=>void
const point1: Parameters<PointPrinter>[0]={
    x:180,
    y:250
}
console.log( point1)
console.log(typeof point1)

// const print:PointPrinter = (p:{x:20,y:90})=>{
//     console.log( p)
// }

// print()

// 9) Readonly -> cant modify the type 

interface Animal{
    name:string,
    age:number
}

const a1: Readonly<Animal> = {
    name:'lion',
    age:50
}
//a1.name = 'tiger';
console.log(a1)

// 11) NonNullable -> removes null and undefined from given type t

type User={
    id:number;
    name:string|null;
    num:undefined
}

type NonNullableUser = NonNullable<User>;

const u1: NonNullableUser={
    id:9,
    name:null,
    num:undefined
}
console.log(u1)

