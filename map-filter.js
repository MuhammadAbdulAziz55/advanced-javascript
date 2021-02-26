// how to square the whole array number
const numbers =[3, 4, 5,6, 7, 8];
const output = [];
for(let i=0; i<numbers.length; i++){
    element = numbers[i];
    const result = element * element;
    output.push(result);

}
console.log(output);

//  map
// ex-1
const numbers = [3, 4, 5,6, 7, 8];
numbers.map(function(element, index, array){
    console.log(element, index, array);
})

// ex-2 squre all array numbers with map
const numbers =[3,4,5,6,7,8];
const result = numbers.map(function(element){
    return element * element;
})
console.log(result);

// ex-2 shortcut syestem
const numbers = [3,4,5,6,7,8];
  const result = numbers.map(x => x * x);
  console.log(result);


//   Filter
numbers = [3,4,5,6,7,8];
const bigger = numbers.filter(x => x>5);
console.log(bigger);

// ex-2
numbers = [3,4,5,6,7,8];
const bigger = numbers.filter(x => x<3);
console.log(bigger);


// find
// ex-1
const numbers =[3,4,5,6,7,8];
const isThere = numbers.find(x => x > 5);
console.log(isThere);

// ex-2
const numbers =[3,4,5,6,7,8];
const isThere = numbers.find(x => x < 3);
console.log(isThere);