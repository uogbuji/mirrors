
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

 //sidebar menu: links to all oth er pages including Contents page and Editorial, then to author names under headings, etc 
function makeMenu(thisheadline) 
{
mstring = ""; linktext = ""; 

// 
  // 

	if (thisheadline != "Inaugural Issue")
	{
		if ("Contents" =="Contents") 
		   {
		    mstring += '<h6 style="padding-bottom: 9px"><a href="index.htm" title="II start page, current issue"><span class="chev">&#0171;</span> Contents Page';
			}
		 else 
		   {
		     mstring += '<h6><a href="index.htm" title="II start page, current issue"><span class="chev">&#0187;</span> Inaugural Issue';
		    }
	 	  mstring+= '</a></h6>'; 
	   }
	
	   else //no self-link
		{
		mstring += '<h6 class="selected">Inaugural Issue</h6>'
		}
	
  //  
// 
  // 

	if (thisheadline != "Editorial")
	{
		if ("Editorial" =="Contents") 
		   {
		    mstring += '<h6 style="padding-bottom: 9px"><a href="Editorial.htm" title="About II and this issue"><span class="chev">&#0171;</span> Contents Page';
			}
		 else 
		   {
		     mstring += '<h6><a href="Editorial.htm" title="About II and this issue"><span class="chev">&#0187;</span> Editorial';
		    }
	 	  mstring+= '</a></h6>'; 
	   }
	
	   else //no self-link
		{
		mstring += '<h6 class="selected">Editorial</h6>'
		}
	
  //  
// 
  // 

	if (thisheadline != "Interview with Tim Murphy")
	{
		if ("" =="Contents") 
		   {
		    mstring += '<h6 style="padding-bottom: 9px"><a href="InterviewwithTimMurphy.htm" title="Tim on his history, approach, and influences"><span class="chev">&#0171;</span> Contents Page';
			}
		 else 
		   {
		     mstring += '<h6><a href="InterviewwithTimMurphy.htm" title="Tim on his history, approach, and influences"><span class="chev">&#0187;</span> Interview with Tim Murphy';
		    }
	 	  mstring+= '</a></h6>'; 
	   }
	
	   else //no self-link
		{
		mstring += '<h6 class="selected">Interview with Tim Murphy</h6>'
		}
	
  //  
// 
  // 

	if (thisheadline != "Three New Murphy Poems")
	{
		if ("featured" =="Contents") 
		   {
		    mstring += '<h6 style="padding-bottom: 9px"><a href="ThreeNewMurphyPoems.htm" title="Recent work, previously unpublished&nbsp;"><span class="chev">&#0171;</span> Contents Page';
			}
		 else 
		   {
		     mstring += '<h6><a href="ThreeNewMurphyPoems.htm" title="Recent work, previously unpublished&nbsp;"><span class="chev">&#0187;</span> Three New Murphy Poems';
		    }
	 	  mstring+= '</a></h6>'; 
	   }
	
	   else //no self-link
		{
		mstring += '<h6 class="selected">Three New Murphy Poems</h6>'
		}
	
  //  
// 
  // 

	if (thisheadline != "Prosimetrum Excerpt")
	{
		if ("" =="Contents") 
		   {
		    mstring += '<h6 style="padding-bottom: 9px"><a href="ProsimetrumExcerpt.htm" title="Tim on the Powow poets, from his manuscript book."><span class="chev">&#0171;</span> Contents Page';
			}
		 else 
		   {
		     mstring += '<h6><a href="ProsimetrumExcerpt.htm" title="Tim on the Powow poets, from his manuscript book."><span class="chev">&#0187;</span> Prosimetrum Excerpt';
		    }
	 	  mstring+= '</a></h6>'; 
	   }
	
	   else //no self-link
		{
		mstring += '<h6 class="selected">Prosimetrum Excerpt</h6>'
		}
	
  //  
// 
  // 

	if (thisheadline != "A Fine Line")
	{
		if ("" =="Contents") 
		   {
		    mstring += '<h6 style="padding-bottom: 9px"><a href="TimothyMurphyAFineLine.htm" title="Essay by Alan Sullivan based on a shorter version published in 2001."><span class="chev">&#0171;</span> Contents Page';
			}
		 else 
		   {
		     mstring += '<h6><a href="TimothyMurphyAFineLine.htm" title="Essay by Alan Sullivan based on a shorter version published in 2001."><span class="chev">&#0187;</span> A Fine Line';
		    }
	 	  mstring+= '</a></h6>'; 
	   }
	
	   else //no self-link
		{
		mstring += '<h6 class="selected">A Fine Line</h6>'
		}
	
  //  
// 
  // 

	if (thisheadline != "Tim Murphy — a Catholic Sufi")
	{
		if ("" =="Contents") 
		   {
		    mstring += '<h6 style="padding-bottom: 9px"><a href="TimMurphy_aCatholicSufi.htm" title="Daniel Haar’s Muslim slant on Tim’s religious verse"><span class="chev">&#0171;</span> Contents Page';
			}
		 else 
		   {
		     mstring += '<h6><a href="TimMurphy_aCatholicSufi.htm" title="Daniel Haar’s Muslim slant on Tim’s religious verse"><span class="chev">&#0187;</span> Tim Murphy — a Catholic Sufi';
		    }
	 	  mstring+= '</a></h6>'; 
	   }
	
	   else //no self-link
		{
		mstring += '<h6 class="selected">Tim Murphy — a Catholic Sufi</h6>'
		}
	
  //  
// 
  // 

	if (thisheadline != "Review of <em>Very Far North</em>")
	{
		if ("" =="Contents") 
		   {
		    mstring += '<h6 style="padding-bottom: 9px"><a href="Reviewof_VeryFarNorth_.htm" title="Review by Richard Wakefield, originally published in “Iambs &amp; Trochees”"><span class="chev">&#0171;</span> Contents Page';
			}
		 else 
		   {
		     mstring += '<h6><a href="Reviewof_VeryFarNorth_.htm" title="Review by Richard Wakefield, originally published in “Iambs &amp; Trochees”"><span class="chev">&#0187;</span> Review of <em>Very Far North</em>';
		    }
	 	  mstring+= '</a></h6>'; 
	   }
	
	   else //no self-link
		{
		mstring += '<h6 class="selected">Review of <em>Very Far North</em></h6>'
		}
	
  //  
// 
  // 

	if (thisheadline != "Takes on Tim")
	{
		if ("poetry" =="Contents") 
		   {
		    mstring += '<h6 style="padding-bottom: 9px"><a href="TakesonTim.htm" title="Words from friends local and virtual:&nbsp; Rhina Espaillat, R.S. Gwynn, A.E. Stallings, Rose Kelleher, Henry Quince"><span class="chev">&#0171;</span> Contents Page';
			}
		 else 
		   {
		     mstring += '<h6><a href="TakesonTim.htm" title="Words from friends local and virtual:&nbsp; Rhina Espaillat, R.S. Gwynn, A.E. Stallings, Rose Kelleher, Henry Quince"><span class="chev">&#0187;</span> Takes on Tim';
		    }
	 	  mstring+= '</a></h6>'; 
	   }
	
	   else //no self-link
		{
		mstring += '<h6 class="selected">Takes on Tim</h6>'
		}
	
  //  
// 
  // 

	if (thisheadline != "More Takes on Tim")
	{
		if ("" =="Contents") 
		   {
		    mstring += '<h6 style="padding-bottom: 9px"><a href="MoreTakesonTim.htm" title="Words from more friends: Janet Kenny, Alan Sullivan, Wendy Videlock"><span class="chev">&#0171;</span> Contents Page';
			}
		 else 
		   {
		     mstring += '<h6><a href="MoreTakesonTim.htm" title="Words from more friends: Janet Kenny, Alan Sullivan, Wendy Videlock"><span class="chev">&#0187;</span> More Takes on Tim';
		    }
	 	  mstring+= '</a></h6>'; 
	   }
	
	   else //no self-link
		{
		mstring += '<h6 class="selected">More Takes on Tim</h6>'
		}
	
  //  
// 

document.write(mstring);
} // End makeMenu function


function setStatus(content) {
self.status=content;
}

//
var current_section = "";

var menumode = "A"; //Auto is the initial default
//When a heading is expanded, any open heading is first closed	

var section_open = "none";
//Flag nothing open 


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
