// "http://www.netpublish.net/ii-test/july2007/" 
//withAbsoluteLinks "file:///C|/Documents and Settings/Peter/Desktop/Documents/scr_iijuly/site/"


d=document;l=(d.layers)?1:0;op=navigator.userAgent.toLowerCase().indexOf('opera')!=-1; msie=(d.all)?1:0;

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
function gH(myid)
{ 
divob = gE(myid);
if (divob.offsetHeight) { eheight = divob.offsetHeight }
else if (d.getElementById) {eheight = d.defaultView.getComputedStyle(test, "").getPropertyValue("height")}
return eheight;
}

//basehref = "file:///C|/Documents and Settings/Peter/Desktop/Documents/scr_iijuly/site/";
//basehref = "file:///C|/Documents and Settings/Peter/Desktop/Documents/scr_iijuly/site/";

function changeText() {
fselect = gE('selectSize');
text = gE('bodydiv');
text.style.fontSize = fselect.value;
setCurrentSize(fselect.value);  
} //End changeText function

function setCurrentSize(selvalue) 
{
sizediv=gE('current_size');

 switch(selvalue)
 {
	case "90%":
	sizetext = "Small";
	break
	
	case "105%":
    sizetext ="Medium"; 
	break

	case "120%":
	sizetext = "Large";
	break
	
	case "135%":
	sizetext = "Extra Large";
	break
	

   }
 
sizediv.innerHTML = 'Current size: ' + sizetext;
setCookie("fsize", sizetext, 3, "/")  // Save fsize cookie

} //End setCurrentSize function

  
// Picture-swapping 

function rollIn(imgName) //e.g. rollIn("umb") and name the initial image umb

{
if (d.layers) return; // not supporting older NS browsers
      document[imgName].src=eval(imgName + "_on.src");
}

function rollOut(imgName)
{
if (d.layers) return;
      document[imgName].src=eval(imgName + "_off.src");
 }



function setStatus(content) {
self.status=content;
}

//
var current_section = "";

var menumode = "A"; //Auto is the initial default
//When a heading is expanded, any open heading is first closed	

var section_open = "none";
//Flag nothing open 



function showHideMenu(mstate) //expand or collapse the menu;
{
   
	menuobj = gE('left_menu');
	linkobj = gE('menulink'); 
	if (menuobj.style.display=="none") 
	{
	menuobj.style.display="block"; menustate=1;//show it
	linkobj.innerHTML = '<a href="#" onclick="showHideMenu();return false"><b>[ Hide menu ]</b></a>';
	}
	else if (menuobj.style.display=="block") 
	{
	menuobj.style.display="none"; menustate=0;//hide it
	linkobj.innerHTML = '<a href="#" onclick="showHideMenu();return false"><b>[ Show menu ]</b></a>';
 	}
  setCookie("mstate", menustate, 2, "/")  // Save menustate cookie 2 days
}

function setMenu() 
{
menuobj = gE('left_menu');
linkobj = gE('menulink'); 
menustate = getCookie("mstate"); 
if ("mstate"==null) //never changed menu state
   { 
	menustate=1; setCookie("mstate", menustate, 2, "/")  // Initially save menustate cookie 
   }
if (menustate==1) //shown
 {
	menuobj.style.display="block"; //show it
	linkobj.innerHTML = '<a href="#" onclick="showHideMenu();return false">[ Hide menu ]</a>';
 }
else //not shown
 {
	menuobj.style.display="none"; 
	linkobj.innerHTML = '<a href="#" onclick="showHideMenu();return false">[ Show menu ]</a>';
  }
 setFontSize()
}

function setFontSize() 
{
sizetext = getCookie("fsize"); 
if (sizetext==null) //never changed font size
   { 
   //alert("The fsize cookie doesn't exist");  
	sizetext="Medium"; setCookie("fsize", sizetext, 3, "/")  // Initially save fsize cookie 
   }
else  //set saved size
   {
bobj = gE('bodydiv'); robj = gE('rightcol');
//
	switch(sizetext)
	 {
		case "Small":
		sizeperc = "90%";
		break
		
		case "Medium": 
		sizeperc = "105%";
		break
		
	    case "Large":
		sizeperc = "120%";
		break
		
		case "Extra Large":
		sizeperc = "135%";
			
	 }//End switch
   //alert("The fsize cookie value is " +sizeperc);
	bobj.style.fontSize = sizeperc; robj.style.lineHeight = "1.4em";
	setCurrentSize(sizetext);  
   }//End else
  }//End function

   

function setCookie (name, value, lifespan, access_path) 
{
var cookietext = name + "=" + escape(value); 
if (lifespan != null) ;
	{ 
	  var today=new Date(); 
	  var expiredate = new Date(); 
	  expiredate.setTime(today.getTime() + 1000*60*60*24*lifespan);
	  cookietext += "; expires=" + expiredate.toGMTString();
	 }
if (access_path != null) 
  { 
  cookietext += "; PATH="+access_path; 
  }
document.cookie = cookietext; 
return null 
}


function getCookie(Name) {
var search = Name + "=" ;
var CookieString = document.cookie; 
var result = null; 
if (CookieString.length > 0) { 
    offset = CookieString.indexOf(search) ;
    if (offset != -1) { 
        offset += search.length; 
        end = CookieString.indexOf(";", offset) ;
        if (end == -1) {
           end = CookieString.length }
        result = unescape(CookieString.substring(offset, end)) 
   } 
}
return result 
}


function deleteCookie(Name, Path) {
setCookie(Name,"Deleted", -1, Path)
}


//deleteCookie("UserName")  // Delete cookie from disk


function expandCollapse(section) //expand or collapse the menu heading;
{

sectobj=gE(section); 
if  (sectobj.style.display=="none") //currently closed

  { 
        if (menumode=="A" && section_open !="none") //auto mode, close any open section first
        {
         openobj=gE(section_open); openobj.style.display="none"; //close it
        } 
       sectobj.style.display="block"; //open this 
       section_open=section;    //record it as open
   }
 else //currently open
   {
      sectobj.style.display="none"; section_open="none"; 
   }
} 

function setMenumode(mode)
{
if (mode!=menumode)
	{
	if (mode=="A") {closeNonactive("","");modetext="automatic"}
	else {modetext="persistent"}
	menumode=mode;
	alert ("Menu mode changed to " +modetext);
	}
}
