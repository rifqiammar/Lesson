// Function
/*
"Fungtion adalah kunci utama pada javascript, yang membuat javascript sangat powerfull"

Built in function : String

charAt()    slice()  split() 
toString()  toLowerCase() toUpperCase()

https://www.w3schools.com/jsref/jsref_obj_string.asp

*/

function coba(fcb) {
  return fcb();
}

coba(() => {
  console.log("Assalamu'alaikum, Bismilah");
});

function test() {
  return "Bismillah";
}

console.log(test());
