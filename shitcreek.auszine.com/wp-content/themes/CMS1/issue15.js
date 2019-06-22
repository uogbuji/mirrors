
// hack for local testing
var upload_dir = '/wp-content/uploads/issue15/';
if ((""+location).indexOf("localhost") != -1)
	upload_dir = "/scr" + upload_dir;

// initialize soundManager and preload images
if (typeof(soundManager) != "undefined") {
	soundManager.debugMode = false;
	soundManager.url = '/soundmanager/swf/';
	soundManager.onload = function() {
	  	sound1 = soundManager.createSound({
	    	id: 'sound1',
	    	url: upload_dir + 'DogfightGiggle.mp3',
	    	autoLoad: true
	  	});
	}
}	

function playSound1() {
	//if (soundManager.supported() && sound1.loaded) {
	if (soundManager.supported()) {
		sound1.play();
	} else {
		alert("Sorry, I can't play the mp3.");
	}
}

function getWindowHeight() {
  	var windowHeight = 0;
  	if (typeof(window.innerHeight) == 'number') {
    	windowHeight = window.innerHeight;
  	} else if (typeof(document.documentElement.clientHeight) == 'number') {
    	windowHeight = document.documentElement.clientHeight;
  	} else if (typeof(document.body.clientHeight) == 'number') {
    	windowHeight = document.body.clientHeight;
  	}
  	return windowHeight;
}

function adjustHeightToFillWindow(contentId) {	
	var windowH = getWindowHeight(); 
	var headerH = document.getElementById('header').offsetHeight;
	var footerH = document.getElementById('footer').offsetHeight;
	var contentMinH = windowH - (headerH+footerH);
	var content = document.getElementById(contentId);
	if (content.offsetHeight < contentMinH) {
		document.getElementById(contentId).style.height = ""+contentMinH+"px";
	}
}

function showSelectedImage(menu) {
	var opt = menu.options[menu.selectedIndex];	
	
	// show the image
	var imgdiv = document.getElementById('imgdiv');
	var file = opt.value;
	//var imgurl = "http://localhost/scr/wp-content/uploads/issue13/" + file;
	var imgurl = "http://shitcreek.auszine.com/wp-content/uploads/issue15/" + file;
	imgdiv.style.backgroundImage = "url('" + imgurl + "')";
	imgdiv.style.backgroundRepeat = "no-repeat";
	
	// show the link
	var linkdiv = document.getElementById('linkdiv');
	var linkurl = artlinks[menu.selectedIndex];
	//linkdiv.innerHTML = "<p><a href='" + linkurl + "' target='_blank'>" + opt.text + "</a></p>";	
	linkdiv.innerHTML = "<p><a href='" + linkurl + "' target='_blank' style='font-size:85%;'>artist&rsquo;s website</a></p>";	
}

function showSelectedBg(menu) {
	var opt = menu.options[menu.selectedIndex];	
	
	// show the background
	var file = opt.value;
	//var imgurl = "http://localhost/scr/wp-content/uploads/issue13/" + file;
	var imgurl = "http://shitcreek.auszine.com/wp-content/uploads/issue13/" + file;
	if (document.body) {
		document.body.style.backgroundImage = "url('" + imgurl + "')";
	}
	
	// show the link
	var bglinkdiv = document.getElementById('bglinkdiv');
	var bglinkurl = bglinks[menu.selectedIndex];
	//bglinkdiv.innerHTML = "<p><a href='" + bglinkurl + "' target='_blank'>" + opt.text + "</a></p>";
	bglinkdiv.innerHTML = "<p><a href='" + bglinkurl + "' target='_blank' style='font-size:85%;'>artist&rsquo;s website</a></p>";
	
}
