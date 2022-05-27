"use strict";
exports.__esModule = true;
var message = "yefbdfbfdo";
console.log(message);
var isBeginner = true;
var total = 67;
var name = "Hmm";
var n = null;
var u = undefined;
// total="new total"        -> Error
//array
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//tuple
var person1 = ["sanchit", 23];
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// any
var random = 10;
random = true;
random = "Yeah";
//type inference
// works when initialization done with declaration
var a;
a = 10;
a = true;
var b = 20;
// b=true       -> Error: b is of type number
// union types
var multiTypes;
multiTypes = 10;
multiTypes = true;
// function
function add(num1, num2, num3) {
    if (num2 === void 0) { num2 = 10; }
    if (!num3)
        return num1 + num2;
    return num1 + num2 + num3;
}
console.log(add(5, 5, 5));
console.log(add(5, 5));
console.log(add(5));
function display(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: "Sanchit",
    lastName: "Gupta"
};
display(p);
// class
var Employee = /** @class */ (function () {
    function Employee(employeeName) {
        this.employeeName = employeeName;
    }
    Employee.prototype.greet = function () {
        console.log("hello ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee("sanchit boy");
console.log(emp1.employeeName);
emp1.greet();
