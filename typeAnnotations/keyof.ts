
interface Person{
    name: string,
    age: number
}

function printPersonProperty(person:Person, property: keyof Person){
    console.log(`printing person property${property}:
        ${person[property]}`)
}

let person = {
    name:'max',
    age:7
}

printPersonProperty(person,'age')


type StringMap = {[key:string]: unknown};

function createStringPair(property:keyof StringMap, value:string): StringMap{
    return {[property]:value}
}
console.log(createStringPair('greet','namsate'))


// optional chaining

interface House{
    sqft:number,
    yard?:{
        sqft:number
    }
}

function printYardSize(house:House){
    const yardSize = house.yard?.sqft;

    if(yardSize===undefined){
        console.log('no yard')
    }else{
        console.log(`yard is ${yardSize} sqft`)
    }
 
}

let ghr:House = {
        sqft:500,
        yard:{
            sqft:8
        }
    }

    printYardSize(ghr)


//  nullish coalescing(??)
function printMilage(mileage:number|null|undefined){
    console.log(`mileage: ${mileage??'not available'}`)
}

printMilage(null)
printMilage(undefined)
printMilage(8)


// null assertion(!)

function getValue():string|undefined{
      return 'hello'
}

let value = getValue();
console.log('value length '+ value!.length)

// arrays bounds handling

let arr:number[] = [1,2,3]
let val = arr[4]
console.log(val)