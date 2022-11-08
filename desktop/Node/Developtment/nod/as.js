var mysql = require("mysql");
let i = "b";
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cars99room",
});

con.connect(function (err) {
  if (err) throw err;
  con.query(`SELECT * FROM produk  `, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

RowDataPacket->nama;
