import { Person, counter, str } from "../Person";

function print() {
    let p = new Person("abc", "qpr");
    p.display();
    console.log(counter());
    // console.log(Person.di)
    console.log(str);
}

print();