// Callback

function tampilkanPesan(callback) {
  const nama = prompt(`Masukan Nama : `);
  callback(nama);
}

tampilkanPesan(halo);
