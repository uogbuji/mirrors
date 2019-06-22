//Chimaera base site

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




function confirmSub()
{

remtxt  = "GUIDELINES REMINDER:\n\n* Stories or other prose pieces should be no longer than 4000 words, unless with prior agreement.\n\n* End each poetry line with a 'new line', not a 'new paragraph' break. \n\nYour Bio note should be short (no more than four or five lines) and should include no more than one web link. Additional web links to cited publications will be at the Editor's discretion.\n\nAre you ready to submit?";
r=confirm(remtxt);
if (r) return true; else return false;  
}


var img = new Array(10); //random
imgpart1 = '<img src="tccaptcha'; imgpart2 ='.png" alt="anti-spam image">'; 

for (n = 1; n<=9; n++) 
{
img[n] =imgpart1 +n +imgpart2 ;
}

var txt = new Array(10); //random

txt[1] = "G14Ff";
txt[2] = "Hf554";
txt[3] = "f14Bpy";
txt[4] = "qQ55g2";
txt[5] = "qQ35G2";
txt[6] = "jQ39G1";
txt[7] = "rQ35G3";
txt[8] = "dR35G5";
txt[9] = "qkTEb2";

//



function getImg(ino) //image number may be specified for manual change or have 0 value for random choice;
{
if (!ino) ino=0;
if (ino==0) //random
	{
	todaydate = new Date();
	seconds = todaydate.getSeconds();
	ino = seconds % 10; if (ino==0) ino = 9;
	}
x = ino; //use random or preset
d.write(img[x]) ;
cval=txt[x];
}


  function frameBust() 
{
	if (self.parent.frames.length != 0)
	self.parent.location=document.location;
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


//open(URL, windowName[, windowFeatures])

function popUpWindow(url) {
window.open (url, 'newWin', 'scrollbars=yes,status=yes,resizable=yes,screenx=0, screeny=0,width=550,height=440')
}


 //sidebar menu: links to all other pages including Contents page and Editorial, then to author names under headings, etc 

function makeMenu(thisheadline) 
{
mstring = "";
mstring += '<h6 style="text-align:center; font-size: 140%; line-height: 1.3em; letter-spacing: 1px"><a href="July2011/" title="Issue 8: July 2011\n  Feature theme: Life, The Universe and Everything">CURRENT ISSUE<br>July 2011 </a></h6></br>';


//
     // 
	
		if (thisheadline != "Home&nbsp;")
		mstring+='<h6><a href="index.html" title="The Chimaera home page">Home&nbsp;</a></h6>';
		else mstring+= '<h6 class="selected">Home&nbsp;</h6>';	//don't link to self
			//	
//
     // 
	
		if (thisheadline != "About <em>The Chimaera</em>")
		mstring+='<h6><a href="About.html" title="About The Chimaera">About <em>The Chimaera</em></a></h6>';
		else mstring+= '<h6 class="selected">About <em>The Chimaera</em></h6>';	//don't link to self
			//	
//
     // 
	
		if (thisheadline != "Submissions")
		mstring+='<h6><a href="Submissions.html" title="Submitting work to The Chimaera (we are currently CLOSED for submissions)">Submissions</a></h6>';
		else mstring+= '<h6 class="selected">Submissions</h6>';	//don't link to self
			//	
//
     // 	
//
     // 
	
		if (thisheadline != "Friends")
		mstring+='<h6><a href="Friends.html" title="Links to literary and writing-related sites">Friends</a></h6>';
		else mstring+= '<h6 class="selected">Friends</h6>';	//don't link to self
			//	
//
document.write(mstring);
} //End makeMenu function


//<div class='endnote'><p>(This poem was published in the July 2007 issue of <i>SCR/II</i>.)</p></div>



function showPoem(number)
{
 if (number=="n") poemnumber="0"; //n for zero; x for auto; anything else, use number passed 
   else if (number=="x") 
   {
   mnow = new Date;
   daysnow = Math.floor (mnow / 86400000);
   //alert("Elapsed days are " +daysnow);
   poemnumber =  daysnow%11; //Modulo (number of poems)
   	}//yields number in range 0 to n-1 
    else poemnumber=number;
poemid =  'potd' + poemnumber;
pdivobj = gE(poemid);
pdivobj.style.display="block";
}


function nextPoem() {
pdivobj.style.display="none";
poemnumber ++ ;
if (poemnumber > 10) poemnumber = 0;
poemid =  'potd' + poemnumber;
pdivobj = gE(poemid);
pdivobj.style.display="";
}



function checkData()
{
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
  return true;

} //End checkData function


function writeEmail(name,domain,screenLetters) {
   visible=(typeof(screenLetters)=="undefined")? name+"@"+domain : 
screenLetters;
   document.write ('<a href=mailto:'+name+'@'+domain+'>'+visible+'</a>');
}

// Display today's date
function todayDate()
{
dw = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ); 
m = new Array( "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");  
today = new Date(); 
day = today.getDate(); //day of the month
//
//thedate = (d[today.getDay()]+" ");
thedate= dw[today.getDay()]+ ", "; //day of the week
thedate += m[today.getMonth()]+" ";
thedate += day + ", ";
theyear = today.getYear();
if (theyear < 1900) theyear += 1900;
thedate += theyear;
return thedate;
}