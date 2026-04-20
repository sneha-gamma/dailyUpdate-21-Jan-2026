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
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.describe = function () {
        return "This is ".concat(this.firstName, " ").concat(this.lastName, ".");
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastname, jobTittle) {
        var _this = _super.call(this, firstName, lastname) || this;
        _this.jobTittle = jobTittle;
        return _this;
    }
    Employee.prototype.describe = function () {
        return _super.prototype.describe.call(this) + " I'm ".concat(this.jobTittle, ".");
    };
    Object.defineProperty(Employee.prototype, "JobTittle", {
        get: function () {
            return this.jobTittle;
        },
        set: function (tittle) {
            this.jobTittle = tittle;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}(Person));
var e1 = new Employee('Sneha', 'Bhagat', 'Software Engg');
console.log(e1.getFullName());
console.log(e1.describe());
console.log(e1.JobTittle);
