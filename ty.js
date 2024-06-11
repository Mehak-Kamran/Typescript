//explicit type
// string variable but i dont want to initialize it at the moment want to declare only
var name1;
name1 = "mark";
console.log(name1);
//array
//the array should be string array
var cars = [];
cars.push("mira", "vigo");
console.log(cars);
//but if i want a mixed array? i will use union or any
//union
var trees = [];
trees.push("pine", "34", true);
console.log(trees);
//any
var flowers = [];
flowers.push("lavender", 23, false);
console.log(flowers);
//we can use union with normal type too 
var uid;
// objects
var bus;
bus = {
    model: 3004,
    automatic: false
};
//if i use any with normak type it then become reverse typescript i.e js which is 
//not beneficial 
var pet;
pet = "cat";
pet = 45;
console.log(pet);
