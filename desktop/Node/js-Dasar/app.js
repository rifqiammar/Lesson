// Core Module
const fs = require("node:fs");
const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Menuliskan String ke file secara Syncronus
// try {
//   fs.writeFileSync("data/test.txt", "Bismillah!, Hello World secara syncronus");
// } catch (err) {
//   console.log(err);
// }

// Menuliskan File Assyncronus
// fs.writeFile("data/test.txt", "Bismillah!, Hello World!", (err) => {
//   console.log(err);
// });

// fs.readFile("data/test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

rl.question("Masukan Nama Anda :", (nama) => {
  rl.question("Masukan No Handphone :", (noHp) => {
    const contact = { nama, noHp };
    const file = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);
    contacts.push(contact);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

    console.log("Terimakasih Sudah Memasukan Data.");
    rl.close();
  });
});
