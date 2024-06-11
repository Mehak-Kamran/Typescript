//Basics
// var person="jack";
// person=23;
// console.log(person)
//Type 'number' is not assignable to type 'string'.
//instead 
// var person1="john";
// person1="marry";
// console.log(person1)
//lets suppose we have an arrow function that cal diameter of circle
var diam = function (val) {
    return val * Math.PI;
};
// console.log(diam("hi"))//NaN
// console.log(diam("hi"))//Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(diam(5));
