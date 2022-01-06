console.log("hello");

// variable : dataType = assigned value
let no:number = 10; // syntax of explixitly assigning the type to a variable. Without this also ts declers the type it self. And if we try to assign value of different type to it, it'll give compile time exception, bus still it generates js. However it's not good practice
let nos:number[] = [1,2,3,4];
nos.push(10);
//nos.push("Hi"); not allowed, as type of nos is array of number

for(let num in nos) {

    console.log("Index - " + num + " : value - "+ nos[num]);
}

for(let num of nos) {

    console.log(num);
}

// function functionName(variable : type, variable : type = default value) : return value
function maxNumnber(n1 : number, n2 : number = 10) : number {
// If we are assigning default values to any parameter, make it as last parameter. That is best practice
    return n1 > n2 ? n1 : n2;
}

// ? - optional, i.e. passing argument to the function while invoking the function is optional
function print(n1 ? : number) {

    console.log(n1);
}

console.log(maxNumnber(10,5));
console.log(maxNumnber(5));

console.log(print());
console.log(print(5));