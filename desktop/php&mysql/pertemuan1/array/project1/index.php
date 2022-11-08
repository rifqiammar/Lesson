<?php 

$produk = [
  [
    'nama' => 'Kopi Aceh Gayo Wine',
    'Harga' => '120_000',
    'Stok'  => '300',
    'tgl_produksi' => 'Jan 01 2022',
    'tgl_kadaluarsa' => 'Jan 01 2023'
  ],
  [
    'nama' => 'Kopi Mandailing',
    'Harga' => '130_000',
    'Stok'  => '200',
    'tgl_produksi' => 'Jan 01 2022',
    'tgl_kadaluarsa' => 'Jan 01 2023'
  ]   

];


foreach($produk as $value){
    $now = time();

    $kadaluarsa = strtotime($value['tgl_kadaluarsa']);

    if($now >= $kadaluarsa){
        echo $value['nama']." "."Sudah Kadaluarsa".PHP_EOL;
    }else{
        echo 'Kopi Dalam Keadaan Baik'.PHP_EOL;
    };

}