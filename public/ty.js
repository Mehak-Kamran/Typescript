"use strict";
//classes
class invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.ammount = a;
    }
    format() {
        return `${this.client} ownes ${this.ammount} for ${this.details}`;
    }
}
let invoice1 = new invoice("mak", "web", 23);
console.log(invoice1);
//DOM WITH TS
let anchor = document.querySelector("a");
//console.log(anchor.href);//bc ts dont know about html thing that something called anchor exists
// if(anchor){
//     console.log(anchor.href)
// }
// else{
//     console.log("nothing exists")
// }
//or sencond method is just add !
console.log(anchor.href);
//grabbing form
//let form=document.querySelector("form")!;
//console.log(form.children)
//suppose we have multiple forms in our html document 
let form = document.querySelector(".new-item-form");
console.log(form.children);
//1
let type = document.querySelector("#type");
let tofrom = document.querySelector("#tofrom");
let detail = document.querySelector("#details");
let amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, detail.value, amount.valueAsNumber);
});
