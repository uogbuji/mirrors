//The Chimaera Current Issue September 2008
//"http://www.the-chimaera.com/i3/"
// 
//"file:///C|/Documents and Settings/Peter/Desktop/Documents/ChimaeraSite/Sept2008/" 
  


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

//Add print stylesheet link
var cssNode = d.createElement('link');
cssNode.type = 'text/css';cssNode.rel = 'stylesheet';
cssNode.href = 'http://www.the-chimaera.com/Sept2008/stylesheets/textpage_proof.css';
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
mstring = '<table id="maintoc" width="100%" cellspacing="0" cellpadding="3" bgcolor="#DADDF5" border="0"><tr><td width="50%" valign="top" style="padding-top: 0px">';
//List/link content in folders Theme, Theme/Poems, Theme/Fiction, / (editorial), Spotlight, 
// MORE POEMS AND PROSE: Poetry, Essays, Reviews   

//
     // 	
//
     // 
		if ("" != "offmenu")
		{
		teaser = fixLBs('About this issue', '*', '</p><p>', 'Editorial');  	 
			mstring+='<h6 class="xr"; style="padding-left: 5px; padding-top: 0px; padding-bottom: 5px; text-transform:uppercase"><a href="http://www.the-chimaera.com/Sept2008/Editorial.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Editorial</a></h6>';
		} 
	//	
//
     // 
		if ("offmenu" != "offmenu")
		{
		teaser = fixLBs('Correspondence and blog&nbsp;', '*', '</p><p>', 'Feedback');  	 
			mstring+='<h6 class="xr"; style="padding-left: 5px; padding-top: 0px; padding-bottom: 5px; text-transform:uppercase"><a href="http://www.the-chimaera.com/Sept2008/Feedback.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Feedback</a></h6>';
		} 
	//	
//

mstring+='<div style="margin-top:7px; margin-left:5px; background-color: transparent; padding: 6px; padding-bottom: 8px; border: 0px solid #BBF"><h3 style="margin-bottom: 0.7em"><b>Multum in Parvo</b><br /><span style="font-weight:normal; font-size: 85%">(Feature Theme)</span></h3>';


//
     audioimg="";
	 //  
	 
 teaser = fixLBs('Theme introduction', '*', '</p><p>', 'Preface');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Sept2008/Theme/Preface.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Preface</a>' +audioimg +'</h6>';

//

//mstring+='<h5>Essays</h5>'; 

//

mstring+='<h5 class="lcol">Poems</h5>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Fish-Wish*Recall', '*', '</p><p>', 'Mark Allinson');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Allinson.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Mark Allinson</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Virgins *Shell *Unnatural', '*', '</p><p>', 'Peter Austin');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Austin.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Peter Austin</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Sum It', '*', '</p><p>', 'Anne Bryant-Hamon');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Bryant-Hamon.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Anne Bryant-Hamon</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Poem Beginning with a line by Plath *A Cézanne Nude', '*', '</p><p>', 'Nuala Ní Chonchúir');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Chonchuir.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Nuala Ní Chonchúir</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Sept2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	 teaser = fixLBs('Everyday Arithmetic * Coordinates', '*', '</p><p>', 'Antonia Clark');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Clark.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Antonia Clark</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Bitch', '*', '</p><p>', 'Sarah Colona');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Colona.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Sarah Colona</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Pea Planting, Good Friday * Thoughts on the Transmission History of The Frog King', '*', '</p><p>', 'Maryann Corbett');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Corbett.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Maryann Corbett</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Spinster', '*', '</p><p>', 'Corrie Fenner');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Fenner.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Corrie Fenner</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Sept2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	 teaser = fixLBs('Fertility', '*', '</p><p>', 'Sally Festing');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Festing.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Sally Festing</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Let us sing of the godling boy...', '*', '</p><p>', 'Jan Iwaszkiewicz');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Iwaszkiewicz.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Jan Iwaszkiewicz</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('I know why the sea *Classifieds', '*', '</p><p>', 'Margaret Menamin');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Menamin.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Margaret Menamin</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Farming sequence: * Farming All Night * Betting the Ranch * “Blow Winds and Crack Your Cheeks” * Center Pivots * The Hatch * The Expulsion', '*', '</p><p>', 'Timothy Murphy');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Murphy.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Timothy Murphy</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Sept2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	 teaser = fixLBs('4m33s Ekphrastic *Private Ward', '*', '</p><p>', 'Henry Quince');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Quince.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Henry Quince</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('<em>Le Citron</em> *The Half Lemon', '*', '</p><p>', 'Myra Schneider');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Schneider.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Myra Schneider</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Triolet for Green Things', '*', '</p><p>', 'Janice D. Soderling');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Soderling.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Janice D. Soderling</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Out of Form * Boxers * For Shi Tao, in a Chinese Prison', '*', '</p><p>', 'John Weston');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Weston.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> John Weston</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('A Refusal to Mourn the Death of a Child *Well Now', '*', '</p><p>', 'Christopher Whitby');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Whitby.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Christopher Whitby</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
	 teaser = fixLBs('Beowulf Haiku', '*', '</p><p>', 'Gail White');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/White.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Gail White</a>' +audioimg +'</h6>';
//

mstring+='<h5 class="lcol">Fiction</h5>';
//
teaser = fixLBs('Short Story: “Lie to Me, Cherry”', '*', '</p><p>', 'Greta Bolger');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Sept2008/Theme/Fiction/Bolger.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Greta Bolger: Lie to Me, Cherry</a></h6>';
//
teaser = fixLBs('Microfiction: Monetary Transactions', '*', '</p><p>', 'J. J. Steinfeld');  	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/Sept2008/Theme/Fiction/Steinfeld.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> J. J. Steinfeld: Monetary Transactions</a></h6>';
//

mstring+='</div></td><td valign="top" style="padding-left:8px;padding-top:0px; padding-bottom:8px">';

mstring+='<h6 class="xp" style"padding-top: 0px"><a href="http://www.the-chimaera.com/Sept2008/Feedback.html" onmouseover="showPopup(event,\'Letters and Blog\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span>Feedback</a></h6>';

mstring+= '<div style="margin-top: 0.7em; margin-bottom:1.1em; padding-top:0.5em; padding-left: 5px; padding-bottom:0.9em;border: 0px solid #BBF; margin-right:5px; background-color: transparent;">';
			mstring+='<h3><b>John Whitworth</b><br /><span style="font-weight:normal; font-size: 85%">(Spotlight Feature)</span></h3>';
		
		
//
audioimg="";
	 // 
teaser = fixLBs('Paul Stevens interviews John Whitworth, with introductory words by Les Murray and Roger McGough', '*', '</p><p>', 'Introduction and Interview&nbsp;');  	 
mstring+='<h6 class="xr""><a href="http://www.the-chimaera.com/Sept2008/Spotlight/IntroductionandInterview.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Introduction and Interview&nbsp;</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
teaser = fixLBs('An appreciation', '*', '</p><p>', 'Alan Brownjohn');  	 
mstring+='<h6 class="xr""><a href="http://www.the-chimaera.com/Sept2008/Spotlight/AlanBrownjohnWordsonWhitw.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Alan Brownjohn</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
teaser = fixLBs('The Father, the Son and the Holy Ghost: Essay with quotes from John Whitworth’s work', '*', '</p><p>', 'Harry Chambers');  	 
mstring+='<h6 class="xr""><a href="http://www.the-chimaera.com/Sept2008/Spotlight/HarryChambersTheFatherthe.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Harry Chambers</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
teaser = fixLBs('An appreciation of John Whitworth’s collection, <em>Landscape with Small Humans</em>', '*', '</p><p>', 'Wendy Cope');  	 
mstring+='<h6 class="xr""><a href="http://www.the-chimaera.com/Sept2008/Spotlight/WendyCopeOnLandscapewithS.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Wendy Cope</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
teaser = fixLBs('Essay: The Dinky Toys of Retrospect', '*', '</p><p>', 'Gregory Dowling');  	 
mstring+='<h6 class="xr""><a href="http://www.the-chimaera.com/Sept2008/Spotlight/GregoryDowlingTheDinkyToy.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Gregory Dowling</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
teaser = fixLBs('Essay, “The Whitworth”, plus two poems for JW.', '*', '</p><p>', 'Ann Drysdale');  	 
mstring+='<h6 class="xr""><a href="http://www.the-chimaera.com/Sept2008/Spotlight/AnnDrysdaleTheWhitworth.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Ann Drysdale</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
teaser = fixLBs('Essay “How Pleasant to Know Mr Whitworth”, and a Whitworth-inspired poem “Making Do: Variations on a Theme”&nbsp;', '*', '</p><p>', 'Sam Gwynn');  	 
mstring+='<h6 class="xr""><a href="http://www.the-chimaera.com/Sept2008/Spotlight/SamGwynnHowPleasanttoKnow.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Sam Gwynn</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 
teaser = fixLBs('Rabbit Rabbit *The Difference *More Quarks* Four O’Clock* Faith Zone*On the Deaths of Philosophers* The Egg* Something Ugly* Morocco Bound* Life at Eighty', '*', '</p><p>', 'Poems');  	 
mstring+='<h6 class="xr""><a href="http://www.the-chimaera.com/Sept2008/Spotlight/JWPoems.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Poems</a>' +audioimg +'</h6>';
	
//

mstring+='</div>';
mstring += '<h4>MORE POEMS AND PROSE</h4>'; 
mstring+='<h5 class="tight">Poems</h5>';
		
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('The Old Friend *Picking the Apostles', '*', '</p><p>', 'Richard Broderick');  	 
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/Sept2008/Poems/Broderick.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Richard Broderick</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Out of the picture *Time Out *2:00', '*', '</p><p>', 'Stephen Edgar');  	 
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/Sept2008/Poems/Edgar.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Stephen Edgar</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Sept2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Fool * Rook * Kite', '*', '</p><p>', 'Sally Festing');  	 
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/Sept2008/Poems/Festing.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Sally Festing</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('On Being Told “You Look Depressed” *Song for Recessionary Times', '*', '</p><p>', 'Howie Good');  	 
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/Sept2008/Poems/Good.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Howie Good</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Potluck', '*', '</p><p>', 'Taylor Graham');  	 
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/Sept2008/Poems/Graham.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Taylor Graham</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Quiet Beer At Johnno’s on a Sunday', '*', '</p><p>', 'Christopher Hanson');  	 
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/Sept2008/Poems/Hanson.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Christopher Hanson</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Beethoven Opus 135 at Breakfast', '*', '</p><p>', 'Janet Kenny');  	 
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/Sept2008/Poems/Kenny.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Janet Kenny</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('At Dusk', '*', '</p><p>', 'Quincy Lehr');  	 
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/Sept2008/Poems/Lehr.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Quincy Lehr</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
 teaser = fixLBs('Jubilate Deo', '*', '</p><p>', 'Lance Levens');  	 
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/Sept2008/Poems/Levens.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Lance Levens</a>' +audioimg +'</h6>';
	//	
//

mstring+='<h5 class="tight">Fiction</h5>';
		
//
 // 
 //keywords =	"";
 teaser = fixLBs('Short story: “Tease”', '*', '</p><p>', 'Amy Bell');  	 
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/Sept2008/Fiction/Bell.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Amy Bell: Tease</a></h6>';
	//	
//
 // 
 //keywords =	"";
 teaser = fixLBs('Short story: “Never Trust a <i>Musungu</i> with Dusty Shoes”', '*', '</p><p>', 'Julie Wakeman-Linn');  	 
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/Sept2008/Fiction/Wakeman-Linn.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Julie Wakeman-Linn: “Never Trust a <i>Musungu</i> with Dusty Shoes”</a></h6>';
	//	
//


mstring+='<h5 class="tight">Essays</h5>';
		
//
 // 
 //keywords =	"";
 teaser = fixLBs('Teaching Poetry Nowadays', '*', '</p><p>', 'Duncan Gillies MacLaurin');  	 
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/Sept2008/Essays/MacLaurin.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Duncan Gillies MacLaurin</a></h6>';
	//	
//

mstring+='<h5 class="tight">Reviews</h5>';
		
//
 // 
 //keywords =	"";
 teaser = fixLBs('Review of Quincy R. Lehr’s <em>Across the Grid of Streets</em>', '*', '</p><p>', 'David Holper');  	 
mstring+='<h6  class="xr"><a href="http://www.the-chimaera.com/Sept2008/Reviews/Holper.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> David Holper</a></h6>';
	//	
//
 // 
 //keywords =	"";
 teaser = fixLBs('Review of Eileen Sheehan’s <em>Down the Sunlit Hall</em>', '*', '</p><p>', 'Quincy Lehr');  	 
mstring+='<h6  class="xr"><a href="http://www.the-chimaera.com/Sept2008/Reviews/Lehr.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&raquo;</span> Quincy Lehr</a></h6>';
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
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Editorial.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Editorial</a></h6>';
   }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Editorial</h6>';	//don't link to self


	//	
//
     // 

//If headlines don't match, or teasers don't match	 
	 
		if (thisheadline != "Feedback" || thisteaser != "Correspondence and blog&nbsp;")
	{ teaser = fixLBs('Correspondence and blog&nbsp;', '*', '</p><p>', 'Feedback');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Feedback.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Feedback</a></h6>';
   }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Feedback</h6>';	//don't link to self


	//	
//

mstring+='<div class="menuex"><h3 class="fsection" style="margin-top:0.2em">&ldquo;<b>Multum in Parvo</b>&rdquo;><br /><span style="font-weight:normal; font-size: 90%; letter-spacing: 1px">(Feature Theme)</span></h3>';

//
     // 
 		     audioimg="";
	 // 

		if (thisheadline != "Preface" || thisteaser != "Theme introduction") //distinguish separate pages by same author
		{ teaser = fixLBs('Theme introduction', '*', '</p><p>', 'Preface');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Theme/Preface.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Preface</a>' +audioimg +'</h6>';
       }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Preface' +audioimg +'</h6>';	//don't link to self		 
	//	
//

mstring+='<h3>Poems</h3>';

//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Mark Allinson" || thisteaser != "Fish-Wish*Recall")
		{ teaser = fixLBs('Fish-Wish*Recall', '*', '</p><p>', 'Mark Allinson');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Allinson.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Mark Allinson</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Mark Allinson' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Peter Austin" || thisteaser != "Virgins *Shell *Unnatural")
		{ teaser = fixLBs('Virgins *Shell *Unnatural', '*', '</p><p>', 'Peter Austin');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Austin.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Peter Austin</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Peter Austin' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Anne Bryant-Hamon" || thisteaser != "Sum It")
		{ teaser = fixLBs('Sum It', '*', '</p><p>', 'Anne Bryant-Hamon');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Bryant-Hamon.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Anne Bryant-Hamon</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Anne Bryant-Hamon' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Nuala Ní Chonchúir" || thisteaser != "Poem Beginning with a line by Plath *A Cézanne Nude")
		{ teaser = fixLBs('Poem Beginning with a line by Plath *A Cézanne Nude', '*', '</p><p>', 'Nuala Ní Chonchúir');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Chonchuir.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Nuala Ní Chonchúir</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Nuala Ní Chonchúir' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Sept2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	
		if (thisheadline != "Antonia Clark" || thisteaser != "Everyday Arithmetic * Coordinates")
		{ teaser = fixLBs('Everyday Arithmetic * Coordinates', '*', '</p><p>', 'Antonia Clark');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Clark.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Antonia Clark</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Antonia Clark' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Sarah Colona" || thisteaser != "Bitch")
		{ teaser = fixLBs('Bitch', '*', '</p><p>', 'Sarah Colona');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Colona.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Sarah Colona</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Sarah Colona' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Maryann Corbett" || thisteaser != "Pea Planting, Good Friday * Thoughts on the Transmission History of The Frog King")
		{ teaser = fixLBs('Pea Planting, Good Friday * Thoughts on the Transmission History of The Frog King', '*', '</p><p>', 'Maryann Corbett');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Corbett.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Maryann Corbett</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Maryann Corbett' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Corrie Fenner" || thisteaser != "Spinster")
		{ teaser = fixLBs('Spinster', '*', '</p><p>', 'Corrie Fenner');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Fenner.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Corrie Fenner</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Corrie Fenner' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Sept2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	
		if (thisheadline != "Sally Festing" || thisteaser != "Fertility")
		{ teaser = fixLBs('Fertility', '*', '</p><p>', 'Sally Festing');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Festing.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Sally Festing</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Sally Festing' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Jan Iwaszkiewicz" || thisteaser != "Let us sing of the godling boy...")
		{ teaser = fixLBs('Let us sing of the godling boy...', '*', '</p><p>', 'Jan Iwaszkiewicz');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Iwaszkiewicz.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Jan Iwaszkiewicz</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Jan Iwaszkiewicz' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Margaret Menamin" || thisteaser != "I know why the sea *Classifieds")
		{ teaser = fixLBs('I know why the sea *Classifieds', '*', '</p><p>', 'Margaret Menamin');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Menamin.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Margaret Menamin</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Margaret Menamin' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Timothy Murphy" || thisteaser != "Farming sequence: * Farming All Night * Betting the Ranch * “Blow Winds and Crack Your Cheeks” * Center Pivots * The Hatch * The Expulsion")
		{ teaser = fixLBs('Farming sequence: * Farming All Night * Betting the Ranch * “Blow Winds and Crack Your Cheeks” * Center Pivots * The Hatch * The Expulsion', '*', '</p><p>', 'Timothy Murphy');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Murphy.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Timothy Murphy</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Timothy Murphy' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Sept2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	
		if (thisheadline != "Henry Quince" || thisteaser != "4m33s Ekphrastic *Private Ward")
		{ teaser = fixLBs('4m33s Ekphrastic *Private Ward', '*', '</p><p>', 'Henry Quince');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Quince.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Henry Quince</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Henry Quince' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Myra Schneider" || thisteaser != "<em>Le Citron</em> *The Half Lemon")
		{ teaser = fixLBs('<em>Le Citron</em> *The Half Lemon', '*', '</p><p>', 'Myra Schneider');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Schneider.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Myra Schneider</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Myra Schneider' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Janice D. Soderling" || thisteaser != "Triolet for Green Things")
		{ teaser = fixLBs('Triolet for Green Things', '*', '</p><p>', 'Janice D. Soderling');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Soderling.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Janice D. Soderling</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Janice D. Soderling' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "John Weston" || thisteaser != "Out of Form * Boxers * For Shi Tao, in a Chinese Prison")
		{ teaser = fixLBs('Out of Form * Boxers * For Shi Tao, in a Chinese Prison', '*', '</p><p>', 'John Weston');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Weston.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> John Weston</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> John Weston' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Christopher Whitby" || thisteaser != "A Refusal to Mourn the Death of a Child *Well Now")
		{ teaser = fixLBs('A Refusal to Mourn the Death of a Child *Well Now', '*', '</p><p>', 'Christopher Whitby');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/Whitby.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Christopher Whitby</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Christopher Whitby' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Gail White" || thisteaser != "Beowulf Haiku")
		{ teaser = fixLBs('Beowulf Haiku', '*', '</p><p>', 'Gail White');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Theme/Poems/White.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Gail White</a>' +audioimg +'</h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Gail White' +audioimg +'</h6>';	//don't link to self		 
	//	
//


mstring+='<h3>Fiction</h3>';
//
     // 
 		
		if (thisheadline != "Greta Bolger" || thisteaser != "Short Story: “Lie to Me, Cherry”")
		{ teaser = fixLBs('Short Story: “Lie to Me, Cherry”', '*', '</p><p>', 'Greta Bolger');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Theme/Fiction/Bolger.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Greta Bolger</a></h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Greta Bolger</h6>';	//don't link to self		 
	//	
//
     // 
 		
		if (thisheadline != "J. J. Steinfeld" || thisteaser != "Microfiction: Monetary Transactions")
		{ teaser = fixLBs('Microfiction: Monetary Transactions', '*', '</p><p>', 'J. J. Steinfeld');  	 
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Theme/Fiction/Steinfeld.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> J. J. Steinfeld</a></h6>';
		}
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> J. J. Steinfeld</h6>';	//don't link to self		 
	//	
//


mstring+='</div><br /><div class="menuex"><h3 class="fsection" style="margin-top:0.2em"><b>John Whitworth</b><br /><span style="font-weight:normal; font-size: 90%; letter-spacing: 1px">(Spotlight Feature)</span></h3>';

//
     // 
        //keywords = "poetry prose";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Introduction and Interview&nbsp;" || thisteaser != "Paul Stevens interviews John Whitworth, with introductory words by Les Murray and Roger McGough")
		{
		 teaser = fixLBs('Paul Stevens interviews John Whitworth, with introductory words by Les Murray and Roger McGough', '*', '</p><p>', 'Introduction and Interview&nbsp;');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Spotlight/IntroductionandInterview.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Introduction and Interview&nbsp;</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Introduction and Interview&nbsp;' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Alan Brownjohn" || thisteaser != "An appreciation")
		{
		 teaser = fixLBs('An appreciation', '*', '</p><p>', 'Alan Brownjohn');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Spotlight/AlanBrownjohnWordsonWhitw.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Alan Brownjohn</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Alan Brownjohn' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Harry Chambers" || thisteaser != "The Father, the Son and the Holy Ghost: Essay with quotes from John Whitworth’s work")
		{
		 teaser = fixLBs('The Father, the Son and the Holy Ghost: Essay with quotes from John Whitworth’s work', '*', '</p><p>', 'Harry Chambers');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Spotlight/HarryChambersTheFatherthe.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Harry Chambers</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Harry Chambers' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Wendy Cope" || thisteaser != "An appreciation of John Whitworth’s collection, <em>Landscape with Small Humans</em>")
		{
		 teaser = fixLBs('An appreciation of John Whitworth’s collection, <em>Landscape with Small Humans</em>', '*', '</p><p>', 'Wendy Cope');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Spotlight/WendyCopeOnLandscapewithS.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Wendy Cope</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Wendy Cope' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Gregory Dowling" || thisteaser != "Essay: The Dinky Toys of Retrospect")
		{
		 teaser = fixLBs('Essay: The Dinky Toys of Retrospect', '*', '</p><p>', 'Gregory Dowling');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Spotlight/GregoryDowlingTheDinkyToy.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Gregory Dowling</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Gregory Dowling' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Ann Drysdale" || thisteaser != "Essay, “The Whitworth”, plus two poems for JW.")
		{
		 teaser = fixLBs('Essay, “The Whitworth”, plus two poems for JW.', '*', '</p><p>', 'Ann Drysdale');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Spotlight/AnnDrysdaleTheWhitworth.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Ann Drysdale</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Ann Drysdale' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Sam Gwynn" || thisteaser != "Essay “How Pleasant to Know Mr Whitworth”, and a Whitworth-inspired poem “Making Do: Variations on a Theme”&nbsp;")
		{
		 teaser = fixLBs('Essay “How Pleasant to Know Mr Whitworth”, and a Whitworth-inspired poem “Making Do: Variations on a Theme”&nbsp;', '*', '</p><p>', 'Sam Gwynn');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Spotlight/SamGwynnHowPleasanttoKnow.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Sam Gwynn</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Sam Gwynn' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Poems" || thisteaser != "Rabbit Rabbit *The Difference *More Quarks* Four O’Clock* Faith Zone*On the Deaths of Philosophers* The Egg* Something Ugly* Morocco Bound* Life at Eighty")
		{
		 teaser = fixLBs('Rabbit Rabbit *The Difference *More Quarks* Four O’Clock* Faith Zone*On the Deaths of Philosophers* The Egg* Something Ugly* Morocco Bound* Life at Eighty', '*', '</p><p>', 'Poems');  	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Spotlight/JWPoems.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Poems</a>' +audioimg +'</h6>';
         }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Poems' +audioimg +'</h6>';	//don't link to self
		
	//	
//



mstring+='</div><h3 class="section">MORE POEMS & PROSE</h3>';
mstring += '<h3 style="margin-top:0.2em">Poems</h3>';

//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Richard Broderick" || thisteaser != "The Old Friend *Picking the Apostles")
		{
		 teaser = fixLBs('The Old Friend *Picking the Apostles', '*', '</p><p>', 'Richard Broderick');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Poems/Broderick.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Richard Broderick</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Richard Broderick' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Stephen Edgar" || thisteaser != "Out of the picture *Time Out *2:00")
		{
		 teaser = fixLBs('Out of the picture *Time Out *2:00', '*', '</p><p>', 'Stephen Edgar');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Poems/Edgar.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Stephen Edgar</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Stephen Edgar' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/Sept2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	
			if (thisheadline != "Sally Festing" || thisteaser != "Fool * Rook * Kite")
		{
		 teaser = fixLBs('Fool * Rook * Kite', '*', '</p><p>', 'Sally Festing');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Poems/Festing.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Sally Festing</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Sally Festing' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Howie Good" || thisteaser != "On Being Told “You Look Depressed” *Song for Recessionary Times")
		{
		 teaser = fixLBs('On Being Told “You Look Depressed” *Song for Recessionary Times', '*', '</p><p>', 'Howie Good');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Poems/Good.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Howie Good</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Howie Good' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Taylor Graham" || thisteaser != "Potluck")
		{
		 teaser = fixLBs('Potluck', '*', '</p><p>', 'Taylor Graham');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Poems/Graham.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Taylor Graham</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Taylor Graham' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Christopher Hanson" || thisteaser != "Quiet Beer At Johnno’s on a Sunday")
		{
		 teaser = fixLBs('Quiet Beer At Johnno’s on a Sunday', '*', '</p><p>', 'Christopher Hanson');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Poems/Hanson.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Christopher Hanson</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Christopher Hanson' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Janet Kenny" || thisteaser != "Beethoven Opus 135 at Breakfast")
		{
		 teaser = fixLBs('Beethoven Opus 135 at Breakfast', '*', '</p><p>', 'Janet Kenny');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Poems/Kenny.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Janet Kenny</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Janet Kenny' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Quincy Lehr" || thisteaser != "At Dusk")
		{
		 teaser = fixLBs('At Dusk', '*', '</p><p>', 'Quincy Lehr');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Poems/Lehr.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Quincy Lehr</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Quincy Lehr' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Lance Levens" || thisteaser != "Jubilate Deo")
		{
		 teaser = fixLBs('Jubilate Deo', '*', '</p><p>', 'Lance Levens');  	
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Poems/Levens.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Lance Levens</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Lance Levens' +audioimg +'</h6>';	//don't link to self
		
	//	
//

mstring += '<h3>Fiction</h3>';

//
     // 
 	
	 
			if (thisheadline != "Amy Bell" || thisteaser != "Short story: “Tease”")
		{
		 teaser = fixLBs('Short story: “Tease”', '*', '</p><p>', 'Amy Bell');
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Fiction/Bell.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Amy Bell</a></h6>';
        }  
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Amy Bell</h6>';	//don't link to self
		
	//	
//
     // 
 	
	 
			if (thisheadline != "Julie Wakeman-Linn" || thisteaser != "Short story: “Never Trust a <i>Musungu</i> with Dusty Shoes”")
		{
		 teaser = fixLBs('Short story: “Never Trust a <i>Musungu</i> with Dusty Shoes”', '*', '</p><p>', 'Julie Wakeman-Linn');
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Fiction/Wakeman-Linn.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Julie Wakeman-Linn</a></h6>';
        }  
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Julie Wakeman-Linn</h6>';	//don't link to self
		
	//	
//



mstring += '<h3>Essays</h3>';

//
     // 
 	
	     audioimg="";
	   // 
	
			if (thisheadline != "Duncan Gillies MacLaurin" || thisteaser != "Teaching Poetry Nowadays")
		{
		 teaser = fixLBs('Teaching Poetry Nowadays', '*', '</p><p>', 'Duncan Gillies MacLaurin');
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Essays/MacLaurin.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Duncan Gillies MacLaurin</a>' +audioimg +'</h6>';
        }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Duncan Gillies MacLaurin' +audioimg +'</h6>';	//don't link to self
		
	//	
//


mstring += '<h3>Reviews</h3>';

//
     // 
	
	     audioimg="";
	   // 
	
				if (thisheadline != "David Holper" || thisteaser != "Review of Quincy R. Lehr’s <em>Across the Grid of Streets</em>")
		{
		 teaser = fixLBs('Review of Quincy R. Lehr’s <em>Across the Grid of Streets</em>', '*', '</p><p>', 'David Holper');
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Reviews/Holper.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> David Holper</a>' +audioimg +'</h6>';
       }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> David Holper' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
	
	     audioimg="";
	   // 
	
				if (thisheadline != "Quincy Lehr" || thisteaser != "Review of Eileen Sheehan’s <em>Down the Sunlit Hall</em>")
		{
		 teaser = fixLBs('Review of Eileen Sheehan’s <em>Down the Sunlit Hall</em>', '*', '</p><p>', 'Quincy Lehr');
		 mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/Sept2008/Reviews/Lehr.html" onmouseover="showPopup(event,\'' + teaser + '\',140)" onmouseout="hideIt()"><span class="chev">&#0187;</span> Quincy Lehr</a>' +audioimg +'</h6>';
       }
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Quincy Lehr' +audioimg +'</h6>';	//don't link to self
		
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
	exheading='<p class="spothead">Spotlight Feature<br /><b>John Whitworth</b></p>';
d.write(exheading)
	}
}

function writeExheading(pagepath) {
exheading= '&nbsp;'
if (pagepath.indexOf('Theme/')!=-1) 
	{
	exheading='<p class="exhead">Feature Theme<br />&ldquo;<b>Multum in Parvo</b>&rdquo;</span></p>';
d.write(exheading)
	}
}


function writeExquote(pagepath) {
quote ="";
if (pagepath.indexOf('Theme/')!=-1) 
{
quote='<p class="themequote"><i>Hatch don’t forge says my guru with a smile.</i> <br /> &mdash; John Weston</p>';
}
d.write(quote)
}

function writeSpotquote(pagepath) {
squote ="";
if (pagepath.indexOf('Spotlight/')!=-1) 
{
squote='<p class="themequote">“<i>John Whitworth,... master of metrical whigmaleerie...”</i> <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; — Les Murray</p>';
}
d.write(squote)
}


/*
Make a div containing the content as innerHTML == this seems to work OK with NLs in the string

 
*/


 
