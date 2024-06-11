//explicit type
// string variable but i dont want to initialize it at the moment want to declare only
let name1:string;
name1="mark"
console.log(name1)
//array
//the array should be string array
let cars:string[]=[]
cars.push("mira","vigo")
console.log(cars)
//but if i want a mixed array? i will use union or any
//union
let trees:(string|number|boolean)[]=[]
trees.push("pine","34",true)
console.log(trees)
//any
let flowers:any[]=[]
flowers.push("lavender",23,false)
console.log(flowers)

//we can use union with normal type too 
let uid:string|boolean
// objects
let bus:object
bus={
    model:3004,
    automatic:false
}
//if i use any with normak type it then become reverse typescript i.e js which is 
//not beneficial 
let pet:any
pet="cat"
pet=45
console.log(pet)
