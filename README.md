# cordova-plugin-simple-http-request

cordova plugin to execute http request like get, post and upload file to server. Basically, this plugin implemented from Ajax to allow HTTP Request from cordova application. This plugin is pure JavaScript and is specific to simple needs. for complex needs you may use another plugin

### Tested on:

- NodeJS  	      : 19.4.0
- Cordova 	      : 11.1.0
- cordova-android : 11.0 
- Java 11 
- PHP 8.1.12 (Xampp) 


### Install/Uninstall

install from github repository using this command
```
cordova plugin add https://github.com/tauhidcp/cordova-plugin-simple-http-request.git
```
or install from npmjs package using this command 
```
cordova plugin add id.my.tauhidslab.httpreq
```

uninstall using this command
```
cordova plugin rm id.my.tauhidslab.httpreq
```


### How to Use

First of all, we need to allow Javascript and Ajax Script from Cordova Application. Replace your **Content-Security-Policy** in **index.html** file with following tag

```
<meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'">
```

Then, make sure your device has connected to server. Simply test connection using ping! and **Disable Windows Firewall !!**


### Example HTTP Get 

1. Simple Server script to print String using PHP (**simple_get.php**)

```
<?php

echo "Balasan dari Server"; // Simple Respon From Server
//echo "Nama Anda ". $_GET['user']; // Get Parameter

// JSON Output
//$data = array("nama"=>"Ahmad Tauhid", "nohp"=>"081907558xxx", "alamat"=>"Lombok NTB");
//echo json_encode($data);

?>
```

2. Client script Get Data From server using this plugin (Cordova) 

```
function getData(){

	var addr = "http://192.168.1.7/simplehttp/simple_get.php";
  // var addr = "http://192.168.1.7/simplehttp/simple_get.php?user=budi"; // Get With Parameter
  
	HTTPReq.getData(addr, onSuccess, onError);
	
	function onSuccess(s){
		alert(s);
		
		// JSON output
		// var rs = JSON.parse(s);
		// alert("Nama :"+rs['nama']+"\n Nohp :"+rs['nohp']+"\n Alamat :"+rs['alamat']);
	}
	
	function onError(e){
		alert(e);
	}
	
}
``` 

### Example HTTP Post 

1. Server Side to Handle User Input from Post Method (**simple_post.php**) 

```
<?php

$_POST = json_decode(file_get_contents('php://input'), true); // Convert JSON Input to $_POST

// var_dump($_POST); // Print $_POST; 

echo "Anda Mengirimkan Data sbb: \n Nama : ".$_POST['nama']. ", \n Nohp : ".$_POST['nohp']. ", \n Alamat : ".$_POST['alamat']; // Print $_POST by name

?>
```

2. Client script From Cordova to Send Data Using Post Method in JSON Format 

```
function postData(){
	
	var addr = "http://192.168.1.7/simplehttp/simple_post.php";
	var data = {
				nama   : "Ahmad Tauhid",
				nohp   : "085739244xxx",
				alamat : "Mataram Nusa Tenggara Barat"
				};
	
	HTTPReq.postData(data, addr, onSuccess, onError);
	
	function onSuccess(s){
		alert(s);
	}
	
	function onError(e){
		alert(e);
	}
	
}
```

### Example HTTP Upload File 

1. Server Script (PHP) to handle Upload File (**simple_upload.php**)

```
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
```

2. Client script to upload file from Cordova 

```
function uploadFile(){
	
	var addr     = "http://192.168.1.7/simplehttp/simple_upload.php";
	var file     = document.getElementById("fileupload");
	var name     = "myfile";
	
	HTTPReq.uploadFile(file, name, addr, onSuccess, onError);
	
	function onSuccess(s){
		alert(s);
	}
	
	function onError(e){
		alert(e);
	}
	
}
```
