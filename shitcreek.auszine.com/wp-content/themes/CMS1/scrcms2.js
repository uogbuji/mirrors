//base library

d=document;l=(d.layers)?1:0;op=navigator.userAgent.toLowerCase().indexOf('opera')!=-1; msie=(d.all)?1:0;

//get element
function gE(e,f){if(l){f=(f)?f:self;var V=f.document.layers;
if(V[e])return V[e];for(var W=0;W<V.length;)t=gE(e,V[W++]);return t;}if(d.all)return d.all[e];return d.getElementById(e);}

//show element
function sE(e){if(l)e.visibility='show';else e.style.visibility='visible';}

//hide element
function hE(e){if(l)e.visibility='hide';else e.style.visibility='hidden';}

//get left posn
function gX(e){if(l) return e.left;else if(d.all)return e.style.pixelLeft;else return e.style.left}

//get top posn
function gY(e){if(l) return e.top;else if (d.all)return e.style.pixelTop;else return e.style.top}

//get width
function gW(e){if(l) return e.width;else return e.style.width}

//get height
//function gH(e){if(l) return e.clip.height;else if(op) return e.style.pixelHeight;else return e.style.height}

//get dynamic height
function gH(myid) { 
	divob = gE(myid);
	if (divob.offsetHeight) { eheight = divob.offsetHeight }
	else if (d.getElementById) {eheight = d.defaultView.getComputedStyle(test, "").getPropertyValue("height")}
	return eheight;
}

//set left
function sX(e,x){if(l)e.left=x;else if(op)e.style.pixelLeft=x;else e.style.left=x;}

// for issue-specific stuff like this, please use a separate file, e.g. 'issue7.js'
//var bgimage = new Array(4);
//bgimage[1] = "http://shitcreek.auszine.com/wp-content/uploads/issue7/scr7masks.jpg";
//bgimage[2] = "http://shitcreek.auszine.com/wp-content/uploads/issue7/scr7masks_textbg1290.jpg";
//bgimage[3] = "http://shitcreek.auszine.com/wp-content/uploads/issue7/masks_tile.gif";
//bgimage[4] = "http://shitcreek.auszine.com/wp-content/uploads/issue7/ballmasks_tile.gif";
//bgindex = 1;

function changeBg() 
{
	bgindex++;
	if (bgindex == 5) bgindex=1;
	d.body.style.backgroundImage="url('" + bgimage[bgindex] +"')";
	if (bgindex < 3) d.body.style.backgroundRepeat="no-repeat";
	else d.body.style.backgroundRepeat="repeat";

	contobj = gE("indexcontent") ;
	if (bgindex > 1) 
	  {
	   contobj.style.filter="progid:DXImageTransform.Microsoft.Alpha(opacity=75)";
	   contobj.style.opacity="0.75"
	  }
	else
	  {
	   contobj.style.filter="progid:DXImageTransform.Microsoft.Alpha(opacity=90)";
	   contobj.style.opacity="0.90"
	  }
	if (bgindex == 2) 
	 {
	 d.body.style.backgroundColor="#9A9D92";
	 }
	 else
	 d.body.style.backgroundColor="#999";
	 
	/* 
	 contobj.style.backgroundColor="transparent";
	else contobj.style.backgroundColor="#FFF";
	*/
	//return true
} 

// for issue-specific stuff like this, please use a separate file, e.g. 'issue7.js'
//images preload
//prev_off = new Image;
//prev_off.src = "http://shitcreek.auszine.com/wp-content/uploads/issue8/prev_off.gif";
//prev_on = new Image;
//prev_on.src = "http://shitcreek.auszine.com/wp-content/uploads/issue8/prev_on.gif";
//next_off = new Image;
//next_off.src = "http://shitcreek.auszine.com/wp-content/uploads/issue8/next_off.gif";
//next_on = new Image;
//next_on.src = "http://shitcreek.auszine.com/wp-content/uploads/issue8/next_on.gif";

function roll(img_name, img_src) {
   document[img_name].src = img_src;
}

/*
Invoke with:
<a href="somewhere.html" onmouseover="roll('sub_but', 'movedown.gif')" onmouseout="roll('sub_but', 'moveup.gif')">
<img src="moveup.gif" ALT="Move your mouse over me" name="sub_but">
</a>
*/

function rollIn(imgName, divid) {
	document[imgName].src=eval(imgName + "_on.src");
}

function rollOut(imgName,divid) {
	document[imgName].src=eval(imgName + "_off.src");
}

// Why are these globals? 
var speed = 1; // Delay between increments.
var inc = 30; // Increment amount -- also changes speed

function showPoem() {
	var obj = gE("poem");
	obj.style.visibility="visible"
	obj.style.textAlign="left";
}

function scaleToWidth(id) {
	if (! document.getElementById(id)) return; 
	var obj = document.getElementById(id);
	obj.style.width = "100px";
	adjWidth(obj.scrollWidth, 100, id);
}

// Shouldn't these numbers be parameters? What if the page layout changes?
function adjWidth(scrollwidth, current, id) {
	var obj = gE(id);
	//alert ("obj.scrollWidth is " + obj.scrollWidth);	  
	if (scrollwidth > 560)
	{ scrollwidth = 560} //max scrollwidth to fit page

  	obj.style.overflow="visible";
    
    var lmargin = Math.floor((660 - scrollwidth)/2);
	lm = lmargin+"px";
	obj.style.textAlign = "left"; 
	obj.style.width = "auto";  
	obj.style.marginLeft = lm; 
	obj.style.marginRight = lm; 

	var t = window.setTimeout("showPoem()", 600);	 
}

function gDW(myid)
{ 
	divob = gE(myid);
	if (divob.offsetWidth) { ewidth = divob.offsetWidth }
	else if (d.getElementById) {eheight = d.defaultView.getComputedStyle(test, "").getPropertyValue("width")}
	return ewidth;
}
	
function widenDiv(scwidth, current, id) 
{
	var obj = document.getElementById(id);
	if (current <= scwidth) 
	 {
	    i = current + inc;
	    obj.style.width = i;
	 }
	
	if (current <= scwidth) 
	    {
	    var t = window.setTimeout("widenDiv("+scwidth+", "+i+", '"+id+"')", speed);
	    } 
	 else 
	   {
	   obj.style.width = scwidth; 
	   }
}

function flashAudio(filename) {
	var flashcode='<object type="application/x-shockwave-flash" data="http://shitcreek.auszine.com/emff_silk.swf" width="105" height="40"> <param name="movie" value="http://shitcreek.auszine.com/emff_silk.swf"> <param name="wmode" value="transparent"> <param name="FlashVars" value="src=http://shitcreek.auszine.com/audio/' +filename +'"> Sound-player plug-in requires Flash V7 or later.  <a href="http://www.macromedia.com/go/getflashplayer" target="_blank">Get Flash</a>.</object>';
	document.write(flashcode)
}

function flashAudio2(fullmp3url) {
	//this version requires complete absolute URL to be passed
	var flashcode='<object type="application/x-shockwave-flash" data="http://shitcreek.auszine.com/emff_silk.swf" width="105" height="40"> <param name="movie" value="http://shitcreek.auszine.com/emff_silk.swf"> <param name="wmode" value="transparent"> <param name="FlashVars" value= "src=' +fullmp3url +'"> Sound-player plug-in requires Flash V7 or later.  <a href="http://www.macromedia.com/go/getflashplayer" target="_blank">Get Flash</a>.</object>';
	document.write(flashcode)
}	

function writeEmail(name,domain,screenLetters) {
   visible=(typeof(screenLetters)=="undefined")? name+"@"+domain : screenLetters;
   document.write ('<a href=mailto:'+name+'@'+domain+'>'+visible+'</a>');
}

function getWindowWidth() {
	var myWidth = 0; 
	if( typeof( window.innerWidth ) == 'number' ) {
    	//Non-IE
    	myWidth = window.innerWidth;
  	} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    	//IE 6+ in 'standards compliant mode'
    	myWidth = document.documentElement.clientWidth;
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    	//IE 4 compatible
    	myWidth = document.body.clientWidth;   
  	}
 	leftposn = Math.floor((myWidth-636)/2);
 	return leftposn; 
}

function positionMask(df) {
	lp = getWindowWidth();
	maskObj = gE('MaskLayer');
	if(df.length > 0 && df.indexOf("http://shitcreek.auszine.com/issue7/") != -1)
	{
	   maskObj.style.visibility="hidden";
	} 
	else 
	{
	    if (msie || op) sX(maskObj, lp);
	    else sX(maskObj, lp + "px");
	}
}



