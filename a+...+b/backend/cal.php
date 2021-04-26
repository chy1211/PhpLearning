<?php
    $a = $_POST['a'];
    $b = $_POST['b'];
    $sum = 0;
    for($i=$a;$i<=$b;$i++){
        $sum += $i;
    }
    $response = json_encode($sum);
    echo $response;
?>