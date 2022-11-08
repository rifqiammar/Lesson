// Pengelolaan Penumpang

/*
  tambah Penumpang
  - 2 parameter :
    - nama Penumpang
    - array penumpang

- rules :
  - jika angkotnya kosong, penumpang naik duduk di kursi pertama
  - penumpang berikutnya duduk di kursi selanjutnya secara berurutan
  - jika ada kursi kosong (Karena penumpang turun), penumpang yang naik berikutnya duduk di kursi kosong terlebih dahulu
  - nama penumpang tidak boleh sama
*/

let penumpang = [];
console.log(penumpang.length);

function tambahPenumpang(nama, penumpang) {
  if (penumpang.length === 0) {
    penumpang.push(nama);
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = nama;
        return penumpang;
      } else if (penumpang[i] == nama) {
        console.log(`Penumpang Dengan Nama ${nama} Sudah ada`);
        return penumpang;
        // nomor kursi akhir lenght 3 - 1 = 2   [0] [1] [2]
      } else if (i == penumpang.length - 1) {
        penumpang.push(nama);
        return penumpang;
      }
    }
  }
}

tambahPenumpang("Rifqi", penumpang);
tambahPenumpang("Ammar", penumpang);
tambahPenumpang("rams", penumpang);
penumpang[1] = undefined;
console.log(penumpang);
