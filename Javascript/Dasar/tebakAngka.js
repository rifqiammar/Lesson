let comp = Math.floor(Math.random() * 10) + 1;
let Kesempatan = 3;
let ulang = true;

alert("Tebak angka dari 1 - 10 \n Kamu Punya 3 Kesempatan");

while (ulang) {
  while (Kesempatan > 0) {
    let p = parseInt(prompt("Masukan Angka"));
    if (p == comp) {
      alert(`Selamat Kamu Benar!! Angkanya adalah ${comp}`);
      break;
    } else if (p < comp) {
      Kesempatan--;
      alert(`Angkanya Terlalu Kecil \n anda memiliki ${Kesempatan} Lagi`);
    } else if (p > comp) {
      Kesempatan--;
      alert(`Angkanya Terlalu besar \n anda memiliki ${Kesempatan} Lagi`);
    }
  }

  let hasil = Kesempatan == 0 ? `Anda Kalah angkanya adalah ${comp}` : "";

  ulang = confirm(`${hasil} \n Mau Coba Lagi`);
}
alert("Terimakasih");
