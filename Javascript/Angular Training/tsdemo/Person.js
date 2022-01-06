"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name, city) {
        this.name = name;
        this.city = city;
        this.name = name;
        this.city = city;
    }
    Person.prototype.display = function () {
        console.log(this.name + " " + this.city);
    };
    return Person;
}());
exports.Person = Person;
function counter() {
    return 10;
}
exports.counter = counter;
exports.str = "CONSTANT STRING";
var p1 = new Person('sha');
// p1.setDetails('sha', 'mum');
p1.display();
// console.log(p1.name);
