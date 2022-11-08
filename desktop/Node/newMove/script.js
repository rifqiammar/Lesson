let jumlahAngkot = 10;
let angkotBeroperasi = 7;
let angkotRidakberoperasi = [8, 9, 10];
let kosong = [];

for (i = 0; i < jumlahAngkot; i++) {
  if (i < angkotBeroperasi) {
    console.log(`Angkot No. ${i + 1} Sedang Beroperasi`);
  }
}
angkotRidakberoperasi.forEach((e) => {
  console.log(`Angkot No. ${e} Sedang Tidak Beroperasi`);
});

// angkotRidakberoperasi.forEach((element) => {
//      if (i == angkotRidakberoperasi[j]) {
//         console.log(`Angkot No. ${i + 1} Sedang Tidak Beroperasi`);
//       }
// // });

// console.log(kosong.hasOwnProperty(0));
// console.log(kosong[0]);
