// let add:(x:number,y:number)=>number
// add = function(x,y){
//     return x+y
// }
// console.log(add(4,5))
// rest arguments
function getTotal() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var ans = values.reduce(function (acc, num) { return acc + num; }, 0);
    return ans;
}
console.log(getTotal(10, 20, 30, 40));
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('invalid arguments');
}
console.log(add(3, 4));
console.log(add('hi', "hello"));
