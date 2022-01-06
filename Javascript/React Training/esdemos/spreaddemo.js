//spread operator
//unpack the element
let a = [10,20];
let n1 = [10,20,30];
let n2 = [10,20,30];
let n3 = [500];
let x = [1,n1];
let s = [...n1,...n2];
console.log(x);
console.log(s);

function add (a,b) {
    console.log(a+b);
}

add(...a);

let [v1,v2] = [...n1];
console.log(v1,v2);

let [v3,v4] = [...n3];
console.log(v3,v4);