const http = require("http");
const port = 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    const url = req.url;
    if (url === "/about") {
      res.write("<h1> Assalamu'alaikum, Anda sekarang berada di halaman About</h1>");
    } else if (url === "/contact") {
      res.write("<h1> Assalamu'alaikum, Anda sekarang berada di halaman Contact</h1>");
    } else {
      res.write(`<h1> 404 Not Found </h1> <p> Afwan Halaman <b>${url}</b> tidak ada </p>`);
    }

    console.log(url);
    res.end();
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
  });
