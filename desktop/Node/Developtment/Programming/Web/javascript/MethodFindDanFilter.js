// filter dan find Digunakan untuk mencari elemen pada Array
let angka = [1,2,10,5,20,3,6,8,4]

// 1. Filter (Untuk Mengembalikan Banyak Nilai ) Dikembalikan nilainya ke dalam Array barubari
let angka2 = angka.filter(function(elemen){
    return elemen == 5;//mencari nilai pada elemen sama dengan 5
});
console.log(angka2); //(angka2 akan berisi array dengan elemen 5)

let angka3 = angka.filter(function(elemen){
    return elemen > 5;//Mencari nilai pada elemen lebih besar dari 5
});
console.log(angka3.join(" - "));//elemen yang lebih besar dari angka 5 akan di kembalikan ke Array angka3


console.log("");


// 2. Find (Untuk mengembalikan Satu Nila)
let angka4 = angka.find(function(elemen){
    return elemen > 5;//Mencari nilai yang lebih besar dari 5 dan mengambil nilai dari index pertama/yang pertama di temukan
});

console.log(angka4);//Hanya mengembalikan Satu nilai saja

//Find Tidak menghasilkan Array, Akan tetapi hanya menghasilkan Satu nila saja