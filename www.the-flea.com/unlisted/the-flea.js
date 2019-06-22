d=document;l=(d.layers)?1:0;op=navigator.userAgent.toLowerCase().indexOf('opera')!=-1; msie=(d.all)?1:0;
isDOM =(d.getElementById)?1:0;
function gE(e,f){if(l){f=(f)?f:self;var V=f.document.layers;
if(V[e])return V[e];for(var W=0;W<V.length;)t=gE(e,V[W++]);return t;}if(d.all)return d.all[e];return d.getElementById(e);}

//show element
function sE(e){if(l)e.visibility='show';else e.style.visibility='visible';}

//hide element
function hE(e){if(l)e.visibility='hide';else e.style.visibility='hidden';}

//get left posn
//function gX(e){if(l) return e.left;else if(d.all)return e.style.pixelLeft;else return e.style.left}
function gX(e){return e.style.pixelLeft;}
//get top posn
//function gY(e){if(l) return e.top;else if (d.all)return e.style.pixelTop;else return e.style.top}
function gY(e){return e.style.pixelTop;}

//get width
//function gW(e){if(l) return e.width;else return e.style.width}
function gW(e){return e.style.pixelWidth;}

//get height
//function gH(e){if(l) return e.clip.height;else if(op) return e.style.pixelHeight;else return //e.style.height}

//get dynamic height
function gH(myid)
{ 
divob = gE(myid);
if (divob.offsetHeight) { eheight = divob.offsetHeight }
else if (d.getElementById) {eheight = d.defaultView.getComputedStyle(test, "").getPropertyValue("height")}
return eheight;
}

//get z-index
function gZ(e){alert("Entered the gZ function");if(l) return e.zIndex;else return e.style.zIndex} 

function sZ(e,z){if(l)e.zIndex=z;else e.style.zIndex=z;} //set z-index
//function sX(e,x){if(l)e.left=x;else if(op)e.style.pixelLeft=x;else e.style.left=x+"px";}//set left

function sX(e,x){
//alert("Entered the sX function");
//e.style.pixelLeft=x; 
e.style.left = (x +"px");
}//set left

//function sY(e,y){if(l)e.top=y;else if(op)e.style.pixelTop=y;else e.style.top=y+"px";}//set top
function sY(e,y){
//alert("Entered the sY function; e is " +e);
//e.style.pixelTop=y; 
e.style.top = (y+"px");
}//set top


//function sW(e,w){}
function sW(e,w){
//if(l)e.clip.width=w;else if(op)e.style.pixelWidth=w;else e.style.width=w;
e.style.pixelWidth=w; e.style.width=w+"px";
//alert ("In function sW(e,w): e.style.pixelWidth is " +e.style.pixelWidth + "; e.style.width is " +e.style.width);
}

//function sH(e,h){if(l)e.clip.height=h;else if(op)e.style.pixelHeight=h;else e.style.height=h;}
function sH(e,h){e.style.pixelHeight=h; e.style.height=h+"px";}
function sC(e,t,r,b,x){if(l){X=e.clip;X.top=t;X.right=r;X.bottom=b;X.left=x;}else e.style.clip='rect('+t+' '+r+' '+b+' '+x+')';}

function wH(e,h)
{
if(l) {e.document.write(h);e.document.close();return true};
	//Y=e.document;Y.write(h);Y.close()
if(e.innerHTML)
	{
	e.innerHTML=h
	}
}

function writeF() {
d.write('<form id="theForm" name="theForm" onsubmit="return checkData()" action="http://www.the-flea.com/formmail3.php" method="post" style="width: auto">')
}

prevFlag=0;

function subPreview() {	
    //prevFlag=1; 
    updatePreview();
	show('previewbox');
		// textobj = gE('previewbox'); textobj.focus();
}

function updatePreview() {
	//Assemble from form entry
//if (prevFlag==1)
 {	
	var df = document.theForm;
		auth = df.author_name.value; email=df.email_address.value; 
		
		subtext = ubb2Html(df.submission.value); //Change UBB codes to HTML 
		//Copy text back to form field if UBB code converted
		if (subtext!=df.submission.value) df.submission.value = subtext;	
		//Convert line breaks
		subtext = nl2br(subtext);
		//Check name and email address?
		if (!auth) auth='<font color="red">NO NAME ENTERED</font>';
		if (!email) email='<font color="red">NO EMAIL ADDRESS ENTERED</font>';
		  	
		writestr = '<a name="prevtop"></a><div style="font: 16px/1.3 \'times new roman\', serif"><p>Name: ' + auth +'<br />';
	    writestr += 'Email:  ' + email +'</p>';
		writestr += '<p>TEXT ' +'<br />';
		writestr += '----------------------------------------------------------------------------- ' +'</p>';
		writestr += subtext;
		writestr += '<br /><br />';
		writestr += '----------------------------------------------------------------------------- ' +'</p>';
		writestr += '<br /> <p>Note that poem titles, epigraphs, end notes and biographical notes will be formatted as per our publishing style: you do not need to put titles in bold type or specify smaller type for an epigraph or endnote.</p>';
		writestr += '<p style="text-align: right"><a href="#" onclick="hide(\'previewbox\');return false">Close preview panel</a></p></div>';
		prevdiv = gE('previewbox');
		prevdiv.innerHTML = writestr;
  }		
}

function showHide(id) {
divobj = gE(id);
if (divobj.style.display=='none') divobj.style.display='block';
else divobj.style.display='none';
}

function show(id) {
divobj = gE(id);
divobj.style.display='block';
}

function hide(id) {
divobj = gE(id);
divobj.style.display='none';
}


function nl2br(text){	
//Cross-platform: converts line breaks to <br />
text = escape(text);	
if(text.indexOf('%0D%0A') > -1){ re_nlchar = /%0D%0A/g ;	}
else if(text.indexOf('%0A') > -1){		re_nlchar = /%0A/g ;	}
else if(text.indexOf('%0D') > -1){		re_nlchar = /%0D/g ;	}	
else return unescape(text);
return unescape( text.replace(re_nlchar,'<br />') );
}

function ubb2Html(text) {
//converts UBB italic, bold and color=white tags to HTML equivalents
var starti = /\[i\]/gi; 
var endi = /\[\/i\]/gi; 
var startb = /\[b\]/gi; 
var endb = /\[\/b\]/gi; 
var startcol = /\[color=white\]/gi; 
var endcol = /\[\/color\]/gi; 

text = text.replace(starti, '<i>');
text = text.replace(endi, '</i>');
text = text.replace(startb, '<b>');
text = text.replace(endb, '</b>');
text = text.replace(startcol, '<font color=white>');
text = text.replace(endcol, '</font>');

return text
}


function checkData()
{
/*
if (document.theForm.captcha.value !=fval)
   {
	alert("You must enter the correct text string as shown!");
	return false
	}
*/	

//Required fields author_name, email_address,submission 
if (document.theForm.author_name.value =="" ||document.theForm.email_address.value =="" || document.theForm.submission.value =="") 
	{
	alert("You must enter a name, valid email address, and submission text");
	return false
	}
//fall through to email structure check 
checkString = document.theForm.email_address.value;
    var newstr = "";
    var at = false;
    var dot = false;
	var atdot = false;

	//if theres no dot or no @ or "@." occurs
	
    // IF EMAIL ADDRESS HAS A '@' CHARACTER
    if (checkString.indexOf("@") == -1 || checkString.indexOf(".") == -1 || checkString.indexOf("@.") != -1)  
	{
      alert ("Sorry, the email address you entered is invalid!");
      return false;
    } 
	
       // PARSE STRING
        for (var i = 0; i < checkString.length; i++) 
		{
		        ch = checkString.substring(i, i + 1)
		        if ((ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z")
		                || (ch == "@") || (ch == ".") || (ch == "_")
		                || (ch == "-") || (ch >= "0" && ch <= "9")) 
					{
					}	
				else 
				{
				alert ("Email address is invalid"); 
				return false		
		         }
		 }//End FOR
	updatePreview()	 // Ensure UBB conversion
  return true;

} //End checkData function

function removeNL(s) {
/*
  ** Remove NewLine, CarriageReturn and Tab characters from a String
  **   s  string to be processed
  ** returns new string
  */
  r = "";
  for (i=0; i < s.length; i++) {
    if (s.charAt(i) != '\n' &&
        s.charAt(i) != '\r' &&
        s.charAt(i) != '\t') {
      r += s.charAt(i);
      }
    }
  return r;
  }

function fixLBs(txt, ch1, ch2,heading)
{
/* Replace * markers in the txt string by <p> code
or any ch1 (single character) by ch2 (string)
*/

if (!isDOM) {ftxt = ""; return ftxt}; //non-compliant browser
 ftxt = '<p><b>'+ heading +'</b><p>' ;
  for (i=0; i < txt.length; i++) 
  {
    if (txt.charAt(i) == ch1) ftxt += ch2;
	else ftxt += txt.charAt(i);
  } 
      ftxt +='</p>';
	 return ftxt;
}
  
 function setTitleTip(titletext) {
  //HTML popups unsupported; use "title" with initial alert
var re= /<\S[^>]*>/g; titletip = txt.replace(re,""); //strip out html
//alert(titletip);  
 return titletip;
 } 

  
  
//Determine client window inner height H and set height of left block 
//and main (scrolling) text block to same
var lastheight;



function showExp(section)
{
sectobj=gE(section); 
if  (sectobj.style.display=="none") //currently closed
	{
	sectobj.style.display="block"; //open this temporarily
	msov=true;
	}
} 

function hideExp(section)
{
sectobj=gE(section); 
if (msov) //mousover section not clicked open
	{
	sectobj.style.display="none"; //close
	msov=false;
	}
}

function expandCollapse(section) //expand or collapse the menu heading;
{
if (!msov)
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
     sectobj.style.display="none"; if (menumode=="A") section_open="none"; 
   }
 }//end if !msov
} 

function closeAll()
{

for(i=1;i<=10;i++) 
	{
	    if (menuhead[i] == " ") break;
	  openobj=gE(menuhead[i]); openobj.style.display="none"; 
	 }
section_open="none";
}


function nowt()
{
}

popup_shown=0; p1='jump';
ptimeoutrunning=0;

function setClosePopTimer()
{
if (!ptimeoutrunning)
	{
	ptimer = setTimeout("hideit()", 400);
	ptimeoutrunning=1;
	}
}

function cancelClosePopTimer()
{
if (ptimeoutrunning)
	{
	clearTimeout(ptimer);
	ptimeoutrunning=0;
	}
}
unsupp_flag = 0; p2='bite09';
//two functions to get popup content and get title content. 	

function XshowPopup(evt,txt,wwidth) 
{

//html popup
tooltip=gE("tipdiv");shadow = gE("tipdiv_s");
	sW(tooltip,wwidth); //sW(shadow,wwidth); set width
	content=  txt;
	tooltip.innerHTML=content; //shadow.innerHTML=content;
	wheight=gH("tipdiv");
	xoffset=getOffsetX(); yoffset=getOffsetY();
		
	if (window.event) 
	{
	evt=window.event; 
	if (evt.clientX > (wwidth+15)) tipleft = eval(evt.clientX - 15 - wwidth);
	else tipleft = eval(evt.clientX + 15);
	if (evt.clientY > (wheight+15)) tiptop = eval(evt.clientY +yoffset - 15 - wheight);
	else tiptop = eval(evt.clientY +yoffset + 15);
 	}
	
	else if (evt.pageX) 
	{
	leftspace = eval(evt.pageX - window.scrollX); 
	if (leftspace > (wwidth+15)) tipleft = eval(evt.pageX - 15 - wwidth);
	else tipleft = eval(evt.pageX + 15);
	topspace = eval(evt.pageY - window.scrollY); 
	if (topspace > (wheight+15)) tiptop = eval(evt.pageY - 15 - wheight);
	else tiptop = eval(evt.pageY + 15);
	}
	
	
	sX(tooltip,tipleft); //sX(shadow,tipleft+5); 
	sY(tooltip,tiptop); //sY(shadow,tiptop+5);
	sE(tooltip); //sE(shadow); 
	popup_shown=1;
 }



function showPopup(evt,txt,wwidth) 
{

//html popup
tooltip=gE("tipdiv");shadow = gE("tipdiv_s");
	sW(tooltip,wwidth); //sW(shadow,wwidth); set width
	content=  txt;
	tooltip.innerHTML=content; //shadow.innerHTML=content;
	wheight=gH("tipdiv");
	xoffset=getOffsetX(); yoffset=getOffsetY();
		
	if (window.event) 
	{
	evt=window.event; 
	//if (evt.clientX > (wwidth+15)) tipleft = eval(evt.clientX - 15 - wwidth);
	//else 
	tipleft = eval(evt.clientX + 35);
	if (evt.clientY > (wheight+15)) tiptop = eval(evt.clientY +yoffset - 15 - wheight);
	else tiptop = eval(evt.clientY +yoffset + 15);
 	}
	
	else if (evt.pageX) 
	{
	leftspace = eval(evt.pageX - window.scrollX); 
	//if (leftspace > (wwidth+15)) tipleft = eval(evt.pageX - 15 - wwidth);
	//else 
	tipleft = eval(evt.pageX + 35);
	topspace = eval(evt.pageY - window.scrollY); 
	if (topspace > (wheight+15)) tiptop = eval(evt.pageY - 15 - wheight);
	else tiptop = eval(evt.pageY + 15);
	}
	
	
	sX(tooltip,tipleft); //sX(shadow,tipleft+5); 
	sY(tooltip,tiptop); //sY(shadow,tiptop+5);
	sE(tooltip); //sE(shadow); 
	popup_shown=1;
 }



function movePopup(evt,txt,wwidth,wheight)
{
if (popup_shown==1) showPopup(evt,txt,wwidth)
}
//
function getOffsetX()
{
if (window.scrollX)
 {
	  xoffset = window.scrollX; 
 }
	else if (document.documentElement && document.documentElement.scrollLeft)
	{
		xoffset = document.documentElement.scrollLeft
	}
		else if (document.body)
		{
			  xoffset = document.body.scrollLeft
		}
return xoffset
}	

function getOffsetY()
{
if (window.pageYOffset)
 {
	  yoffset = window.pageYOffset; 
 }
	else if (document.documentElement && document.documentElement.scrollTop)
	{
		yoffset = document.documentElement.scrollTop
	}
		else if (document.body)
		{
			  yoffset = document.body.scrollTop
		}
return yoffset
}	


function hideIt()
{
hE(tooltip);//hE(shadow);
popup_shown=0;wheight=0;
//hE(shadow)
}

function popUpWindow(url) {
window.open (url, 'newWin', 'scrollbars=yes,status=yes,resizable=yes,screenx=0, screeny=0,width=780,height=860')
}
  
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

//define folders array



//Do as array

 //sidebar menu: links to all other pages including Contents page and Editorial, then to author names under headings, etc 

function getTypetext(x) {
}



function showHideMenu() //expand or collapse the menu;
{
   
	menuobj = gE('left_menu');
	linkobj = gE('menulink'); 
	if (menuobj.style.display=="none") 
	{
	menuobj.style.display="block"; fmenustate=1;//show it
	linkobj.innerHTML = '<a href="#" onclick="showHideMenu();return false">[ Hide menu ]</a>';
	}
	else if (menuobj.style.display=="block") 
	{
	menuobj.style.display="none"; fmenustate=0;//hide it
	linkobj.innerHTML = '<a href="#" onclick="showHideMenu();return false">[ Show menu ]</a>';
 	}
  setCookie("fmstate", fmenustate, 5, "/")  // Save cmenustate cookie 5 days
}

function setMenu() 
	{
	menuobj = gE('left_menu');
	linkobj = gE('menulink'); 
	fmenustate = getCookie("fmstate"); 
	if (fmenustate==null) //never changed menu state
	   { 
		fmenustate=0; setCookie("fmstate", fmenustate, 5, "/")  // Initially save menustate cookie 5 days 
	   }
	if (fmenustate==1) //shown
	 {
		menuobj.style.display="block"; //show it
		linkobj.innerHTML = '<a href="#" onclick="showHideMenu();return false">[ Hide menu ]</a>';
	 }
	else //not shown
	 {
		menuobj.style.display="none"; 
		linkobj.innerHTML = '<a href="#" onclick="showHideMenu();return false">[ Show menu ]</a>';
	  }
 }

   

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

function confirmSub()
{

remtxt  = "GUIDELINES REMINDER:\n\n* ONE submission per period (i.e. for the next Broadsheet); no more than THREE poems.\n\n* Your Bio note should be short and should include no more than one web link. Additional web links to cited publications will be at the Editor's discretion. \n\n* If formatting is important (italics, indents), have you read the formatting notes? \n\nAre you ready to submit?";
r=confirm(remtxt);
if (r) return true; else return false;  
}


var img = new Array(10); //random
imgpart1 = '<img src="images/tfcaptcha'; imgpart2 ='.png" alt="anti-spam image">'; 

for (n = 1; n<=9; n++) 
{
img[n] =imgpart1 +n +imgpart2 ;
}


function getImg(ino) //image number 1-9 for manual or 0 for random choice;
{
if (!ino) ino=0; //unspecified, use random
if (ino==0) //random
	{
	todaydate = new Date();
	seconds = todaydate.getSeconds();
	ino = seconds % 10; if (ino==0) ino = 9;
	}
x = ino; // random or preset
d.write(img[x]) ;
fval=txt[x];
}


var txt = new Array(10); //random

txt[1] = "fliRrt";
txt[2] = "coXcoMb";
txt[3] = "PrykkE";
txt[4] = "boSun";
txt[5] = "Faerie";
txt[6] = "starRe";
txt[7] = "Divel";
txt[8] = "17goe42";
txt[9] = "knAVE";

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

pw=p1+'n' +p2;

function writeEmail(name,domain,screenLetters) {
   visible=(typeof(screenLetters)=="undefined")? name+"@"+domain : 
screenLetters;
   document.write ('<a href=mailto:'+name+'@'+domain+'>'+visible+'</a>');
}



function gP()
{
accstatus = getCookie("tfdevauth"); 

if (accstatus==1) return true; //ok
var usertext = prompt("Page in development: authorized entry only: enter password", "");
if (usertext != pw) {
                          alert("You are not authorized to view this page");
						  window.location="javascript: history.go(-2)"; 
						   }
else setCookie("tfdevauth", 1, 5, "/")  // Save tfaccess cookie 5 days						   
return true
}
//gP();

