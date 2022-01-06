//pack all elements into an array
//REST PARAMETERS
function calculate(...args) {
    console.log(args.length);
    for(const val of args) {
        console.log(val);
    }
}

calculate(1,2,3,4);