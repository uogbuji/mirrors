//The Chimaera Current Issue October 2007
// 
//"file:///C|/Documents and Settings/Peter/Desktop/Documents/Chimaera/October2007/HTML/"  


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

//basehref = "file:///C|/Documents and Settings/Peter/Desktop/Documents/Chimaera/Test Site/";
//basehref = "http://www.netpublish.net/chimaera-test/October2007/";

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


folder1= "/"
folder2 = "Prose";
subhead2 = "Poetry";
//Do as array

 //sidebar menu: links to all other pages including Contents page and Editorial, then to author names under headings, etc 

function getTypetext(x) {
}




function makeMainMenu() //Used to make Cover Page menu only
{
mstring = '<table width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 0"><tr><td width="54%" valign="top">';



//mstring+='<br /><div style="padding:5px; background:#F4F2D9; border: 1px solid #DFDAA8; "><h3>Expatriates Special Feature</h3>';
mstring+='<div style="margin-top:7px; background: #E7F3FF; padding:6px; padding-bottom: 8px; border: 1px solid #A3C8E3""><h3 style="line-height: 1.1em; margin-bottom: 0.8em">Stranger in a Strange Land<br /><span style="font-weight:normal; font-size: 85%">(Expatriatism Special Feature)</span></h3>';
//
     // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/October2007/Expat/Byfield.html" title="Two poems: Week two, year of the Dog, \nThings and Their Absence\n\nProse: Lunch, Day Three&nbsp;">Sam Byfield</a></h6>';
	//mstring+= 
	//	
//
     // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/October2007/Expat/Cantor.html" title="Two poems: Japanese for Beginners: Gaijin\nAn Incident of Honor at Bar Manos in Akasaka\n\nProse: Playing at Hard-Ass Gaijin Intellectual">Michael Cantor</a></h6>';
	//mstring+= 
	//	
//
     // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/October2007/Expat/Espaillat.html" title="Three poems: “Home is the place where...”\nרנא (My Name in Hebrew)\nChoices\n\nProse: Life in the Plural">Rhina P. Espaillat</a></h6>';
	//mstring+= 
	//	
//
     // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/October2007/Expat/Evans.html" title="Three poems: Propemptikon for my Brother\nEnglish Heaven\nAs You Like It\n\nProse: No Coffee Please — We’re British">Anna Evans</a></h6>';
	//mstring+= 
	//	
//
     // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/October2007/Expat/Frisardi.html" title="Poem: Orvieto Winter\nProse: Letter from Italy">Andrew Frisardi</a></h6>';
	//mstring+= 
	//	
//
     // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/October2007/Expat/Greene.html" title="Four poems: At Churchill’s Funeral\nEquinox\nStonehenge\nRope\n\nProse: Cultural Displacement">Dennis Greene</a></h6>';
	//mstring+= 
	//	
//
     // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/October2007/Expat/HowardHobson.html" title="Poem: 9 a.m., 45th Parallel\n\nProse: Loose thoughts on poetic expatriatism,...\nEver After">Juleigh Howard-Hobson</a></h6>';
	//mstring+= 
	//	
//
     // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/October2007/Expat/Kenny.html" title="Four poems:\nThe Messenger,\nLeaving New Zealand...,\nA Different Green,\nOut There\n\nProse: Finding the Poet">Janet Kenny</a></h6>';
	//mstring+= 
	//	
//
     // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/October2007/Expat/Koh.html" title="Poetry: The Far Ships\nTwo excerpts from “Talk About New York”\n\nProse: Exile is Our Condition">Jee Leong Koh</a></h6>';
	//mstring+= 
	//	
//
     // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/October2007/Expat/Lehr.html" title="Poetry: Excerpt from TIME ZONES\nProse: On Not Being an Irish Poet">Quincy R. Lehr</a></h6>';
	//mstring+= 
	//	
//
     // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/October2007/Expat/MacLaurin.html" title="Prose: An Anglo-Scot in Denmark\n (includes poems “On Paper” and “Devotions”)">Duncan Gillies MacLaurin</a></h6>';
	//mstring+= 
	//	
//
     // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/October2007/Expat/McClure.html" title="Two poems: Posterity\nHelga’s Chickens\n\nProse: The Paranormal Hotel\n(excerpts from the blog by “Paraglider”)">Dave McClure</a></h6>';
	//mstring+= 
	//	
//
     // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/October2007/Expat/McGonagall.html" title="Poem: A Caledonian Considers Moving to Australiay\nProse: Too Cute by Half">William McGonagall III</a></h6>';
	//mstring+= 
	//	
//
     // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/October2007/Expat/MilburySteen.html" title="Three poems: Do Not\nDown\nNoli Me Tangere\n\nProse: Incarnation">John Milbury-Steen</a></h6>';
	//mstring+= 
	//	
//
     // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/October2007/Expat/MooneySingh.html" title="Poetry: Three excerpts from “Views from My Apartment”\nProse: The Lion of Punjab Leaves from Platform 3">Chris Mooney-Singh</a></h6>';
	//mstring+= 
	//	
//
     // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/October2007/Expat/Richards.html" title="Poem: An Adolescent Contemplates Leaving\nProse: The Dynamic Condition">Peter Richards</a></h6>';
	//mstring+= 
	//	
//
     // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/October2007/Expat/Smith.html" title="Prose: They know I have an accent...\nPoem: Homeplace">Bee Smith</a></h6>';
	//mstring+= 
	//	
//
     // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/October2007/Expat/Soderling.html" title="Poem:&nbsp; A Goodnight Story\nProse: I’m Saving the Rest for My Memoirs">Janice D. Soderling</a></h6>';
	//mstring+= 
	//	
//
     // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/October2007/Expat/Thornbrugh.html" title="Two poems: Riding the Bus in South Korea\nOut of Asia\n\nProse: Expatriate or Refugee?">David Thornbrugh</a></h6>';
	//mstring+= 
	//	
//
     // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/October2007/Expat/Yankevich.html" title="Two poems: Grey Oak\nExile\n\nProse: Tales I Have Been Hanged By">Leo Yankevich</a></h6>';
	//mstring+= 
	//	
//

mstring+='</div></td><td valign="top" style="padding-left:8px;padding-top:6px">';

//
     // 	
//
     // 
	
		if ("" != "offmenu")
		{
			mstring+='<h6 style="margin-bottom: 12px"><a href="http://www.the-chimaera.com/October2007/Editorial.html" title="About this issue">Editorial</a></h6>';
		} 
	//	
//
     // 
	
		if ("offmenu" != "offmenu")
		{
			mstring+='<h6 style="margin-bottom: 12px"><a href="http://www.the-chimaera.com/October2007/Feedback.html" title="Correspondence and blog&nbsp;">Feedback</a></h6>';
		} 
	//	
//
			mstring+='<h3 style="line-height: 1.1em; margin-top: 0.3em; margin-bottom:0.5em">More Poetry and Prose</h3>';

//
     // 
 //keywords =	"poetry";
mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Allinson.html" title="Two poems: Dialogue\nDialogue II">Mark Allinson</a></h6>';
	//	
//
     // 
 //keywords =	"";
mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Barrie.html" title="Essay on novelist/poet David Malouf">Elizabeth Barrie</a></h6>';
	//	
//
     // 
 //keywords =	"poetry";
mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Benedict.html" title="Poem: The Carrion Gardens">Kate Bernadette Benedict</a></h6>';
	//	
//
     // 
 //keywords =	"";
mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Brackenbury.html" title="Three poems: In the gap\nAffairs\nPlucked from">Alison Brackenbury</a></h6>';
	//	
//
     // 
 //keywords =	"";
mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Calhoun.html" title="Poem: In Ink We Trust">Jeffrey Calhoun</a></h6>';
	//	
//
     // 
 //keywords =	"";
mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Chaffin.html" title="Two poems: When I Am an Old Man\nSwami Talk\n\nShort Story: As if it Had Never Happened">C. E. Chaffin</a></h6>';
	//	
//
     // 
 //keywords =	"prose";
mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Cook.html" title="Essay: A Modernist Mess">Sally Cook</a></h6>';
	//	
//
     // 
 //keywords =	"";
mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Epstein.html" title="Two poems: If Earth Is Not Really a Planet\nLittle Elijah Dance">Richard Epstein</a></h6>';
	//	
//
     // 
 //keywords =	"";
mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/France.html" title="Essay: England is Another Country">Angela France</a></h6>';
	//	
//
     // 
 //keywords =	"poetry";
mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Kimball.html" title="Poem: Prayer for My Father">Don Kimball</a></h6>';
	//	
//
     // 
 //keywords =	"poetry";
mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Landrum.html" title="Poem: Italians">David. W. Landrum</a></h6>';
	//	
//
     // 
 //keywords =	"";
mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Lehrv.html" title="Essay: Our Ersatz Critics">Quincy Lehr</a></h6>';
	//	
//
     // 
 //keywords =	"prose";
mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Mackenzie.html" title="Book review: “The Harbour Behind the Movie”\nby Luke Kennard">Rob Mackenzie</a></h6>';
	//	
//
     // 
 //keywords =	"";
mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Mullin.html" title="Poem: Still Life With Mackerel">Rick Mullin</a></h6>';
	//	
//
     // 
 //keywords =	"";
mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Murphy.html" title="Poem: Ballade of the Bone Collectors">Kevin Andrew Murphy</a></h6>';
	//	
//
     // 
 //keywords =	"poetry";
mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Osen.html" title="Poem: Tell">Frank Osen</a></h6>';
	//	
//
     // 
 //keywords =	"";
mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Pisslame.html" title="Essay: Slicing the Metrical Verse Salami">Josh E. Pisslame</a></h6>';
	//	
//
     // 
 //keywords =	"poetry";
mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Quince.html" title="Five poems: Adjustable Wench\nErn Malley’s Account of the Affair\nÀ La Belle Étoile\nLost Wax\nImplicate Order">Henry Quince</a></h6>';
	//	
//
     // 
 //keywords =	"prose";
mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Roots.html" title="Essay: The Monkeys Who Learned to Sing">Rik Roots</a></h6>';
	//	
//
     // 
 //keywords =	"poetry";
mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Rosenthal.html" title="Poem: Bechtle’s Alameda Gran Torino, 1974">David Rosenthal</a></h6>';
	//	
//
     // 
 //keywords =	"";
mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Salemi.html" title="Essay: Poetry as Therapy">Joseph S. Salemi</a></h6>';
	//	
//
     // 
 //keywords =	"";
mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Scaer.html" title="Poem: The Public Loved Her Wednesday">Stephen Scaer</a></h6>';
	//	
//
     // 
 //keywords =	"poetry";
mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Shepherd.html" title="Poem: Homesick">Salli Shepherd</a></h6>';
	//	
//
     // 
 //keywords =	"";
mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Whitworth.html" title="Four poems: The Examiners\nThem There Out There In Here Right Now\nHumdinger\nNot You">John Whitworth</a></h6>';
	//	
//
     // 
 //keywords =	"poetry";
mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Wilkens.html" title="Poem: Naked Pictures">Gary Charles Wilkens</a></h6>';
	//	
//

mstring+='</td></tr></table>';
document.write(mstring);

} //End makeMainMenu function



 
function makeMenu(thisheadline) //Used to make collapsible side menu
{
mstring = "";

//
     // 	
//
     // 
	
		if (thisheadline != "Editorial")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Editorial.html" title="About this issue"><span class="chev">&#0187;</span> Editorial</a></h6>';
		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Editorial</h6>';	//don't link to self
	//	
//
     // 
	
		if (thisheadline != "Feedback")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Feedback.html" title="Correspondence and blog&nbsp;"><span class="chev">&#0187;</span> Feedback</a></h6>';
		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Feedback</h6>';	//don't link to self
	//	
//

mstring+='<h3>Stranger in a Strange Land</h3>';

//
     // 
 	
		if (thisheadline  != "Sam Byfield")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Expat/Byfield.html" title="Two poems: Week two, year of the Dog, \nThings and Their Absence\n\nProse: Lunch, Day Three&nbsp;"><span class="chev">&#0187;</span> Sam Byfield</a></h6>';
		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Sam Byfield</h6>';	//don't link to self		//mstring+= 
	//	
//
     // 
 	
		if (thisheadline  != "Michael Cantor")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Expat/Cantor.html" title="Two poems: Japanese for Beginners: Gaijin\nAn Incident of Honor at Bar Manos in Akasaka\n\nProse: Playing at Hard-Ass Gaijin Intellectual"><span class="chev">&#0187;</span> Michael Cantor</a></h6>';
		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Michael Cantor</h6>';	//don't link to self		//mstring+= 
	//	
//
     // 
 	
		if (thisheadline  != "Rhina P. Espaillat")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Expat/Espaillat.html" title="Three poems: “Home is the place where...”\nרנא (My Name in Hebrew)\nChoices\n\nProse: Life in the Plural"><span class="chev">&#0187;</span> Rhina P. Espaillat</a></h6>';
		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Rhina P. Espaillat</h6>';	//don't link to self		//mstring+= 
	//	
//
     // 
 	
		if (thisheadline  != "Anna Evans")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Expat/Evans.html" title="Three poems: Propemptikon for my Brother\nEnglish Heaven\nAs You Like It\n\nProse: No Coffee Please — We’re British"><span class="chev">&#0187;</span> Anna Evans</a></h6>';
		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Anna Evans</h6>';	//don't link to self		//mstring+= 
	//	
//
     // 
 	
		if (thisheadline  != "Andrew Frisardi")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Expat/Frisardi.html" title="Poem: Orvieto Winter\nProse: Letter from Italy"><span class="chev">&#0187;</span> Andrew Frisardi</a></h6>';
		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Andrew Frisardi</h6>';	//don't link to self		//mstring+= 
	//	
//
     // 
 	
		if (thisheadline  != "Dennis Greene")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Expat/Greene.html" title="Four poems: At Churchill’s Funeral\nEquinox\nStonehenge\nRope\n\nProse: Cultural Displacement"><span class="chev">&#0187;</span> Dennis Greene</a></h6>';
		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Dennis Greene</h6>';	//don't link to self		//mstring+= 
	//	
//
     // 
 	
		if (thisheadline  != "Juleigh Howard-Hobson")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Expat/HowardHobson.html" title="Poem: 9 a.m., 45th Parallel\n\nProse: Loose thoughts on poetic expatriatism,...\nEver After"><span class="chev">&#0187;</span> Juleigh Howard-Hobson</a></h6>';
		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Juleigh Howard-Hobson</h6>';	//don't link to self		//mstring+= 
	//	
//
     // 
 	
		if (thisheadline  != "Janet Kenny")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Expat/Kenny.html" title="Four poems:\nThe Messenger,\nLeaving New Zealand...,\nA Different Green,\nOut There\n\nProse: Finding the Poet"><span class="chev">&#0187;</span> Janet Kenny</a></h6>';
		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Janet Kenny</h6>';	//don't link to self		//mstring+= 
	//	
//
     // 
 	
		if (thisheadline  != "Jee Leong Koh")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Expat/Koh.html" title="Poetry: The Far Ships\nTwo excerpts from “Talk About New York”\n\nProse: Exile is Our Condition"><span class="chev">&#0187;</span> Jee Leong Koh</a></h6>';
		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Jee Leong Koh</h6>';	//don't link to self		//mstring+= 
	//	
//
     // 
 	
		if (thisheadline  != "Quincy R. Lehr")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Expat/Lehr.html" title="Poetry: Excerpt from TIME ZONES\nProse: On Not Being an Irish Poet"><span class="chev">&#0187;</span> Quincy R. Lehr</a></h6>';
		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Quincy R. Lehr</h6>';	//don't link to self		//mstring+= 
	//	
//
     // 
 	
		if (thisheadline  != "Duncan Gillies MacLaurin")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Expat/MacLaurin.html" title="Prose: An Anglo-Scot in Denmark\n (includes poems “On Paper” and “Devotions”)"><span class="chev">&#0187;</span> Duncan Gillies MacLaurin</a></h6>';
		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Duncan Gillies MacLaurin</h6>';	//don't link to self		//mstring+= 
	//	
//
     // 
 	
		if (thisheadline  != "Dave McClure")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Expat/McClure.html" title="Two poems: Posterity\nHelga’s Chickens\n\nProse: The Paranormal Hotel\n(excerpts from the blog by “Paraglider”)"><span class="chev">&#0187;</span> Dave McClure</a></h6>';
		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Dave McClure</h6>';	//don't link to self		//mstring+= 
	//	
//
     // 
 	
		if (thisheadline  != "William McGonagall III")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Expat/McGonagall.html" title="Poem: A Caledonian Considers Moving to Australiay\nProse: Too Cute by Half"><span class="chev">&#0187;</span> William McGonagall III</a></h6>';
		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> William McGonagall III</h6>';	//don't link to self		//mstring+= 
	//	
//
     // 
 	
		if (thisheadline  != "John Milbury-Steen")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Expat/MilburySteen.html" title="Three poems: Do Not\nDown\nNoli Me Tangere\n\nProse: Incarnation"><span class="chev">&#0187;</span> John Milbury-Steen</a></h6>';
		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> John Milbury-Steen</h6>';	//don't link to self		//mstring+= 
	//	
//
     // 
 	
		if (thisheadline  != "Chris Mooney-Singh")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Expat/MooneySingh.html" title="Poetry: Three excerpts from “Views from My Apartment”\nProse: The Lion of Punjab Leaves from Platform 3"><span class="chev">&#0187;</span> Chris Mooney-Singh</a></h6>';
		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Chris Mooney-Singh</h6>';	//don't link to self		//mstring+= 
	//	
//
     // 
 	
		if (thisheadline  != "Peter Richards")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Expat/Richards.html" title="Poem: An Adolescent Contemplates Leaving\nProse: The Dynamic Condition"><span class="chev">&#0187;</span> Peter Richards</a></h6>';
		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Peter Richards</h6>';	//don't link to self		//mstring+= 
	//	
//
     // 
 	
		if (thisheadline  != "Bee Smith")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Expat/Smith.html" title="Prose: They know I have an accent...\nPoem: Homeplace"><span class="chev">&#0187;</span> Bee Smith</a></h6>';
		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Bee Smith</h6>';	//don't link to self		//mstring+= 
	//	
//
     // 
 	
		if (thisheadline  != "Janice D. Soderling")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Expat/Soderling.html" title="Poem:&nbsp; A Goodnight Story\nProse: I’m Saving the Rest for My Memoirs"><span class="chev">&#0187;</span> Janice D. Soderling</a></h6>';
		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Janice D. Soderling</h6>';	//don't link to self		//mstring+= 
	//	
//
     // 
 	
		if (thisheadline  != "David Thornbrugh")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Expat/Thornbrugh.html" title="Two poems: Riding the Bus in South Korea\nOut of Asia\n\nProse: Expatriate or Refugee?"><span class="chev">&#0187;</span> David Thornbrugh</a></h6>';
		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> David Thornbrugh</h6>';	//don't link to self		//mstring+= 
	//	
//
     // 
 	
		if (thisheadline  != "Leo Yankevich")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Expat/Yankevich.html" title="Two poems: Grey Oak\nExile\n\nProse: Tales I Have Been Hanged By"><span class="chev">&#0187;</span> Leo Yankevich</a></h6>';
		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Leo Yankevich</h6>';	//don't link to self		//mstring+= 
	//	
//


mstring+='<h3>More Poems and Prose</h3>';

//
     // 
 //keywords =	"poetry";
	// if (keywords.toLowerCase().indexOf('poetry')!=-1)  
	// {
	//    if (keywords.toLowerCase().indexOf('prose')!=-1) titletext = '(poetry, prose)';
	//    else titletext = '(poetry)';
	//  }
//	 else if (keywords.toLowerCase().indexOf('prose')!=-1)  typetext = '<span style="font-size:90%"> (prose)</span>'; 

		if (thisheadline  != "Mark Allinson")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Allinson.html" title="Two poems: Dialogue\nDialogue II"><span class="chev">&#0187;</span> Mark Allinson</a></h6>';

		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Mark Allinson</h6>';	//don't link to self
		
	//	
//
     // 
 //keywords =	"";
	// if (keywords.toLowerCase().indexOf('poetry')!=-1)  
	// {
	//    if (keywords.toLowerCase().indexOf('prose')!=-1) titletext = '(poetry, prose)';
	//    else titletext = '(poetry)';
	//  }
//	 else if (keywords.toLowerCase().indexOf('prose')!=-1)  typetext = '<span style="font-size:90%"> (prose)</span>'; 

		if (thisheadline  != "Elizabeth Barrie")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Barrie.html" title="Essay on novelist/poet David Malouf"><span class="chev">&#0187;</span> Elizabeth Barrie</a></h6>';

		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Elizabeth Barrie</h6>';	//don't link to self
		
	//	
//
     // 
 //keywords =	"poetry";
	// if (keywords.toLowerCase().indexOf('poetry')!=-1)  
	// {
	//    if (keywords.toLowerCase().indexOf('prose')!=-1) titletext = '(poetry, prose)';
	//    else titletext = '(poetry)';
	//  }
//	 else if (keywords.toLowerCase().indexOf('prose')!=-1)  typetext = '<span style="font-size:90%"> (prose)</span>'; 

		if (thisheadline  != "Kate Bernadette Benedict")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Benedict.html" title="Poem: The Carrion Gardens"><span class="chev">&#0187;</span> Kate Bernadette Benedict</a></h6>';

		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Kate Bernadette Benedict</h6>';	//don't link to self
		
	//	
//
     // 
 //keywords =	"";
	// if (keywords.toLowerCase().indexOf('poetry')!=-1)  
	// {
	//    if (keywords.toLowerCase().indexOf('prose')!=-1) titletext = '(poetry, prose)';
	//    else titletext = '(poetry)';
	//  }
//	 else if (keywords.toLowerCase().indexOf('prose')!=-1)  typetext = '<span style="font-size:90%"> (prose)</span>'; 

		if (thisheadline  != "Alison Brackenbury")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Brackenbury.html" title="Three poems: In the gap\nAffairs\nPlucked from"><span class="chev">&#0187;</span> Alison Brackenbury</a></h6>';

		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Alison Brackenbury</h6>';	//don't link to self
		
	//	
//
     // 
 //keywords =	"";
	// if (keywords.toLowerCase().indexOf('poetry')!=-1)  
	// {
	//    if (keywords.toLowerCase().indexOf('prose')!=-1) titletext = '(poetry, prose)';
	//    else titletext = '(poetry)';
	//  }
//	 else if (keywords.toLowerCase().indexOf('prose')!=-1)  typetext = '<span style="font-size:90%"> (prose)</span>'; 

		if (thisheadline  != "Jeffrey Calhoun")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Calhoun.html" title="Poem: In Ink We Trust"><span class="chev">&#0187;</span> Jeffrey Calhoun</a></h6>';

		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Jeffrey Calhoun</h6>';	//don't link to self
		
	//	
//
     // 
 //keywords =	"";
	// if (keywords.toLowerCase().indexOf('poetry')!=-1)  
	// {
	//    if (keywords.toLowerCase().indexOf('prose')!=-1) titletext = '(poetry, prose)';
	//    else titletext = '(poetry)';
	//  }
//	 else if (keywords.toLowerCase().indexOf('prose')!=-1)  typetext = '<span style="font-size:90%"> (prose)</span>'; 

		if (thisheadline  != "C. E. Chaffin")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Chaffin.html" title="Two poems: When I Am an Old Man\nSwami Talk\n\nShort Story: As if it Had Never Happened"><span class="chev">&#0187;</span> C. E. Chaffin</a></h6>';

		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> C. E. Chaffin</h6>';	//don't link to self
		
	//	
//
     // 
 //keywords =	"prose";
	// if (keywords.toLowerCase().indexOf('poetry')!=-1)  
	// {
	//    if (keywords.toLowerCase().indexOf('prose')!=-1) titletext = '(poetry, prose)';
	//    else titletext = '(poetry)';
	//  }
//	 else if (keywords.toLowerCase().indexOf('prose')!=-1)  typetext = '<span style="font-size:90%"> (prose)</span>'; 

		if (thisheadline  != "Sally Cook")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Cook.html" title="Essay: A Modernist Mess"><span class="chev">&#0187;</span> Sally Cook</a></h6>';

		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Sally Cook</h6>';	//don't link to self
		
	//	
//
     // 
 //keywords =	"";
	// if (keywords.toLowerCase().indexOf('poetry')!=-1)  
	// {
	//    if (keywords.toLowerCase().indexOf('prose')!=-1) titletext = '(poetry, prose)';
	//    else titletext = '(poetry)';
	//  }
//	 else if (keywords.toLowerCase().indexOf('prose')!=-1)  typetext = '<span style="font-size:90%"> (prose)</span>'; 

		if (thisheadline  != "Richard Epstein")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Epstein.html" title="Two poems: If Earth Is Not Really a Planet\nLittle Elijah Dance"><span class="chev">&#0187;</span> Richard Epstein</a></h6>';

		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Richard Epstein</h6>';	//don't link to self
		
	//	
//
     // 
 //keywords =	"";
	// if (keywords.toLowerCase().indexOf('poetry')!=-1)  
	// {
	//    if (keywords.toLowerCase().indexOf('prose')!=-1) titletext = '(poetry, prose)';
	//    else titletext = '(poetry)';
	//  }
//	 else if (keywords.toLowerCase().indexOf('prose')!=-1)  typetext = '<span style="font-size:90%"> (prose)</span>'; 

		if (thisheadline  != "Angela France")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/France.html" title="Essay: England is Another Country"><span class="chev">&#0187;</span> Angela France</a></h6>';

		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Angela France</h6>';	//don't link to self
		
	//	
//
     // 
 //keywords =	"poetry";
	// if (keywords.toLowerCase().indexOf('poetry')!=-1)  
	// {
	//    if (keywords.toLowerCase().indexOf('prose')!=-1) titletext = '(poetry, prose)';
	//    else titletext = '(poetry)';
	//  }
//	 else if (keywords.toLowerCase().indexOf('prose')!=-1)  typetext = '<span style="font-size:90%"> (prose)</span>'; 

		if (thisheadline  != "Don Kimball")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Kimball.html" title="Poem: Prayer for My Father"><span class="chev">&#0187;</span> Don Kimball</a></h6>';

		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Don Kimball</h6>';	//don't link to self
		
	//	
//
     // 
 //keywords =	"poetry";
	// if (keywords.toLowerCase().indexOf('poetry')!=-1)  
	// {
	//    if (keywords.toLowerCase().indexOf('prose')!=-1) titletext = '(poetry, prose)';
	//    else titletext = '(poetry)';
	//  }
//	 else if (keywords.toLowerCase().indexOf('prose')!=-1)  typetext = '<span style="font-size:90%"> (prose)</span>'; 

		if (thisheadline  != "David. W. Landrum")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Landrum.html" title="Poem: Italians"><span class="chev">&#0187;</span> David. W. Landrum</a></h6>';

		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> David. W. Landrum</h6>';	//don't link to self
		
	//	
//
     // 
 //keywords =	"";
	// if (keywords.toLowerCase().indexOf('poetry')!=-1)  
	// {
	//    if (keywords.toLowerCase().indexOf('prose')!=-1) titletext = '(poetry, prose)';
	//    else titletext = '(poetry)';
	//  }
//	 else if (keywords.toLowerCase().indexOf('prose')!=-1)  typetext = '<span style="font-size:90%"> (prose)</span>'; 

		if (thisheadline  != "Quincy Lehr")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Lehrv.html" title="Essay: Our Ersatz Critics"><span class="chev">&#0187;</span> Quincy Lehr</a></h6>';

		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Quincy Lehr</h6>';	//don't link to self
		
	//	
//
     // 
 //keywords =	"prose";
	// if (keywords.toLowerCase().indexOf('poetry')!=-1)  
	// {
	//    if (keywords.toLowerCase().indexOf('prose')!=-1) titletext = '(poetry, prose)';
	//    else titletext = '(poetry)';
	//  }
//	 else if (keywords.toLowerCase().indexOf('prose')!=-1)  typetext = '<span style="font-size:90%"> (prose)</span>'; 

		if (thisheadline  != "Rob Mackenzie")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Mackenzie.html" title="Book review: “The Harbour Behind the Movie”\nby Luke Kennard"><span class="chev">&#0187;</span> Rob Mackenzie</a></h6>';

		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Rob Mackenzie</h6>';	//don't link to self
		
	//	
//
     // 
 //keywords =	"";
	// if (keywords.toLowerCase().indexOf('poetry')!=-1)  
	// {
	//    if (keywords.toLowerCase().indexOf('prose')!=-1) titletext = '(poetry, prose)';
	//    else titletext = '(poetry)';
	//  }
//	 else if (keywords.toLowerCase().indexOf('prose')!=-1)  typetext = '<span style="font-size:90%"> (prose)</span>'; 

		if (thisheadline  != "Rick Mullin")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Mullin.html" title="Poem: Still Life With Mackerel"><span class="chev">&#0187;</span> Rick Mullin</a></h6>';

		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Rick Mullin</h6>';	//don't link to self
		
	//	
//
     // 
 //keywords =	"";
	// if (keywords.toLowerCase().indexOf('poetry')!=-1)  
	// {
	//    if (keywords.toLowerCase().indexOf('prose')!=-1) titletext = '(poetry, prose)';
	//    else titletext = '(poetry)';
	//  }
//	 else if (keywords.toLowerCase().indexOf('prose')!=-1)  typetext = '<span style="font-size:90%"> (prose)</span>'; 

		if (thisheadline  != "Kevin Andrew Murphy")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Murphy.html" title="Poem: Ballade of the Bone Collectors"><span class="chev">&#0187;</span> Kevin Andrew Murphy</a></h6>';

		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Kevin Andrew Murphy</h6>';	//don't link to self
		
	//	
//
     // 
 //keywords =	"poetry";
	// if (keywords.toLowerCase().indexOf('poetry')!=-1)  
	// {
	//    if (keywords.toLowerCase().indexOf('prose')!=-1) titletext = '(poetry, prose)';
	//    else titletext = '(poetry)';
	//  }
//	 else if (keywords.toLowerCase().indexOf('prose')!=-1)  typetext = '<span style="font-size:90%"> (prose)</span>'; 

		if (thisheadline  != "Frank Osen")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Osen.html" title="Poem: Tell"><span class="chev">&#0187;</span> Frank Osen</a></h6>';

		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Frank Osen</h6>';	//don't link to self
		
	//	
//
     // 
 //keywords =	"";
	// if (keywords.toLowerCase().indexOf('poetry')!=-1)  
	// {
	//    if (keywords.toLowerCase().indexOf('prose')!=-1) titletext = '(poetry, prose)';
	//    else titletext = '(poetry)';
	//  }
//	 else if (keywords.toLowerCase().indexOf('prose')!=-1)  typetext = '<span style="font-size:90%"> (prose)</span>'; 

		if (thisheadline  != "Josh E. Pisslame")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Pisslame.html" title="Essay: Slicing the Metrical Verse Salami"><span class="chev">&#0187;</span> Josh E. Pisslame</a></h6>';

		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Josh E. Pisslame</h6>';	//don't link to self
		
	//	
//
     // 
 //keywords =	"poetry";
	// if (keywords.toLowerCase().indexOf('poetry')!=-1)  
	// {
	//    if (keywords.toLowerCase().indexOf('prose')!=-1) titletext = '(poetry, prose)';
	//    else titletext = '(poetry)';
	//  }
//	 else if (keywords.toLowerCase().indexOf('prose')!=-1)  typetext = '<span style="font-size:90%"> (prose)</span>'; 

		if (thisheadline  != "Henry Quince")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Quince.html" title="Five poems: Adjustable Wench\nErn Malley’s Account of the Affair\nÀ La Belle Étoile\nLost Wax\nImplicate Order"><span class="chev">&#0187;</span> Henry Quince</a></h6>';

		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Henry Quince</h6>';	//don't link to self
		
	//	
//
     // 
 //keywords =	"prose";
	// if (keywords.toLowerCase().indexOf('poetry')!=-1)  
	// {
	//    if (keywords.toLowerCase().indexOf('prose')!=-1) titletext = '(poetry, prose)';
	//    else titletext = '(poetry)';
	//  }
//	 else if (keywords.toLowerCase().indexOf('prose')!=-1)  typetext = '<span style="font-size:90%"> (prose)</span>'; 

		if (thisheadline  != "Rik Roots")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Roots.html" title="Essay: The Monkeys Who Learned to Sing"><span class="chev">&#0187;</span> Rik Roots</a></h6>';

		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Rik Roots</h6>';	//don't link to self
		
	//	
//
     // 
 //keywords =	"poetry";
	// if (keywords.toLowerCase().indexOf('poetry')!=-1)  
	// {
	//    if (keywords.toLowerCase().indexOf('prose')!=-1) titletext = '(poetry, prose)';
	//    else titletext = '(poetry)';
	//  }
//	 else if (keywords.toLowerCase().indexOf('prose')!=-1)  typetext = '<span style="font-size:90%"> (prose)</span>'; 

		if (thisheadline  != "David Rosenthal")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Rosenthal.html" title="Poem: Bechtle’s Alameda Gran Torino, 1974"><span class="chev">&#0187;</span> David Rosenthal</a></h6>';

		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> David Rosenthal</h6>';	//don't link to self
		
	//	
//
     // 
 //keywords =	"";
	// if (keywords.toLowerCase().indexOf('poetry')!=-1)  
	// {
	//    if (keywords.toLowerCase().indexOf('prose')!=-1) titletext = '(poetry, prose)';
	//    else titletext = '(poetry)';
	//  }
//	 else if (keywords.toLowerCase().indexOf('prose')!=-1)  typetext = '<span style="font-size:90%"> (prose)</span>'; 

		if (thisheadline  != "Joseph S. Salemi")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Salemi.html" title="Essay: Poetry as Therapy"><span class="chev">&#0187;</span> Joseph S. Salemi</a></h6>';

		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Joseph S. Salemi</h6>';	//don't link to self
		
	//	
//
     // 
 //keywords =	"";
	// if (keywords.toLowerCase().indexOf('poetry')!=-1)  
	// {
	//    if (keywords.toLowerCase().indexOf('prose')!=-1) titletext = '(poetry, prose)';
	//    else titletext = '(poetry)';
	//  }
//	 else if (keywords.toLowerCase().indexOf('prose')!=-1)  typetext = '<span style="font-size:90%"> (prose)</span>'; 

		if (thisheadline  != "Stephen Scaer")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Scaer.html" title="Poem: The Public Loved Her Wednesday"><span class="chev">&#0187;</span> Stephen Scaer</a></h6>';

		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Stephen Scaer</h6>';	//don't link to self
		
	//	
//
     // 
 //keywords =	"poetry";
	// if (keywords.toLowerCase().indexOf('poetry')!=-1)  
	// {
	//    if (keywords.toLowerCase().indexOf('prose')!=-1) titletext = '(poetry, prose)';
	//    else titletext = '(poetry)';
	//  }
//	 else if (keywords.toLowerCase().indexOf('prose')!=-1)  typetext = '<span style="font-size:90%"> (prose)</span>'; 

		if (thisheadline  != "Salli Shepherd")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Shepherd.html" title="Poem: Homesick"><span class="chev">&#0187;</span> Salli Shepherd</a></h6>';

		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Salli Shepherd</h6>';	//don't link to self
		
	//	
//
     // 
 //keywords =	"";
	// if (keywords.toLowerCase().indexOf('poetry')!=-1)  
	// {
	//    if (keywords.toLowerCase().indexOf('prose')!=-1) titletext = '(poetry, prose)';
	//    else titletext = '(poetry)';
	//  }
//	 else if (keywords.toLowerCase().indexOf('prose')!=-1)  typetext = '<span style="font-size:90%"> (prose)</span>'; 

		if (thisheadline  != "John Whitworth")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Whitworth.html" title="Four poems: The Examiners\nThem There Out There In Here Right Now\nHumdinger\nNot You"><span class="chev">&#0187;</span> John Whitworth</a></h6>';

		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> John Whitworth</h6>';	//don't link to self
		
	//	
//
     // 
 //keywords =	"poetry";
	// if (keywords.toLowerCase().indexOf('poetry')!=-1)  
	// {
	//    if (keywords.toLowerCase().indexOf('prose')!=-1) titletext = '(poetry, prose)';
	//    else titletext = '(poetry)';
	//  }
//	 else if (keywords.toLowerCase().indexOf('prose')!=-1)  typetext = '<span style="font-size:90%"> (prose)</span>'; 

		if (thisheadline  != "Gary Charles Wilkens")
		mstring+='<h6><a href="http://www.the-chimaera.com/October2007/Various/Wilkens.html" title="Poem: Naked Pictures"><span class="chev">&#0187;</span> Gary Charles Wilkens</a></h6>';

		else mstring+= '<h6 class="selected"><span class="chev">&#0187;</span> Gary Charles Wilkens</h6>';	//don't link to self
		
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