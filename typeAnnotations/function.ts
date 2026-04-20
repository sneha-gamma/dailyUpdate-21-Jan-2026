
// let add:(x:number,y:number)=>number

// add = function(x,y){
//     return x+y
// }

// console.log(add(4,5))

// rest arguments

function getTotal(...values:number[]) :number{
    const ans = values.reduce((acc,num)=>acc+num,0);
    return ans;
}

console.log(getTotal(10,20,30,40));

// function overloading

function add(a:number, b:number): number;
function add(a:string,b:string): string;

function add(a:unknown,b:unknown):unknown{
    if(typeof a === 'number' && typeof b === 'number'){
        return a+b;
    }else if(typeof a === 'string' &&  typeof b === 'string'){
        return a+b;
    }
    throw new Error('invalid arguments');
}

console.log(add(3,4))
console.log(add('hi',"hello"))




