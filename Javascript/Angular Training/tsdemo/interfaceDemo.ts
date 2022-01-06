interface Employee {
    name : string,
    city : string
}

function setDetails(employee : Employee) {
    console.log(`Name : ${employee.name} - city : ${employee.city}`);
}

setDetails({"name":"gajanan", "city":"pune"});

// setDetails("abc"); // gives error as ir expects object of Employee in json format