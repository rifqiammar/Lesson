function tampilAngka(n) {
  if (n == -100) {
    return;
  }
  console.log(n);
  return tampilAngka(n - 1);
}

// tampilAngka(10);

function faktorial(n) {
  if (n === 0) return 1;
  return n * faktorial(n - 1);
}

console.log(faktorial(5));

// Factorial dengan looping
function faktorialFor(n) {
  let hasil = 1;
  for (let i = n; i > 0; i--) {
    hasil *= i;
  }
  return hasil;
}

let f = faktorialFor(5);

console.log(f);
