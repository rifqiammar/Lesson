let hewan = ["Sapi","Domba","Unta","Kerbau","Kambing","Ayam","Bebek"];
let hewan2 = ["Sapi","Domba","Unta","Kerbau","Kambing","Ayam","Bebek"];

/* Splice (Menyambung/Menambal) = Menyisipkan sebuah elemen 
   di tengah2 menggunakan splice */

// splice(indexAwal, mauDihapusBerapa(opsional), elemenBaru1(opsional), elemenBaru2,....)
hewan.splice(1,0,"Belut","Nila")
hewan2.splice(1, 2,) // Dimulai dari Index ke 1 menghapus 2 elemen 





/* Slice (Mengiris) = Digunakan Untuk mengambil 
beberapa bagian pada array untuk menjadi array yang 
aru */
// slice(IndexAwal, IndexAkhir);
// Index Awal akan terbawa di array yang baru tetapi index terakhir tidak
let arr = ["Madu","Susu","Teh","Kopi","Milo"];
let arr2 = arr.slice(1,3); //(Mengambil Index 1 dan 2, Index 3 tidak Ikut )
// dan menyimpan hasil irisan (Index Satu dan IndexDua) kedalam Array yang Baru
// Array Lama Masih bisa di akses.




function MenghitungIsiArray(params){
      for(i=0; i < params.length; i++){
           console.log(params[i]);
      }     
   };
   MenghitungIsiArray(hewan);
   console.log("")
   MenghitungIsiArray(hewan2);
   console.log("")
   MenghitungIsiArray(arr);
   console.log("");
   MenghitungIsiArray(arr2);