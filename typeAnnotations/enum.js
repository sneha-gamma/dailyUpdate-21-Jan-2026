var directions;
(function (directions) {
    directions[directions["north"] = 0] = "north";
    directions[directions["east"] = 1] = "east";
    directions[directions["west"] = 2] = "west";
    directions[directions["south"] = 3] = "south";
})(directions || (directions = {}));
console.log(directions.north, directions.east, directions.west, directions.south);
var currentDirection = directions.east;
console.log(currentDirection);
var p1 = {
    name: 'anb',
    age: 8,
    isLoggedIn: false,
    acc: 'SELF'
};
var p = {
    name: 'anb',
    age: 8,
    isLoggedIn: false,
    acc: 'SELF'
};
var p3 = {
    name: 'anbgh',
    age: 8,
    isLoggedIn: false,
    acc: 'SELF',
    accNo: 29837,
    branch: 'abc'
};
// function print():never{
//    throw new Error('not found')
// }
// print()
// CASTING -> USING as -> process of overriding a type
var x = 7985;
console.log(x.length);
console.log(typeof x);
