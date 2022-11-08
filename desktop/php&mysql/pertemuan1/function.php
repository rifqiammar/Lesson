<?php 


// Fungsi Waktu

  echo  date('D, M, Y').PHP_EOL;
    $hari = date('D');
    $t = time();

  if($hari == 'Thu'){
        echo 'Sekarkang Hari Kamis'.PHP_EOL;
  }

  echo date('D M Y, g:i a', time()+30).PHP_EOL;

    $DisvountDate = mktime(14,12,0,06,16,2022);
    echo $DisvountDate.PHP_EOL;

  echo $t >= $DisvountDate ? "Bismillah Toko Sudah dibuka".PHP_EOL : "Toko Masih Tutup";

  if($t >= $DisvountDate ){
    echo "Bismillah Toko Sudah dibuka".PHP_EOL;
  }

//   Jam, Menit, Detik, Bulan, Tanggal, Tahun
  echo mktime(14,12,0,06,16,2022).PHP_EOL;

  echo strtotime("13 january 1997").PHP_EOL;

  echo  date("D M Y", strtotime("13 january 1997"));