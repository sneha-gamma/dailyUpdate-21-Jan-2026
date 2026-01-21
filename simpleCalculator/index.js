var operators;
(function (operators) {
    operators[operators["Multiply"] = 0] = "Multiply";
    operators[operators["Add"] = 1] = "Add";
    operators[operators["Subtract"] = 2] = "Subtract";
    operators[operators["Divide"] = 3] = "Divide";
})(operators || (operators = {}));
;
var calculator = function (a, b, op) {
    switch (op) {
        case operators.Multiply:
            return a * b;
            break;
        case operators.Add:
            return a + b;
        case operators.Subtract:
            return a - b;
        case operators.Divide:
            if (b == 0) {
                throw new Error('Denominator can not be zero ...enter something else');
            }
            else {
                return a / b;
            }
        default:
            throw new Error("invalid Input");
            break;
    }
};
console.log(calculator(5, 0, operators.Divide));
