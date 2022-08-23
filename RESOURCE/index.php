<?php
$abc = array();
foreach (range(chr(0xC0), chr(0xDF)) as $b)
    $abc[] = iconv('CP1251', 'UTF-8', $b);
// print_r($abc);


foreach ($abc as $a) {

    echo '<button class="btn btn-default">' . $a . '</button>';
}