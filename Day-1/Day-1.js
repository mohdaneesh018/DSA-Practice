Qs. 1: Find Maximum number in an array
let arr = [1, 2, 3, 15, 7, 6];
let max = arr[0];

for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max, "max");





Qs. 2: Array me kitne even numbers hain, count karo
let arr = [1, 2, 4, 5, 6];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        count++;
    }
}
console.log(count, "count");





Qs. 3: Array me kitne negative numbers hain, count karo
let arr = [2, -3, 4, -1, 0, -6];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        count++;
    }
}
console.log(count, "count");





Question 4: Array me Max & Min dono find karo
let arr = [3, 7, 1, 9, 4];
let max = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(max, "max");
console.log(min, "min");





Question 5: Array me har element kitni baar repeat hua hai, uska count nikalo.
let arr = [1, 2, 2, 3, 1, 1, 4];
let freq = {};

for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
        freq[arr[i]]++;
    } else {
        freq[arr[i]] = 1;
    }
}
console.log(freq, "freq");





Question 6: Array me jo pehla element sirf 1 baar aaya ho, usko find karo.
let arr = [1, 2, 2, 3, 1, 4, 3];
let freq = {};

// step 1: frequency count
for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
        freq[arr[i]]++;
    } else {
        freq[arr[i]] = 1;
    }
}

// step 2: first non-repeating
let result = null;
for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]] == 1) {
        result = arr[i];
        break;
    }
}
console.log(result, "result");