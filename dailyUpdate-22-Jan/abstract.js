var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    ;
    Object.defineProperty(Employee.prototype, "fullname", {
        get: function () {
            return "".concat(this.firstname, " ").concat(this.lastname);
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.compensationStatement = function () {
        return "".concat(this.fullname, " makes ").concat(this.getSalary(), " a month");
    };
    return Employee;
}());
var fullTimeEmp = /** @class */ (function (_super) {
    __extends(fullTimeEmp, _super);
    function fullTimeEmp(firstname, lastname, salary) {
        var _this = _super.call(this, firstname, lastname) || this;
        _this.salary = salary;
        return _this;
    }
    fullTimeEmp.prototype.getSalary = function () {
        return this.salary;
    };
    return fullTimeEmp;
}(Employee));
var f1 = new fullTimeEmp('Aarav', 'Oberoi', 24687754);
console.log(f1.compensationStatement());
