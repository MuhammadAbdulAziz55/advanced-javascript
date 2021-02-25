// 7-8 ways You can get undefined
// ex-1
let pakhi;
console.log(pakhi);

// ex-2
function add(num1, num2){
    console.log(num1+num2);
}
const result = add(13, 82);
console.log(result);

// ex-3
function add(num1, num2){
    console.log(num1, num2);
}
const result = add(13);
console.log(result);

// ex-4
const premik ={name:"smart dude", phone:233333};
console.log(premik.gfName);

// ex-5
let fun = undefined;
console.log(fun);

// ex-6
let ages= [3,4,5];
console.log(ages[11]);
