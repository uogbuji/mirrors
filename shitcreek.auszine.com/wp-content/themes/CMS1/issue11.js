
// hack for local testing
var upload_dir = '/wp-content/uploads/issue11/';
if ((""+location).indexOf("localhost") != -1)
	upload_dir = "/scr" + upload_dir;

// initialize soundManager and preload images
soundManager.debugMode = false;
soundManager.url = '/soundmanager/swf/';
soundManager.onload = function() {
  	machinegun = soundManager.createSound({
    	id: 'machinegun',
    	url: upload_dir + 'machinegun.mp3',
    	autoLoad: true
  	});
  	missile = soundManager.createSound({
    	id: 'missile',
    	url: upload_dir + 'missile.mp3',
    	autoLoad: true
  	});
}	

// next page button
function next_page(url) {
	if (soundManager.supported() && machinegun.loaded) {
		machinegun.play();
		var statement = "location='"+url+"'";
		var t=setTimeout(statement,1000);
	} else {
		location = url;
	}
}	

// previous page button
function prev_page(url) {
	if (soundManager.supported() && machinegun.loaded) {
		machinegun.play();
		var statement = "location='"+url+"'";
		var t=setTimeout(statement,1000);
	} else {
		location = url;
	}
}

// toc page button
function toc_page(url) {
	if (soundManager.supported() && missile.loaded) {
		missile.play();
		var statement = "location='"+url+"'";
		var t=setTimeout(statement,4000);
	} else {
		location = url;
	}
}
	