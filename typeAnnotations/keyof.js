function printPersonProperty(person, property) {
    console.log("printing person property".concat(property, ":\n        ").concat(person[property]));
}
var person = {
    name: 'max',
    age: 7
};
printPersonProperty(person, 'age');
function createStringPair(property, value) {
    var _a;
    return _a = {}, _a[property] = value, _a;
}
console.log(createStringPair('greet', 'namsate'));
function printYardSize(house) {
    var _a;
    var yardSize = (_a = house.yard) === null || _a === void 0 ? void 0 : _a.sqft;
    if (yardSize === undefined) {
        console.log('no yard');
    }
    else {
        console.log("yard is ".concat(yardSize, " sqft"));
    }
}
var ghr = {
    sqft: 500,
    yard: {
        sqft: 8
    }
};
printYardSize(ghr);
//  nullish coalescing(??)
function printMilage(mileage) {
    console.log("mileage: ".concat(mileage !== null && mileage !== void 0 ? mileage : 'not available'));
}
printMilage(null);
printMilage(undefined);
printMilage(8);
// null assertion(!)
function getValue() {
    return 'hello';
}
var value = getValue();
console.log('value length ' + value.length);
// arrays bounds handling
var arr = [1, 2, 3];
var val = arr[4];
console.log(val);
