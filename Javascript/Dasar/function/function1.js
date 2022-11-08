/*
  Algoritmanya

  1. Ketahui sisi masing2 kubus              8         3

  2. hitung Volume masing2 kubus             8*8*8 = 512   3*3*3 = 27

  3. Jumlahkan Hasilnya                     512 + 27

  4. Kembalikan Nilai Jawabanya             return 539;

*/

function kubus(a, b) {
  return a * a * a + b * b * b;
}

let a = 8;
let b = 3;

console.log(kubus(a, b));
