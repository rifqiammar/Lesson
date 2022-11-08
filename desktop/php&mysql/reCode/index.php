<?php 
    require_once "function/kopi.php";

  $cars = tampilData("SELECT * FROM produk");

?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Manajemen Data Barang</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
  </head>
  <body>
    <h1 class="mt-4 ms-3 fs-2">Manajemen Data Barang</h1>

    <a class="btn btn-success ms-3 mt-3 mb-2" href="#" role="button">Tambah data</a>

    <!-- Table -->
    <div class="container">
        <table class="table mt-3">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nama</th>
                <th scope="col">brand</th>
                <th scope="col">transmisi</th>
                <th scope="col">harga</th>
                <th scope="col">gambar</th>
                <th scope="col">Aksi</th>
                </tr>
            </thead>
            <tbody>
              <?php foreach ($cars as $car ) : ?>
                <tr>
                <th scope="row">1</th>
                <td><?= $car["nama"]; ?></td>
                <td><?= $car["brand"]; ?></td>
                <td><?= $car["transmisi"]; ?></td>
                <td><?= $car["harga"]; ?></td>
                <td><?= $car["gambar"]; ?></td>
                <td>
                  <a href="#">UBAH</a> | <a href="#">HAPUS</a>
                </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    <!-- Table -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
  </body>
</html>