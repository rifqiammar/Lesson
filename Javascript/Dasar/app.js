alert("Assalamu'alaikum, Selamat Datang");
let ulang = true;

while (ulang) {
  let nama = prompt("Masukan Nama Anda!");
  alert(`Hallo ${nama} Selamat Datang`);

  ulang = confirm("Mau Coba lagi?");
}
