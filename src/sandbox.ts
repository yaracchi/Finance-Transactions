/*****lesson #2
//const firstName = 'yara';
//console.log(firstName)

//To obtain a NodeList of all of the <input> elements contained within the element "document"
//const inputs = document.querySelectorAll('input')
//console.log(inputs)

//inputs.forEach(input => {
   // console.log(input)
//})
/*lesson #3 
let firstName = "yara";
let age = 23;
let loveCat = true;
//firstName=50;
firstName = "lamia";
age = 25;
const circ = (diameter: number)=>{
    return diameter*Math.PI;
}
//console.log(circ("yara"))
console.log(circ(5));

/*lesson #4 
let names = ["yara","lamia","lyna"]
names.push("daouia")
//names.push(3)
//names = "kiki"
let mixed = ["yara",15,"lyna"]
mixed.push(3)
mixed[2]= 22

let ninja_cat = {
    name: "yuki",
    age: 6,
    food_fav: "chiken"
}
ninja_cat.food_fav = "chicken"
ninja_cat = {
    name: "minette",
    age: 5,
    food_fav: "fish"
}
/*lesson #5 
//basic types
let flower : String;
let flowerAge: number;
let smellsGood: boolean;
//arrays
let cats: String[] = [];
let hybred: (String | number)[] = []
let uid: String|number;
//objects
let test1: object;
test1 = {
    title:"algebra",
    grade: 3
}

let test2:{
    title: String,
    grade: number
}
test2 = {
    title:"algebra",
    grade: 3
}

flowerAge = 50;
smellsGood = true;
cats = ["yuki"];
uid = 'yaya'
uid = 5

/*lesson #6 *
let distance : any = 50;
distance = "far"
distance = {
    km:50,
    dist:"far"
}

let table:any[] = [];
table.push(5)
table.push("cool")
table.push(false)

let object: {
    name:any,
    profission:any
} 

let greet : Function //declare it
//define it
greet = (say : string, a: number, b: number = 10, c?: number) => { //b & c is optional
console.log(say)
console.log(a+ 10)
}

let add = (a:number, b:number): number => {
    return a+b
}
//call it
let result = add(10, 13)
//create my own type = TYPE ALIASES to reduce code
type ObjName = {name : string, uid: string | number}
let greet = (person :ObjName) => { //b & c is optional
    console.log(person)
    }
//define structure and type of the fucntion: function signature

 let hey : (a: string, b:string) => void //this var hey will hold a function with thoses conditions
 hey = (name: string, greeting:string) => {
     console.log(`${name} says ${greeting}`)//templatestrings
 }   

 let calc : (a:number, b:number, c: string) => number
calc = (numOne: number, numTwo:number, func:string) => {
    if(func === "add"){
       return numOne+ numTwo
    }else if (func === "minus"){
        return -numOne+ numTwo
    } else{
        console.log("sorry we can not execute this function")
        return 0
    }
}
type person = {name: string, password:number} //type aliases

let detailsLog: (obj:person) => boolean;
detailsLog = (person :person) => {
    if(person.password.toString().length > 8){
        console.log(`password length is ${person.password.toString().length }`)
        return true;
    }else{
        console.log(`password length is ${person.password.toString().length }`)
        return false;
    }
}
 hey("yara","konishiwa")
 let result = calc(10,33,"minus")
 console.log(`my age is ${result}`)
 const me={name:"yara", password:15937868}
 let logging = detailsLog(me)*/
