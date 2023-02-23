<?php
  
  $folder = "upload/";
 
 if (!file_exists($folder)) mkdir($folder);  

  $fileupload      = $_FILES['myfile']['tmp_name'];
  
  if (!empty($fileupload)){
    
	$file_path =  $folder . '/' . $_FILES['myfile']['name'];
   
    move_uploaded_file($_FILES["myfile"]["tmp_name"], $file_path);
  
    echo "Data Berhasil Diupload";
	
  } else {
   
   echo "Data Gagal Diupload";
  
  }
  
?>