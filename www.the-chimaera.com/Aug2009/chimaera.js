//The Chimaera Current Issue August 2009
//  
//"http://www.the-chimaera.com/Issue6Proof/" 
//"file:///C|/Documents and Settings/Peter/Desktop/Documents/ChimaeraSite/Aug2009/"
// "file:///C|/Documents and Settings/Peter/Desktop/Documents/ChimaeraSite/Proof_Issue6/" 

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
pw="tc6aug";
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

//Add print stylesheet link
/*
var cssNode = d.createElement('link');
cssNode.type = 'text/css';cssNode.rel = 'stylesheet';
cssNode.href = 'http://www.the-chimaera.com/Aug2009/stylesheets/textpage_proof.css';
cssNode.media = 'print';
cssNode.title = 'dynamicLoadedSheet';
d.getElementsByTagName("head")[0].appendChild(cssNode);
*/
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
 ftxt="";
 //ftxt = '<p><b>'+ heading +'</b><p>' ;
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

function init()
{
setScrolling();

if (d.body || d.documentElement) {window.onresize = setHeights};
}

function setScrolling() //supported browsers: simulate framed operation
{
if (! d.getElementById("textblock")) return;
if (d.body) d.body.scroll="no";
else if (d.documentElement) d.documentElement.scroll ="no"; 
         else return;
//Mozilla/Opera: correct for width+padding calcs 
//if (!d.all) 		 
var mainDiv = gE("textblock");
mainDiv.style.overflow="auto"//make main content div scrolling 
var leftDiv = gE("leftcontent");
leftDiv.style.overflow="auto"//make nav block scrolling 
setHeights();
//alert ("window inner width is " +getWindowWidth()) 
}

function getWindowHeight ()
{
  if (window.innerHeight)
  {
	theHeight = window.innerHeight
  }
  else if (d.documentElement && document.documentElement.clientHeight)
  {
  	theHeight = d.documentElement.clientHeight
  }
  else if (d.body)
  {
 	theHeight = d.body.clientHeight
  }
return theHeight
}


function getWindowWidth()
{
  if (window.innerWidth)
  {
	theWidth = window.innerWidth
  }
  else if (d.documentElement && document.documentElement.clientWidth)
  {
  	theWidth = d.documentElement.clientWidth
  }
  else if (d.body)
  {
 	theWidth = d.body.clientWidth
  }
return theWidth
}

var msov=false;

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
if (msov) //mousover section open
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

popup_shown=0;
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


unsupp_flag = 0;






   
		

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


function changeText() {
cfselect = gE('selectSize');
text = gE('bodydiv');
text.style.fontSize = cfselect.value;
setCurrentSize(cfselect.value);  
} //End changeText function

function setCurrentSize(selvalue) 
{
sizediv=gE('current_size');

 switch(selvalue)
 {
	case "90%":
	sizetext = "Small";
	break
	
	case "100%":
    sizetext ="Medium"; 
	break

	case "115%":
	sizetext = "Large";
	break
	
	case "130%":
	sizetext = "Extra Large";
	break
	

   }
 
sizediv.innerHTML = 'Current size: ' + sizetext;
setCookie("cfsize", sizetext, 5, "/")  // Save fsize cookie

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

//define folders array



//Do as array

 //sidebar menu: links to all other pages including Contents page and Editorial, then to author names under headings, etc 

function getTypetext(x) {
}




function makeMainMenu() //Cover Page menu only
{
mstring = '<table id="maintoc" width="100%" cellspacing="0" cellpadding="4" bgcolor="#eeeeff" border="0"><tr><td width="50%" valign="top" style="padding-top: 8px">';
//List/link content in folders Theme, Theme/Poems, Theme/Fiction, / (editorial), Spotlight, 
// MORE POEMS AND PROSE: Poetry, Essays, Reviews   
//<span class="chev">&raquo;</span> removed angle-quote code

//
     // 	
//
     // 
		if ("" != "offmenu")
		{
		teaser = fixLBs('About this issue', '*', '</p><p>', 'Editorial');  	 
			mstring+='<h6 class="xt" style="margin-left:0; padding-left: 5px; padding-top: 0px; padding-bottom: 3px; text-transform:uppercase"><a href="http://www.the-chimaera.com/Aug2009/Editorial.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Editorial</a></h6>';
		} 
	//	
//
     // 
		if ("offmenu" != "offmenu")
		{
		teaser = fixLBs('Correspondence and blog&nbsp;', '*', '</p><p>', 'Feedback');  	 
			mstring+='<h6 class="xt" style="margin-left:0; padding-left: 5px; padding-top: 0px; padding-bottom: 3px; text-transform:uppercase"><a href="http://www.the-chimaera.com/Aug2009/Feedback.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Feedback</a></h6>';
		} 
	//	
//

mstring+='<div style="margin-top:7px; margin-left:0px; background-color: transparent; padding: 6px; padding-bottom: 8px; border: 0px solid #BBF"><h3 style="margin-bottom: 0.7em"><b>Well-Wrought Form</b><br /><span style="font-weight:normal; font-size: 85%">(Feature Theme)</span></h3>';


//
     audioimg="";
	 //  
	 
 teaser = fixLBs('Feature introduction', '*', '</p><p>', 'Introduction');  	 
 mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Theme/Introduction.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Introduction</a>' +audioimg +'</h6>';

//

//mstring+='<h5>Essays</h5>'; 

//

mstring+='<h5 class="lcol">&nbsp;Poems</h5>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Caul (sestina)', '*', '</p><p>', 'Claire Askew');  	 
 mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Askew.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Claire Askew</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Aug2009/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
	 teaser = fixLBs('The Goddess Works Her Loom *Braiding', '*', '</p><p>', 'Enriqueta Carrington');  	 
 mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Carrington.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Enriqueta Carrington</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Colo River *Wattle and the North Wind', '*', '</p><p>', 'Peter Coghill');  	 
 mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Coghill.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Peter Coghill</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Cold Case (alliterative) *Tattoo and Piercing Parlour (sapphics)', '*', '</p><p>', 'Maryann Corbett');  	 
 mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Corbett.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Maryann Corbett</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Talcott Mountain (sapphics) *The Cymbal Player (terza rima)', '*', '</p><p>', 'Martin Elster');  	 
 mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Elster.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Martin Elster</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('In Stone (ovillejo) *Lighthouse, with Poet Brandishing His Hat (Mason sonnet)', '*', '</p><p>', 'Rhina P. Espaillat');  	 
 mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Espaillat.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Rhina P. Espaillat</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Aug2009/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
	 teaser = fixLBs('Driving All Night (villanelle)', '*', '</p><p>', 'Andrew&nbsp; Frisardi');  	 
 mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Frisardi.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Andrew&nbsp; Frisardi</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('On Drought and Crime Fiction', '*', '</p><p>', 'Alan Gould');  	 
 mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Gould.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Alan Gould</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Aug2009/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
	 teaser = fixLBs('Success Story (ballade)', '*', '</p><p>', 'Max Gutmann');  	 
 mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Gutmann.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Max Gutmann</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Surviving a Funeral (sapphics) *Getting Even (English sonnet)', '*', '</p><p>', 'Christopher Hanson');  	 
 mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Hanson.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Christopher Hanson</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('When Men Bow Down', '*', '</p><p>', 'R. Nemo Hill');  	 
 mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Hill.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">R. Nemo Hill</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Father, Near the End', '*', '</p><p>', 'James Iredell');  	 
 mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Iredell.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">James Iredell</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('A City with Green Fingers (ottava rima)', '*', '</p><p>', 'Clive James');  	 
 mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/James.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Clive James</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Bluffton, Ohio (Stefanile sonnet)', '*', '</p><p>', 'David W. Landrum');  	 
 mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Landrum.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">David W. Landrum</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Flyway (sonnet)', '*', '</p><p>', 'Susan McLean');  	 
 mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/McLean.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Susan McLean</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Aug2009/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
	 teaser = fixLBs('Mechanics of the Sun (sapphics)', '*', '</p><p>', 'Rick Mullin');  	 
 mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Mullin.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Rick Mullin</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('I Am Going Drown (terza rima sonnet)', '*', '</p><p>', 'Charles Musser');  	 
 mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Musser.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Charles Musser</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Pier', '*', '</p><p>', 'Stephen Payne');  	 
 mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Payne.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Stephen Payne</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Aug2009/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
	 teaser = fixLBs('A Change of Organ (tritina)', '*', '</p><p>', 'Andrew Periale');  	 
 mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Periale.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Andrew Periale</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Aug2009/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
	 teaser = fixLBs('Cuckold *Anthropic Principle (English sonnet)', '*', '</p><p>', 'Henry Quince');  	 
 mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Quince.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Henry Quince</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Aug2009/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
	 teaser = fixLBs('My Imaginary Friend (sestina)', '*', '</p><p>', 'Tad Richards');  	 
 mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Richards.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Tad Richards</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Captain Lee (sonnet sequence)', '*', '</p><p>', 'Joseph Saling');  	 
 mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Saling.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Joseph Saling</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Passion Spent (villanelle)', '*', '</p><p>', 'Gail White');  	 
 mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/White.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Gail White</a>' +audioimg +'</h6>';
//

//mstring+='<h5 class="lcol">Fiction</h5>';
//*

mstring+='</div></td><td valign="top" style="padding-left:8px;padding-top:8px; padding-bottom:8px">';

mstring+='<h6 class="xl" style="padding-top: 0px; margin-left:0px"><a href="http://www.the-chimaera.com/Aug2009/Feedback.html" onmouseover="showPopup(event,\'Letters and Blog\',160)" onmouseout="hideIt()">Feedback</a></h6>';

mstring+= '<div style="margin-top: 0.4em; margin-bottom:1.1em; padding-top:0.5em; padding-left: 0px; padding-bottom:0.9em;border: 0px solid #BBF; margin-right:5px; background-color: transparent;">';
			mstring+='<h3><b>Ann Drysdale</b><br /><span style="font-weight:normal; font-size: 85%">(Spotlight Feature)</span></h3>';
		
		
//
audioimg="";
	 // 
teaser = fixLBs('Ann Drysdale: Parnassian Poet and Peasant', '*', '</p><p>', 'Harry Chambers');  	 
mstring+='<h6 class="xl"><a href="http://www.the-chimaera.com/Aug2009/Spotlight/HarryChambers.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Harry Chambers</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
teaser = fixLBs('Telling It How It Is: An appreciation of Ann Drysdale', '*', '</p><p>', 'John Whitworth');  	 
mstring+='<h6 class="xl"><a href="http://www.the-chimaera.com/Aug2009/Spotlight/JohnWhitworth.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">John Whitworth</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
teaser = fixLBs('Paul Stevens interviews Ann Drysdale', '*', '</p><p>', 'Interview&nbsp;');  	 
mstring+='<h6 class="xl"><a href="http://www.the-chimaera.com/Aug2009/Spotlight/Interview.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Interview&nbsp;</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Aug2009/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
teaser = fixLBs('The Bigger Picture *The Red Mud of Lydney *Risk Assessment *Changeling *Dear Heart… *Not Much News… *The Defeated Hare Questions the Value of Retromingency *First-footing *Dialogue *Blue Juice *Water *New Fruit', '*', '</p><p>', 'Poems by Ann Drysdale');  	 
mstring+='<h6 class="xl"><a href="http://www.the-chimaera.com/Aug2009/Spotlight/AnnDrysdalePoems.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Poems by Ann Drysdale</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
teaser = fixLBs('Preface to Ann Drysdale’s collection <em>Three-three two-two five-six</em>', '*', '</p><p>', 'Raymond Tallis');  	 
mstring+='<h6 class="xl"><a href="http://www.the-chimaera.com/Aug2009/Spotlight/RaymondTallis.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Raymond Tallis</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
teaser = fixLBs('On Ann Drysdale’s <em>Between Dryden and Duffy: Another Collection</em>', '*', '</p><p>', 'Rose Kelleher');  	 
mstring+='<h6 class="xl"><a href="http://www.the-chimaera.com/Aug2009/Spotlight/RoseKelleher.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Rose Kelleher</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
teaser = fixLBs('Interjected Remarks: an appreciation of Ann Drysdale', '*', '</p><p>', 'Glyn Pursglove');  	 
mstring+='<h6 class="xl"><a href="http://www.the-chimaera.com/Aug2009/Spotlight/GlynPursglove.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Glyn Pursglove</a>' +audioimg +'</h6>';
	
//

mstring+='</div>';
mstring += '<h4>MORE POEMS AND PROSE</h4>'; 
mstring+='<h5>&nbsp;Poems</h5>';
		
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Development', '*', '</p><p>', 'Maryann Corbett');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Poems/Corbett.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Maryann Corbett</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Northern Spy', '*', '</p><p>', 'Kevin Durkin');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Poems/Durkin.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Kevin Durkin</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Wednesday: Theme and Variations', '*', '</p><p>', 'Richard Epstein');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Poems/Epstein.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Richard Epstein</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('An Understudy for Desire', '*', '</p><p>', 'Alan Gould');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Poems/Gould.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Alan Gould</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Aug2009/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Love of Form', '*', '</p><p>', 'W. F. Lantry');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Poems/Lantry.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">W. F. Lantry</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('<em>Agnóstica</em> *Classmate', '*', '</p><p>', 'Timothy Murphy');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Poems/Murphy.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Timothy Murphy</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Seeing People *Ethics', '*', '</p><p>', 'Geoff Page');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Poems/Page.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Geoff Page</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Myths, Dispelled: a prose-poetry series', '*', '</p><p>', 'Alyssa Pelish');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Poems/Pelish.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Alyssa Pelish</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Aug2009/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Four Sonnets from the Dark Lady', '*', '</p><p>', 'Jennifer Reeser');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Poems/Reeser.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Jennifer Reeser</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Aug2009/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('All Is Well *Almost There', '*', '</p><p>', 'C. P. &nbsp;Stewart');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/Aug2009/Poems/Stewart.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">C. P. &nbsp;Stewart</a>' +audioimg +'</h6>';
	//	
//

//mstring+='<h5 class="tight">Fiction</h5>';
		
//


//mstring+='<h5>Essay</h5>';
		
//

mstring+='<h5>&nbsp;Reviews</h5>';
		
//
 // 
 //keywords =	"";
 teaser = fixLBs('The Strange and the Everyday: Review of <em>Occupation</em> by Angela France', '*', '</p><p>', 'Maggie Butt');  	 
mstring+='<h6  class="xl"><a href="http://www.the-chimaera.com/Aug2009/Reviews/Butt.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Maggie Butt</a></h6>';
	//	
//
 // 
 //keywords =	"";
 teaser = fixLBs('Bringing Job to Book: Review of David Holper’s <em>64 Questions</em>', '*', '</p><p>', 'Nigel Holt');  	 
mstring+='<h6  class="xl"><a href="http://www.the-chimaera.com/Aug2009/Reviews/Holt.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Nigel Holt</a></h6>';
	//	
//
 // 
 //keywords =	"";
 teaser = fixLBs('Thought and Passion: Review of C. E. Chaffin’s&nbsp;<em>Unexpected Light</em>', '*', '</p><p>', 'Rose Kelleher');  	 
mstring+='<h6  class="xl"><a href="http://www.the-chimaera.com/Aug2009/Reviews/Kelleher.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Rose Kelleher</a></h6>';
	//	
//


mstring+='</td></tr></table>';
document.write(mstring);

} //End makeMainMenu function


/////////////////////////////////////////////////////////////////////////////


 
 
function makeMenu(thisheadline, thisteaser) //make collapsible side menu
{
mstring = "";

//List/link content in folders / (editorial), Theme, Theme/Essays, Theme/Poems, Theme/Fiction,  Spotlight, 
// MORE POEMS AND PROSE: Poetry, Fiction, Essay, Reviews   

//
     // 	
//
     // 

//If headlines don't match, or teasers don't match	 
	 
		if (thisheadline != "Editorial" || thisteaser != "About this issue")
	{ teaser = fixLBs('About this issue', '*', '</p><p>', 'Editorial');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Editorial.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Editorial</a></h6>';
   }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Editorial</h6>';	//don't link to self


	//	
//
     // 

//If headlines don't match, or teasers don't match	 
	 
		if (thisheadline != "Feedback" || thisteaser != "Correspondence and blog&nbsp;")
	{ teaser = fixLBs('Correspondence and blog&nbsp;', '*', '</p><p>', 'Feedback');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Feedback.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Feedback</a></h6>';
   }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Feedback</h6>';	//don't link to self


	//	
//

mstring+='<div class="menuex"><h3 class="fsection" style="margin-top:0.2em"><b>Well-Wrought Form</b><br /><span style="font-weight:normal; font-size: 90%; letter-spacing: 1px">(Feature Theme)</span></h3>';

//
     // 
 		     audioimg="";
	 // 

		if (thisheadline != "Introduction" || thisteaser != "Feature introduction") //distinguish separate pages by same author
		{ teaser = fixLBs('Feature introduction', '*', '</p><p>', 'Introduction');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Theme/Introduction.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Introduction</a>' +audioimg +'</h6>';
       }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Introduction' +audioimg +'</h6>';	//don't link to self		 
	//	
//

mstring+='<h3 style="margin-top:0.3em">Poems</h3>';

//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Claire Askew" || thisteaser != "Caul (sestina)")
		{ teaser = fixLBs('Caul (sestina)', '*', '</p><p>', 'Claire Askew');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Askew.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Claire Askew</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Claire Askew' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Aug2009/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
	
		if (thisheadline != "Enriqueta Carrington" || thisteaser != "The Goddess Works Her Loom *Braiding")
		{ teaser = fixLBs('The Goddess Works Her Loom *Braiding', '*', '</p><p>', 'Enriqueta Carrington');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Carrington.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Enriqueta Carrington</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Enriqueta Carrington' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Peter Coghill" || thisteaser != "Colo River *Wattle and the North Wind")
		{ teaser = fixLBs('Colo River *Wattle and the North Wind', '*', '</p><p>', 'Peter Coghill');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Coghill.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Peter Coghill</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Peter Coghill' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Maryann Corbett" || thisteaser != "Cold Case (alliterative) *Tattoo and Piercing Parlour (sapphics)")
		{ teaser = fixLBs('Cold Case (alliterative) *Tattoo and Piercing Parlour (sapphics)', '*', '</p><p>', 'Maryann Corbett');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Corbett.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Maryann Corbett</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Maryann Corbett' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Martin Elster" || thisteaser != "Talcott Mountain (sapphics) *The Cymbal Player (terza rima)")
		{ teaser = fixLBs('Talcott Mountain (sapphics) *The Cymbal Player (terza rima)', '*', '</p><p>', 'Martin Elster');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Elster.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Martin Elster</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Martin Elster' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Rhina P. Espaillat" || thisteaser != "In Stone (ovillejo) *Lighthouse, with Poet Brandishing His Hat (Mason sonnet)")
		{ teaser = fixLBs('In Stone (ovillejo) *Lighthouse, with Poet Brandishing His Hat (Mason sonnet)', '*', '</p><p>', 'Rhina P. Espaillat');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Espaillat.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Rhina P. Espaillat</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Rhina P. Espaillat' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Aug2009/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
	
		if (thisheadline != "Andrew&nbsp; Frisardi" || thisteaser != "Driving All Night (villanelle)")
		{ teaser = fixLBs('Driving All Night (villanelle)', '*', '</p><p>', 'Andrew&nbsp; Frisardi');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Frisardi.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Andrew&nbsp; Frisardi</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Andrew&nbsp; Frisardi' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Alan Gould" || thisteaser != "On Drought and Crime Fiction")
		{ teaser = fixLBs('On Drought and Crime Fiction', '*', '</p><p>', 'Alan Gould');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Gould.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Alan Gould</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Alan Gould' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Aug2009/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
	
		if (thisheadline != "Max Gutmann" || thisteaser != "Success Story (ballade)")
		{ teaser = fixLBs('Success Story (ballade)', '*', '</p><p>', 'Max Gutmann');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Gutmann.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Max Gutmann</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Max Gutmann' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Christopher Hanson" || thisteaser != "Surviving a Funeral (sapphics) *Getting Even (English sonnet)")
		{ teaser = fixLBs('Surviving a Funeral (sapphics) *Getting Even (English sonnet)', '*', '</p><p>', 'Christopher Hanson');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Hanson.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Christopher Hanson</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Christopher Hanson' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "R. Nemo Hill" || thisteaser != "When Men Bow Down")
		{ teaser = fixLBs('When Men Bow Down', '*', '</p><p>', 'R. Nemo Hill');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Hill.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> R. Nemo Hill</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> R. Nemo Hill' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "James Iredell" || thisteaser != "Father, Near the End")
		{ teaser = fixLBs('Father, Near the End', '*', '</p><p>', 'James Iredell');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Iredell.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> James Iredell</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> James Iredell' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Clive James" || thisteaser != "A City with Green Fingers (ottava rima)")
		{ teaser = fixLBs('A City with Green Fingers (ottava rima)', '*', '</p><p>', 'Clive James');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/James.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Clive James</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Clive James' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "David W. Landrum" || thisteaser != "Bluffton, Ohio (Stefanile sonnet)")
		{ teaser = fixLBs('Bluffton, Ohio (Stefanile sonnet)', '*', '</p><p>', 'David W. Landrum');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Landrum.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> David W. Landrum</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> David W. Landrum' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Susan McLean" || thisteaser != "Flyway (sonnet)")
		{ teaser = fixLBs('Flyway (sonnet)', '*', '</p><p>', 'Susan McLean');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/McLean.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Susan McLean</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Susan McLean' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Aug2009/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
	
		if (thisheadline != "Rick Mullin" || thisteaser != "Mechanics of the Sun (sapphics)")
		{ teaser = fixLBs('Mechanics of the Sun (sapphics)', '*', '</p><p>', 'Rick Mullin');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Mullin.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Rick Mullin</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Rick Mullin' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Charles Musser" || thisteaser != "I Am Going Drown (terza rima sonnet)")
		{ teaser = fixLBs('I Am Going Drown (terza rima sonnet)', '*', '</p><p>', 'Charles Musser');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Musser.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Charles Musser</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Charles Musser' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Stephen Payne" || thisteaser != "Pier")
		{ teaser = fixLBs('Pier', '*', '</p><p>', 'Stephen Payne');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Payne.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Stephen Payne</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Stephen Payne' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Aug2009/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
	
		if (thisheadline != "Andrew Periale" || thisteaser != "A Change of Organ (tritina)")
		{ teaser = fixLBs('A Change of Organ (tritina)', '*', '</p><p>', 'Andrew Periale');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Periale.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Andrew Periale</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Andrew Periale' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Aug2009/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
	
		if (thisheadline != "Henry Quince" || thisteaser != "Cuckold *Anthropic Principle (English sonnet)")
		{ teaser = fixLBs('Cuckold *Anthropic Principle (English sonnet)', '*', '</p><p>', 'Henry Quince');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Quince.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Henry Quince</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Henry Quince' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Aug2009/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
	
		if (thisheadline != "Tad Richards" || thisteaser != "My Imaginary Friend (sestina)")
		{ teaser = fixLBs('My Imaginary Friend (sestina)', '*', '</p><p>', 'Tad Richards');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Richards.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Tad Richards</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Tad Richards' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Joseph Saling" || thisteaser != "Captain Lee (sonnet sequence)")
		{ teaser = fixLBs('Captain Lee (sonnet sequence)', '*', '</p><p>', 'Joseph Saling');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/Saling.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Joseph Saling</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Joseph Saling' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Gail White" || thisteaser != "Passion Spent (villanelle)")
		{ teaser = fixLBs('Passion Spent (villanelle)', '*', '</p><p>', 'Gail White');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Theme/Poems/White.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Gail White</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Gail White' +audioimg +'</h6>';	//don't link to self		 
	//	
//


//mstring+='<h3>Fiction</h3>';
//
 

mstring+='</div><div class="menuex"><h3 class="fsection" style="margin-top:0.2em"><b>Ann Drysdale</b><br /><span style="font-weight:normal; font-size: 90%; letter-spacing: 1px">(Spotlight Feature)</span></h3>';

//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Harry Chambers" || thisteaser != "Ann Drysdale: Parnassian Poet and Peasant")
		{
		 teaser = fixLBs('Ann Drysdale: Parnassian Poet and Peasant', '*', '</p><p>', 'Harry Chambers');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Spotlight/HarryChambers.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Harry Chambers</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Harry Chambers' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "John Whitworth" || thisteaser != "Telling It How It Is: An appreciation of Ann Drysdale")
		{
		 teaser = fixLBs('Telling It How It Is: An appreciation of Ann Drysdale', '*', '</p><p>', 'John Whitworth');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Spotlight/JohnWhitworth.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> John Whitworth</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> John Whitworth' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Interview&nbsp;" || thisteaser != "Paul Stevens interviews Ann Drysdale")
		{
		 teaser = fixLBs('Paul Stevens interviews Ann Drysdale', '*', '</p><p>', 'Interview&nbsp;');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Spotlight/Interview.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Interview&nbsp;</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Interview&nbsp;' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Aug2009/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
	
		if (thisheadline != "Poems by Ann Drysdale" || thisteaser != "The Bigger Picture *The Red Mud of Lydney *Risk Assessment *Changeling *Dear Heart… *Not Much News… *The Defeated Hare Questions the Value of Retromingency *First-footing *Dialogue *Blue Juice *Water *New Fruit")
		{
		 teaser = fixLBs('The Bigger Picture *The Red Mud of Lydney *Risk Assessment *Changeling *Dear Heart… *Not Much News… *The Defeated Hare Questions the Value of Retromingency *First-footing *Dialogue *Blue Juice *Water *New Fruit', '*', '</p><p>', 'Poems by Ann Drysdale');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Spotlight/AnnDrysdalePoems.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Poems by Ann Drysdale</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Poems by Ann Drysdale' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Raymond Tallis" || thisteaser != "Preface to Ann Drysdale’s collection <em>Three-three two-two five-six</em>")
		{
		 teaser = fixLBs('Preface to Ann Drysdale’s collection <em>Three-three two-two five-six</em>', '*', '</p><p>', 'Raymond Tallis');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Spotlight/RaymondTallis.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Raymond Tallis</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Raymond Tallis' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Rose Kelleher" || thisteaser != "On Ann Drysdale’s <em>Between Dryden and Duffy: Another Collection</em>")
		{
		 teaser = fixLBs('On Ann Drysdale’s <em>Between Dryden and Duffy: Another Collection</em>', '*', '</p><p>', 'Rose Kelleher');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Spotlight/RoseKelleher.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Rose Kelleher</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Rose Kelleher' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Glyn Pursglove" || thisteaser != "Interjected Remarks: an appreciation of Ann Drysdale")
		{
		 teaser = fixLBs('Interjected Remarks: an appreciation of Ann Drysdale', '*', '</p><p>', 'Glyn Pursglove');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Spotlight/GlynPursglove.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Glyn Pursglove</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Glyn Pursglove' +audioimg +'</h6>';	//don't link to self
		
	//	
//



mstring+='</div><h3 class="section">MORE POEMS & PROSE</h3>';
mstring += '<h3 style="margin-top:0.2em">Poems</h3>';

//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Maryann Corbett" || thisteaser != "Development")
		{
		 teaser = fixLBs('Development', '*', '</p><p>', 'Maryann Corbett');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Poems/Corbett.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Maryann Corbett</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Maryann Corbett' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Kevin Durkin" || thisteaser != "Northern Spy")
		{
		 teaser = fixLBs('Northern Spy', '*', '</p><p>', 'Kevin Durkin');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Poems/Durkin.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Kevin Durkin</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Kevin Durkin' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Richard Epstein" || thisteaser != "Wednesday: Theme and Variations")
		{
		 teaser = fixLBs('Wednesday: Theme and Variations', '*', '</p><p>', 'Richard Epstein');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Poems/Epstein.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Richard Epstein</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Richard Epstein' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Alan Gould" || thisteaser != "An Understudy for Desire")
		{
		 teaser = fixLBs('An Understudy for Desire', '*', '</p><p>', 'Alan Gould');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Poems/Gould.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Alan Gould</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Alan Gould' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Aug2009/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
	
			if (thisheadline != "W. F. Lantry" || thisteaser != "Love of Form")
		{
		 teaser = fixLBs('Love of Form', '*', '</p><p>', 'W. F. Lantry');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Poems/Lantry.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> W. F. Lantry</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> W. F. Lantry' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Timothy Murphy" || thisteaser != "<em>Agnóstica</em> *Classmate")
		{
		 teaser = fixLBs('<em>Agnóstica</em> *Classmate', '*', '</p><p>', 'Timothy Murphy');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Poems/Murphy.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Timothy Murphy</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Timothy Murphy' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Geoff Page" || thisteaser != "Seeing People *Ethics")
		{
		 teaser = fixLBs('Seeing People *Ethics', '*', '</p><p>', 'Geoff Page');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Poems/Page.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Geoff Page</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Geoff Page' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Alyssa Pelish" || thisteaser != "Myths, Dispelled: a prose-poetry series")
		{
		 teaser = fixLBs('Myths, Dispelled: a prose-poetry series', '*', '</p><p>', 'Alyssa Pelish');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Poems/Pelish.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Alyssa Pelish</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Alyssa Pelish' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Aug2009/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
	
			if (thisheadline != "Jennifer Reeser" || thisteaser != "Four Sonnets from the Dark Lady")
		{
		 teaser = fixLBs('Four Sonnets from the Dark Lady', '*', '</p><p>', 'Jennifer Reeser');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Poems/Reeser.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Jennifer Reeser</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Jennifer Reeser' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Aug2009/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
	
			if (thisheadline != "C. P. &nbsp;Stewart" || thisteaser != "All Is Well *Almost There")
		{
		 teaser = fixLBs('All Is Well *Almost There', '*', '</p><p>', 'C. P. &nbsp;Stewart');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Poems/Stewart.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> C. P. &nbsp;Stewart</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> C. P. &nbsp;Stewart' +audioimg +'</h6>';	//don't link to self
		
	//	
//

//mstring += '<h3>Fiction</h3>';
/* 
//
*/


//mstring += '<h3>Essay</h3>';

//


mstring += '<h3>Reviews</h3>';

//
     // 
	
	     audioimg="";
	   // 
	
				if (thisheadline != "Maggie Butt" || thisteaser != "The Strange and the Everyday: Review of <em>Occupation</em> by Angela France")
		{
		 teaser = fixLBs('The Strange and the Everyday: Review of <em>Occupation</em> by Angela France', '*', '</p><p>', 'Maggie Butt');
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Reviews/Butt.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Maggie Butt</a>' +audioimg +'</h6>';
       }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Maggie Butt' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
	
	     audioimg="";
	   // 
	
				if (thisheadline != "Nigel Holt" || thisteaser != "Bringing Job to Book: Review of David Holper’s <em>64 Questions</em>")
		{
		 teaser = fixLBs('Bringing Job to Book: Review of David Holper’s <em>64 Questions</em>', '*', '</p><p>', 'Nigel Holt');
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Reviews/Holt.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Nigel Holt</a>' +audioimg +'</h6>';
       }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Nigel Holt' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
	
	     audioimg="";
	   // 
	
				if (thisheadline != "Rose Kelleher" || thisteaser != "Thought and Passion: Review of C. E. Chaffin’s&nbsp;<em>Unexpected Light</em>")
		{
		 teaser = fixLBs('Thought and Passion: Review of C. E. Chaffin’s&nbsp;<em>Unexpected Light</em>', '*', '</p><p>', 'Rose Kelleher');
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Aug2009/Reviews/Kelleher.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Rose Kelleher</a>' +audioimg +'</h6>';
       }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Rose Kelleher' +audioimg +'</h6>';	//don't link to self
		
	//	
//

document.write(mstring);

} //End makeMenu function



function showHideMenu() //expand or collapse the menu;
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
  setCookie("cmstate", menustate, 5, "/")  // Save cmenustate cookie 5 days
}

function setMenu() 
{
menuobj = gE('left_menu');
linkobj = gE('menulink'); 
cmenustate = getCookie("cmstate"); 
if (cmenustate==null) //never changed menu state
   { 
	cmenustate=1; setCookie("cmstate", cmenustate, 5, "/")  // Initially save menustate cookie 5 days 
   }
if (cmenustate==1) //shown
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

function setFontSize() 
{
sizetext = getCookie("cfsize"); 
if (sizetext==null) //never changed font size
   { 
	sizetext="Medium"; setCookie("cfsize", sizetext, 5, "/")  // Initially save cfsize cookie 
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
		sizeperc = "100%";
		break
		
	    case "Large":
		sizeperc = "115%";
		break
		
		case "Extra Large":
		sizeperc = "130%";
			
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

 
function writeEmail(name,domain,screenLetters) {
   visible=(typeof(screenLetters)=="undefined")? name+"@"+domain : 
screenLetters;
   document.write ('<a href=mailto:'+name+'@'+domain+'>'+visible+'</a>');
}


function writeSpotHeading(pagepath) {
exheading= '&nbsp;'
if (pagepath.indexOf('Spotlight/')!=-1) 
	{
	exheading='<p class="spothead">Spotlight Feature<br /><b>Ann Drysdale</b></p>';
d.write(exheading)
	}
}

function writeExheading(pagepath) {
exheading= '&nbsp;'
if (pagepath.indexOf('Theme/')!=-1) 
	{
	exheading='<p class="exhead">Feature Theme<br /><b>Well-Wrought Form</b></span></p>';
d.write(exheading)
	}
}


function writeExquote(pagepath) {
quote ="";
if (pagepath.indexOf('Theme/')!=-1) 
{
quote='<p class="themequote"><i>&nbsp</i> <br /> <!-- &mdash; Name --> </p>';
}
d.write(quote)
}

function writeSpotquote(pagepath) {
squote ="";
if (pagepath.indexOf('Spotlight/')!=-1) 
{
squote='<p class="themequote"><i>She does one thing, and then another thing, and then, Lord above, she does a third thing.</i> <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; — John Whitworth</p>';
}
d.write(squote)
}


function playAudioS(ref) {
var codestr = '<p><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="90" height="24">  <param name="movie" value="http://www.the-chimaera.com/Audio/SECURE-TSPlayer/SECURE-TSPlayerV4.5.swf" />  <param name="quality" value="high" />  <param name="bgcolor" value= "#990000" /> <param name="FlashVars" value="playlistfile=http://www.the-chimaera.com/Audio/SECURE-TSPlayer/player-html/getPlayData.php%3Fmp3file%3D';
codestr+= ref;
codestr+= '&bgcolor=#990000&configurationfile=http://www.the-chimaera.com/Audio/SECURE-TSPlayer/player-html/configuration.xml" /> <embed src="http://www.the-chimaera.com/Audio/SECURE-TSPlayer/SECURE-TSPlayerV4.5.swf" quality="high" bgcolor="#990000" flashvars="playlistfile=http://www.the-chimaera.com/Audio/SECURE-TSPlayer/player-html/getPlayData.php%3Fmp3file%3D';
codestr+= ref;
codestr+= '&configurationfile=http://www.the-chimaera.com/Audio/SECURE-TSPlayer/player-html/configuration.xml" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="90" height="24"></embed></object></p>';
document.write(codestr);
}

function getPassword()
{
/* accstatus = getCookie("tcdevacc"); 

if (accstatus==1) return true //ok
var usertext = prompt("Page in development: authorised entry only: enter password", "");
if (usertext != pw) {
                          alert("You are not authorised to view this page: redirecting to The Chimaera home page");
						  window.location="http://www.the-chimaera.com/"; 
                           }
else setCookie("tcdevacc", 1, 4, "/")  // Save tcaccess cookie 4 days						   
return true
*/
}

//functions to increase/decrease page width and text size

function pageBiggen() {
//get the current size setting
//Not yet
}

function pageSmallen() {
//Not yet
}

 
