<?php  

$jam = 19;
$menit = 16;
$detik = 0;
$bulan = 06;
$tanggal = 16;
$tahun  = 2022;


function jamToko($jam, $menit, $detik, $bulan, $tanggal, $tahun){

    $t = time();
    $DisvountDate = mktime($jam,$menit, $detik, $bulan, $tanggal, $tahun);
    $DiscountEnd = strtotime('16 Jun 2022, 19:29');

    // Mulai Diskon Hingga Akhir
   if($t >= $DisvountDate && $t <= $DiscountEnd){
        echo "Bismillah Toko Sudah dibuka".PHP_EOL;
    }
    else {
        echo "Toko Masih Tutup".PHP_EOL;
    }
    
    var_dump(date("d M Y",$DisvountDate)." | ".date("D M Y", $t));
}

jamToko($jam, $menit, $detik, $bulan, $tanggal, $tahun);

