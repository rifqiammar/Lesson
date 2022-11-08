// Looping Array Foreach dan Map

// 6. Foreach

let angka = [1, 2, 3, 4, 5, 6, 7, 8];
let nama = ["rifqi", "Ammar", "Ramadhan"];

angka.forEach((e) => console.log(e));

nama.forEach(function (e, i) {
  let str = `Mahasiswa ke-${i + 1} adalah : ${e}`;
  console.log(str);
});

console.log("\n");

// Map Looping dan membuat array baru

let angkaKali = angka.map((e) => e * 2);

console.log(angkaKali);

// Short | Mengurutkan Isi Array
// Short mengurutkan angka pertamanya dahulu
let nums = [6, 7, 3, 5, 2, 8, 1, 4, 9];
console.log(nums.join("-"));
nums.sort();
console.log(nums.join(" "));

// Jika
let nums2 = [6, 7, 3, 10, 15, 25, 5, 2, 8, 1, 4, 9];
nums2.sort();
console.log(nums2.join(" "));
// Menggunakan Function Perbandingan
nums2.sort(function (a, b) {
  return a - b;
});
console.log("\n");
console.log(nums2.join(" "));
