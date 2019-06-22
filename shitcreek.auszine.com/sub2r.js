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
var img = new Array(10); 
imgpart1 = '<img src="cap'; imgpart2 ='.png" alt="anti-spam image">'; 

for (n = 1; n<=9; n++) 
{
img[n] =imgpart1 +n +imgpart2 ;
}

var txt = new Array(10); 

txt[1] = "G14Ff";
txt[2] = "Hf554";
txt[3] = "f14Bpy";
txt[4] = "qQ55e2";
txt[5] = "qQ3532";
txt[6] = "jQ39G1";
txt[7] = "rQ35G3";
txt[8] = "dR35G5";
txt[9] = "qkTEb2";


function getImg(ino) //image number --  0 for random pick;
{
if (!ino) ino=0;

if (ino==0) //random
	{
	todaydate = new Date();
	seconds = todaydate.getSeconds();
	ino = seconds % 10; if (ino==0) ino = 9;
	}
x = ino; // random or preset
document.write(img[x]) ;
cval=txt[x];
}


prevFlag=0;

function subPreview() {	
    //prevFlag=1; 
    updatePreview();
	show('previewbox');
		// textobj = gE('previewbox'); textobj.focus();
}

function updatePreview() {
		var df = document.theForm;
		auth = df.author_name.value; email=df.email_address.value; 
				
		subtext = "";
		
		for (var i = 1; i <= 5; i++) {
			fieldname = "html" + i;
			field = eval("df." + fieldname);
			fieldtext = ubb2Html(field.value); //Change UBB codes to HTML
			
			// on second thought, let's do this in PHP...
			//fieldtext = closeTags(fieldtext); //Close any tags left open
			
			field.value = fieldtext;
			subtext += fieldtext;
			if (fieldtext != "") 
				subtext += "<br />---------------------------------------------------------------------------------------<br /><br />";
		}		
		
		//Convert line breaks
		subtext = nl2br(subtext);
		
		df.submission.value = subtext; // put the whole thing in a hidden field
		
		//Check name and email address?
		if (!auth) auth='<font color="red">NO NAME ENTERED</font>';
		if (!email) email='<font color="red">NO EMAIL ADDRESS ENTERED</font>';
		  	
		writestr = '<a name="prevtop"></a><div style="font: 16px/1.3 \'times new roman\', serif"><p>Name: ' + auth +'<br />';
	    writestr += 'Email:  ' + email +'</p>';
		writestr += '<p>SUBMISSION TEXT ' +'<br />';
		writestr += '--------------------------------------------------------------------------------------- ' +'</p>';
		writestr += subtext;
		writestr += '<br /><br />';
		//writestr += '--------------------------------------------------------------------------------------- ' +'</p>';
				
		
		writestr += '<br /> <p>NOTE: Poem titles, epigraphs and end notes will be formatted according to SCR publishing style: no need to put titles in bold type or specify smaller type for an epigraph or endnote.</p>';
		writestr += '<p style="text-align: right"><a href="#" onclick="hide(\'previewbox\');return false">Close preview panel</a></p></div>';
		prevdiv = gE('previewbox');
		
		
		prevdiv.innerHTML = writestr;
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



//cval = "Sxz" +"CqR";
function checkData()
{
//spam test 
//if (document.theForm.captcha.value !=cval)
if (document.theForm.dummy.value!="")
{
	//alert("The sub is rejected!");
	return false
	}

//Required fields author_name, email_address,submission 
if (document.theForm.author_name.value =="" ||document.theForm.email_address.value =="" || document.theForm.submission.value =="") 
	{
	alert("You must enter a name, valid email address, and submission text, AND you must preview your text before submitting.");
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
		  updatePreview(); // Ensure UBB conversion 	 
  return true;

} //End checkData function

function writeEmail(name,domain,screenLetters) {
   visible=(typeof(screenLetters)=="undefined")? name+"@"+domain : 
screenLetters;
   document.write ('<a href=mailto:'+name+'@'+domain+'>'+visible+'</a>');
}