//classes

class invoice{
    client:string;
    details:string;
    ammount:number;

    constructor (c:string,d:string,a:number){
        this.client=c;
        this.details=d;
        this.ammount=a;

    }
    format(){
        return `${this.client} ownes ${this.ammount} for ${this.details}`
    }
}

let invoice1=new invoice("mak","web",23,)
let invoice2=new invoice("peter","wordpress",200)
let invoices:invoice[]=[]
invoices.push(invoice1)
invoices.push(invoice2)
invoices.forEach((inv)=>{
    console.log(inv.client,inv.details,inv.format())

})



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