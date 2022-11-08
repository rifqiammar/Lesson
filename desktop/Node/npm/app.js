const fs = require("node:fs");
const readline = require("node:readline");
const validator = require("validator");

let v = validator.isEmail("rifqiammar@gmaaail.com");

console.log(v);
