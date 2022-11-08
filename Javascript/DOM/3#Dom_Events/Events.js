/*    Events !== Even  |  Events = Kejadian  |  Even = Genap
 */
// DOM Events
/*
        "Event pada javascript merepresentasikan sebuah kejadian yang terjadi di dalam DOM..."
                ...Kejadian Tersebut Bisa dilakukan oleh user,(Mouse Event, Keyboard Event, dll)
       ataupun dilakukan secara otomatis oleh API (animasi selesai dijalankan, halaman selesai di load, dll)  
https://developer.mozilla.org/en-US/docs/Web/API/Event       


Komputer akan 'Mendengarkan' Apakah ada yang di lakukan oleh user atau tidak

Cara 'Mendengarkan' Event ada dua cara yaitu
- Event Handler
    - Inline HTML attribute | Menanamkan Event di dalam Attribut HTML
    -Element method      | Menggunakan Element Method

- addEventListener()    
*/

// 1. Event Handler

/* Memanggil keyword on lalu eventnya apa
    - Jika pada mouse atau trackpad maka eventya onclick
*/

// Klik Paragraf 3 maka backgroundya menyala
const p3 = document.querySelector(".p3");

function ubahWarnaP3() {
  p3.style.backgroundColor = "lightblue";
}
/*  Cara 1 Inline HTML attribut  | Sangat tidak disarankan
    Didalam elemen Htmlnya di tambahkan attribut : onclick="ubahWarna()" 
            <p class="p3" onclick="ubahWarna()">paragraf 3</p>
*/

// Cara 2 Element method
const p2 = document.querySelector(".p2");
function ubahWarnaP2() {
  p2.style.backgroundColor = "lightblue";
}
p2.onclick = ubahWarnaP2; // ubahWarnaP2 tidak menggunakan () agar function tidak di jalankan dulu

//--------------------------------

// 2. addEventListener() | Function Baru

// Mendengarkan Event ketika paragraf 4 di klik akan menambahkan Item Baru
const p4 = document.querySelector("section#b p");
// Javascript carikan element p4 lalu ketika ada event click lakukan sesuatu
p4.addEventListener("click", function () {
  const ul = document.querySelector("section#b ul");
  const li = document.createElement("li");
  const textLi = document.createTextNode("Item Baru");
  li.append(textLi);
  ul.append(li);
}); // addEventListener(Eventnya apa, jalankan function aksi)

/* 
    Perbedaan

    -  Event Handler  | cara lama

const p3 - document.querySelector('.p3')

p3.onclick = function() {        
    p3.style.backgroundColor = 'lightblue';                Event Pertama
}
p3.onclick = function () {
  p3.style.color = "red";                                  Event Kedua
};

Pada Event Handler Yang akan di kerjakan adalah Event Yang kedua Karena Event yang pertama akan di timpa
karena variable p3.onclick akan menimpa Variabale yang sama di bawahnya
-----------------------------------------------------------------------------------------------------------

  - addEventListener() | Function Baru
  Event tidak akan di timpa di karenakan addEventListener sebuah method object bukan variable

  p3.addEventListener("click", function () {
  p3.style.color = "red";
});


*/

p3.addEventListener("click", function () {
  p3.style.color = "red";
});

/*
    Daftar Event / Event List

    - Mouse Event 
    - Keyboard Event 
    - Resource Event | jika halaman di load
    - Focus Event  | Pada Form jika Text Field Inputan
    - View Event   
    - Form Event
    - Css Animation & Transition Event
    - Drag & Drop Event
    - dll

    https://developer.mozilla.org/en-US/docs/Web/Events
*/

p2.addEventListener("mouseenter", function () {
  p2.style.color = "red";
});
p2.addEventListener("mouseleave", function () {
  p2.style.color = "black";
});
