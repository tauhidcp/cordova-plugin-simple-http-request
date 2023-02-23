
/* 
 * Simple HTTP Request Function 0.1.0 
 * made with love by. Ahmad Tauhid (http://www.tauhidslab.my.id/)
 * https://github.com/tauhidcp/cordova-plugin-simple-http-request.git
 * 
 */

module.exports = { 
	getData:function(addr, onSuccess, onError){ 
		var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
			  if(xhr.readyState === 4) {
				if(xhr.status === 200) {
					  onSuccess(xhr.responseText);
				} else {
					  onError("Error : "+xhr.statusText);
				}
			  }
			}
		xhr.open("GET", addr);
		xhr.send();		
	},
	postData:function(data, addr, onSuccess, onError){ 
		var xhr = new XMLHttpRequest();
			xhr.open("POST", addr, true);
			xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			xhr.onreadystatechange = function() { 
			  if(xhr.readyState === 4) {
				if(xhr.status === 200) {
				  onSuccess(xhr.responseText);
			  } else {
				  onError("Error : "+xhr.statusText);
			  }
			}
			}
			xhr.send(JSON.stringify(data));
	},
	uploadFile:function(file, name, addr, onSuccess, onError){ 
		var formData = new FormData();
			formData.append(name, file.files[0]);
		var xhr = new XMLHttpRequest();
			xhr.open("POST", addr, true);
			xhr.onreadystatechange = function() { 
			  if(xhr.readyState === 4) {
				if(xhr.status === 200) {
				  onSuccess(xhr.responseText);
			  } else {
				  onError("Error : "+xhr.statusText);
			  }
			}
			}
			xhr.send(formData);
	}
};
