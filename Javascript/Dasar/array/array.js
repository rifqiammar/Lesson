// Hapus Penumpang

let penumpang = ["Rifqi", "Ammar", "Ramadhan"];

// rules :
//  Jika angkot kosong, Tampilkan Angkot kosong
// Jika ada penumpang yang namanya sesuai, hapus nama penumpang pada array dengan memberi nilai undefined
// Jika tidak ada penumpang yang namanya sesuai, tampilkan pesan kesalahanya

function hapusPenumpang(nama, penumpang) {
  if (penumpang.length == 0) {
    console.log(`Angkot Sedang Kosong, penumpang dengan nama ${nama} tidak ditemukan`);
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (nama === penumpang[i]) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(`Nama ${nama} Tidak ada di dalam angkot`);
        return penumpang;
      }
    }
  }
}
