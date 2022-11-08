<?php   

$menu = [
    [
        "id" => 1,
        "nama" => 'Rancabali Aprikot',
        "asal" => "Jawa Barat",
        "harga" => 250_000,
        "gambar" => 'rancabali.jpg'
    ],
    [
        "id" => 2,
        "nama" => 'Gayo Apple Cider',
        "asal" => "Aceh",
        "harga" => 150_000,
        "gambar" => 'gayo.jpg'
    ],
    [
        "id" => 3,
        "nama" => 'Ethiopia Kelloo Blossom',
        "asal" => "Ethiopia",
        "harga" => 300_000,
        "gambar" => 'ethiopia.jpg'
    ]
];

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GET</title>
</head>
<body>
    <br>
    <h1>Daftar Kopi</h1>
        <ul>
        <?php foreach($menu as $value): ?>            
            <li>
                <a href="latihan2.php?id=<?= $value["id"]?>&nama=<?= $value["nama"]?>&
                asal=<?= $value["asal"]?>&harga=<?= $value["harga"]?>&gambar=<?= $value["gambar"]?>"> <?= $value['nama']; ?></a>
            </li>
            <br>
            <?php endforeach; ?>    
        </ul>
</body>
</html>