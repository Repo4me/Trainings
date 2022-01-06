export class Person {
    constructor(private name : string, public city ?) {
        this.name = name;
        this.city = city;
    }

    display() {
        console.log(this.name + " " + this.city);
    }
}

export function counter() {
    return 10;
}

export const str = "CONSTANT STRING";

let p1 = new Person('sha');

// p1.setDetails('sha', 'mum');
p1.display();
// console.log(p1.name);