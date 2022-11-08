// Dom Manipulasi Method
// Manipulasi Element

/*
    element.innerHTML             | Untuk merubah isi dari sebuah text yang sudah di seleksi
    element.style.< property >    | Untuk memrubah Style/css dari elemen yang sudah di seleksi
    element.setAttribute()        | Untuk Memanipulasi Attribut pada sebuah elemen
    element.classList             | Memanipulasi Class secara spesifik
*/

//1. element.innerHTML

const judul = document.getElementById("judul");
judul.innerHTML = "<em>Hallo</em>";

/*
 const sectionA = document.querySelector("section#a");
 // Mengganti Seluruh Isi dari Section A
  sectionA.innerHTML = "Bismillah";

  sectionA.innerHTML = "<div><p>Paragraf1</p></div>";

*/

// 2. element.style.< property >

judul.style.color = "lightblue";
judul.style.backgroundColor = "salmon";

// 3. element.setAttribute()
/*
  Digunakan untuk megelola attribut

     elemen.getAttribute()
     elemen.setAttribute()
     elemen.removeAttribute()

     Attribute adalah Sesuatu yang menempel pada HTML | id=".."      href=".."
*/

// const juduls = document.getElementsByTagName("h1")[0];
// judul.setAttribute("name", "Ammar");

const link = document.getElementsByTagName("a")[0];
link.setAttribute("link", "instagram.com");

// Mengetahui Isi dari Attribut Elemen
link.getAttribute("href");

// Menghilangkan Atribut
link.removeAttribute("href");

// 4. elemen.classList
/*
    element.classList.add()      | Menambah Class Baru
    element.classList.remove()   | Menghapus / Menghilangkan Class yang ada
    element.classList.toggle()   | Jika sebuah element tidak memiliki class tertentu maka akan di tambahkan jika sudah punya toggle akan menghilangkan class tersebut
    element.classList.item()     | Untuk Mengetahui Class tertentu yg ada di sebuah element
    element.classList.contains() | cek apakah elemen tsb memiliki class tertentu
    element.classList.replace()  | Mengganti Class yang ada dengan yang baru
*/
const p2 = document.querySelector(".p2");
// Menambahkan Class Lable
p2.classList.add("lable");

// menghapus Class Lable jika p2 punya class lable kalo tidak punya tidak apa apa
p2.classList.remove("lable");

// cek p2 sudah punya lable blum jika belum tambahkan jika sudah hapus
p2.classList.toggle("lable");
/*
    
    document.body.classList.toggle('biru-muda')

    toggle ini bisa di simpan di sebuah tombol
    jika di klik seperti nyalakan lampu atau matikan lampu
    <button>
*/

//  Untuk Mengetahui nama class pada sebuah elemen
p2.classList.item(2); //(2) adalah urutan class ke 2 menghitung dari 0

// Menanyakan pada Javascriptnya,  Adaka Class ke 2 di dalam p2
p2.classList.contains(2); // Jika ada True jika tidak False

// Mewngganti class
p2.classList.replace("lable", "tag"); // Mengganti / Replace class lable menjadi tag
