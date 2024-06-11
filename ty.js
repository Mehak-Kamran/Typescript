//array
var clothes = ["pants", "shirts", "jeggings"];
// clothes.push("t-top")
// clothes.push(4)//Argument of type 'number' is not assignable to parameter of type 'string'.
//even if i try to over write
//clothes[0]=1//Type 'number' is not assignable to type 'string'.
console.log(clothes);
//object
var car = {
    name: "vigo",
    color: "black",
    automatic: true
};
car.name = 45;
console.log(car);
