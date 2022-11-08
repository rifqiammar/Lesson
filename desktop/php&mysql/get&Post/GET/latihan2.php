<?php 

    // Null COalesing Operator
    !isset($_GET["nama"]) || !isset($_GET["harga"]) ||
    !isset($_GET["asal"]) || !isset($_GET["id"]) ? header("Location: latihan1.php") : null;

    /* 
        if( !isset($_GET["nama"])) {
             header("Location: latihan1.php");
           exit; 
            }
    */    

     
    
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .nav{
            margin-left: 20px;
        }
        .container{
            text-align: center;
            margin-top: 50px;
        }
    </style>
    <title>GET</title>
</head>
<body>
<a href="latihan1.php" class="nav">Home</a>
    <div class="container">
    <img src="../img/<?= $_GET['gambar']; ?>" alt="" width="300">
    <br>
    <ul style="list-style: none ;">  
        <li>
            id : <?= $_GET['id']; ?>
        </li>
        <li>
            <?= $_GET['nama']; ?>
        </li>
        <li>
           Asal : <?= $_GET['asal']; ?>
        </li>
        <li>
           Harga : <?= $_GET['harga']; ?>
        </li>
    </ul>
    </div>
</body>
</html>
