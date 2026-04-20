

let w: unknown = null;

w = 'string'
console.log(w)

w = {
    runANotExistentMeth: ()=>{
        console.log('i think therefore i am')
    }
} 

//w.runANotExistentMeth()  // gives an error

if(typeof w === 'object' && w != null){
    ( w as {runANotExistentMeth: Function}
    ).runANotExistentMeth();
}

// TYPE NARROWING WITH UNKNOWN
// we can narrow down the type of an unknown value using type guards

function processValue(value:unknown){
    if(typeof value === 'string'){
        console.log(value.toUpperCase())
    } else if(Array.isArray(value)){
        console.log(value.length)
    }
    else{
        console.log(value );
    }
}

processValue(9)

const input = null
const value = input ?? 'default'

console.log(value)