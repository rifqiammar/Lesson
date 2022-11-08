function tambah(a, b) {
  return a + b;
  // return arguments;
}

function kali(a, b) {
  return a * b;
}

//  Arguments  // psuedo variable
//  Adalah sebuah variable \ Array khusus yang berisi nilai yang dikirimkan saat fungsi di panggil
//  Hanya ada di Javascript

function tambahDngArguments() {
  let hasil = 0;

  // Looping Array Argument
  for (let i = 0; i < arguments.length; i++) {
    // Menggunakan Pengkondisian untuk Mencari Angka / Menjumlahkan Angka
    // jika array arguments[i] == angka
    if (typeof arguments[i] == "number") {
      hasil += arguments[i];
    }
  }
  return hasil;
}

let coba2 = tambahDngArguments(5, 10, 20, "hi", "true", 100);

console.log(coba2);

var coba = tambah(5, 10, 20, "hi", "true");
// arguments = [5, 10, 20, "hi", "true"]
console.log(coba);
