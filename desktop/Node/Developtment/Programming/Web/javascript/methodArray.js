// Array
let hewan = ["Sapi","Domba","Unta","Kerbau","Kambing","Ayam","Bebek"];


 
// Method pada Array

// 1. length = Menghitung Elemen dari array
console.log(hewan.length);
console.log("");

// 2 Join = Menggabungkan Seluruh isi array dan merubahnya menjadi String
console.log(hewan.join(" ")); // (" ") Sebaga Pemisah
console.log("");


/* 3. Push = Digunakan untuk menambah elemen Array di Akhir Arraynya
      (Mendorong Atau memasukan elemn bari di akhir elemenya ) */
hewan.push("Kelinci");
hewan.push("Kalkun", "Kepiting"); // Push Bisa menambahkan beberapa elemen


/* 4. Pop = Menghilangkan Elmen Terakhir dari sebuah array (Pop adalah
      Sebuah Ilustrasi dari suara balon yang pecah dengan jarum )
*/
hewan.pop(); //Hanya bisa 1 elemen saja


/* 5. Unshift & shift = Sama Seperti Push dan Pop Akan 
    tetapi dia bekerja untuk elemen pertama pada Array
*/
hewan.unshift("Sidat", "Cumi-Cumi");/*Menambahkan Elemen Baru 
(Menggeser Kedalam)           pada baris pertama Array*/

hewan.shift();/*Menghilangkan Elemen Pertama 
(Menggeser Keluar) */


 // Function Untuk Menampilkan Seluruh Array
function MenghitungIsiArray(params){
    for(i=0; i < params.length; i++){
         console.log(params[i]);
    }     
 };
 MenghitungIsiArray(hewan);