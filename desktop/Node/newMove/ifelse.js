let jumlahAngkot = 10;
let angkotBeroperasi = 6;
let angkotLembur = 8;

for (let i = 1; i <= jumlahAngkot; i++) {
  if (i <= angkotBeroperasi && i !== 5) {
    console.log(`Angkot No ${i} Sedang Beroperasi`);
  } else if (i == angkotLembur || i == 10 || i == 5) {
    console.log(`Angkot No ${i} Sedang Lembur`);
  } else {
    console.log(`Angkot No ${i} Sedang Tidak Beroperasi`);
  }
}

// let arr = [5, 4, 3, 6, 7, 8];
// let num = parseInt(arr);

// console.log(num);

var arsr = ["5", "1", "2", "3"];
arsr = arsr.map(Number);
arsr.sort(function (a, b) {
  return a - b;
});

arsr.forEach((element) => {
  console.log(element); // [1, 2, 3]
});
