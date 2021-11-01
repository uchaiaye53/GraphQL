var counter = function(arr){
    return "there are "+ arr.length + " elements.";
};

var adder = function(a,b){
    return `the total is ${a+b}`;
};

const pi = 3.1416;

module.exports = {
    counter : counter,
    adder : adder,
    pi : pi
};