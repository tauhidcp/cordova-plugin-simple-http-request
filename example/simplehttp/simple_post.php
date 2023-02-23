<?php

$_POST = json_decode(file_get_contents('php://input'), true); // Convert JSON Input to $_POST

// var_dump($_POST); // Print $_POST; 

echo "Anda Mengirimkan Data sbb: \n Nama : ".$_POST['nama']. ", \n Nohp : ".$_POST['nohp']. ", \n Alamat : ".$_POST['alamat']; // Print $_POST by name

?>