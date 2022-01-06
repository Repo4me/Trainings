"use strict";
exports.__esModule = true;
var Person_1 = require("../Person");
function print() {
    var p = new Person_1.Person("abc", "qpr");
    p.display();
    console.log(Person_1.counter());
    // console.log(Person.di)
    console.log(Person_1.str);
}
print();
