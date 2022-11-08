<?php

$input = 39247;
$numTostr = strval($input);
$nums  = str_split($numTostr);
$arrNums = [];

for($i=0; $i < sizeof($nums); $i++){

    // $arrNums[] = $nums[$i];
        $num1 = $nums[$i];
    for($j=0; $j < sizeof($nums); $j++){
        $num2 = $nums[$j];
        if($num1 > $num2){
            echo $num1.PHP_EOL;
        }else if($num2 > $num1){
            echo $num2.PHP_EOL;
        }
    }

}

// echo sort($arrNums);


// $arr = [];

// for($i = 0; $i < strlen($num); $i++ ){
//     var_dump($num[$i]);
// }



