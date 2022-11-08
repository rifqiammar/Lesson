const body = document.getElementsByTagName("body")[0];
const btn = document.getElementById("btn");

// Mengubah background dengan tombol dark Mode
btn.addEventListener("click", () => {
  body.classList.toggle("bgnColor");
  btn.classList.toggle("blue");
});

// ========================================================================

const tblAcakWarna = document.createElement("button");
const isiTbl = document.createTextNode("Random Warna");
tblAcakWarna.append(isiTbl);
// Menambahkan Attribut pada button Acakwarna
tblAcakWarna.setAttribute("type", "button");
// Menyimpan setelah tombol btn
btn.after(tblAcakWarna);

const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

const warnaRandom = function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  // Agar slide mengikuti nilai random
  sMerah.value = r;
  sBiru.value = b;
  sHijau.value = g;

  body.style.backgroundColor = `rgb(${r},${g},${b})`;
};

tblAcakWarna.addEventListener("click", warnaRandom);

// Slider
const warnaSlider = function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;

  body.style.backgroundColor = `rgb(${r},${g},${b})`;
};

sMerah.addEventListener("input", warnaSlider);

sHijau.addEventListener("input", warnaSlider);

sBiru.addEventListener("input", warnaSlider);
