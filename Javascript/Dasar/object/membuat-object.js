// Membuat Object
/*
  - object literal
  - Function Declaration
  - Constructor Function (Keyword new)
  - Object.create()

*/

// Object Literal
let mhs = {
  nama: "Rifqi Ammar Ramadhan",
  nrp: "25115971",
  email: "rifqiammar@cloud.com",
  jurusan: "Sistem Komputer",
};

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
  let mhs = {};

  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;

  return mhs;
}

let nama = "Rifqi Ammar Ramadhan";
let nrp = "25115971";
let email = "rifqiammar@cloud.com";
let jurusan = "Sistem Komputer";

// Memanggil function decklaration
let mhs3 = buatObjectMahasiswa(nama, nrp, email, jurusan);

// Membuat Obhect Dengan Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
}

// Memanggilnya menggunakan keyword NEW
let mhs4 = new Mahasiswa(nama, nrp, email, jurusan);
