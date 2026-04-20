// utility -> ts provide utility type that help transform or manipulate types more flexible
var pointPart = {};
pointPart.x = 10;
console.log(pointPart);
var myCar = {
    make: 'ford',
    model: 'focus',
    mileage: 1200
};
console.log(myCar);
// 3) record -> defining an object type with a specific key type and value type
var details = {
    'alice': 30,
    'bob': 25,
    'charlie': 24
};
console.log(details);
var userRole = {
    admin: true,
    user: false,
    guest: true
};
console.log(userRole);
var p1 = {
    age: 23,
    //name:'abc'
};
var p2 = {
    name: 'abc',
    age: 120
};
// 5) pick -> remove all but specified key are remaining
var p3 = {
    location: 'mk',
    age: 98
};
var job = 'part-time';
console.log(typeof job);
var job1 = 'part-time';
console.log(typeof job1);
var point = {
    x: 10,
    y: 20
};
console.log(point);
console.log(typeof point);
var point1 = {
    x: 180,
    y: 250
};
console.log(point1);
console.log(typeof point1);
var a1 = {
    name: 'lion',
    age: 50
};
//a1.name = 'tiger';
console.log(a1);
var u1 = {
    id: 9,
    name: null,
    num: undefined
};
console.log(u1);
