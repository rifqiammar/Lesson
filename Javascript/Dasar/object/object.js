// Membuat Object Angkot
function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;
  // Method
  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log("Angkot Masih Kosong!");
      return false;
    }
    // Pengecekan Jikana Nama Penumpang ada \ tidak
    if (this.penumpang.find((x) => x == namaPenumpang)) {
      this.penumpang.pop(namaPenumpang);
      this.kas += bayar;
    } else {
      console.log(`Nama ${namaPenumpang} Tidak ada di dalam angkot!`);
    }
    return this.penumpang;
  };
}

let angkot1 = new Angkot("Buds", ["cicahem", "cibiru"], [], 0);
let angkot2 = new Angkot("tom Crus", ["Antapani", "ciroyom"], [], 0);
