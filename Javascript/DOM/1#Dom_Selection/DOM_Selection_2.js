// document.querySelector()
// menanyai selector Css
/*  Selector Css
    #b p{
      color: green;
    }
*/

// 1. document.querySelector() -> elemen
const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.style.fontSize = "25px";

// Menggunakan QuerySelector tidak perlu mengubah ubah HTMLnya tidak perlu menambahkan Class dan ID
// Mentarget / manipulasi dengan mencari Selectornya
const li2 = document.querySelector("section#b ul li:nth-child(2)");

li2.style.backgroundColor = "orange";

// Jika
// const p = document.querySelector("p");   -> elemet
// Maka query selector hanya mentarget 1 elemen saja yaitu yang pertama di temui
// tidak bisa mencari semua tag p

// ==================================================================================

// 2. document.querySelectorAll() -> node List
const p = document.querySelectorAll("p");
// Mengembalikan nilai array
p[2].style.backgroundColor = "lightblue";
// Jika ingin Menseleksi semua bisa menggunakan Looping

/*
      Pilih yang Mana ?
      // Method dua ini adalah yang paling cepat di banding ketiga di bawahnya
      maka prioritaskan yang kedua ini dahulu
    - getElemenById() | Misalkan Elemen yang mau di target sudah punya ID maka gunakan saja ini
    - getElementsByTagName() | 
--------------------------------------------------------------------------------------------
    - getElementsByClassName() | Jika ada Class Nya Makai pakai ini 
----------------------------------------------------------------------------------------------------
    Jika di harus kan untuk tidak mengubah struktur html / menambah Id/Class Maka gunakan yang ini
    - querySelector()      | 
    - querySelectorAll()   | 
*/

// Mengubah Node Root

// const p4 = document.getElementsByTagName("p");
// p4[3].style.backgroundColor = "green";

// Mengubah Node Rootnya, Secara default node rootnya adalah Document
// Misalkan mau mengambil seluruh section B maka
// Hanya mencari p di section dengan Id b saja
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");
p4.style.backgroundColor = "orange";

// Atau Bisa dengan
const sectionB = document.querySelector("section#b");
const p4 = sectionB.getElementsByTagName("p")[0];
p4.style.backgroundColor = "orange";
