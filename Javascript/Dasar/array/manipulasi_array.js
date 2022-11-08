// Manipulasi Array

// 1. Menambah isi Array
let arrayy = [];
arr[0] = "Ammar";
arr[6] = "Ramadhan";
console.log(arrayy);

// 2, Menghapus Isi array
let arra = ["Rifqi", "Ammar", "Ramadhan"];

arra[1] = undefined;
// Nilai berubah menjadi undifine

console.log(arra);

// Array Method
// Method adalah sebuah function yang ada di dalam sebuah object
// lenght

// Join : Menggabungkan seluruh array menjadi string

let arr = ["Rifqi", "Ammar", "Ramadhan"];

// console.log(arr.join(" "));

// Push digunakan untuk menambah elemen array di akhir arraynya
arr.push(13);
// Push Bisa menambahkan langsung beberapa elemen
// arr.push("Hallo", "Bismillah");

// Pop adalah kebalikan dari elemen push di menghilangkan elemen terakhir
// dari array
// Pop Menghapus Satu elemen
arr.pop();

// 3. Unshift & Shift Sama seperti push dan pop akan tetapi dia bekerja pada elemen
// Pertama pada Array

// Unshift | Menambahkan Elemen Baru di awal array
arr.unshift("Nama");

// Shift Menghilangkan elemen di awal array
arr.shift();

console.log(arr.join(" "));
console.log("\n");

// Slice & Splice

// Slice adalah mengambil beberapa bagian yang ada pada array untuk menjadi array yang baru

// Splice  menyisipkan elemen di tengah tengah menggunakan splice

let hewan1 = ["Sapi", "Kambing", "Domba", "Kerbau", "Bebek", "Ikan Tuna"];

//  4. Splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ....)
hewan1.splice(2, 0, "Ayam", "");

console.log(hewan1.join(" "));

console.log("\n");

// const months = ["Jan", "March", "April", "June"];
// months.splice(1, 0, "Feb");
// // inserts at index 1
// console.log(months);

// 5. Slice Mengiris sebuah array menjadi array yang baru
// slice(awal, akhir) | Index Awal akan terbawa di index yang baru tapi yang terakhir tidak
let hewan = ["Sapi", "Kambing", "Domba", "Kerbau", "Bebek", "Ikan Tuna"];
//            [0]        [1]       [2]      [3]       [4]       [5]

let hewanBaru = hewan.slice(1, 4);
// Index Awal akan terbawa di index yang baru tapi yang terakhir tidak

console.log(hewanBaru.join(" "));

console.log("\n");
