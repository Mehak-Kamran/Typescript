//fuction type
var hope;
//defailt val
// hope=(a:number,b:number,c:number=4)=>{
//     console.log(a,b,c)
// }
//optional
hope = function (a, b, c) {
    console.log(a, b, c);
};
// let hopecall=hope(1,2)  3rd param undefined
var hopecall = hope(1, 2);
var fun = function (a, b) {
    return a + b;
};
var funcall = fun(1, 2);
console.log(funcall);
