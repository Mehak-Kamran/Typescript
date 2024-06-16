//DOM WITH TS
let anchor=document.querySelector("a")!;
//console.log(anchor.href);//bc ts dont know about html thing that something called anchor exists
// if(anchor){
//     console.log(anchor.href)
// }
// else{
//     console.log("nothing exists")
// }
//or sencond method is just add !
console.log(anchor.href)
//grabbing form
//let form=document.querySelector("form")!;
//console.log(form.children)
//suppose we have multiple forms in our html document 
let form=document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children)
//1
let type=document.querySelector("#type") as HTMLSelectElement;
let tofrom=document.querySelector("#tofrom") as HTMLInputElement;
let detail=document.querySelector("#details") as HTMLInputElement;
let amount=document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit",(e:Event)=>{
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        detail.value,
        amount.valueAsNumber
    );

})