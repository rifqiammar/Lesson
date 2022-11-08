const body = document.getElementsByTagName("body")[0];
const btn = document.getElementById("btn");
const h1 = document.getElementsByTagName("h1")[0];

// Mengubah background dengan tombol dark Mode
btn.addEventListener("click", () => {
  h1.classList.toggle("color");
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

tblAcakWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  sMerah.value = r;
  sBiru.value = b;
  sHijau.value = g;

  body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

// Slider

// const sMerah = document.querySelector("input[name=sMerah]");
// const sHijau = document.querySelector("input[name=sHijau]");
// const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", function () {
  // Mengambil nilai yang ada di dalam element input, Apapun element inputnya .value
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

sHijau.addEventListener("input", function () {
  // Mengambil nilai yang ada di dalam element input, Apapun element inputnya .value
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

sBiru.addEventListener("input", function () {
  // Mengambil nilai yang ada di dalam element input, Apapun element inputnya .value
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

// Mengubah warna dengan Menggerakan Mouse
document.addEventListener("mousemove", function (event) {
  // posisi mouse
  //event.clientX; // untuk mengetahui kordinat sumbu X nya
  // ukuran Browser
  // console.log(window.innerWidth);
  // posisi kursor thdp sumbu X di bagi dng lebar dari browser di kali(x) 255
  const xPosisi = Math.round((event.clientX / window.innerWidth) * 255); // misal 1 / 1807 * 255 | Generate kadar RGB
  const yPosisi = Math.round((event.clientY / window.innerHeight) * 255);
  body.style.backgroundColor = `rgb(${xPosisi},${yPosisi},${100})`;

  sMerah.value = xPosisi;
  sBiru.value = 100;
  sHijau.value = yPosisi;
});
