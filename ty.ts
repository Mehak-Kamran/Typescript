//function signature

//eg1
let func1:(a:string,b:number)=>void
//function that takes string and number and returns nothing
func1=(name,age)=>{
    console.log("Her name is ",name,"and age is ",age)
}
func1("mak",23)

//eg2
let func2:(a:number,b:number,c:string)=>number
func2=(no1,no2,st)=>{
    if(st==="true"){
        return no1;
    }
    else{
        return no2;
    }
}
console.log(func2(1,2,"true"))

//eg3
let func3:(obj:{name:string,age:number})=>number

func3=(person:{name,age})=>{
    return person.age
}
console.log(func3({name:"mark",age:34}))

