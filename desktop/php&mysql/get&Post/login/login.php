<?php  
    // Cek apakah tombol submit sudah di tekan atau belum
        if(isset($_POST['submit'])) {
            // cek Username & Password
            if($_POST["username"] === 'root' && $_POST["password"] === "admin"){
                // Jika Benar Redirect ke halaman admin
                header('Location: admin.php');
                exit;
            } else {
                // Jika Salah Tampilkan Pesan Error
                $error = true;
            }
        }
        // $_POST["username"] === 'root' && $_POST["password"] === "admin" ? header('Location: admin.php') : "Password / Username Salah";


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <h1>Login Admin</h1>

        <!-- Menampilkan Pesan Error -->
        <?php if($error): ?>
            <p style="color: red ; font-style:italic;">Mohon Maaf Password / Username Salah</p>
        <?php endif; ?>

    <ul>
    <form action="" method="POST">
        <li>
            <label for="username">Username :</label>
            <input type="text" name="username" id="username">
        </li>
        <li>
            <label for="password">password :</label>
            <input type="password" name="password" id="password">
        </li>
        <li>
            <button type="submit" name="submit">Login</button>
        </li>
    </form>
    </ul>
</body>
</html>