let person = {
    firstname : 'gajanan',
    lastname : 'chilkewar'
}

// Normal assignment to new variabnles
// let fname = person.firstname;
// let lname = person.lastname;

// ES6 destructuring
 let { firstname : fname ,  lastname : lname} = person;

// if name of variables are same in different objects, no need to assign using : as above
 let {firstname, lastname} = person;
 console.log(firstname, lastname);
 console.log(fname, lname);


let prices = [100.23, 34.25, 89.69];
let[p1,p2,p3] = prices;
console.log(prices);