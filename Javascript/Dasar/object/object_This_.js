// Scope Global adalah Window      window.a
let a = 10; // di dalam object window terdapat property / variable a   window.a    this.a
/*  Permisalan
 Class Window{    secara global
    let a : 10        | Property

    function ()    | method
 }
*/

// Function Declarration
function halo() {
  console.log("Bismillah");
}
halo();
// sama seperti   window.halo();   | this.halo()

// pada function Declaration This Mengembalikan obejct Global

// ========================================================================

// Object Literal
let obj = { a: 10, nama: "Rifqi Ammar Ramadhan" };
obj.halo = function () {
  console.log(this);
  console.log("Bismillah, Hallo Dari Object Literal");
};
// This Mengembalikan Obeject yang bersangkutan / object ini sendiri       | obj
obj.halo();

// ================================================================================

//  Constructor

function Halo() {
  console.log(this);
  console.log("Bismillah, Hallo dari Constructor");
}

// Mengembalikan Object yang baru di buat | instance yang dibuat
new Halo();
// contoh
// This nya untuk obj 1
let obj1 = new Halo();
// This nya untuk obj 2
let obj2 = new Halo();
