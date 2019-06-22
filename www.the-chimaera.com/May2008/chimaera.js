//The Chimaera Current Issue May 2008
//"http://www.the-chimaera.com/i3/"
// 
// "file:///C|/Documents and Settings/Peter/Desktop/Documents/ChimaeraSite/May2008/"
  

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


//d.write('<link rel="stylesheet" type="text/css" href="../stylesheets/greengold_p.css" title="print" media="print" />');

//Add print stylesheet link
var cssNode = document.createElement('link');
cssNode.type = 'text/css';cssNode.rel = 'stylesheet';
cssNode.href = 'http://www.the-chimaera.com/May2008/stylesheets/greengold_p.css';
cssNode.media = 'print';
cssNode.title = 'dynamicLoadedSheet';
document.getElementsByTagName("head")[0].appendChild(cssNode);


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


mstring = '<table width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 0"><tr><td width="50%" valign="top">';


mstring+='<div style="margin-top:7px; background: #EFF4F3; padding:6px; padding-bottom: 8px; border: 1px solid #ACC""><h3>Belonging<br /><span style="font-weight:normal; font-size: 85%">(Feature Theme)</span></h3>';

//List/link content in folders Theme, Theme/Essays, Theme/Poems, Theme/Fiction, / (editorial), Spotlight, 
// MORE POEMS AND PROSE: Poetry, Essays, Reviews   
//
     audioimg="";
	 //  
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Preface.html" title="“Belonging” theme preface by Elizabeth Barrie&nbsp;"><span class="chev">▪</span> Preface: Belonging and Alienation</a>' +audioimg +'</h6>';
//

mstring+='<h5>Essays</h5>';

//
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Essays/Lehr.html" title="Essay on Ray Pospisil (died 2008) \nwith three of Pospisil’s poems: \nGhost in the House \nInsomnia \nUncle at Rest"><span class="chev">▪</span> Quincy Lehr: On Ray Pospisil (with three poems by Pospisil)</a></h6>';
//
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Essays/Leskovac.html" title="Props&nbsp;"><span class="chev">▪</span> Amanda Leskovac: Props</a></h6>';
//

mstring+='<h5>Poems</h5>';
//
     audioimg="";
	 // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Barron.html" title="Snow"><span class="chev">▪</span> Jim Barron</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Butt.html" title="This Moment\nEllis Island, New York\nTravelling Fair"><span class="chev">▪</span> Maggie Butt</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Clark.html" title="Us and Them\nBetside Manner"><span class="chev">▪</span> John Thomas Clark</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/May2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Corbett.html" title="Feast of Corpus Christi\nTransaction"><span class="chev">▪</span> Maryann Corbett</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Good.html" title="Villanelle on a Theme by Groucho Marx"><span class="chev">▪</span> George Good</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Hanson.html" title="The Dreaming\nPantomime"><span class="chev">▪</span> Christopher Hanson</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/May2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Hill-Kaucher.html" title="Goodbye Goodness\nTrotsky’s Axe"><span class="chev">▪</span> Jennifer Hill-Kaucher</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Hostovsky.html" title="Deaf Culture 101 \nGreenhouse \nMy Country Isn’t \nPigeon Lady \nThe Canes"><span class="chev">▪</span> Paul Hostovsky</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Kelleher.html" title="To my husband, poetry; \n Scrape"><span class="chev">▪</span> Rose Kelleher</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Kerrigan.html" title="Finalities\nAubade"><span class="chev">▪</span> T. S. Kerrigan</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Lehr.html" title="A Letter Home"><span class="chev">▪</span> Quincy Lehr</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Machado.html" title="As Soon As a Man Dies\nDrowning a Shadow"><span class="chev">▪</span> Aditi Machado</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/May2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/MacRae.html" title="Arms of Sons"><span class="chev">▪</span> Austin MacRae</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/McLean.html" title="For John; \nStone"><span class="chev">▪</span> Susan McLean</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Menamin.html" title="Baptism; \nBaucis &amp; Philemon;\nGalatea; \nLe Morte d’Amour; \nSeparation"><span class="chev">▪</span> Margaret Menamin</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Milbury-Steen.html" title="The Miser; \nAt the Fosse"><span class="chev">▪</span> John Milbury-Steen</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Nicholas.html" title="Baking Greek Cookies; \nShadow; \nWine"><span class="chev">▪</span> Perry S. Nicholas</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/O_Carroll.html" title="“Mom and Dad Had a Really Stupid Fight”"><span class="chev">▪</span> Chris O’Carroll</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Poto.html" title="The Petition"><span class="chev">▪</span> Rose Poto</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Slaviero.html" title="The Empress Remembers Adolescence; \nSome Advice for Living in the Suburbs"><span class="chev">▪</span> Susan Slaviero</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Soderling.html" title="Medea’s Lullaby"><span class="chev">▪</span> Janice D. Soderling</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Whitworth.html" title="You Know; \nShakesperian Paradelle; \nBelonging; \nThe Fairy Feller’s Masterstroke"><span class="chev">▪</span> John Whitworth</a>' +audioimg +'</h6>';
//
     audioimg="";
	 // 
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Yscamp.html" title="Poems: \nLetter; \nIn This River Against Ownership"><span class="chev">▪</span> Amanda Yskamp</a>' +audioimg +'</h6>';
//

mstring+='<h5>Fiction</h5>';
//
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Fiction/Hill.html" title="Tom Bowl"><span class="chev">▪</span> R. Nemo Hill: Tom Bowl</a></h6>';
//
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Fiction/Howard-Hobson.html" title="Advice About Dying"><span class="chev">▪</span> Juleigh Howard-Hobson: Advice About Dying</a></h6>';
//
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Fiction/Steinfeld.html" title="Microfictions: \n1. You Remember Sitting Across from God \n2. Exactitude is for Suckers \n3. What Do You Do for an Encore?"><span class="chev">▪</span> J. J. Steinfeld: Three microfictions</a></h6>';
//
 mstring+='<h6 class="xp"><a href="http://www.the-chimaera.com/May2008/Theme/Fiction/Wiberg.html" title="No Tiki Lounge"><span class="chev">▪</span> Kajsa Wiberg: No Tiki Lounge&nbsp;</a></h6>';
//

mstring+='</div></td><td valign="top" style="padding-left:8px;padding-top:6px">';

//
     // 	
//
     // 
		if ("" != "offmenu")
		{
			mstring+='<h6 class="xr"; style="text-transform:uppercase"><a href="http://www.the-chimaera.com/May2008/Editorial.html" title="About this issue"><span class="chev">▪</span> Editorial</a></h6>';
		} 
	//	
//
     // 
		if ("offmenu" != "offmenu")
		{
			mstring+='<h6 class="xr"; style="text-transform:uppercase"><a href="http://www.the-chimaera.com/May2008/Feedback.html" title="Correspondence and blog&nbsp;"><span class="chev">▪</span> Feedback</a></h6>';
		} 
	//	
//

mstring+= '<div style="margin-top: 0.7em; margin-bottom:1.1em; padding-top:0.5em; padding-bottom:0.9em;border-top: 1px solid #477;border-bottom: 1px solid #477">';
			mstring+='<h3>Alison Brackenbury<br /><span style="font-weight:normal; font-size: 85%">(Spotlight Feature)</span></h3>';
		
		
//
audioimg="";
	 // 

mstring+='<h6 class="xr""><a href="http://www.the-chimaera.com/May2008/Spotlight/Introduction.html" title="Editor’s introduction"><span class="chev">▪</span> Introduction</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 

mstring+='<h6 class="xr""><a href="http://www.the-chimaera.com/May2008/Spotlight/Poems.html" title="Nine unpublished poems by Alison Brackenbury"><span class="chev">▪</span> Poems</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 

mstring+='<h6 class="xr""><a href="http://www.the-chimaera.com/May2008/Spotlight/Interview.html" title="Alison Brackenbury talks \nto Paul Stevens"><span class="chev">▪</span> Interview</a>' +audioimg +'</h6>';
	
//
audioimg="";
	 // 

mstring+='<h6 class="xr""><a href="http://www.the-chimaera.com/May2008/Spotlight/Review.html" title="Nigel McLoughlin reviews \n“Singing in the Dark”&nbsp;"><span class="chev">▪</span> Review by Nigel McLoughlin</a>' +audioimg +'</h6>';
	
//

mstring+='</div>';
mstring += '<h4>MORE POEMS AND PROSE</h4>'; 
mstring+='<h5>Poems</h5>';
		
//

audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/May2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
     // 
	    
 //keywords =	"poetry";
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/May2008/Poems/Alexander.html" title="Translations from Baudelaire: \nThe Game;\nFar, Far Away"><span class="chev">▪</span> Mike Alexander</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"poetry";
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/May2008/Poems/Barbato.html" title="Dulse; \nMr Lear"><span class="chev">▪</span> Elizabeth Barbato</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/May2008/Poems/Bryant.html" title="Missing Neruda; \nKali of the White Arms; \nDante’s Dream"><span class="chev">▪</span> Karen Bryant</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/May2008/Poems/Bryant-Hamon.html" title="A Measure; \nPaper, Bone and Moon"><span class="chev">▪</span> Anne Bryant-Hamon</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"poetry prose";
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/May2008/Poems/Chandler.html" title="Writ&nbsp;"><span class="chev">▪</span> Catherine Chandler</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/May2008/Poems/Jacobs.html" title="Polar Bear Poem; \nThe Man Who Wouldn’t Die"><span class="chev">▪</span> Kathryn Jacobs</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"poetry";
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/May2008/Poems/Kuhn.html" title="Utica Sestina"><span class="chev">▪</span> Andrew Kuhn</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"poetry";
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/May2008/Poems/Liversidge.html" title="Pathetic Fallacy"><span class="chev">▪</span> Ray Liversidge</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/May2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
     // 
	    
 //keywords =	"";
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/May2008/Poems/MacLaurin.html" title="Poems: Horror Vacuis \nDunderhead"><span class="chev">▪</span> Duncan Gillies MacLaurin</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/May2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
     // 
	    
 //keywords =	"";
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/May2008/Poems/MacRae.html" title="Poems: Soap; \nCouplets for a Young Carpenter; \n Under the Eaves"><span class="chev">▪</span> Austin MacRae</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/May2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
     // 
	    
 //keywords =	"";
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/May2008/Poems/McCarty.html" title="Poem: By Down the Shoresea&nbsp;"><span class="chev">▪</span> Patti McCarty</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"prose";
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/May2008/Poems/Mulligan.html" title="Poems: \nBears Eat Monkey; \nfall of the serpent; nQuartet for the End of Time"><span class="chev">▪</span> JBMulligan</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/May2008/Poems/Mullin.html" title="Oak Park"><span class="chev">▪</span> Rick Mullin</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/May2008/Poems/Murphy.html" title="Conestoga Bark; \nRobert Ward; \nToo Old for this Game; \nSwa Hit Aeror Waes&nbsp;"><span class="chev">▪</span> Timothy Murphy</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/May2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
     // 
	    
 //keywords =	"";
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/May2008/Poems/Nawrocki.html" title="Poem: Sensitive Skin"><span class="chev">▪</span> Amy Nawrocki</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"";
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/May2008/Poems/Parker.html" title="Notes About the Island Woman"><span class="chev">▪</span> Steve Parker</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/May2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
     // 
	    
 //keywords =	"poetry";
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/May2008/Poems/Thomas.html" title="Two poems: \Cows in a Corofin Field;\n Never a Bone Between Them"><span class="chev">▪</span> Michael W. Thomas</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"poetry";
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/May2008/Poems/Wickes.html" title="“A” Roads; \nI Think of Dean Moriarty..."><span class="chev">▪</span> Alan Wickes</a>' +audioimg +'</h6>';
	//	
//

audioimg="";
	 // 
     // 
	    
 //keywords =	"prose";
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/May2008/Poems/Wyton.html" title="Alison, Rosamund and a Wyvern, by Salvador Dali"><span class="chev">▪</span> Peter Wyton</a>' +audioimg +'</h6>';
	//	
//

mstring+='<h5>Essays</h5>';
		
//
 // 
 //keywords =	"";
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/May2008/Essays/Murphy.html" title="Excerpt from the manuscript book, “Requited”"><span class="chev">▪</span> Timothy Murphy</a></h6>';
	//	
//
 // 
 //keywords =	"";
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/May2008/Essays/O_Higgins.html" title="Byron and the Goth Poets"><span class="chev">▪</span> Fintan O’Higgins</a></h6>';
	//	
//
 // 
 //keywords =	"";
mstring+='<h6 class="xr"><a href="http://www.the-chimaera.com/May2008/Essays/Salemi.html" title="The Persistence of Myth"><span class="chev">▪</span> Joseph S. Salemi</a></h6>';
	//	
//

mstring+='<h5>Reviews</h5>';
		
//
 // 
 //keywords =	"prose";
mstring+='<h6  class="xr"><a href="http://www.the-chimaera.com/May2008/Reviews/Butt.html" title="Review of Nigel McLoughlin’s “Dissonances”"><span class="chev">▪</span> Maggie Butt</a></h6>';
	//	
//
 // 
 //keywords =	"";
mstring+='<h6  class="xr"><a href="http://www.the-chimaera.com/May2008/Reviews/Oxley.html" title="Review of Maggie Butt’s “Lipstick”"><span class="chev">▪</span> William Oxley</a></h6>';
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
// MORE POEMS AND PROSE: Poetry, Essays, Reviews   

//
     // 	
//
     // 

//If headlines don't match, or teasers don't match	 
	 
		if (thisheadline != "Editorial" || thisteaser != "About this issue")
	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Editorial.html" title="About this issue"><span class="chev">&#0187;</span> Editorial</a></h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Editorial</h6>';	//don't link to self


	//	
//
     // 

//If headlines don't match, or teasers don't match	 
	 
		if (thisheadline != "Feedback" || thisteaser != "Correspondence and blog&nbsp;")
	
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Feedback.html" title="Correspondence and blog&nbsp;"><span class="chev">&#0187;</span> Feedback</a></h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Feedback</h6>';	//don't link to self


	//	
//

mstring+='<h3 class="section">&ldquo;Belonging&rdquo;</h3>';

//
     // 
 		     audioimg="";
	 // 

		if (thisheadline != "Preface: Belonging and Alienation" || thisteaser != "“Belonging” theme preface by Elizabeth Barrie&nbsp;")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Preface.html" title="“Belonging” theme preface by Elizabeth Barrie&nbsp;"><span class="chev">&#0187;</span> Preface: Belonging and Alienation</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Preface: Belonging and Alienation' +audioimg +'</h6>';	//don't link to self		 
	//	
//

mstring+='<h3>Essays</h3>';

//
     // 
 		
	if (thisheadline != "Quincy Lehr" || thisteaser != "Essay on Ray Pospisil (died 2008) \nwith three of Pospisil’s poems: \nGhost in the House \nInsomnia \nUncle at Rest")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Essays/Lehr.html" title="Essay on Ray Pospisil (died 2008) \nwith three of Pospisil’s poems: \nGhost in the House \nInsomnia \nUncle at Rest"><span class="chev">&#0187;</span> Quincy Lehr</a></h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Quincy Lehr</h6>';	//don't link to self		 
	//	
//
     // 
 		
	if (thisheadline != "Amanda Leskovac" || thisteaser != "Props&nbsp;")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Essays/Leskovac.html" title="Props&nbsp;"><span class="chev">&#0187;</span> Amanda Leskovac</a></h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Amanda Leskovac</h6>';	//don't link to self		 
	//	
//


mstring+='<h3>Poems</h3>';

//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Jim Barron" || thisteaser != "Snow")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Barron.html" title="Snow"><span class="chev">&#0187;</span> Jim Barron</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Jim Barron' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Maggie Butt" || thisteaser != "This Moment\nEllis Island, New York\nTravelling Fair")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Butt.html" title="This Moment\nEllis Island, New York\nTravelling Fair"><span class="chev">&#0187;</span> Maggie Butt</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Maggie Butt' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "John Thomas Clark" || thisteaser != "Us and Them\nBetside Manner")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Clark.html" title="Us and Them\nBetside Manner"><span class="chev">&#0187;</span> John Thomas Clark</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> John Thomas Clark' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/May2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	
		if (thisheadline != "Maryann Corbett" || thisteaser != "Feast of Corpus Christi\nTransaction")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Corbett.html" title="Feast of Corpus Christi\nTransaction"><span class="chev">&#0187;</span> Maryann Corbett</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Maryann Corbett' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "George Good" || thisteaser != "Villanelle on a Theme by Groucho Marx")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Good.html" title="Villanelle on a Theme by Groucho Marx"><span class="chev">&#0187;</span> George Good</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> George Good' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Christopher Hanson" || thisteaser != "The Dreaming\nPantomime")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Hanson.html" title="The Dreaming\nPantomime"><span class="chev">&#0187;</span> Christopher Hanson</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Christopher Hanson' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/May2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	
		if (thisheadline != "Jennifer Hill-Kaucher" || thisteaser != "Goodbye Goodness\nTrotsky’s Axe")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Hill-Kaucher.html" title="Goodbye Goodness\nTrotsky’s Axe"><span class="chev">&#0187;</span> Jennifer Hill-Kaucher</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Jennifer Hill-Kaucher' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Paul Hostovsky" || thisteaser != "Deaf Culture 101 \nGreenhouse \nMy Country Isn’t \nPigeon Lady \nThe Canes")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Hostovsky.html" title="Deaf Culture 101 \nGreenhouse \nMy Country Isn’t \nPigeon Lady \nThe Canes"><span class="chev">&#0187;</span> Paul Hostovsky</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Paul Hostovsky' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Rose Kelleher" || thisteaser != "To my husband, poetry; \n Scrape")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Kelleher.html" title="To my husband, poetry; \n Scrape"><span class="chev">&#0187;</span> Rose Kelleher</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Rose Kelleher' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "T. S. Kerrigan" || thisteaser != "Finalities\nAubade")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Kerrigan.html" title="Finalities\nAubade"><span class="chev">&#0187;</span> T. S. Kerrigan</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> T. S. Kerrigan' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Quincy Lehr" || thisteaser != "A Letter Home")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Lehr.html" title="A Letter Home"><span class="chev">&#0187;</span> Quincy Lehr</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Quincy Lehr' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Aditi Machado" || thisteaser != "As Soon As a Man Dies\nDrowning a Shadow")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Machado.html" title="As Soon As a Man Dies\nDrowning a Shadow"><span class="chev">&#0187;</span> Aditi Machado</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Aditi Machado' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/May2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	
		if (thisheadline != "Austin MacRae" || thisteaser != "Arms of Sons")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/MacRae.html" title="Arms of Sons"><span class="chev">&#0187;</span> Austin MacRae</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Austin MacRae' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Susan McLean" || thisteaser != "For John; \nStone")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/McLean.html" title="For John; \nStone"><span class="chev">&#0187;</span> Susan McLean</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Susan McLean' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Margaret Menamin" || thisteaser != "Baptism; \nBaucis &amp; Philemon;\nGalatea; \nLe Morte d’Amour; \nSeparation")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Menamin.html" title="Baptism; \nBaucis &amp; Philemon;\nGalatea; \nLe Morte d’Amour; \nSeparation"><span class="chev">&#0187;</span> Margaret Menamin</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Margaret Menamin' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "John Milbury-Steen" || thisteaser != "The Miser; \nAt the Fosse")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Milbury-Steen.html" title="The Miser; \nAt the Fosse"><span class="chev">&#0187;</span> John Milbury-Steen</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> John Milbury-Steen' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Perry S. Nicholas" || thisteaser != "Baking Greek Cookies; \nShadow; \nWine")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Nicholas.html" title="Baking Greek Cookies; \nShadow; \nWine"><span class="chev">&#0187;</span> Perry S. Nicholas</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Perry S. Nicholas' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Chris O’Carroll" || thisteaser != "“Mom and Dad Had a Really Stupid Fight”")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/O_Carroll.html" title="“Mom and Dad Had a Really Stupid Fight”"><span class="chev">&#0187;</span> Chris O’Carroll</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Chris O’Carroll' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Rose Poto" || thisteaser != "The Petition")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Poto.html" title="The Petition"><span class="chev">&#0187;</span> Rose Poto</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Rose Poto' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Susan Slaviero" || thisteaser != "The Empress Remembers Adolescence; \nSome Advice for Living in the Suburbs")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Slaviero.html" title="The Empress Remembers Adolescence; \nSome Advice for Living in the Suburbs"><span class="chev">&#0187;</span> Susan Slaviero</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Susan Slaviero' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Janice D. Soderling" || thisteaser != "Medea’s Lullaby")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Soderling.html" title="Medea’s Lullaby"><span class="chev">&#0187;</span> Janice D. Soderling</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Janice D. Soderling' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "John Whitworth" || thisteaser != "You Know; \nShakesperian Paradelle; \nBelonging; \nThe Fairy Feller’s Masterstroke")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Whitworth.html" title="You Know; \nShakesperian Paradelle; \nBelonging; \nThe Fairy Feller’s Masterstroke"><span class="chev">&#0187;</span> John Whitworth</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> John Whitworth' +audioimg +'</h6>';	//don't link to self		 
	//	
//
     // 
 		     audioimg="";
	 // 
	
		if (thisheadline != "Amanda Yskamp" || thisteaser != "Poems: \nLetter; \nIn This River Against Ownership")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Poems/Yscamp.html" title="Poems: \nLetter; \nIn This River Against Ownership"><span class="chev">&#0187;</span> Amanda Yskamp</a>' +audioimg +'</h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Amanda Yskamp' +audioimg +'</h6>';	//don't link to self		 
	//	
//


mstring+='<h3>Fiction</h3>';
//
     // 
 		
		if (thisheadline != "R. Nemo Hill" || thisteaser != "Tom Bowl")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Fiction/Hill.html" title="Tom Bowl"><span class="chev">&#0187;</span> R. Nemo Hill</a></h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> R. Nemo Hill</h6>';	//don't link to self		 
	//	
//
     // 
 		
		if (thisheadline != "Juleigh Howard-Hobson" || thisteaser != "Advice About Dying")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Fiction/Howard-Hobson.html" title="Advice About Dying"><span class="chev">&#0187;</span> Juleigh Howard-Hobson</a></h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Juleigh Howard-Hobson</h6>';	//don't link to self		 
	//	
//
     // 
 		
		if (thisheadline != "J. J. Steinfeld" || thisteaser != "Microfictions: \n1. You Remember Sitting Across from God \n2. Exactitude is for Suckers \n3. What Do You Do for an Encore?")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Fiction/Steinfeld.html" title="Microfictions: \n1. You Remember Sitting Across from God \n2. Exactitude is for Suckers \n3. What Do You Do for an Encore?"><span class="chev">&#0187;</span> J. J. Steinfeld</a></h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> J. J. Steinfeld</h6>';	//don't link to self		 
	//	
//
     // 
 		
		if (thisheadline != "Kajsa Wiberg" || thisteaser != "No Tiki Lounge")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Theme/Fiction/Wiberg.html" title="No Tiki Lounge"><span class="chev">&#0187;</span> Kajsa Wiberg</a></h6>';
		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Kajsa Wiberg</h6>';	//don't link to self		 
	//	
//


mstring+='<h3 class="section">Alison Brackenbury<br /><span style="font-weight:normal; font-size: 90%; letter-spacing: 1px">(Spotlight Feature)</span></h3>';

//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Introduction" || thisteaser != "Editor’s introduction")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Spotlight/Introduction.html" title="Editor’s introduction"><span class="chev">&#0187;</span> Introduction</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Introduction' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Poems" || thisteaser != "Nine unpublished poems by Alison Brackenbury")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Spotlight/Poems.html" title="Nine unpublished poems by Alison Brackenbury"><span class="chev">&#0187;</span> Poems</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Poems' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "poetry prose";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Interview" || thisteaser != "Alison Brackenbury talks \nto Paul Stevens")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Spotlight/Interview.html" title="Alison Brackenbury talks \nto Paul Stevens"><span class="chev">&#0187;</span> Interview</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Interview' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
        //keywords = "";
	
	     audioimg="";
	   // 
	
		if (thisheadline != "Review by Nigel McLoughlin" || thisteaser != "Nigel McLoughlin reviews \n“Singing in the Dark”&nbsp;")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Spotlight/Review.html" title="Nigel McLoughlin reviews \n“Singing in the Dark”&nbsp;"><span class="chev">&#0187;</span> Review by Nigel McLoughlin</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Review by Nigel McLoughlin' +audioimg +'</h6>';	//don't link to self
		
	//	
//



mstring+='<h3 class="section">MORE POEMS & PROSE</h3>';
mstring += '<h3 style="margin-top:0.2em">Poems</h3>';

//
     // 
    
	     audioimg="";
	   // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/May2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	
			if (thisheadline != "Mike Alexander" || thisteaser != "Translations from Baudelaire: \nThe Game;\nFar, Far Away")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Poems/Alexander.html" title="Translations from Baudelaire: \nThe Game;\nFar, Far Away"><span class="chev">&#0187;</span> Mike Alexander</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Mike Alexander' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Elizabeth Barbato" || thisteaser != "Dulse; \nMr Lear")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Poems/Barbato.html" title="Dulse; \nMr Lear"><span class="chev">&#0187;</span> Elizabeth Barbato</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Elizabeth Barbato' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Karen Bryant" || thisteaser != "Missing Neruda; \nKali of the White Arms; \nDante’s Dream")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Poems/Bryant.html" title="Missing Neruda; \nKali of the White Arms; \nDante’s Dream"><span class="chev">&#0187;</span> Karen Bryant</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Karen Bryant' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Anne Bryant-Hamon" || thisteaser != "A Measure; \nPaper, Bone and Moon")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Poems/Bryant-Hamon.html" title="A Measure; \nPaper, Bone and Moon"><span class="chev">&#0187;</span> Anne Bryant-Hamon</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Anne Bryant-Hamon' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Catherine Chandler" || thisteaser != "Writ&nbsp;")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Poems/Chandler.html" title="Writ&nbsp;"><span class="chev">&#0187;</span> Catherine Chandler</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Catherine Chandler' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Kathryn Jacobs" || thisteaser != "Polar Bear Poem; \nThe Man Who Wouldn’t Die")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Poems/Jacobs.html" title="Polar Bear Poem; \nThe Man Who Wouldn’t Die"><span class="chev">&#0187;</span> Kathryn Jacobs</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Kathryn Jacobs' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Andrew Kuhn" || thisteaser != "Utica Sestina")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Poems/Kuhn.html" title="Utica Sestina"><span class="chev">&#0187;</span> Andrew Kuhn</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Andrew Kuhn' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Ray Liversidge" || thisteaser != "Pathetic Fallacy")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Poems/Liversidge.html" title="Pathetic Fallacy"><span class="chev">&#0187;</span> Ray Liversidge</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Ray Liversidge' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/May2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	
			if (thisheadline != "Duncan Gillies MacLaurin" || thisteaser != "Poems: Horror Vacuis \nDunderhead")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Poems/MacLaurin.html" title="Poems: Horror Vacuis \nDunderhead"><span class="chev">&#0187;</span> Duncan Gillies MacLaurin</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Duncan Gillies MacLaurin' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/May2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	
			if (thisheadline != "Austin MacRae" || thisteaser != "Poems: Soap; \nCouplets for a Young Carpenter; \n Under the Eaves")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Poems/MacRae.html" title="Poems: Soap; \nCouplets for a Young Carpenter; \n Under the Eaves"><span class="chev">&#0187;</span> Austin MacRae</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Austin MacRae' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/May2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	
			if (thisheadline != "Patti McCarty" || thisteaser != "Poem: By Down the Shoresea&nbsp;")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Poems/McCarty.html" title="Poem: By Down the Shoresea&nbsp;"><span class="chev">&#0187;</span> Patti McCarty</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Patti McCarty' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "JBMulligan" || thisteaser != "Poems: \nBears Eat Monkey; \nfall of the serpent; nQuartet for the End of Time")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Poems/Mulligan.html" title="Poems: \nBears Eat Monkey; \nfall of the serpent; nQuartet for the End of Time"><span class="chev">&#0187;</span> JBMulligan</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> JBMulligan' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Rick Mullin" || thisteaser != "Oak Park")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Poems/Mullin.html" title="Oak Park"><span class="chev">&#0187;</span> Rick Mullin</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Rick Mullin' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Timothy Murphy" || thisteaser != "Conestoga Bark; \nRobert Ward; \nToo Old for this Game; \nSwa Hit Aeror Waes&nbsp;")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Poems/Murphy.html" title="Conestoga Bark; \nRobert Ward; \nToo Old for this Game; \nSwa Hit Aeror Waes&nbsp;"><span class="chev">&#0187;</span> Timothy Murphy</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Timothy Murphy' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/May2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	
			if (thisheadline != "Amy Nawrocki" || thisteaser != "Poem: Sensitive Skin")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Poems/Nawrocki.html" title="Poem: Sensitive Skin"><span class="chev">&#0187;</span> Amy Nawrocki</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Amy Nawrocki' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Steve Parker" || thisteaser != "Notes About the Island Woman")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Poems/Parker.html" title="Notes About the Island Woman"><span class="chev">&#0187;</span> Steve Parker</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Steve Parker' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
     audioimg='&nbsp;<img src="http://www.the-chimaera.com/May2008/images/sound.gif" alt="Author\'s audio available" align="bottom">'; 
     // 
	
			if (thisheadline != "Michael W. Thomas" || thisteaser != "Two poems: \Cows in a Corofin Field;\n Never a Bone Between Them")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Poems/Thomas.html" title="Two poems: \Cows in a Corofin Field;\n Never a Bone Between Them"><span class="chev">&#0187;</span> Michael W. Thomas</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Michael W. Thomas' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Alan Wickes" || thisteaser != "“A” Roads; \nI Think of Dean Moriarty...")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Poems/Wickes.html" title="“A” Roads; \nI Think of Dean Moriarty..."><span class="chev">&#0187;</span> Alan Wickes</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Alan Wickes' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
    
	     audioimg="";
	   // 
	
			if (thisheadline != "Peter Wyton" || thisteaser != "Alison, Rosamund and a Wyvern, by Salvador Dali")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Poems/Wyton.html" title="Alison, Rosamund and a Wyvern, by Salvador Dali"><span class="chev">&#0187;</span> Peter Wyton</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Peter Wyton' +audioimg +'</h6>';	//don't link to self
		
	//	
//


mstring += '<h3>Essays</h3>';

//
     // 
 	
	     audioimg="";
	   // 
	
			if (thisheadline != "Timothy Murphy" || thisteaser != "Excerpt from the manuscript book, “Requited”")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Essays/Murphy.html" title="Excerpt from the manuscript book, “Requited”"><span class="chev">&#0187;</span> Timothy Murphy</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Timothy Murphy' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
 	
	     audioimg="";
	   // 
	
			if (thisheadline != "Fintan O’Higgins" || thisteaser != "Byron and the Goth Poets")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Essays/O_Higgins.html" title="Byron and the Goth Poets"><span class="chev">&#0187;</span> Fintan O’Higgins</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Fintan O’Higgins' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
 	
	     audioimg="";
	   // 
	
			if (thisheadline != "Joseph S. Salemi" || thisteaser != "The Persistence of Myth")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Essays/Salemi.html" title="The Persistence of Myth"><span class="chev">&#0187;</span> Joseph S. Salemi</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Joseph S. Salemi' +audioimg +'</h6>';	//don't link to self
		
	//	
//


mstring += '<h3>Reviews</h3>';

//
     // 
	
	     audioimg="";
	   // 
	
				if (thisheadline != "Maggie Butt" || thisteaser != "Review of Nigel McLoughlin’s “Dissonances”")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Reviews/Butt.html" title="Review of Nigel McLoughlin’s “Dissonances”"><span class="chev">&#0187;</span> Maggie Butt</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> Maggie Butt' +audioimg +'</h6>';	//don't link to self
		
	//	
//
     // 
	
	     audioimg="";
	   // 
	
				if (thisheadline != "William Oxley" || thisteaser != "Review of Maggie Butt’s “Lipstick”")
		mstring+='<h6 style="margin-left: 1.4em; text-indent: -1.4em"><a href="http://www.the-chimaera.com/May2008/Reviews/Oxley.html" title="Review of Maggie Butt’s “Lipstick”"><span class="chev">&#0187;</span> William Oxley</a>' +audioimg +'</h6>';

		else mstring+= '<h6 class="selected" style="margin-left: 1.4em; text-indent: -1.4em"><span class="chev">&#0187;</span> William Oxley' +audioimg +'</h6>';	//don't link to self
		
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
	exheading='<p style= "text-align:center;margin-top: 14px; padding:3px; margin-bottom: -1.0 em; font-size:90%; color: #477">Spotlight Feature<br />Alison Brackenbury</p>';
d.write(exheading)
	}
}

function writeExheading(pagepath) {
exheading= '&nbsp;'
if (pagepath.indexOf('Theme/')!=-1) 
	{
	exheading='<p style= "margin-top: 14px; margin-left: 8px; padding:3px; margin-bottom: -1.0 em; font-size:90%; color: #477">&ldquo;Belonging&rdquo; Feature</p>';
d.write(exheading)
	}
}


function writeExquote(pagepath) {
quote ="";
if (pagepath.indexOf('Theme/')!=-1) 
{
quote='<p class="themequote">Belonging makes us a member of a group or community, with which we can identify, and which leads (somewhat paradoxically) to a sense of our own individual identity.</p><p class="themequote" style="margin-top:0">&mdash; Elizabeth Barrie</p>';
}
d.write(quote)
}