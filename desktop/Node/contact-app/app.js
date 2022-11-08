// Core Module
const fs = require("node:fs");
const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Membuat Folder data
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });
};

const main = async () => {
  const nama = await tulisPertanyaan("Masukan Nama Anda: ");
  const noHp = await tulisPertanyaan("Masukan No Hp Anda: ");
  const email = await tulisPertanyaan("Masukan email Anda: ");

  const contact = { nama: nama, noHP: noHp, email };
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  console.log("Terimakasih Sudah Memasukan Data.");
  rl.close();
};

main();

// rl.question("Masukan Nama Anda :", (nama) => {
//   rl.question("Masukan No Handphone :", (noHp) => {
//     const contact = { nama, noHp };
//     const file = fs.readFileSync("data/contacts.json", "utf-8");
//     const contacts = JSON.parse(file);
//     contacts.push(contact);

//     fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

//     console.log("Terimakasih Sudah Memasukan Data.");
//     rl.close();
//   });
// });
