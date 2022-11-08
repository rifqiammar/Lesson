<?php  

/* 
    Variable Super Global
    Variable Milik PHP
    Merupakan Array Asspsiative
    
    - $_GET
    - $_POST
    - $_REQUEST
    - $_SESSION
    - $_COOKIE
    - $_SERVER
    - $_ENV
    
*/

// variable Global

$x = 10;

function tampilX() {
    global $x;
    echo $x;
}

tampilX();  




var_dump($_POST['nama']);


 