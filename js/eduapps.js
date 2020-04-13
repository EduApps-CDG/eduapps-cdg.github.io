//var EduApps = {
	
	/*LoginFB: function() {
		FB.getLoginStatus(function(__response) {
			statusChangeCallback(__response);
		});
	},*/
	
function curl(url = "", ready) {
	  var xhr = new XMLHttpRequest();
	  //xhr.responseType = "application/text";
	  
	  xhr.open("GET", url);
	  xhr.setRequestHeader('Content-Type', 'application/xml');
	  xhr.setRequestHeader('Access-Control-Allow-Origin','*');
	  xhr.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  xhr.withCredentials = true;
	  if (typeof ready === "function") {
	    ready.apply(xhr);
	  }
	  
	  
	  xhr.onreadystatechange = function() {
	    if (xhr.readyState === 4 && xhr.status === 200) {
	      ready();
	    } else if (xhr.readyState === 4 && xhr.status !== 200) {
	      ready();
	    }
	  }
	  xhr.send();
	}
//};