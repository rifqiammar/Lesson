<?php  

$data = [
    
        ['nama' => 'Rifqi', 'Kota' => 'Bekasi'],
        ['nama' => 'Ammar', 'Kota' => 'Bandung'],
        ['nama' => 'Ramadhan', 'Kota' => 'Jogja']

        ];

foreach($data as $value){
    echo $value['nama']." ".$value['Kota'].PHP_EOL;
}