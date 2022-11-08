let arr = [1, 9, 20, 1000, 5, 3, 2, 40, 200];
let temp = 0;

for (let i = 0; i < arr.length; i++) {
  if (temp < arr[i]) {
    temp = arr[i];
  }
}

console.log(temp);

for (let i = 0; i < arr.length; i++) {}
