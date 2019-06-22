//The Chimaera Current Issue February 2009
//
// "file:///C|/Documents and Settings/Peter/Desktop/Documents/ChimaeraSite/Feb2009/" 
  


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
pw="tc5feb";
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
var cssNode = d.createElement('link');
cssNode.type = 'text/css';cssNode.rel = 'stylesheet';
cssNode.href = 'http://www.the-chimaera.com/Feb2009/stylesheets/textpage_proof.css';
cssNode.media = 'print';
cssNode.title = 'dynamicLoadedSheet';
d.getElementsByTagName("head")[0].appendChild(cssNode);

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
mstring = '<table id="maintoc" width="100%" cellspacing="0" cellpadding="4" bgcolor="#DADDF5" border="0"><tr><td width="50%" valign="top" style="padding-top: 8px">';
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
			mstring+='<h6 class="xr"; style="padding-left: 5px; padding-top: 0px; padding-bottom: 5px; text-transform:uppercase"><a href="http://www.the-chimaera.com/Feb2009/Editorial.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()">Editorial</a></h6>';
		} 
	//	
//
     // 
		if ("offmenu" != "offmenu")
		{
		teaser = fixLBs('Correspondence and blog&nbsp;', '*', '</p><p>', 'Feedback');  	 
			mstring+='<h6 class="xr"; style="padding-left: 5px; padding-top: 0px; padding-bottom: 5px; text-transform:uppercase"><a href="http://www.the-chimaera.com/Feb2009/Feedback.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()">Feedback</a></h6>';
		} 
	//	
//

mstring+='<div style="margin-top:7px; margin-left:0px; background-color: transparent; padding: 6px; padding-bottom: 8px; border: 0px solid #BBF"><h3 style="margin-bottom: 0.7em"><b>Light Verse</b><br /><span style="font-weight:normal; font-size: 85%">(Feature Theme)</span></h3>';


//
     audioimg="";
	 //  
	 
 teaser = fixLBs('John Whitworth introduces the feature', '*', '</p><p>', 'Introduction');  	 
 mstring+='<h6><a href="http://www.the-chimaera.com/Feb2009/Theme/IntroductionTheLightBriga.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()">Introduction</a>' +audioimg +'</h6>';

//

//mstring+='<h5>Essays</h5>'; 

//

mstring+='<h5 class="lcol">Poems</h5>';
//
     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Feb2009/images/sound.gif" alt="Audio reading available with poem text" title="Audio reading available with poem text" align="bottom">'; 
     // 
	 teaser = fixLBs('Your Rejection Slip, Annotated', '*', '</p><p>', 'Melissa Balmain');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Balmain.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"> Melissa Balmain</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('The Amanuensis', '*', '</p><p>', 'Michael Cantor');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Cantor.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"> Michael Cantor</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Chef’s Special', '*', '</p><p>', 'Mary Cresswell');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Cresswell.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"> Mary Cresswell</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Mad Annie Explains Alll *My Lover Bought Me Saffron', '*', '</p><p>', 'Ann Drysdale');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Drysdale.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"> Ann Drysdale</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Biffo Days: an anagram poem', '*', '</p><p>', 'Bill Greenwell');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Greenwell.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"> Bill Greenwell</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('In Chalfont St Giles *Lament for Names Lang Syne', '*', '</p><p>', 'R. S. Gwynn');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Gwynn.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"> R. S. Gwynn</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('The Relic', '*', '</p><p>', 'Jim Hayes');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Hayes.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"> Jim Hayes</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Daft', '*', '</p><p>', 'Janet Kenny');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Kenny.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"> Janet Kenny</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Birthwalla', '*', '</p><p>', 'David W. Landrum');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Landrum.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"> David W. Landrum</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Feb2009/images/sound.gif" alt="Audio reading available with poem text" title="Audio reading available with poem text" align="bottom">'; 
     // 
	 teaser = fixLBs('If Shakespeare Were Amish', '*', '</p><p>', 'Patti McCarty');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/McCarty.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"> Patti McCarty</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Ballade of Bad Losers *Letter to Santa Claus', '*', '</p><p>', 'Margaret Menamin');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Menamin.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"> Margaret Menamin</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Feb2009/images/sound.gif" alt="Audio reading available with poem text" title="Audio reading available with poem text" align="bottom">'; 
     // 
	 teaser = fixLBs('Distraction', '*', '</p><p>', 'Rick Mullin');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Mullin.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"> Rick Mullin</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Feb2009/images/sound.gif" alt="Audio reading available with poem text" title="Audio reading available with poem text" align="bottom">'; 
     // 
	 teaser = fixLBs('9 Foibles about a Woman from the Left Bank of Limerick', '*', '</p><p>', 'Carol Novack');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Novack.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"> Carol Novack</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('The Procedure', '*', '</p><p>', 'Chris O’Carroll');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/O_Carroll.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"> Chris O’Carroll</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('No Medals for the Subaltern', '*', '</p><p>', 'Martin Parker');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Parker.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"> Martin Parker</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('A Wolf’s Defence', '*', '</p><p>', 'Cheryl Patrick');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Patrick.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"> Cheryl Patrick</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Silent Ischemia *Mousetrap Blues', '*', '</p><p>', 'David Phillips');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Phillips.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"> David Phillips</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Money Song *Who Knows?', '*', '</p><p>', 'Gail White');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/White.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"> Gail White</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Preoccupations of the Parish Magazine', '*', '</p><p>', 'Peter Wyton');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Wyton.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"> Peter Wyton</a>' +audioimg +'</h6>';
//

//mstring+='<h5 class="lcol">Fiction</h5>';
//*

mstring+='</div></td><td valign="top" style="padding-left:8px;padding-top:8px; padding-bottom:8px">';

mstring+='<h6 class="xp" style"padding-top: 0px"><a href="http://www.the-chimaera.com/Feb2009/Feedback.html" onmouseover="showPopup(event,\'Letters and Blog\',140)" onmouseout="hideIt()">Feedback</a></h6>';

mstring+= '<div style="margin-top: 0.7em; margin-bottom:1.1em; padding-top:0.5em; padding-left: 0px; padding-bottom:0.9em;border: 0px solid #BBF; margin-right:5px; background-color: transparent;">';
			mstring+='<h3><b>Stephen Edgar</b><br /><span style="font-weight:normal; font-size: 85%">(Spotlight Feature)</span></h3>';
		
		
//
audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Feb2009/images/sound.gif" alt="Audio reading available with poem text" title="Audio reading available with poem text" align="bottom">'; 
     // 
teaser = fixLBs('Introduction and <em>A Nearly Perfect Poem: Stephen Edgar’s “Man on the Moon”</em>', '*', '</p><p>', 'Clive James');  	 
mstring+='<h6 class="xr""><a href="http://www.the-chimaera.com/Feb2009/Spotlight/CliveJamesonStephenEdgar.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()">Clive James</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
teaser = fixLBs('A long discussion with Stephen Edgar on his development and working practices', '*', '</p><p>', 'Interview (Paul Stevens)');  	 
mstring+='<h6 class="xr""><a href="http://www.the-chimaera.com/Feb2009/Spotlight/InterviewwithPaulStevens.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()">Interview (Paul Stevens)</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Feb2009/images/sound.gif" alt="Audio reading available with poem text" title="Audio reading available with poem text" align="bottom">'; 
     // 
teaser = fixLBs('The Annexe *Paris *The Transaction *How Long Have You Been having These Feelings *The Red Sea *Tralee *The Kiss *Incident at Grantley Manor *Observations of an Attendant *Penshurst', '*', '</p><p>', 'Poems');  	 
mstring+='<h6 class="xr""><a href="http://www.the-chimaera.com/Feb2009/Spotlight/StephenEdgarPoems.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()">Poems</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
teaser = fixLBs('Launch speech for <em>Lost in the Foreground</em>', '*', '</p><p>', 'Vivian Smith');  	 
mstring+='<h6 class="xr""><a href="http://www.the-chimaera.com/Feb2009/Spotlight/VivianSmithLaunchSpeech.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()">Vivian Smith</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
teaser = fixLBs('Review of <em>Lost in the Foreground</em>', '*', '</p><p>', 'Judith Beveridge');  	 
mstring+='<h6 class="xr""><a href="http://www.the-chimaera.com/Feb2009/Spotlight/JudithBeveridgeReview.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()">Judith Beveridge</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
teaser = fixLBs('Close read of “Another Country”', '*', '</p><p>', 'Geoff Page');  	 
mstring+='<h6 class="xr""><a href="http://www.the-chimaera.com/Feb2009/Spotlight/GeoffPageCloseRead.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()">Geoff Page</a>' +audioimg +'</h6>';
	
//

mstring+='</div>';
mstring += '<h4>MORE POEMS AND PROSE</h4>'; 
mstring+='<h5 class="tight">Poems</h5>';
		
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Thing', '*', '</p><p>', 'Tony Barnstone');  	 
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/Feb2009/Poems/Barnstone.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()">Tony Barnstone</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('The Green Man *Into the Jaws of Death *Collateral Damages', '*', '</p><p>', 'Peter Branson');  	 
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/Feb2009/Poems/Branson.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()">Peter Branson</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Leaf Fall *In His Kingdom of Corpses', '*', '</p><p>', 'Michael R. Burch');  	 
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/Feb2009/Poems/Burch.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()">Michael R. Burch</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Napkin Drawing *Salon Treatment', '*', '</p><p>', 'Gregory di Prinzio');  	 
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/Feb2009/Poems/diPrinzio.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()">Gregory di Prinzio</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Last Call', '*', '</p><p>', 'James Feichthaler');  	 
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/Feb2009/Poems/Feichthaler.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()">James Feichthaler</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Feb2009/images/sound.gif" alt="Audio reading available with poem text" title="Audio reading available with poem text" align="bottom">'; 
     // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Bare *Foster Care', '*', '</p><p>', 'Simon Freedman');  	 
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/Feb2009/Poems/Freedman.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()">Simon Freedman</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Polishing Off the Sherry *Happy Hour *Brightening As They Fail *At the Summer Poetry Festival *Soldier on the Plane *When the Swallows come Back to Capistrano', '*', '</p><p>', 'Leslie Monsour');  	 
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/Feb2009/Poems/Monsour.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()">Leslie Monsour</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Mount So-and-So *What’s Needed *A Miracle', '*', '</p><p>', 'Barry Spacks');  	 
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/Feb2009/Poems/Spacks.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()">Barry Spacks</a>' +audioimg +'</h6>';
	//	
//

mstring+='<h5 class="tight">Fiction</h5>';
		
//
 // 
 //keywords =	"";
 teaser = fixLBs('Another (Purely Hypothetical) Cause of the Dissolution of an Otherwise Perfectly Good Marriage, Really', '*', '</p><p>', 'Michael Sheehan');  	 
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/Feb2009/Fiction/Sheehan.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()">Michael Sheehan: </a></h6>';
	//	
//


//mstring+='<h5 class="tight">Essays</h5>';
		
//

mstring+='<h5 class="tight">Reviews and Interviews</h5>';
		
//
 // 
 //keywords =	"";
 teaser = fixLBs('Contemporary Conundrums: review of Rose Kelleher’s <em>A Bundle o’Tinder</em>', '*', '</p><p>', 'David Holper');  	 
mstring+='<h6  class="xr"><a href="http://www.the-chimaera.com/Feb2009/ReviewsandInterviews/Holper.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()">David Holper</a></h6>';
	//	
//
 // 
 //keywords =	"";
 teaser = fixLBs('Irish poetry roundup', '*', '</p><p>', 'Quincy R. Lehr');  	 
mstring+='<h6  class="xr"><a href="http://www.the-chimaera.com/Feb2009/ReviewsandInterviews/LehrIrish.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()">Quincy R. Lehr</a></h6>';
	//	
//
 // 
 //keywords =	"";
 teaser = fixLBs('At Home with the Horace Milieu: review of A. M. Juster’s <em>The Satires of Horace</em>', '*', '</p><p>', 'Quincy R. Lehr');  	 
mstring+='<h6  class="xr"><a href="http://www.the-chimaera.com/Feb2009/ReviewsandInterviews/LehrJuster.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()">Quincy R. Lehr</a></h6>';
	//	
//
 // 
 //keywords =	"";
 teaser = fixLBs('Interview with Leslie Monsour', '*', '</p><p>', 'Tim Murphy');  	 
mstring+='<h6  class="xr"><a href="http://www.the-chimaera.com/Feb2009/ReviewsandInterviews/MurphyInterviewwithLeslie.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()">Tim Murphy</a></h6>';
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
// MORE POEMS AND PROSE: Poetry, Fiction, Essays, Reviews   

//
     // 	
//
     // 

//If headlines don't match, or teasers don't match	 
	 
		if (thisheadline != "Editorial" || thisteaser != "About this issue")
	{ teaser = fixLBs('About this issue', '*', '</p><p>', 'Editorial');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Editorial.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Editorial</a></h6>';
   }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Editorial</h6>';	//don't link to self


	//	
//
     // 

//If headlines don't match, or teasers don't match	 
	 
		if (thisheadline != "Feedback" || thisteaser != "Correspondence and blog&nbsp;")
	{ teaser = fixLBs('Correspondence and blog&nbsp;', '*', '</p><p>', 'Feedback');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Feedback.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Feedback</a></h6>';
   }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Feedback</h6>';	//don't link to self


	//	
//

mstring+='<div class="menuex"><h3 class="fsection" style="margin-top:0.2em"><b>Light Verse</b><br /><span style="font-weight:normal; font-size: 90%; letter-spacing: 1px">(Feature Theme)</span></h3>';

//
     // 
 		     audioimg="";
	 // 

		if (thisheadline != "Introduction" || thisteaser != "John Whitworth introduces the feature") //distinguish separate pages by same author
		{ teaser = fixLBs('John Whitworth introduces the feature', '*', '</p><p>', 'Introduction');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Theme/IntroductionTheLightBriga.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Introduction</a>' +audioimg +'</h6>';
       }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Introduction' +audioimg +'</h6>';	//don't link to self		 
	//	
//

mstring+='<h3 style="margin-top:0.3em">Poems</h3>';

//
     // 
 		     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Feb2009/images/sound.gif" alt="Audio reading available with poem text" title="Audio reading available with poem text" align="bottom">'; 
     // 
	
		if (thisheadline != "Melissa Balmain" || thisteaser != "Your Rejection Slip, Annotated")
		{ teaser = fixLBs('Your Rejection Slip, Annotated', '*', '</p><p>', 'Melissa Balmain');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Balmain.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Melissa Balmain</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Melissa Balmain' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Michael Cantor" || thisteaser != "The Amanuensis")
		{ teaser = fixLBs('The Amanuensis', '*', '</p><p>', 'Michael Cantor');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Cantor.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Michael Cantor</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Michael Cantor' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Mary Cresswell" || thisteaser != "Chef’s Special")
		{ teaser = fixLBs('Chef’s Special', '*', '</p><p>', 'Mary Cresswell');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Cresswell.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Mary Cresswell</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Mary Cresswell' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Ann Drysdale" || thisteaser != "Mad Annie Explains Alll *My Lover Bought Me Saffron")
		{ teaser = fixLBs('Mad Annie Explains Alll *My Lover Bought Me Saffron', '*', '</p><p>', 'Ann Drysdale');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Drysdale.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Ann Drysdale</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Ann Drysdale' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Bill Greenwell" || thisteaser != "Biffo Days: an anagram poem")
		{ teaser = fixLBs('Biffo Days: an anagram poem', '*', '</p><p>', 'Bill Greenwell');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Greenwell.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Bill Greenwell</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Bill Greenwell' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "R. S. Gwynn" || thisteaser != "In Chalfont St Giles *Lament for Names Lang Syne")
		{ teaser = fixLBs('In Chalfont St Giles *Lament for Names Lang Syne', '*', '</p><p>', 'R. S. Gwynn');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Gwynn.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> R. S. Gwynn</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> R. S. Gwynn' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Jim Hayes" || thisteaser != "The Relic")
		{ teaser = fixLBs('The Relic', '*', '</p><p>', 'Jim Hayes');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Hayes.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Jim Hayes</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Jim Hayes' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Janet Kenny" || thisteaser != "Daft")
		{ teaser = fixLBs('Daft', '*', '</p><p>', 'Janet Kenny');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Kenny.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Janet Kenny</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Janet Kenny' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "David W. Landrum" || thisteaser != "Birthwalla")
		{ teaser = fixLBs('Birthwalla', '*', '</p><p>', 'David W. Landrum');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Landrum.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> David W. Landrum</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> David W. Landrum' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Feb2009/images/sound.gif" alt="Audio reading available with poem text" title="Audio reading available with poem text" align="bottom">'; 
     // 
	
		if (thisheadline != "Patti McCarty" || thisteaser != "If Shakespeare Were Amish")
		{ teaser = fixLBs('If Shakespeare Were Amish', '*', '</p><p>', 'Patti McCarty');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/McCarty.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Patti McCarty</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Patti McCarty' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Margaret Menamin" || thisteaser != "Ballade of Bad Losers *Letter to Santa Claus")
		{ teaser = fixLBs('Ballade of Bad Losers *Letter to Santa Claus', '*', '</p><p>', 'Margaret Menamin');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Menamin.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Margaret Menamin</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Margaret Menamin' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Feb2009/images/sound.gif" alt="Audio reading available with poem text" title="Audio reading available with poem text" align="bottom">'; 
     // 
	
		if (thisheadline != "Rick Mullin" || thisteaser != "Distraction")
		{ teaser = fixLBs('Distraction', '*', '</p><p>', 'Rick Mullin');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Mullin.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Rick Mullin</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Rick Mullin' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Feb2009/images/sound.gif" alt="Audio reading available with poem text" title="Audio reading available with poem text" align="bottom">'; 
     // 
	
		if (thisheadline != "Carol Novack" || thisteaser != "9 Foibles about a Woman from the Left Bank of Limerick")
		{ teaser = fixLBs('9 Foibles about a Woman from the Left Bank of Limerick', '*', '</p><p>', 'Carol Novack');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Novack.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Carol Novack</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Carol Novack' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Chris O’Carroll" || thisteaser != "The Procedure")
		{ teaser = fixLBs('The Procedure', '*', '</p><p>', 'Chris O’Carroll');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/O_Carroll.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Chris O’Carroll</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Chris O’Carroll' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Martin Parker" || thisteaser != "No Medals for the Subaltern")
		{ teaser = fixLBs('No Medals for the Subaltern', '*', '</p><p>', 'Martin Parker');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Parker.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Martin Parker</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Martin Parker' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Cheryl Patrick" || thisteaser != "A Wolf’s Defence")
		{ teaser = fixLBs('A Wolf’s Defence', '*', '</p><p>', 'Cheryl Patrick');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Patrick.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Cheryl Patrick</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Cheryl Patrick' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "David Phillips" || thisteaser != "Silent Ischemia *Mousetrap Blues")
		{ teaser = fixLBs('Silent Ischemia *Mousetrap Blues', '*', '</p><p>', 'David Phillips');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Phillips.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> David Phillips</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> David Phillips' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Gail White" || thisteaser != "Money Song *Who Knows?")
		{ teaser = fixLBs('Money Song *Who Knows?', '*', '</p><p>', 'Gail White');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/White.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Gail White</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Gail White' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Peter Wyton" || thisteaser != "Preoccupations of the Parish Magazine")
		{ teaser = fixLBs('Preoccupations of the Parish Magazine', '*', '</p><p>', 'Peter Wyton');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Theme/Poems/Wyton.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Peter Wyton</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Peter Wyton' +audioimg +'</h6>';	//don't link to self		 
	//	
//


//mstring+='<h3>Fiction</h3>';
//
 

mstring+='</div><div class="menuex"><h3 class="fsection" style="margin-top:0.2em"><b>Stephen Edgar</b><br /><span style="font-weight:normal; font-size: 90%; letter-spacing: 1px">(Spotlight Feature)</span></h3>';

//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Feb2009/images/sound.gif" alt="Audio reading available with poem text" title="Audio reading available with poem text" align="bottom">'; 
     // 
	
		if (thisheadline != "Clive James" || thisteaser != "Introduction and <em>A Nearly Perfect Poem: Stephen Edgar’s “Man on the Moon”</em>")
		{
		 teaser = fixLBs('Introduction and <em>A Nearly Perfect Poem: Stephen Edgar’s “Man on the Moon”</em>', '*', '</p><p>', 'Clive James');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Spotlight/CliveJamesonStephenEdgar.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Clive James</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Clive James' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Interview (Paul Stevens)" || thisteaser != "A long discussion with Stephen Edgar on his development and working practices")
		{
		 teaser = fixLBs('A long discussion with Stephen Edgar on his development and working practices', '*', '</p><p>', 'Interview (Paul Stevens)');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Spotlight/InterviewwithPaulStevens.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Interview (Paul Stevens)</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Interview (Paul Stevens)' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Feb2009/images/sound.gif" alt="Audio reading available with poem text" title="Audio reading available with poem text" align="bottom">'; 
     // 
	
		if (thisheadline != "Poems" || thisteaser != "The Annexe *Paris *The Transaction *How Long Have You Been having These Feelings *The Red Sea *Tralee *The Kiss *Incident at Grantley Manor *Observations of an Attendant *Penshurst")
		{
		 teaser = fixLBs('The Annexe *Paris *The Transaction *How Long Have You Been having These Feelings *The Red Sea *Tralee *The Kiss *Incident at Grantley Manor *Observations of an Attendant *Penshurst', '*', '</p><p>', 'Poems');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Spotlight/StephenEdgarPoems.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Poems</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Poems' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Vivian Smith" || thisteaser != "Launch speech for <em>Lost in the Foreground</em>")
		{
		 teaser = fixLBs('Launch speech for <em>Lost in the Foreground</em>', '*', '</p><p>', 'Vivian Smith');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Spotlight/VivianSmithLaunchSpeech.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Vivian Smith</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Vivian Smith' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Judith Beveridge" || thisteaser != "Review of <em>Lost in the Foreground</em>")
		{
		 teaser = fixLBs('Review of <em>Lost in the Foreground</em>', '*', '</p><p>', 'Judith Beveridge');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Spotlight/JudithBeveridgeReview.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Judith Beveridge</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Judith Beveridge' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Geoff Page" || thisteaser != "Close read of “Another Country”")
		{
		 teaser = fixLBs('Close read of “Another Country”', '*', '</p><p>', 'Geoff Page');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Spotlight/GeoffPageCloseRead.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Geoff Page</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Geoff Page' +audioimg +'</h6>';	//don't link to self
		
	//	
//



mstring+='</div><h3 class="section">MORE POEMS & PROSE</h3>';
mstring += '<h3 style="margin-top:0.2em">Poems</h3>';

//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Tony Barnstone" || thisteaser != "Thing")
		{
		 teaser = fixLBs('Thing', '*', '</p><p>', 'Tony Barnstone');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Poems/Barnstone.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Tony Barnstone</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Tony Barnstone' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Peter Branson" || thisteaser != "The Green Man *Into the Jaws of Death *Collateral Damages")
		{
		 teaser = fixLBs('The Green Man *Into the Jaws of Death *Collateral Damages', '*', '</p><p>', 'Peter Branson');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Poems/Branson.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Peter Branson</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Peter Branson' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Michael R. Burch" || thisteaser != "Leaf Fall *In His Kingdom of Corpses")
		{
		 teaser = fixLBs('Leaf Fall *In His Kingdom of Corpses', '*', '</p><p>', 'Michael R. Burch');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Poems/Burch.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Michael R. Burch</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Michael R. Burch' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Gregory di Prinzio" || thisteaser != "Napkin Drawing *Salon Treatment")
		{
		 teaser = fixLBs('Napkin Drawing *Salon Treatment', '*', '</p><p>', 'Gregory di Prinzio');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Poems/diPrinzio.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Gregory di Prinzio</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Gregory di Prinzio' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "James Feichthaler" || thisteaser != "Last Call")
		{
		 teaser = fixLBs('Last Call', '*', '</p><p>', 'James Feichthaler');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Poems/Feichthaler.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> James Feichthaler</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> James Feichthaler' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Feb2009/images/sound.gif" alt="Audio reading available with poem text" title="Audio reading available with poem text" align="bottom">'; 
     // 
	
			if (thisheadline != "Simon Freedman" || thisteaser != "Bare *Foster Care")
		{
		 teaser = fixLBs('Bare *Foster Care', '*', '</p><p>', 'Simon Freedman');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Poems/Freedman.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Simon Freedman</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Simon Freedman' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Leslie Monsour" || thisteaser != "Polishing Off the Sherry *Happy Hour *Brightening As They Fail *At the Summer Poetry Festival *Soldier on the Plane *When the Swallows come Back to Capistrano")
		{
		 teaser = fixLBs('Polishing Off the Sherry *Happy Hour *Brightening As They Fail *At the Summer Poetry Festival *Soldier on the Plane *When the Swallows come Back to Capistrano', '*', '</p><p>', 'Leslie Monsour');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Poems/Monsour.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Leslie Monsour</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Leslie Monsour' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Barry Spacks" || thisteaser != "Mount So-and-So *What’s Needed *A Miracle")
		{
		 teaser = fixLBs('Mount So-and-So *What’s Needed *A Miracle', '*', '</p><p>', 'Barry Spacks');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Poems/Spacks.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Barry Spacks</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Barry Spacks' +audioimg +'</h6>';	//don't link to self
		
	//	
//

mstring += '<h3>Fiction</h3>';

//
     // 
 	
	 
			if (thisheadline != "Michael Sheehan" || thisteaser != "Another (Purely Hypothetical) Cause of the Dissolution of an Otherwise Perfectly Good Marriage, Really")
		{
		 teaser = fixLBs('Another (Purely Hypothetical) Cause of the Dissolution of an Otherwise Perfectly Good Marriage, Really', '*', '</p><p>', 'Michael Sheehan');
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/Fiction/Sheehan.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Michael Sheehan</a></h6>';
        }  
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Michael Sheehan</h6>';	//don't link to self
		
	//	
//



//mstring += '<h3>Essays</h3>';

//


mstring += '<h3>Reviews and Interviews</h3>';

//
     // 
	
	     audioimg="";
	   // 
	
				if (thisheadline != "David Holper" || thisteaser != "Contemporary Conundrums: review of Rose Kelleher’s <em>A Bundle o’Tinder</em>")
		{
		 teaser = fixLBs('Contemporary Conundrums: review of Rose Kelleher’s <em>A Bundle o’Tinder</em>', '*', '</p><p>', 'David Holper');
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/ReviewsandInterviews/Holper.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> David Holper</a>' +audioimg +'</h6>';
       }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> David Holper' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
	
	     audioimg="";
	   // 
	
				if (thisheadline != "Quincy R. Lehr" || thisteaser != "Irish poetry roundup")
		{
		 teaser = fixLBs('Irish poetry roundup', '*', '</p><p>', 'Quincy R. Lehr');
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/ReviewsandInterviews/LehrIrish.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Quincy R. Lehr</a>' +audioimg +'</h6>';
       }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Quincy R. Lehr' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
	
	     audioimg="";
	   // 
	
				if (thisheadline != "Quincy R. Lehr" || thisteaser != "At Home with the Horace Milieu: review of A. M. Juster’s <em>The Satires of Horace</em>")
		{
		 teaser = fixLBs('At Home with the Horace Milieu: review of A. M. Juster’s <em>The Satires of Horace</em>', '*', '</p><p>', 'Quincy R. Lehr');
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/ReviewsandInterviews/LehrJuster.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Quincy R. Lehr</a>' +audioimg +'</h6>';
       }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Quincy R. Lehr' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
	
	     audioimg="";
	   // 
	
				if (thisheadline != "Tim Murphy" || thisteaser != "Interview with Leslie Monsour")
		{
		 teaser = fixLBs('Interview with Leslie Monsour', '*', '</p><p>', 'Tim Murphy');
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Feb2009/ReviewsandInterviews/MurphyInterviewwithLeslie.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Tim Murphy</a>' +audioimg +'</h6>';
       }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Tim Murphy' +audioimg +'</h6>';	//don't link to self
		
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
 //setFontSize()
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
	exheading='<p class="spothead">Spotlight Feature<br /><b>Stephen Edgar</b></p>';
d.write(exheading)
	}
}

function writeExheading(pagepath) {
exheading= '&nbsp;'
if (pagepath.indexOf('Theme/')!=-1) 
	{
	exheading='<p class="exhead">Feature Theme<br /><b>Light Verse</b></span></p>';
d.write(exheading)
	}
}


function writeExquote(pagepath) {
quote ="";
if (pagepath.indexOf('Theme/')!=-1) 
{
quote='<p class="themequote"><i>The fact is that before the Romantics came along most poets were hard put to say whether what they wrote was Light or not. It didn’t really occur to them to ask.</i> <br /> &mdash; John Whitworth</p>';
}
d.write(quote)
}

function writeSpotquote(pagepath) {
squote ="";
if (pagepath.indexOf('Spotlight/')!=-1) 
{
squote='<p class="themequote"><i>If he were a jazz musician, he would be the kind who, when playing after hours, leads all the others to pack up their instruments and listen.</i> <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; — Clive James</p>';
}
d.write(squote)
}

function playAudioS(ref) {
var codestr = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="90" height="24">  <param name="movie" value="http://www.the-chimaera.com/Audio/SECURE-TSPlayer/SECURE-TSPlayerV4.5.swf" />  <param name="quality" value="high" />  <param name="bgcolor" value= "#990000" /> <param name="FlashVars" value="playlistfile=http://www.the-chimaera.com/Audio/SECURE-TSPlayer/player-html/getPlayData.php%3Fmp3file%3D';
codestr+= ref;
codestr+= '&bgcolor=#990000&configurationfile=http://www.the-chimaera.com/Audio/SECURE-TSPlayer/player-html/configuration.xml" /> <embed src="http://www.the-chimaera.com/Audio/SECURE-TSPlayer/SECURE-TSPlayerV4.5.swf" quality="high" bgcolor="#990000" flashvars="playlistfile=http://www.the-chimaera.com/Audio/SECURE-TSPlayer/player-html/getPlayData.php%3Fmp3file%3D';
codestr+= ref;
codestr+= '&configurationfile=http://www.the-chimaera.com/Audio/SECURE-TSPlayer/player-html/configuration.xml" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="90" height="24"></embed></object>';
document.write(codestr);
}


/*
<p><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="90" height="24">  <param name="movie" value="http://www.the-chimaera.com/Audio/SECURE-TSPlayer/SECURE-TSPlayerV4.5.swf" />  <param name="quality" value="high" />  <param name="bgcolor" value= "#990000" /> <param name="FlashVars" value="playlistfile=http://www.the-chimaera.com/Audio/SECURE-TSPlayer/player-html/getPlayData.php%3Fmp3file%3DMoon&bgcolor=#990000&configurationfile=http://www.the-chimaera.com/Audio/SECURE-TSPlayer/player-html/configuration.xml" /> <embed src="http://www.the-chimaera.com/Audio/SECURE-TSPlayer/SECURE-TSPlayerV4.5.swf" quality="high" bgcolor="#990000" flashvars="playlistfile=http://www.the-chimaera.com/Audio/SECURE-TSPlayer/player-html/getPlayData.php%3Fmp3file%3DMoon&configurationfile=http://www.the-chimaera.com/Audio/SECURE-TSPlayer/player-html/configuration.xml" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="90" height="24"></embed></object></p>

*/

function getPassword()
{
/* accstatus = getCookie("tcdevacc"); 

if (accstatus==1) return true //ok
var usertext = prompt("Page in development: authorised entry only: enter password", "");
if (usertext != pw) {
                          alert("You are not authorised to view this page: redirecting to The Chimaera home page");
						  window.location="http://www.the-chimaera.com/"; 
                           }
else setCookie("tcdevacc", 1, 3, "/")  // Save tcaccess cookie 3 days						   
return true
*/
}

/*
Make a div containing the content as innerHTML == this seems to work OK with NLs in the string

 
*/


 
