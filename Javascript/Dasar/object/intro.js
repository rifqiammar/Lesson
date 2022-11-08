// Kenapa object

// let namaMhs = "Rifqi Ammar Ramadhan";
// let umurMhs = 25;
// let lulus = true;
// let IPSemester = [2.9, 3.1, 3.25, 2.88, 3.04];
// let IPKumulatif = function (IPSemester) {
//   let total = 0;
//   for (let i = 0; i < IPSemester.length; i++) {
//     total += IPSemester[i];
//   }
//   return total / IPSemester.length;
// };

// Menggunakan Object
let mahasiswa = {
  nama: "Rifqi Ammar Ramadhan",
  lulus: true,
  IPSemester: [2.9, 3.1, 3.25, 2.88, 3.04],
  IPKumulatif: function () {
    let total = 0;
    let ips = this.IPSemester;
    for (let i = 0; i < ips.length; i++) {
      total += ips[i];
    }
    return total / ips.length;
  },
};

// cara panggil object
let obj = mahasiswa.IPKumulatif();

console.log(obj);
console.log(mahasiswa.nama);
// ===============================================================================================================

// anatomy object

var orang = {
  // Variabel yang terdapat di dalam object dinamakan PROPERTY
  nama: "Rifqi Ammar Ramadhan", //
  umur: 25, //       // Properti
  pekerjaan: "Backend Developer", //
  sapa: function () {
    // Function yang ada didalam object di sebut Method
    return `Assalamu'alaikum, Nama Saya ${this.nama} \n usia saya ${this.umur} Tahun, \n dan saya adalah seorang ${this.pekerjaan}`;
  },
};

console.log(orang.sapa());

// ======================================================================================================================

// Membuat object kosong
var mhs = {};

mhs.nama = "Rifqi Ammar Ramadhan";

// Membuat Object di dalam Object
let person = {
  nama: "Rifqi Ammar Ramadhan",
  umur: "25",
  nilai: [3.0, 2.5, 3.2],
  alamat: {
    jalan: "Jl. Telaga Harapan No 24",
    kota: "Bekasi",
    provinsi: "Jawa Barat",
  },
};

// Memanggilnya Bisa dengan

person.nama;
person["nama"];
