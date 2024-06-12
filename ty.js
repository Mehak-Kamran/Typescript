//function signature
//eg1
var func1;
//function that takes string and number and returns nothing
func1 = function (name, age) {
    console.log("Her name is ", name, "and age is ", age);
};
func1("mak", 23);
//eg2
var func2;
func2 = function (no1, no2, st) {
    if (st === "true") {
        return no1;
    }
    else {
        return no2;
    }
};
console.log(func2(1, 2, "true"));
//eg3
var func3;
func3 = function (person) {
    return person.age;
};
console.log(func3({ name: "mark", age: 34 }));
