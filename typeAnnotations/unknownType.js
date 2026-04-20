var w = null;
w = 'string';
console.log(w);
w = {
    runANotExistentMeth: function () {
        console.log('i think therefore i am');
    }
};
//w.runANotExistentMeth()  // gives an error
if (typeof w === 'object' && w != null) {
    w.runANotExistentMeth();
}
// TYPE NARROWING WITH UNKNOWN
// we can narrow down the type of an unknown value using type guards
function processValue(value) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
    else if (Array.isArray(value)) {
        console.log(value.length);
    }
    else {
        console.log(value);
    }
}
processValue(9);
var input = null;
var value = input;
console.log(value);
