
// hack for local testing
var upload_dir = '/wp-content/uploads/issue12/';
if ((""+location).indexOf("localhost") != -1)
	upload_dir = "/scr" + upload_dir;

// initialize soundManager and preload images
soundManager.debugMode = false;
soundManager.url = '/soundmanager/swf/';
soundManager.onload = function() {
  	sound1 = soundManager.createSound({
    	id: 'sound1',
    	url: upload_dir + 'DogfightGiggle.mp3',
    	autoLoad: true
  	});
}	

function playSound1() {
	//if (soundManager.supported() && sound1.loaded) {
	if (soundManager.supported()) {
		sound1.play();
	} else {
		alert("Sorry, I can't play the mp3.");
	}
}	
	
