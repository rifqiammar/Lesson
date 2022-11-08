// Menangkap pilihan User
let p = prompt("Masukan Pilihan: gajah, semut, orang");
p = p.toLowerCase();

// Menangkap Pilihan computer
// Membangun bilangan Random
let comp = Math.random();
if (comp < 0.3) {
  comp = "semut";
} else if (comp >= 0.3 && comp <= 0.6) {
  comp = "orang";
} else {
  comp = "gajah";
}

let hasil;

// Menentukan Rules
if (p === comp) {
  hasil = `Seri`;
} else if (p == "gajah") {
  hasil = comp == "orang" ? "Menang" : "Kalah";
} else if (p == "orang") {
  hasil = comp == "semut" ? "Menang" : "Kalah";
} else if (p == "semut") {
  hasil = comp == "gajah" ? "Menang" : "Kalah";
} else {
  alert("Masukan Pilihan yang Tepat");
}

alert(`Player : ${p} dan Computer : ${comp} Hasilnya adalah ${hasil}`);
