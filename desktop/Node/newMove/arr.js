let jumlahAngkot = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let angkotBeroperasi = [1, 2, 3, 4, 5, 6, 7];
let angkotRidakberoperasi = [8, 9, 10];
let kosong = [];

for (i = 0; i < jumlahAngkot.length; i++) {
  for (j = 0; j < angkotRidakberoperasi.length; j++) {
    if (jumlahAngkot[i] == angkotRidakberoperasi[j]) {
      console.log(`Angkot No. ${jumlahAngkot[i]} Sedang Tidak Beroperasi`);
    } else if (jumlahAngkot[i] !== angkotRidakberoperasi[j]) {
      console.log(`Angkot No. ${jumlahAngkot[i]} Sedang Beroperasi`);
    }
  }
}

// for (i = 0; i < jumlahAngkot; i++) {
//   if (i < angkotBeroperasi) {
//     console.log(`Angkot No. ${i + 1} Sedang Beroperasi`);
//   }
// }
// angkotRidakberoperasi.forEach((e) => {
//   console.log(`Angkot No. ${e} Sedang Tidak Beroperasi`);
// });
