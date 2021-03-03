// slice
const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2,5);
console.log(part);
console.log(nums);

// splice
const nums = [1,2,3,4,5,6,7,8];
const remove = nums.splice(2,3,77,88,44);
console.log(remove);
console.log(nums);

// join
const nums = [1,2,3,4,5,6,7,8];
const remove = nums.splice(2,3,77,88,44);
const together = nums.join(",");
console.log(together);

