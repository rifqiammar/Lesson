// DOM Manipulation Method 2
// - Manipulasi Node
/*
    document.createElement()  | Create Elemen / Tag HTML
    document.createTextNode() | Create Text / Isi dari Tag html
    node.appendChild()          | Simpan Ke Akhir dari sebuah elemen Parent
    node.insertBerfore()        | Memasukan elemen Sebekum elemen tertentu   
    parentNode.removeChild()    | Menghapus ELemen child yang ada di dalam parent
    parentNode.replaceChild()   | mengganti ELemen child yang ada di dalam parent
    ......dll
*/

// 1. Menambahkan Tag <P> (paragraf) kedalam dokumen HTML
// buat elemen baru
// Membuat Paragraf (<p>) Baru
const pBaru = document.createElement("p"); // Paragraf baru telah di buat tetapi masih di dalam memory belum di tampilkan
// Membuat tulisan text untuk dimasukan kedalam paragraf
const teksPBaru = document.createTextNode("Paragraf Baru"); // node ini masih terpisah belum tehubung dengan Tag <p> atau tag manapun dan masih di dalam memory
// Simpan Tulisan kedalam paragraf
/*
    Seperti Merangkai bunga
    - ambil dulu bunganya 
    - dirangkai di vas / pot bunga
    - lalu simpan ketempatnya
  
    pBaru adalah Vas / pot Bunga nya
    teksPbaru adalah bunganya
    sectionA adalah Ruang Tamu
    */
// append = menambahkan
pBaru.appendChild(teksPBaru);
// Simpan P baru di akhir section A
// Ambil Section A nya
const sectionA = document.getElementById("a");
// Simpan vas bunganya keruang tamu
sectionA.appendChild(pBaru);

// --------------------------------------------------------------------
// Membuat List Item Baru letaknya di tengah2
const liBaru = document.createElement("li");
const isiLi = document.createTextNode("Item Baru");
liBaru.appendChild(isiLi);

// dua hal yang harus di tangkap
// 1. Parent (ul)
// 2. element setelahnya (<li> item2 </li>)
const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)"); // nth-child(2) psudeo class css

//Panggil elemen Parentnya dahulu lalu insert befor
// (liBaru, lalu di simpan sebelum elemen apa)
ul.insertBefore(liBaru, li2);

// =======================================================================================
// 3.   parentNode.removeChild()
//  - Mencari parentnya
//  - element yang mau di remove

// const sectionA = document.getElementById("a"); | mencari parent

// element yang mau di remove
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

// ...........................................................................................
// 4. parentNode.replaceChild()

const sectionB = document.getElementById("b"); // Parent
// yang mau di replace
const p4 = sectionB.querySelector("p"); // di cari di lingkup section B

// Membuat Elemen Baru
const h2Baru = document.createElement("h2");
const isiH2 = document.createTextNode("Judul Baru!");

// Memasukan text kedalam h2
h2Baru.appendChild(isiH2);

//replace
// parent.replace(isi baru, yang mau di replace)
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = "lightgreen";
liBaru.style.backgroundColor = "lightgreen";
h2Baru.style.backgroundColor = "lightgreen";

// ------------------------------------------------------------------------------
/*
    Manipulasi Method (Method Baru)
    - parentNode.append() | Menambahkan elemen di akhir dari sebuah parent
    - parentNode.prepend() | di awal
    - childNode.before()   |
    - childNode.after()    |
    - childNode.remove()   |
    - childNode.replaceWith() |
*/
