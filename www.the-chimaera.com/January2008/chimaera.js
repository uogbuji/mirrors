//The Chimaera Current Issue January 2008
// 
// "file:///C|/Documents and Settings/Peter/Desktop/Documents/ChimaeraSite/Jann2008/"


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



//Do as array

 //sidebar menu: links to all other pages including Contents page and Editorial, then to author names under headings, etc 

function getTypetext(x) {
}




function makeMainMenu() //Used to make Cover Page menu only
{
mstring = '<table width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 0"><tr><td width="54%" valign="top">';


mstring+='<div style="margin-top:7px; background: #F4F0F0; padding:6px; padding-bottom: 8px; border: 1px solid #AAA""><h3 style="line-height: 1.2em; margin-bottom: 0.8em">Found in Translation<br /><span style="font-weight:normal; font-size: 85%">(Feature Theme)</span></h3>';
//
     audioimg="";
	 // 
	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/January2008/Trans/Allinson.html" title="Translations from Homer’s Odyssey and Ovid’s Metamorphoses, and of a Rilke sonnet">Mark Allinson</a>' +audioimg +'</h6>';
	//mstring+= 

//
     audioimg="";
	 // 
	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/January2008/Trans/Bolick.html" title="Poem, Love of Chichén-Itzá, \ntranslated from Alberto Blanco’s Spanish original">Robert Bolick</a>' +audioimg +'</h6>';
	//mstring+= 

//
     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/January2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/January2008/Trans/Cassar.html" title="Three multilingual “mosaic” sonnets, with notes on the mosaic concept&nbsp;">Antoine Cassar</a>' +audioimg +'</h6>';
	//mstring+= 

//
     audioimg="";
	 // 
	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/January2008/Trans/Chandler.html" title="Poem from Spanish: Inheritance, \nwith translator’s notes&nbsp;">Catherine Chandler</a>' +audioimg +'</h6>';
	//mstring+= 

//
     audioimg="";
	 // 
	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/January2008/Trans/Chatterjee.html" title="Five ghazals translated from the Urdu,\nand one original ghazal,\with an introduction and notes \non the form and translation">Debjani Chatterjee</a>' +audioimg +'</h6>';
	//mstring+= 

//
     audioimg="";
	 // 
	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/January2008/Trans/Elgar.html" title="Three sonnets from Italian:\nSonnet XVII by Gaspara Stampa;\nSonnets 1 and 2 by Ugo Foscolo,\n with translator’s notes">Adam Elgar</a>' +audioimg +'</h6>';
	//mstring+= 

//
     audioimg="";
	 // 
	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/January2008/Trans/Epstein.html" title="Short Story translated from Swedish\nEssay: Working Backwards">B. J. Epstein</a>' +audioimg +'</h6>';
	//mstring+= 

//
     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/January2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/January2008/Trans/Espaillat.html" title="Three poems translated from Spanish,\nwith originals and introductory notes">Rhina P. Espaillat</a>' +audioimg +'</h6>';
	//mstring+= 

//
     audioimg="";
	 // 
	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/January2008/Trans/Evans.html" title="Essay on translations of Dante’s “The Inferno”;\n two poems translated from French">Anna Evans</a>' +audioimg +'</h6>';
	//mstring+= 

//
     audioimg="";
	 // 
	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/January2008/Trans/Frisardi.html" title="Translations from the Milanese poetry of Franco Loi,\n with notes on Loi and the translation of dialect poetry">Andrew Frisardi</a>' +audioimg +'</h6>';
	//mstring+= 

//
     audioimg="";
	 // 
	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/January2008/Trans/McLean.html" title="Translations of some Latin epigrams by Martial,\nwith translator’s comments">Susan McLean</a>' +audioimg +'</h6>';
	//mstring+= 

//
     audioimg="";
	 // 
	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/January2008/Trans/McLoughlin.html" title="Two poems from the Irish of Cathal Ó Searcaigh">Nigel McLoughlin</a>' +audioimg +'</h6>';
	//mstring+= 

//
     audioimg="";
	 // 
	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/January2008/Trans/MooneySingh.html" title="Ghazal translation and two original ghazals">Chris Mooney-Singh</a>' +audioimg +'</h6>';
	//mstring+= 

//
     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/January2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/January2008/Trans/Poochigian.html" title="Translations from Catullus and Aeschylus,\n with introductory notes">Aaron Poochigian</a>' +audioimg +'</h6>';
	//mstring+= 

//
     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/January2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/January2008/Trans/Quince.html" title="Poem: Babelfish and Chips">Henry Quince</a>' +audioimg +'</h6>';
	//mstring+= 

//
     audioimg="";
	 // 
	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/January2008/Trans/Reeser.html" title="Poetry translations:\n“Willow” by Anna Akhmatova;\n “Sonnet” by Jean de Gombaul;\n“To a Creole Lady” by Charles Baudelaire;\n“Pure Serene Music” by Li Ching Chao">Jennifer Reeser</a>' +audioimg +'</h6>';
	//mstring+= 

//
     audioimg="";
	 // 
	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/January2008/Trans/Sloan.html" title="Poem, L’Infinito, translated from Italian">Wendy Sloan</a>' +audioimg +'</h6>';
	//mstring+= 

//
     audioimg="";
	 // 
	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/January2008/Trans/Soderling.html" title="Three poems translated from Swedish">Janice D. Soderling</a>' +audioimg +'</h6>';
	//mstring+= 

//
     audioimg="";
	 // 
	 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/January2008/Trans/SullivanandMurphy.html" title="Excerpt: Beowulf’s death;\nEssay: Translating “Beowulf”">Alan Sullivan and Timothy Murphy</a>' +audioimg +'</h6>';
	//mstring+= 

//

//mstring = '<table width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 0"><tr><td width="54%" valign="top">';
//

mstring+='</div></td><td valign="top" style="padding-left:8px;padding-top:6px">';

//
     // 	
//
     // 
		if ("" != "offmenu")
		{
			mstring+='<h6 style="margin-bottom: 14px; text-transform:uppercase"><a href="http://www.the-chimaera.com/January2008/Editorial.html" title="About this issue">Editorial</a></h6>';
		} 
	//	
//
     // 
		if ("offmenu" != "offmenu")
		{
			mstring+='<h6 style="margin-bottom: 14px; text-transform:uppercase"><a href="http://www.the-chimaera.com/January2008/Feedback.html" title="Correspondence and blog&nbsp;">Feedback</a></h6>';
		} 
	//	
//

mstring+= '<div style="margin-top: 0.7em; margin-bottom:1.1em; padding-top:0.5em; padding-bottom:0.2em;border-top: 1px solid #A80000;border-bottom: 1px solid #A80000">';
			mstring+='<h3 style="font-size:90%; line-height: 1.3em"><i>Spotlight Feature</i></h3>';
		
//
audioimg="";
	 // 

mstring+='<h6 style="margin-bottom: 5px"><a href="http://www.the-chimaera.com/January2008/Feature/Murphy.html" title="The “Prayer for Sobriety” group of poems,\n all relating to alcohol">Timothy Murphy<br /><em>Prayer for Sobriety</em> Poems</a>' +audioimg +'</h6>';
	
//
mstring+='</div>';

	mstring+='<h3 style="line-height: 1.1em; margin-top: 0.3em; margin-bottom:0.5em">More Poetry and Prose</h3>';

			
//

audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/January2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
     // 
	    
 //keywords =	"poetry";
mstring+='<h6 style="margin-bottom: 3px"><a href="http://www.the-chimaera.com/January2008/Various/Abel.html" title="Two poems: \nI Was Once a Painter\nAnother Season of Would-Be Husbandry">L. Ward Abel</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
mstring+='<h6 style="margin-bottom: 3px"><a href="http://www.the-chimaera.com/January2008/Various/Agner.html" title="Poem: The Right Word">Mary Alexandra Agner</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/January2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
     // 
	    
 //keywords =	"poetry";
mstring+='<h6 style="margin-bottom: 3px"><a href="http://www.the-chimaera.com/January2008/Various/Ang.html" title="Poem: Agoraphobia">Arlene Ang</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
mstring+='<h6 style="margin-bottom: 3px"><a href="http://www.the-chimaera.com/January2008/Various/Carpathios.html" title="Three Poems: Revealed; Message; Arthritis">Neil Carpathios</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
mstring+='<h6 style="margin-bottom: 3px"><a href="http://www.the-chimaera.com/January2008/Various/Doreski.html" title="Three poems: \nYour Dream of Giant Mushrooms;\nSeven-Card Stud with the Dean;\nA Boulder Larger than My House">William Doreski</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
mstring+='<h6 style="margin-bottom: 3px"><a href="http://www.the-chimaera.com/January2008/Various/GGood.html" title="Poem: The Exchange">George Good</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"prose";
mstring+='<h6 style="margin-bottom: 3px"><a href="http://www.the-chimaera.com/January2008/Various/HGood.html" title="Poem: Love During Wartime">Howie Good</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/January2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
     // 
	    
 //keywords =	"";
mstring+='<h6 style="margin-bottom: 3px"><a href="http://www.the-chimaera.com/January2008/Various/Hunt.html" title="Poem: Aria">Simon Hunt</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
mstring+='<h6 style="margin-bottom: 3px"><a href="http://www.the-chimaera.com/January2008/Various/Keane.html" title="Poem: Homecoming, Newark Airport">James Keane</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
mstring+='<h6 style="margin-bottom: 3px"><a href="http://www.the-chimaera.com/January2008/Various/Kettelhack.html" title="Two poems: \nWhile the Globe Is Warming;\nSewing Lesson">Guy Kettelhack</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"poetry";
mstring+='<h6 style="margin-bottom: 3px"><a href="http://www.the-chimaera.com/January2008/Various/Kimball.html" title="Two poems: \nElephant’s Trunk;\nSummation">Don Kimball</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"poetry";
mstring+='<h6 style="margin-bottom: 3px"><a href="http://www.the-chimaera.com/January2008/Various/Landrum.html" title="Two poems: \n1957 Pontiac Super Chief; \nThe Impossibility of Epithalamia">David. W. Landrum</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"prose";
mstring+='<h6 style="margin-bottom: 3px"><a href="http://www.the-chimaera.com/January2008/Various/LaRosa.html" title="Two poems: \nEngaged by Rage;\n Shadow Bears">Ralph La Rosa</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
mstring+='<h6 style="margin-bottom: 3px"><a href="http://www.the-chimaera.com/January2008/Various/McClure.html" title="Poem: A Stone of No Importance">Dave McClure</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
mstring+='<h6 style="margin-bottom: 3px"><a href="http://www.the-chimaera.com/January2008/Various/Menamin.html" title="Three poems: \nThe Hoofman; \nCaged Lizard;\nAfternoon of a Faun">Margaret Menamin</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
mstring+='<h6 style="margin-bottom: 3px"><a href="http://www.the-chimaera.com/January2008/Various/Mesler.html" title="Poem: Sometimes the Medicine Works\nand Sometimes There’s the Other Thing">Corey Mesler</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"poetry";
mstring+='<h6 style="margin-bottom: 3px"><a href="http://www.the-chimaera.com/January2008/Various/O_Carroll.html" title="Poem: Tall Tale">Chris O’Carroll</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
mstring+='<h6 style="margin-bottom: 3px"><a href="http://www.the-chimaera.com/January2008/Various/Prince.html" title="Two poems:\nFluffed Lives of the Tragediennes;\nThe Familiar">Samuel Prince</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"poetry";
mstring+='<h6 style="margin-bottom: 3px"><a href="http://www.the-chimaera.com/January2008/Various/White.html" title="Two poems: \nDeath of a Doorman;\nAfter She Died">Gail White</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"prose";
mstring+='<h6 style="margin-bottom: 3px"><a href="http://www.the-chimaera.com/January2008/Various/Wyton.html" title="Two poems:\nPercussion Lover;\nRegime Change Pending">Peter Wyton</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"poetry";
mstring+='<h6 style="margin-bottom: 3px"><a href="http://www.the-chimaera.com/January2008/Various/Zirilli.html" title="Essay: Rumble at Rutherford">Donald Zirilli</a>' +audioimg +'</h6>';
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
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Editorial.html" title="About this issue"><span class="chev">&#0187;</span> Editorial</a></h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Editorial</h6>';	//don't link to self
	//	
//
     // 

		if (thisheadline != "Feedback")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Feedback.html" title="Correspondence and blog&nbsp;"><span class="chev">&#0187;</span> Feedback</a></h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Feedback</h6>';	//don't link to self
	//	
//

mstring+='<h3>&ldquo;Found in Translation&rdquo;</h3>';

//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline  != "Mark Allinson")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Trans/Allinson.html" title="Translations from Homer’s Odyssey and Ovid’s Metamorphoses, and of a Rilke sonnet"><span class="chev">&#0187;</span> Mark Allinson</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Mark Allinson' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline  != "Robert Bolick")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Trans/Bolick.html" title="Poem, Love of Chichén-Itzá, \ntranslated from Alberto Blanco’s Spanish original"><span class="chev">&#0187;</span> Robert Bolick</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Robert Bolick' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/January2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	
		if (thisheadline  != "Antoine Cassar")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Trans/Cassar.html" title="Three multilingual “mosaic” sonnets, with notes on the mosaic concept&nbsp;"><span class="chev">&#0187;</span> Antoine Cassar</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Antoine Cassar' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline  != "Catherine Chandler")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Trans/Chandler.html" title="Poem from Spanish: Inheritance, \nwith translator’s notes&nbsp;"><span class="chev">&#0187;</span> Catherine Chandler</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Catherine Chandler' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline  != "Debjani Chatterjee")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Trans/Chatterjee.html" title="Five ghazals translated from the Urdu,\nand one original ghazal,\with an introduction and notes \non the form and translation"><span class="chev">&#0187;</span> Debjani Chatterjee</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Debjani Chatterjee' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline  != "Adam Elgar")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Trans/Elgar.html" title="Three sonnets from Italian:\nSonnet XVII by Gaspara Stampa;\nSonnets 1 and 2 by Ugo Foscolo,\n with translator’s notes"><span class="chev">&#0187;</span> Adam Elgar</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Adam Elgar' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline  != "B. J. Epstein")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Trans/Epstein.html" title="Short Story translated from Swedish\nEssay: Working Backwards"><span class="chev">&#0187;</span> B. J. Epstein</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> B. J. Epstein' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/January2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	
		if (thisheadline  != "Rhina P. Espaillat")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Trans/Espaillat.html" title="Three poems translated from Spanish,\nwith originals and introductory notes"><span class="chev">&#0187;</span> Rhina P. Espaillat</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Rhina P. Espaillat' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline  != "Anna Evans")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Trans/Evans.html" title="Essay on translations of Dante’s “The Inferno”;\n two poems translated from French"><span class="chev">&#0187;</span> Anna Evans</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Anna Evans' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline  != "Andrew Frisardi")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Trans/Frisardi.html" title="Translations from the Milanese poetry of Franco Loi,\n with notes on Loi and the translation of dialect poetry"><span class="chev">&#0187;</span> Andrew Frisardi</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Andrew Frisardi' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline  != "Susan McLean")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Trans/McLean.html" title="Translations of some Latin epigrams by Martial,\nwith translator’s comments"><span class="chev">&#0187;</span> Susan McLean</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Susan McLean' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline  != "Nigel McLoughlin")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Trans/McLoughlin.html" title="Two poems from the Irish of Cathal Ó Searcaigh"><span class="chev">&#0187;</span> Nigel McLoughlin</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Nigel McLoughlin' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline  != "Chris Mooney-Singh")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Trans/MooneySingh.html" title="Ghazal translation and two original ghazals"><span class="chev">&#0187;</span> Chris Mooney-Singh</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Chris Mooney-Singh' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/January2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	
		if (thisheadline  != "Aaron Poochigian")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Trans/Poochigian.html" title="Translations from Catullus and Aeschylus,\n with introductory notes"><span class="chev">&#0187;</span> Aaron Poochigian</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Aaron Poochigian' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/January2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	
		if (thisheadline  != "Henry Quince")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Trans/Quince.html" title="Poem: Babelfish and Chips"><span class="chev">&#0187;</span> Henry Quince</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Henry Quince' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline  != "Jennifer Reeser")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Trans/Reeser.html" title="Poetry translations:\n“Willow” by Anna Akhmatova;\n “Sonnet” by Jean de Gombaul;\n“To a Creole Lady” by Charles Baudelaire;\n“Pure Serene Music” by Li Ching Chao"><span class="chev">&#0187;</span> Jennifer Reeser</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Jennifer Reeser' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline  != "Wendy Sloan")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Trans/Sloan.html" title="Poem, L’Infinito, translated from Italian"><span class="chev">&#0187;</span> Wendy Sloan</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Wendy Sloan' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline  != "Janice D. Soderling")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Trans/Soderling.html" title="Three poems translated from Swedish"><span class="chev">&#0187;</span> Janice D. Soderling</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Janice D. Soderling' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline  != "Alan Sullivan and Timothy Murphy")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Trans/SullivanandMurphy.html" title="Excerpt: Beowulf’s death;\nEssay: Translating “Beowulf”"><span class="chev">&#0187;</span> Alan Sullivan and Timothy Murphy</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Alan Sullivan and Timothy Murphy' +audioimg +'</h6>';	//don't link to self		 
	//	
//

mstring+='<h3>Spotlight Feature</h3>';

//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline  != "Timothy Murphy")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Feature/Murphy.html" title="The “Prayer for Sobriety” group of poems,\n all relating to alcohol"><span class="chev">&#0187;</span> Timothy Murphy<br /><em>Prayer for Sobriety</em> Poems</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Timothy Murphy' +audioimg +'</h6>';	//don't link to self
		
	//	
//

mstring+='<h3>More Poems and Prose</h3>';

//
     // 
        //keywords =	"poetry";
	
	     audioimg="";
	   // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/January2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	
		if (thisheadline  != "L. Ward Abel")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Various/Abel.html" title="Two poems: \nI Was Once a Painter\nAnother Season of Would-Be Husbandry"><span class="chev">&#0187;</span> L. Ward Abel</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> L. Ward Abel' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords =	"";
	
	     audioimg="";
	   // 
	
		if (thisheadline  != "Mary Alexandra Agner")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Various/Agner.html" title="Poem: The Right Word"><span class="chev">&#0187;</span> Mary Alexandra Agner</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Mary Alexandra Agner' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords =	"poetry";
	
	     audioimg="";
	   // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/January2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	
		if (thisheadline  != "Arlene Ang")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Various/Ang.html" title="Poem: Agoraphobia"><span class="chev">&#0187;</span> Arlene Ang</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Arlene Ang' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords =	"";
	
	     audioimg="";
	   // 
	
		if (thisheadline  != "Neil Carpathios")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Various/Carpathios.html" title="Three Poems: Revealed; Message; Arthritis"><span class="chev">&#0187;</span> Neil Carpathios</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Neil Carpathios' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords =	"";
	
	     audioimg="";
	   // 
	
		if (thisheadline  != "William Doreski")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Various/Doreski.html" title="Three poems: \nYour Dream of Giant Mushrooms;\nSeven-Card Stud with the Dean;\nA Boulder Larger than My House"><span class="chev">&#0187;</span> William Doreski</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> William Doreski' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords =	"";
	
	     audioimg="";
	   // 
	
		if (thisheadline  != "George Good")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Various/GGood.html" title="Poem: The Exchange"><span class="chev">&#0187;</span> George Good</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> George Good' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords =	"prose";
	
	     audioimg="";
	   // 
	
		if (thisheadline  != "Howie Good")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Various/HGood.html" title="Poem: Love During Wartime"><span class="chev">&#0187;</span> Howie Good</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Howie Good' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords =	"";
	
	     audioimg="";
	   // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/January2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	
		if (thisheadline  != "Simon Hunt")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Various/Hunt.html" title="Poem: Aria"><span class="chev">&#0187;</span> Simon Hunt</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Simon Hunt' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords =	"";
	
	     audioimg="";
	   // 
	
		if (thisheadline  != "James Keane")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Various/Keane.html" title="Poem: Homecoming, Newark Airport"><span class="chev">&#0187;</span> James Keane</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> James Keane' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords =	"";
	
	     audioimg="";
	   // 
	
		if (thisheadline  != "Guy Kettelhack")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Various/Kettelhack.html" title="Two poems: \nWhile the Globe Is Warming;\nSewing Lesson"><span class="chev">&#0187;</span> Guy Kettelhack</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Guy Kettelhack' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords =	"poetry";
	
	     audioimg="";
	   // 
	
		if (thisheadline  != "Don Kimball")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Various/Kimball.html" title="Two poems: \nElephant’s Trunk;\nSummation"><span class="chev">&#0187;</span> Don Kimball</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Don Kimball' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords =	"poetry";
	
	     audioimg="";
	   // 
	
		if (thisheadline  != "David. W. Landrum")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Various/Landrum.html" title="Two poems: \n1957 Pontiac Super Chief; \nThe Impossibility of Epithalamia"><span class="chev">&#0187;</span> David. W. Landrum</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> David. W. Landrum' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords =	"prose";
	
	     audioimg="";
	   // 
	
		if (thisheadline  != "Ralph La Rosa")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Various/LaRosa.html" title="Two poems: \nEngaged by Rage;\n Shadow Bears"><span class="chev">&#0187;</span> Ralph La Rosa</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Ralph La Rosa' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords =	"";
	
	     audioimg="";
	   // 
	
		if (thisheadline  != "Dave McClure")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Various/McClure.html" title="Poem: A Stone of No Importance"><span class="chev">&#0187;</span> Dave McClure</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Dave McClure' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords =	"";
	
	     audioimg="";
	   // 
	
		if (thisheadline  != "Margaret Menamin")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Various/Menamin.html" title="Three poems: \nThe Hoofman; \nCaged Lizard;\nAfternoon of a Faun"><span class="chev">&#0187;</span> Margaret Menamin</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Margaret Menamin' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords =	"";
	
	     audioimg="";
	   // 
	
		if (thisheadline  != "Corey Mesler")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Various/Mesler.html" title="Poem: Sometimes the Medicine Works\nand Sometimes There’s the Other Thing"><span class="chev">&#0187;</span> Corey Mesler</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Corey Mesler' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords =	"poetry";
	
	     audioimg="";
	   // 
	
		if (thisheadline  != "Chris O’Carroll")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Various/O_Carroll.html" title="Poem: Tall Tale"><span class="chev">&#0187;</span> Chris O’Carroll</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Chris O’Carroll' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords =	"";
	
	     audioimg="";
	   // 
	
		if (thisheadline  != "Samuel Prince")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Various/Prince.html" title="Two poems:\nFluffed Lives of the Tragediennes;\nThe Familiar"><span class="chev">&#0187;</span> Samuel Prince</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Samuel Prince' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords =	"poetry";
	
	     audioimg="";
	   // 
	
		if (thisheadline  != "Gail White")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Various/White.html" title="Two poems: \nDeath of a Doorman;\nAfter She Died"><span class="chev">&#0187;</span> Gail White</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Gail White' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords =	"prose";
	
	     audioimg="";
	   // 
	
		if (thisheadline  != "Peter Wyton")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Various/Wyton.html" title="Two poems:\nPercussion Lover;\nRegime Change Pending"><span class="chev">&#0187;</span> Peter Wyton</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Peter Wyton' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords =	"poetry";
	
	     audioimg="";
	   // 
	
		if (thisheadline  != "Donald Zirilli")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/January2008/Various/Zirilli.html" title="Essay: Rumble at Rutherford"><span class="chev">&#0187;</span> Donald Zirilli</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Donald Zirilli' +audioimg +'</h6>';	//don't link to self
		
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


function writeExheading(pagepath) {

exheading= '&nbsp;'
if (pagepath.indexOf('Trans/')!=-1) {
exheading='<p style= "padding-top: 7px; margin-bottom: -1.0 em; font-size:90%; color: #A80000">TRANSLATION FEATURE</p>';
}
d.write(exheading)

}


function writeExquote(pagepath) {
exquote ="";
if (pagepath.indexOf('Trans/')!=-1) 
{
exquote='<p style= "font-size: 110%;line-height:1.4em; font-family: tahoma, \'trebuchet ms\', trebuchet, arial; padding-top: 7px; margin-bottom: 0.4em; color: #A80000; text-align:right"><i>To translate is also to write, to <br />become the voice of that author <br />and that novel or poem...</i></p><p style= "font-size: 110%; line-height:1.4em; font-family: tahoma,\'trebuchet ms\', trebuchet, arial; margin-bottom: 1.8em; color: #A80000; text-align: right">&mdash; B. J. Epstein</p>';
}
d.write(exquote)
}