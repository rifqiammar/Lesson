 let hewan = ["Sapi","Domba","Unta","Kerbau","Kambing","Ayam","Bebek"];

 // 1. ForEach(Adalah digunakan untuk melakukan Looping pada Array)

 hewan.forEach(function(elemen){//memberikan perulangan pada array menggunakan function expression dan for each
     console.log(elemen);
 } );

 console.log("");

// Menggunakan Function Expresion terpisah/sendiri
 let cetak = function(elemen){// pada Parameter Elemen bisa di ganti apa saja cth: e, elemen elem dsb
    console.log(elemen);
 }
// forEach
 hewan.forEach(cetak);
 // .......................................
 console.log("");


 let nama = ["Rifqi","Ammar","Ramadhan"];

 nama.forEach(function(elemen, index){ //elemen sebagai Nama | Index Sebagai index array 0,1,2,3..
    console.log("Mahasiswa "+"Ke."+(index+1)+"  "+elemen);
 })

 // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,;,,,,,,,,,,,,,,,,,,,,,,
 console.log("")
 // 2. Map (Sama Seperti forEach akan tetapi Map Dapat Mengembalikan Array Sedangkan ForEach Tidak)
 let angka = [1,2,5,3,6,10,20,100,6,8,4];
  angka.map(function(elemn){
     console.log(elemn);
  })//Menampilkan perulangan pada array tanpa menggunakan return


 // Map
 let angka2 = angka.map(function(e){//mamasukan elemen Array yang sudah di kalikan kedalam Variable baru
    return e * 2;
 });//menampilkan array dengan mengembalikan nilai nya


 console.log(angka2.join(" - "));

 // ................................................................
 console.log("");

 // 3. Sort(Di gunakan Untuk mengurutkan Nilai/isi Array)

 angka.sort();
 console.log(angka.join("-"))

 // sort (Secara Default, Mengurutkan Karakter Pertamanya Dulu);

 // Jika Ingin Mengurutkan Angkanya dengan benar maka harus memeasukan function perbandingan angkanya
 angka.sort(function(a, b){
    return a-b;//(Function yang Digunakan untuk Mengurutkan Secara ASC)
   // return b-a(Digunakan Untuk Mengurutkan Secara Desc)
})

console.log(angka.join(" - "))