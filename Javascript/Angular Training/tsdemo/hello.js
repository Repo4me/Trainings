console.log("hello");
var no = 10; // syntax of explixitly assigning the type to a variable. Without this also ts declers the type it self. And if we try to assign value of different type to it, it'll give compile time exception, bus still it generates js. However it's not good practice
var nos = [1, 2, 3, 4];
nos.push(10);
//nos.push("Hi"); not allowed, as type of nos is array of number
for (var num in nos)
    console.log(num);
