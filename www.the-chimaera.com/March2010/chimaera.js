//The Chimaera Current Issue March 2010
//  
//""http://www.the-chimaera.com/Issue7Proof/" 
//"file:///C|/Documents and Settings/Peter/Desktop/Documents/ChimaeraSite/March2010/" 
// "file:///C|/Documents and Settings/Peter/Desktop/Documents/ChimaeraSite/Proof_Issue7/" 

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
pw="tc7mar";
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
cssNode.href = 'http://www.the-chimaera.com/March2010/stylesheets/print.css';
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
tooltip=gE("tipdiv");//shadow = gE("tipdiv_s");
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
mstring = '<table id="maintoc" width="99%" cellspacing="0" cellpadding="4" border="0"><tr><td width="50%" valign="top" style="padding-top: 8px;padding-bottom:8px">'; 
//mstring = '<div id="tocleft" style="padding: 0px; padding-top:8px; width:46%; border: 1px solid blue; float:left>'; 


//bgcolor="#F3FDF9
//List/link content in folders Theme, Theme/Poems, Theme/Fiction, / (editorial), Spotlight, 
// MORE POEMS AND PROSE: Poetry, Essays, Reviews   
//<span class="chev">&raquo;</span> removed angle-quote code

//
     // 	
//
     // 
		if ("text after menu" != "offmenu")
		{
		teaser = fixLBs('About this issue', '*', '</p><p>', 'Editorial');  	 
			mstring+='<h6 class="xt" style="margin-left:0; padding-left: 5px; padding-top: 0px; padding-bottom: 3px; text-transform:uppercase"><a href="http://www.the-chimaera.com/March2010/Editorial.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Editorial</a></h6>';
		} 
	//	
//
     // 
		if ("" != "offmenu")
		{
		teaser = fixLBs('Happenings', '*', '</p><p>', 'News');  	 
			mstring+='<h6 class="xt" style="margin-left:0; padding-left: 5px; padding-top: 0px; padding-bottom: 3px; text-transform:uppercase"><a href="http://www.the-chimaera.com/March2010/News.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">News</a></h6>';
		} 
	//	
//
     // 
		if ("offmenu" != "offmenu")
		{
		teaser = fixLBs('Correspondence and blog&nbsp;', '*', '</p><p>', 'Feedback');  	 
			mstring+='<h6 class="xt" style="margin-left:0; padding-left: 5px; padding-top: 0px; padding-bottom: 3px; text-transform:uppercase"><a href="http://www.the-chimaera.com/March2010/Feedback.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Feedback</a></h6>';
		} 
	//	
//

//SPOTLIGHT
    mstring+= '<div style="margin-top: 0.4em; margin-bottom:1.1em; padding-top:0.5em; padding-left: 0px; padding-bottom:0.9em; border-top: 1px dashed #C0CCC9;  border-bottom: 1px dashed #C0CCC9;">';
	mstring+='<h3><b>Alan Gould</b><br /><span style="font-weight:normal; font-size: 85%">(Spotlight Feature)</span></h3>';
		
//
audioimg="";
	 // 
teaser = fixLBs('Paul Stevens interviews Alan Gould', '*', '</p><p>', 'Interview&nbsp;');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/March2010/Spotlight/Interview.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Interview&nbsp;</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
teaser = fixLBs('Seven poems/excerpts', '*', '</p><p>', 'Poems by Alan Gould');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/March2010/Spotlight/Poems.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Poems by Alan Gould</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
teaser = fixLBs('Excerpt from the long narrative poem co-written by Alan Gould and Kevin Hart', '*', '</p><p>', 'Excerpt from The Harrowing of Balmain');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/March2010/Spotlight/ExcerptfromTheHarrowing.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Excerpt from The Harrowing of Balmain</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
teaser = fixLBs('Excerpt from Alan Gould’s novel-in-progress', '*', '</p><p>', 'From <em>The Poets’ Stairwell</em>');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/March2010/Spotlight/NovelExcerpt.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">From <em>The Poets’ Stairwell</em></a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
teaser = fixLBs('Les Murray: Tribute-Runes for Alan Brigadierson', '*', '</p><p>', 'Les Murray');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/March2010/Spotlight/LesMurray.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Les Murray</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
teaser = fixLBs('A U-Boat Morning, 1914: close read&nbsp;', '*', '</p><p>', 'Geoff Page');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/March2010/Spotlight/GeoffPage.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Geoff Page</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
teaser = fixLBs('On Alan Gould’s ‘Maritime Photographs’ group of poems', '*', '</p><p>', 'Janet Kenny');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/March2010/Spotlight/JanetKenny.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Janet Kenny</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
teaser = fixLBs('Poetry of the Complex Circuits: Review of&nbsp; <em>The Past Completes Me</em>', '*', '</p><p>', 'Stephen McInerney');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/March2010/Spotlight/StephenMcInerney.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Stephen McInerney</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
teaser = fixLBs('Jewel in the Timeline: review of&nbsp; <em>The Past Completes Me</em>', '*', '</p><p>', 'Ann Drysdale');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/March2010/Spotlight/AnnDrysdale.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Ann Drysdale</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
teaser = fixLBs('Ballade for Alan Gould', '*', '</p><p>', 'Alan Wearne');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/March2010/Spotlight/AlanWearne.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Alan Wearne</a>' +audioimg +'</h6>';
	
//
mstring+='</div>';

//Some of UNTHEMED in L column

//UNTHEMED =========================================================
mstring += '<h4>UNTHEMED</h4>'; 
mstring+='<h5>Poems</h5>';
		
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Rania’s Ambulance', '*', '</p><p>', 'Dennis J.Bernstein');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/March2010/Poems/Bernstein.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Dennis J.Bernstein</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Album *Over the Field', '*', '</p><p>', 'Alison Brackenbury');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/March2010/Poems/Brackenbury.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Alison Brackenbury</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Reframing the Johari Window', '*', '</p><p>', 'Ann Drysdale');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/March2010/Poems/Drysdale.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Ann Drysdale</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Our Venerable Bud *Up &amp; Down the Backbone of Our Land', '*', '</p><p>', 'Richard Epstein');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/March2010/Poems/Epstein.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Richard Epstein</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/March2010/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Dangerous Liaison *Why I Am Attracted to Men with Dyslexia', '*', '</p><p>', 'Anna Evans');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/March2010/Poems/Evans.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Anna Evans</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Forgetting Words *Thinking Of Keats’s Cold Living Hand *Incident with Blood', '*', '</p><p>', 'Louis Gallo');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/March2010/Poems/Gallo.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Louis Gallo</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Last Dance', '*', '</p><p>', 'Janet Kenny');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/March2010/Poems/Kenny.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Janet Kenny</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Begging *The Measuring Hawk', '*', '</p><p>', 'Lance Levens');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/March2010/Poems/Levens.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Lance Levens</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('For All We Own and Are *Forgotten Storms', '*', '</p><p>', 'Kevin Saving');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/March2010/Poems/Saving.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Kevin Saving</a>' +audioimg +'</h6>';
	//	
//

mstring+='<h5>Fiction</h5>';
		
//
 // 
//keywords =	"";
 teaser = fixLBs('The Girl with Brown Everything', '*', '</p><p>', 'JM Huscher');  	 
mstring+='<h6 class="xt"><a href="http://www.the-chimaera.com/March2010/Fiction/Huscher.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">JM Huscher</a></h6>';
	//	
//


//COLUMNS BREAK
mstring+='</td><td valign="top" style="padding-left:8px;padding-top:0px; padding-bottom:8px">';

//mstring+='<h5>Essay</h5>';
		
//

mstring+='<h5>Reviews</h5>';
		
//
 // 
 //keywords =	"";
 teaser = fixLBs('Reviews of recent collections by Alison Brackenbury and Ann Drysdale', '*', '</p><p>', 'Angela France');  	 
mstring+='<h6  class="xl"><a href="http://www.the-chimaera.com/March2010/Reviews/France.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Angela France</a></h6>';
	//	
//
 // 
 //keywords =	"";
 teaser = fixLBs('The Heat of Shoeprints in Frost: Review of Nigel McLaughlin’s collection, <em>Chora</em>', '*', '</p><p>', 'Barbara Smith');  	 
mstring+='<h6  class="xl"><a href="http://www.the-chimaera.com/March2010/Reviews/Smith.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Barbara Smith</a></h6>';
	//	
//
 // 
 //keywords =	"";
 teaser = fixLBs('Contrasting Worlds: Review of Jee Leong Koh’s <em>Equal to the Earth</em>', '*', '</p><p>', 'Paul Stevens');  	 
mstring+='<h6  class="xl"><a href="http://www.the-chimaera.com/March2010/Reviews/Stevens.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Paul Stevens</a></h6>';
	//	
//
//End UNTHEMED ==============================================

//THEME ===========================================================
mstring+='<div style="margin-top:7px; margin-left:0px; padding: 6px; border-top: 1px dashed #C0CCC9;"><h3 style="margin-bottom: 0.7em"><b>Voyages and Quests</b><br /><span style="font-weight:normal; font-size: 85%">(Feature Theme)</span></h3>';

//
     audioimg="";
	 //  
	 
 teaser = fixLBs('Feature introduction', '*', '</p><p>', 'Introduction');  	 
 mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/March2010/Theme/Introduction.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Introduction</a>' +audioimg +'</h6>';

//

//mstring+='<h5>Essays</h5>'; 

//

mstring+='<h5 class="lcol">Poems</h5>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Flight EZ426', '*', '</p><p>', 'Alison Brackenbury');  	 
 mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/Brackenbury.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Alison Brackenbury</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/March2010/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
	 teaser = fixLBs('Of Moral Consequence *Iceland', '*', '</p><p>', 'John Drexel');  	 
 mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/Drexel.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">John Drexel</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('The Silver of the Stars *Across the Stone', '*', '</p><p>', 'Martin Elster');  	 
 mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/Elster.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Martin Elster</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Proceed With Caution', '*', '</p><p>', 'Kathryn Jacobs');  	 
 mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/Jacobs.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Kathryn Jacobs</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Reverse Moses *Bayern Sud', '*', '</p><p>', 'David W. Landrum');  	 
 mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/Landrum.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">David W. Landrum</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Sauntering *Migrating Sons', '*', '</p><p>', 'Ralph La Rosa');  	 
 mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/LaRosa.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Ralph La Rosa</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('The Last Navigator', '*', '</p><p>', 'J.S. MacLean');  	 
 mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/MacLean.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">J.S. MacLean</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Santa Fe Trail, Kansas', '*', '</p><p>', 'Chris O’Carroll');  	 
 mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/O_Carroll.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Chris O’Carroll</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/March2010/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
	 teaser = fixLBs('The Pursuit', '*', '</p><p>', 'Frank Osen');  	 
 mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/Osen.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Frank Osen</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/March2010/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
	 teaser = fixLBs('Apostrophe: Beeches at Wenmouth Cross *Do Not Go East', '*', '</p><p>', 'Philip Quinlan');  	 
 mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/Quinlan.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Philip Quinlan</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Long-Ago Flowers *Life on Another Planet', '*', '</p><p>', 'J. J. Steinfeld');  	 
 mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/Steinfeld.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">J. J. Steinfeld</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('The Sea Inside *The Living Lie', '*', '</p><p>', 'Parker Tettleton');  	 
 mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/Tettleton.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Parker Tettleton</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('The Heartache of Geese *Straight Furrow *Training', '*', '</p><p>', 'Don Thackrey');  	 
 mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/Thackrey.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Don Thackrey</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('In Leningrad *Migration', '*', '</p><p>', 'John Van Doren');  	 
 mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/VanDoren.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">John Van Doren</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Leap of Faith *A Song of Autumn *Goose Guides and Swimming Teachers', '*', '</p><p>', 'Peter Wyton');  	 
 mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/Wyton.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Peter Wyton</a>' +audioimg +'</h6>';
//

mstring+='<h5 class="lcol">Fiction</h5>';
//*
teaser = fixLBs('Aegeus', '*', '</p><p>', 'David Ewald');  	 
mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/March2010/Theme/Fiction/Ewald.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">David Ewald</a></h6>';
//
teaser = fixLBs('Our Lives Were Supposed to be Different', '*', '</p><p>', 'Janice D. Soderling');  	 
mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/March2010/Theme/Fiction/Soderling.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()">Janice D. Soderling</a></h6>';
//

mstring+='</div>';
//END THEME ============================================================




//mstring+='<h6 class="xl" style="padding-top: 0px; margin-left:0px"><a href="http://www.the-chimaera.com/March2010/Feedback.html" onmouseover="showPopup(event,\'Letters and Blog\',160)" onmouseout="hideIt()">Feedback</a></h6>';


mstring+='</td></tr></table>';
//mstring+='</div>';

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
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Editorial.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Editorial</a></h6>';
   }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Editorial</h6>';	//don't link to self


	//	
//
     // 

//If headlines don't match, or teasers don't match	 
	 
		if (thisheadline != "News" || thisteaser != "Happenings")
	{ teaser = fixLBs('Happenings', '*', '</p><p>', 'News');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/News.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> News</a></h6>';
   }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> News</h6>';	//don't link to self


	//	
//
     // 

//If headlines don't match, or teasers don't match	 
	 
		if (thisheadline != "Feedback" || thisteaser != "Correspondence and blog&nbsp;")
	{ teaser = fixLBs('Correspondence and blog&nbsp;', '*', '</p><p>', 'Feedback');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Feedback.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Feedback</a></h6>';
   }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Feedback</h6>';	//don't link to self


	//	
//

mstring+='<div class="menuex"><h3 class="fsection" style="margin-top:0.2em"><b>Voyages and Quests</b><br /><span style="font-weight:normal; font-size: 90%; letter-spacing: 1px">(Feature Theme)</span></h3>';

//
     // 
 		     audioimg="";
	 // 

		if (thisheadline != "Introduction" || thisteaser != "Feature introduction") //distinguish separate pages by same author
		{ teaser = fixLBs('Feature introduction', '*', '</p><p>', 'Introduction');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Theme/Introduction.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Introduction</a>' +audioimg +'</h6>';
       }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Introduction' +audioimg +'</h6>';	//don't link to self		 
	//	
//

mstring+='<h3 style="margin-top:0.3em">Poems</h3>';

//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Alison Brackenbury" || thisteaser != "Flight EZ426")
		{ teaser = fixLBs('Flight EZ426', '*', '</p><p>', 'Alison Brackenbury');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/Brackenbury.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Alison Brackenbury</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Alison Brackenbury' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/March2010/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
	
		if (thisheadline != "John Drexel" || thisteaser != "Of Moral Consequence *Iceland")
		{ teaser = fixLBs('Of Moral Consequence *Iceland', '*', '</p><p>', 'John Drexel');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/Drexel.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> John Drexel</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> John Drexel' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Martin Elster" || thisteaser != "The Silver of the Stars *Across the Stone")
		{ teaser = fixLBs('The Silver of the Stars *Across the Stone', '*', '</p><p>', 'Martin Elster');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/Elster.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Martin Elster</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Martin Elster' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Kathryn Jacobs" || thisteaser != "Proceed With Caution")
		{ teaser = fixLBs('Proceed With Caution', '*', '</p><p>', 'Kathryn Jacobs');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/Jacobs.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Kathryn Jacobs</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Kathryn Jacobs' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "David W. Landrum" || thisteaser != "Reverse Moses *Bayern Sud")
		{ teaser = fixLBs('Reverse Moses *Bayern Sud', '*', '</p><p>', 'David W. Landrum');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/Landrum.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> David W. Landrum</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> David W. Landrum' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Ralph La Rosa" || thisteaser != "Sauntering *Migrating Sons")
		{ teaser = fixLBs('Sauntering *Migrating Sons', '*', '</p><p>', 'Ralph La Rosa');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/LaRosa.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Ralph La Rosa</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Ralph La Rosa' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "J.S. MacLean" || thisteaser != "The Last Navigator")
		{ teaser = fixLBs('The Last Navigator', '*', '</p><p>', 'J.S. MacLean');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/MacLean.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> J.S. MacLean</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> J.S. MacLean' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Chris O’Carroll" || thisteaser != "Santa Fe Trail, Kansas")
		{ teaser = fixLBs('Santa Fe Trail, Kansas', '*', '</p><p>', 'Chris O’Carroll');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/O_Carroll.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Chris O’Carroll</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Chris O’Carroll' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/March2010/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
	
		if (thisheadline != "Frank Osen" || thisteaser != "The Pursuit")
		{ teaser = fixLBs('The Pursuit', '*', '</p><p>', 'Frank Osen');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/Osen.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Frank Osen</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Frank Osen' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/March2010/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
	
		if (thisheadline != "Philip Quinlan" || thisteaser != "Apostrophe: Beeches at Wenmouth Cross *Do Not Go East")
		{ teaser = fixLBs('Apostrophe: Beeches at Wenmouth Cross *Do Not Go East', '*', '</p><p>', 'Philip Quinlan');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/Quinlan.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Philip Quinlan</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Philip Quinlan' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "J. J. Steinfeld" || thisteaser != "Long-Ago Flowers *Life on Another Planet")
		{ teaser = fixLBs('Long-Ago Flowers *Life on Another Planet', '*', '</p><p>', 'J. J. Steinfeld');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/Steinfeld.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> J. J. Steinfeld</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> J. J. Steinfeld' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Parker Tettleton" || thisteaser != "The Sea Inside *The Living Lie")
		{ teaser = fixLBs('The Sea Inside *The Living Lie', '*', '</p><p>', 'Parker Tettleton');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/Tettleton.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Parker Tettleton</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Parker Tettleton' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Don Thackrey" || thisteaser != "The Heartache of Geese *Straight Furrow *Training")
		{ teaser = fixLBs('The Heartache of Geese *Straight Furrow *Training', '*', '</p><p>', 'Don Thackrey');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/Thackrey.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Don Thackrey</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Don Thackrey' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "John Van Doren" || thisteaser != "In Leningrad *Migration")
		{ teaser = fixLBs('In Leningrad *Migration', '*', '</p><p>', 'John Van Doren');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/VanDoren.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> John Van Doren</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> John Van Doren' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Peter Wyton" || thisteaser != "Leap of Faith *A Song of Autumn *Goose Guides and Swimming Teachers")
		{ teaser = fixLBs('Leap of Faith *A Song of Autumn *Goose Guides and Swimming Teachers', '*', '</p><p>', 'Peter Wyton');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Theme/Poems/Wyton.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Peter Wyton</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Peter Wyton' +audioimg +'</h6>';	//don't link to self		 
	//	
//


mstring+='<h3>Fiction</h3>';
//
     // 
if (thisheadline != "David Ewald" || thisteaser != "Aegeus")
    { teaser = fixLBs('Aegeus', '*', '</p><p>', 'David Ewald');  	 
	mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Theme/Fiction/Ewald.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> David Ewald</a></h6>';
	}
	else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> David Ewald</h6>';	//don't link to self		 
	//	
//
     // 
if (thisheadline != "Janice D. Soderling" || thisteaser != "Our Lives Were Supposed to be Different")
    { teaser = fixLBs('Our Lives Were Supposed to be Different', '*', '</p><p>', 'Janice D. Soderling');  	 
	mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Theme/Fiction/Soderling.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Janice D. Soderling</a></h6>';
	}
	else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Janice D. Soderling</h6>';	//don't link to self		 
	//	
//
 

mstring+='</div><div class="menuex"><h3 class="fsection" style="margin-top:0.2em"><b>Alan Gould</b><br /><span style="font-weight:normal; font-size: 90%; letter-spacing: 1px">(Spotlight Feature)</span></h3>';

//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Interview&nbsp;" || thisteaser != "Paul Stevens interviews Alan Gould")
		{
		 teaser = fixLBs('Paul Stevens interviews Alan Gould', '*', '</p><p>', 'Interview&nbsp;');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Spotlight/Interview.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Interview&nbsp;</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Interview&nbsp;' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Poems by Alan Gould" || thisteaser != "Seven poems/excerpts")
		{
		 teaser = fixLBs('Seven poems/excerpts', '*', '</p><p>', 'Poems by Alan Gould');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Spotlight/Poems.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Poems by Alan Gould</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Poems by Alan Gould' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Excerpt from The Harrowing of Balmain" || thisteaser != "Excerpt from the long narrative poem co-written by Alan Gould and Kevin Hart")
		{
		 teaser = fixLBs('Excerpt from the long narrative poem co-written by Alan Gould and Kevin Hart', '*', '</p><p>', 'Excerpt from The Harrowing of Balmain');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Spotlight/ExcerptfromTheHarrowing.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Excerpt from The Harrowing of Balmain</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Excerpt from The Harrowing of Balmain' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "From <em>The Poets’ Stairwell</em>" || thisteaser != "Excerpt from Alan Gould’s novel-in-progress")
		{
		 teaser = fixLBs('Excerpt from Alan Gould’s novel-in-progress', '*', '</p><p>', 'From <em>The Poets’ Stairwell</em>');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Spotlight/NovelExcerpt.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> From <em>The Poets’ Stairwell</em></a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> From <em>The Poets’ Stairwell</em>' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Les Murray" || thisteaser != "Les Murray: Tribute-Runes for Alan Brigadierson")
		{
		 teaser = fixLBs('Les Murray: Tribute-Runes for Alan Brigadierson', '*', '</p><p>', 'Les Murray');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Spotlight/LesMurray.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Les Murray</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Les Murray' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Geoff Page" || thisteaser != "A U-Boat Morning, 1914: close read&nbsp;")
		{
		 teaser = fixLBs('A U-Boat Morning, 1914: close read&nbsp;', '*', '</p><p>', 'Geoff Page');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Spotlight/GeoffPage.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Geoff Page</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Geoff Page' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Janet Kenny" || thisteaser != "On Alan Gould’s ‘Maritime Photographs’ group of poems")
		{
		 teaser = fixLBs('On Alan Gould’s ‘Maritime Photographs’ group of poems', '*', '</p><p>', 'Janet Kenny');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Spotlight/JanetKenny.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Janet Kenny</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Janet Kenny' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Stephen McInerney" || thisteaser != "Poetry of the Complex Circuits: Review of&nbsp; <em>The Past Completes Me</em>")
		{
		 teaser = fixLBs('Poetry of the Complex Circuits: Review of&nbsp; <em>The Past Completes Me</em>', '*', '</p><p>', 'Stephen McInerney');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Spotlight/StephenMcInerney.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Stephen McInerney</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Stephen McInerney' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Ann Drysdale" || thisteaser != "Jewel in the Timeline: review of&nbsp; <em>The Past Completes Me</em>")
		{
		 teaser = fixLBs('Jewel in the Timeline: review of&nbsp; <em>The Past Completes Me</em>', '*', '</p><p>', 'Ann Drysdale');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Spotlight/AnnDrysdale.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Ann Drysdale</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Ann Drysdale' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Alan Wearne" || thisteaser != "Ballade for Alan Gould")
		{
		 teaser = fixLBs('Ballade for Alan Gould', '*', '</p><p>', 'Alan Wearne');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Spotlight/AlanWearne.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Alan Wearne</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Alan Wearne' +audioimg +'</h6>';	//don't link to self
		
	//	
//



mstring+='</div><h3 class="section">UNTHEMED CONTENT</h3>';
mstring += '<h3 style="margin-top:0.2em">Poems</h3>';

//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Dennis J.Bernstein" || thisteaser != "Rania’s Ambulance")
		{
		 teaser = fixLBs('Rania’s Ambulance', '*', '</p><p>', 'Dennis J.Bernstein');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Poems/Bernstein.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Dennis J.Bernstein</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Dennis J.Bernstein' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Alison Brackenbury" || thisteaser != "Album *Over the Field")
		{
		 teaser = fixLBs('Album *Over the Field', '*', '</p><p>', 'Alison Brackenbury');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Poems/Brackenbury.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Alison Brackenbury</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Alison Brackenbury' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Ann Drysdale" || thisteaser != "Reframing the Johari Window")
		{
		 teaser = fixLBs('Reframing the Johari Window', '*', '</p><p>', 'Ann Drysdale');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Poems/Drysdale.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Ann Drysdale</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Ann Drysdale' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Richard Epstein" || thisteaser != "Our Venerable Bud *Up &amp; Down the Backbone of Our Land")
		{
		 teaser = fixLBs('Our Venerable Bud *Up &amp; Down the Backbone of Our Land', '*', '</p><p>', 'Richard Epstein');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Poems/Epstein.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Richard Epstein</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Richard Epstein' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/March2010/images/sound.gif" alt="Sound available" title="Sound available" align="bottom">'; 
     // 
	
			if (thisheadline != "Anna Evans" || thisteaser != "Dangerous Liaison *Why I Am Attracted to Men with Dyslexia")
		{
		 teaser = fixLBs('Dangerous Liaison *Why I Am Attracted to Men with Dyslexia', '*', '</p><p>', 'Anna Evans');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Poems/Evans.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Anna Evans</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Anna Evans' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Louis Gallo" || thisteaser != "Forgetting Words *Thinking Of Keats’s Cold Living Hand *Incident with Blood")
		{
		 teaser = fixLBs('Forgetting Words *Thinking Of Keats’s Cold Living Hand *Incident with Blood', '*', '</p><p>', 'Louis Gallo');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Poems/Gallo.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Louis Gallo</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Louis Gallo' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Janet Kenny" || thisteaser != "Last Dance")
		{
		 teaser = fixLBs('Last Dance', '*', '</p><p>', 'Janet Kenny');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Poems/Kenny.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Janet Kenny</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Janet Kenny' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Lance Levens" || thisteaser != "Begging *The Measuring Hawk")
		{
		 teaser = fixLBs('Begging *The Measuring Hawk', '*', '</p><p>', 'Lance Levens');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Poems/Levens.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Lance Levens</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Lance Levens' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Kevin Saving" || thisteaser != "For All We Own and Are *Forgotten Storms")
		{
		 teaser = fixLBs('For All We Own and Are *Forgotten Storms', '*', '</p><p>', 'Kevin Saving');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Poems/Saving.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Kevin Saving</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Kevin Saving' +audioimg +'</h6>';	//don't link to self
		
	//	
//

mstring += '<h3>Fiction</h3>';

//
     // 
 		if (thisheadline != "JM Huscher" || thisteaser != "The Girl with Brown Everything")
		{
		 teaser = fixLBs('The Girl with Brown Everything', '*', '</p><p>', 'JM Huscher');
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Fiction/Huscher.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> JM Huscher</a></h6>';
        }  
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> JM Huscher</h6>';	//don't link to self
		
	//	
//



//mstring += '<h3>Essay</h3>';

//


mstring += '<h3>Reviews</h3>';

//
     // 
	
	     audioimg="";
	   // 
	
				if (thisheadline != "Angela France" || thisteaser != "Reviews of recent collections by Alison Brackenbury and Ann Drysdale")
		{
		 teaser = fixLBs('Reviews of recent collections by Alison Brackenbury and Ann Drysdale', '*', '</p><p>', 'Angela France');
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Reviews/France.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Angela France</a>' +audioimg +'</h6>';
       }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Angela France' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
	
	     audioimg="";
	   // 
	
				if (thisheadline != "Barbara Smith" || thisteaser != "The Heat of Shoeprints in Frost: Review of Nigel McLaughlin’s collection, <em>Chora</em>")
		{
		 teaser = fixLBs('The Heat of Shoeprints in Frost: Review of Nigel McLaughlin’s collection, <em>Chora</em>', '*', '</p><p>', 'Barbara Smith');
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Reviews/Smith.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Barbara Smith</a>' +audioimg +'</h6>';
       }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Barbara Smith' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
	
	     audioimg="";
	   // 
	
				if (thisheadline != "Paul Stevens" || thisteaser != "Contrasting Worlds: Review of Jee Leong Koh’s <em>Equal to the Earth</em>")
		{
		 teaser = fixLBs('Contrasting Worlds: Review of Jee Leong Koh’s <em>Equal to the Earth</em>', '*', '</p><p>', 'Paul Stevens');
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/March2010/Reviews/Stevens.html" onmouseover="showPopup(event,\'' + teaser + '\',160)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Paul Stevens</a>' +audioimg +'</h6>';
       }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Paul Stevens' +audioimg +'</h6>';	//don't link to self
		
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
	exheading='<p class="spothead">Spotlight Feature<br /><b>Alan Gould</b></p>';
d.write(exheading)
	}
}

function writeExheading(pagepath) {
exheading= '&nbsp;'
if (pagepath.indexOf('Theme/')!=-1) 
	{
	exheading='<p class="exhead">Feature Theme<br /><b>Voyages and Quests</b></span></p>';
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
squote='<p class="themequote"><i>I found maritime substance invariably gave me a sharper exhilaration than other subjects because somehow it enabled me to inhabit a dimension of being, at once more reaching, more particular, and more whole.</i> <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; — Alan Gould</p>';
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
accstatus = getCookie("tcdevacc"); 

if (accstatus==1) return true //ok
var usertext = prompt("Page in development: authorised entry only: enter password", "");
if (usertext != pw) {
                          alert("You are not authorised to view this page: redirecting to The Chimaera home page");
						  window.location="http://www.the-chimaera.com/"; 
                           }
else setCookie("tcdevacc", 1, 4, "/")  // Save tcaccess cookie 4 days						   
return true

}

//functions to increase/decrease page width and text size

function pageBiggen() {
//get the current size setting
//Not yet
}

function pageSmallen() {
//Not yet
}

 
