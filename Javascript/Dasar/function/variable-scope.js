// "use Strict"

// global scope / window scope
let i = 2;
let genap;

if (i % 2 == 0) {
  // Variable yang dibuat di dakam blok scope hanya berlaku di blok ini saja
  //  let genap = true;

  // variable ini dibuat di luar scope ini
  genap = true;
}

if (genap) {
  console.log("Genap!");
}
