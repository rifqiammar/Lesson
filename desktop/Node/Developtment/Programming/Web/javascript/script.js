alert ("Tebak Angka 1 - 5 \n Kamu hanya punya 3 Kesempatan")

let p = parseInt(prompt("Masukan Angka: "))
let comp = Math.floor(Math.random() * 10) + 1;


console.log(comp);



















// if(comp <= 0.30){
//     comp = "Semut";
// }else if(comp > 0.30 && comp < 0.60){
//     comp = "Musang";
// }else{
//     comp = "Gajah";
// };


// let hasil = "";



// if(p === comp){
//     hasil = "Seri";
// }else if(p === "Semut"){   
//     hasil = (comp === "Gajah") ? "Menang" : "Kalah";
// }else if(p === "Musang"){
//     hasil = (comp === "Semut") ? "Menang" : "Kalah";
// }else if(p === "Gajah"){
//     hasil = (comp === "Musang") ? "Menang" : "Kalah";
// }else{
//     hasil = "Masukang Pilihan yang tepat!"
// }


// console.log(p+" VS "+comp+" : "+hasil);