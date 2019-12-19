var EduApps = {
	
	LoginFB: function() {
		FB.getLoginStatus(function(__response) {
			statusChangeCallback(__response);
		});
	}
};
