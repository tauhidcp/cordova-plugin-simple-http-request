/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
document.getElementById("getData").addEventListener("click", getData);
document.getElementById("postData").addEventListener("click", postData);
document.getElementById("uploadFile").addEventListener("click", uploadFile);
document.getElementById("downloadFile").addEventListener("click", downloadFile);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}


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

function downloadFile(){
	
	var addr   = "http://192.168.1.7/simplehttp/download/sample.pdf";
	var output = "download_sample.pdf"; // Output name in Download Folder
	
	HTTPReq.downloadFile(addr, output, onSuccess, onError);
	
	function onSuccess(s){
		alert(s);
	}
	
	function onError(e){
		alert(e);
	}
	
}
