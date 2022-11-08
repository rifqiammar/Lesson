// Filter & Find

// Filter di gunakan untuk mencari nilai pada array  dan mengembalikan dalam bentuk array

let angka = [1, 2, 3, 4, 12, 6, 5, 7, 8, 30, 23, 465];
let angka2 = angka.filter(function (x) {
  return x >= 5;
});

console.log(angka2);

//  Find | Mengembalikan satu nilai
let findAngka = angka.find((x) => x > 10);

console.log(findAngka);
