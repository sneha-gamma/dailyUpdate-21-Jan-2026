// readonly -> this keyword can prevent to modify an array

// const names: readonly string[] = ['abc']
// names.push('fgh')   // give error

//TUPLES -> typed array with pre-defined length and type for each index



let tuple : [number,boolean,string]
tuple = [2,true,'hi']

tuple.push(false);
console.log(tuple)

