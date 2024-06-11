//fuction type

let hope:Function
//defailt val
// hope=(a:number,b:number,c:number=4)=>{
//     console.log(a,b,c)
// }
//optional
hope=(a:number,b:number,c?:number)=>{
    console.log(a,b,c)
}
// let hopecall=hope(1,2)  3rd param undefined
let hopecall=hope(1,2)

let fun=(a,b):number=>{
    return a+b
}
let funcall=fun(1,2)
console.log(funcall)

//ALIASES
let fun1=(a:number|string|boolean)=>{
    console.log("its not that easy")

}
//instead of writing this we can write this in simpoler way 
type sn=number|string|boolean
let fun2=(a:sn)=>{
    console.log("this is much easier")
}
