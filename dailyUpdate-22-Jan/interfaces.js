//interface define the contract within our code
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: "sneha",
    lastName: 'bhagat'
};
console.log(getFullName(person));
