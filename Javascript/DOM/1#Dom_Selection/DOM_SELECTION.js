/*
    DOM Selection Method

    - getElemenById() | Memilih Elemen yang ada dialam DOM berdasarkan id | Id hanya boleh di miliki oleh satu elemen saja  : id="judul"
    - getElementsByTagName() | Memilih Elemen - Elemen yang memiliki nama tag tertentu
    - getElementsByClassName() | Carikan Elemen Yang memiliki nama Class tertentu | Class boleh di miliki oleh lebih dari satu elemen
    - querySelector()      |  Mencari Elemen Berdasarkan Selectornya | Seperti Mencari sebuah elemen menggunakan Css
    - querySelectorAll()   |      

    // Yang di hasilkan jika menggunakan method Selector ini

    Method                              Hasil
------------------------------------|------------------------
getElementById()                    |       element
------------------------------------|------------------------                                    
getElementsByTagName()              |      HTMLCollection
------------------------------------|------------------------                                    
getElementsByClassName()            |      HTMLColection 
------------------------------------|---------------------------                       
querySelector()                     |       element
------------------------------------|-----------------------------                                   
querySelectorAll()                  |        nodelist                   
---------------------------------------------------------------------                                    
                                    

*/

// DOM Selection

// 1. getElementByid() | Harus ada node rootnya ( defaultnya adalah document )  document.getElemenById()
// Javascript carikan saya elemen yang id nya ".." yang ada di dalam dokument
const judul = document.getElementById("judul");

judul.style.color = "red";
judul.style.backgroundColor = "grey";
judul.innerHTML = "Rifqi Journal's";

// 2. document.getElementByTagName() -> HTML Collection
// Javascript carikan saya elemen - elemen yang tag nya ".." yang ada di dalam dokument
const p = document.getElementsByTagName("p");
p[0].style.backgroundColor = "lightblue";

// Pakai Looping
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

// jika mengambil sebuah elemen dengan getElementsByTagName walaupun cuma satu maka hasilnya tetap HTML Collection / array

// const h1 = document.getElementsByTagName("h1");

//jika ingin mengambil satu elemen maka tambahkan indexnya [0]
const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// document.getElementsByClassName()
// -> HTMLCollection
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "Ini di ubah dari Javascript";
