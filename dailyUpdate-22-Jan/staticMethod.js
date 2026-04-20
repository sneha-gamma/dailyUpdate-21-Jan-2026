// statics variable -> shared among all instances of a class
var Employee = /** @class */ (function () {
    function Employee(name, tittle, salary) {
        this.name = name;
        this.tittle = tittle;
        this.salary = salary;
        Employee.count++;
    }
    Employee.count = 0;
    return Employee;
}());
var e1 = new Employee('Jyoti', 'Software engg', 8976894);
var e2 = new Employee('John', 'Software engg', 89894);
var e3 = new Employee('Nick', 'Aerospace engg', 86894);
console.log(Employee.count);
