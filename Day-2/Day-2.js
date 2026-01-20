Question 1: Sum of Array Elements (Array ke saare elements ka sum nikalo)
let arr = [2, 4, 6, 8];
let sum = 0;

for (let i = 0; i <= arr.length - 1; i++) {
    sum = sum + arr[i];
}
console.log(sum, "sum");







Question 2: Count Positive Numbers (Array me kitne positive numbers (> 0) hain, count karo)
let arr = [-2, 3, 0, 5, -1, 4];
let count = 0;

for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > 0) {
        count++;
    }
}
console.log(count, "count");








Question 3: Average of Array Elements ( Array ke saare elements ka average nikalo )
let arr = [2, 4, 6, 8];
let sum = 0;

for (let i = 0; i <= arr.length - 1; i++) {
    sum = sum + arr[i];
}
let avg = sum / (arr.length);

console.log(avg, "avg");





Question 4: Find Smallest Positive Number (Array me se sabse chhota positive number (> 0) find karo)
let arr = [-3, 2, 5, -1, 1, 4];
let smallest = Infinity;

for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > 0 && arr[i] < smallest) {
        smallest = arr[i];
    }
}
console.log(smallest, "smallest");







Question 5: Reverse an Array (Array ko reverse karo without using extra array)
let arr = [1, 2, 3, 4, 5];
let i = 0;
let j = arr.length - 1;

while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}
console.log(arr);