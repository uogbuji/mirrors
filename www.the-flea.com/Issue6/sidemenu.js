  function makeSideMenu(thisteaser) { 
   
    var menustring="";
 // 
  
	   if ("" == "")	     // ed
		{
				if ("Wherein The Editor dilates upon Matters touching the current Broadsheet, or upon any Matters whatever, at his absolute Whim" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Editorial.html" title="Wherein The Editor dilates upon Matters touching the current Broadsheet, or upon any Matters whatever, at his absolute Whim">Editorial</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Editorial</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Wherein The Editor dilates upon Matters touching the current Broadsheet, or upon any Matters whatever, at his absolute Whim" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Editorial.html" title="Wherein The Editor dilates upon Matters touching the current Broadsheet, or upon any Matters whatever, at his absolute Whim">Editorial</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i></i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Editorial&nbsp;';
					menustring += 'by <span class="menubyline"><i></i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Mark Blaeuer" == "")	     // ed
		{
				if ("Mark Blaeuer, Methought I Saw My Late A-Soused Haint" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="MethoughtISaw.html" title="Mark Blaeuer, Methought I Saw My Late A-Soused Haint">Methought I Saw My Late A-Soused Haint</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Methought I Saw My Late A-Soused Haint</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Mark Blaeuer, Methought I Saw My Late A-Soused Haint" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="MethoughtISaw.html" title="Mark Blaeuer, Methought I Saw My Late A-Soused Haint">Methought I Saw My Late A-Soused Haint</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Mark Blaeuer</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Methought I Saw My Late A-Soused Haint&nbsp;';
					menustring += 'by <span class="menubyline"><i>Mark Blaeuer</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Temple Cone" == "")	     // ed
		{
				if ("Temple Cone, A Last Rain Song" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="ALastRainSong.html" title="Temple Cone, A Last Rain Song">A Last Rain Song</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'A Last Rain Song</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Temple Cone, A Last Rain Song" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="ALastRainSong.html" title="Temple Cone, A Last Rain Song">A Last Rain Song</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Temple Cone</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'A Last Rain Song&nbsp;';
					menustring += 'by <span class="menubyline"><i>Temple Cone</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Sally Cook" == "")	     // ed
		{
				if ("Sally Cook, The Flame" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheFlame.html" title="Sally Cook, The Flame">The Flame</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Flame</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Sally Cook, The Flame" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheFlame.html" title="Sally Cook, The Flame">The Flame</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Sally Cook</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Flame&nbsp;';
					menustring += 'by <span class="menubyline"><i>Sally Cook</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Kevin Cutrer" == "")	     // ed
		{
				if ("Kevin Cutrer, Autumn Leaves" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="AutumnLeaves.html" title="Kevin Cutrer, Autumn Leaves">Autumn Leaves</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Autumn Leaves</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Kevin Cutrer, Autumn Leaves" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="AutumnLeaves.html" title="Kevin Cutrer, Autumn Leaves">Autumn Leaves</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Kevin Cutrer</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Autumn Leaves&nbsp;';
					menustring += 'by <span class="menubyline"><i>Kevin Cutrer</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Ann Drysdale" == "")	     // ed
		{
				if ("Ann Drysdale, Metre-wanker" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="MetreWanker.html" title="Ann Drysdale, Metre-wanker">Metre-wanker</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Metre-wanker</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Ann Drysdale, Metre-wanker" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="MetreWanker.html" title="Ann Drysdale, Metre-wanker">Metre-wanker</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ann Drysdale</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Metre-wanker&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ann Drysdale</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Martin Elster" == "")	     // ed
		{
				if ("Martin Elster, Stridulation" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Stridulation.html" title="Martin Elster, Stridulation">Stridulation</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Stridulation</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Martin Elster, Stridulation" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Stridulation.html" title="Martin Elster, Stridulation">Stridulation</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Martin Elster</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Stridulation&nbsp;';
					menustring += 'by <span class="menubyline"><i>Martin Elster</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Angela France" == "")	     // ed
		{
				if ("Angela France, Liminal" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Liminal.html" title="Angela France, Liminal">Liminal</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Liminal</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Angela France, Liminal" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Liminal.html" title="Angela France, Liminal">Liminal</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Angela France</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Liminal&nbsp;';
					menustring += 'by <span class="menubyline"><i>Angela France</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Alan Gould" == "")	     // ed
		{
				if ("Alan Gould, An Interrogator’s Opening Remarks" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="AnInterrogatorsOpeningRem.html" title="Alan Gould, An Interrogator’s Opening Remarks">An Interrogator’s Opening Remarks</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'An Interrogator’s Opening Remarks</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Alan Gould, An Interrogator’s Opening Remarks" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="AnInterrogatorsOpeningRem.html" title="Alan Gould, An Interrogator’s Opening Remarks">An Interrogator’s Opening Remarks</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Alan Gould</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'An Interrogator’s Opening Remarks&nbsp;';
					menustring += 'by <span class="menubyline"><i>Alan Gould</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Patricia Wallace Jones" == "")	     // ed
		{
				if ("Patricia Wallace Jones" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="AllLoversEntitled.html" title="Patricia Wallace Jones">All Lovers Entitled</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'All Lovers Entitled</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Patricia Wallace Jones" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="AllLoversEntitled.html" title="Patricia Wallace Jones">All Lovers Entitled</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Patricia Wallace Jones</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'All Lovers Entitled&nbsp;';
					menustring += 'by <span class="menubyline"><i>Patricia Wallace Jones</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Rose Kelleher" == "")	     // ed
		{
				if ("Rose Kelleher, Hello World" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="HelloWorld.html" title="Rose Kelleher, Hello World">Hello World</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Hello World</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Rose Kelleher, Hello World" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="HelloWorld.html" title="Rose Kelleher, Hello World">Hello World</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Rose Kelleher</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Hello World&nbsp;';
					menustring += 'by <span class="menubyline"><i>Rose Kelleher</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Dane Kuttler" == "")	     // ed
		{
				if ("Dane Kuttler" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="LanguageofDaughters.html" title="Dane Kuttler">The Language of Daughters</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Language of Daughters</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Dane Kuttler" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="LanguageofDaughters.html" title="Dane Kuttler">The Language of Daughters</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Dane Kuttler</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Language of Daughters&nbsp;';
					menustring += 'by <span class="menubyline"><i>Dane Kuttler</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Amit Majmudar" == "")	     // ed
		{
				if ("Amit Majmudar, Binary" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Binary.html" title="Amit Majmudar, Binary">Binary</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Binary</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Amit Majmudar, Binary" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Binary.html" title="Amit Majmudar, Binary">Binary</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Amit Majmudar</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Binary&nbsp;';
					menustring += 'by <span class="menubyline"><i>Amit Majmudar</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("John Milbury-Steen" == "")	     // ed
		{
				if ("John Milbury-Steen, The Grail Irony" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheGrailIrony.html" title="John Milbury-Steen, The Grail Irony">The Grail Irony</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Grail Irony</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("John Milbury-Steen, The Grail Irony" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheGrailIrony.html" title="John Milbury-Steen, The Grail Irony">The Grail Irony</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>John Milbury-Steen</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Grail Irony&nbsp;';
					menustring += 'by <span class="menubyline"><i>John Milbury-Steen</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Timothy Murphy" == "")	     // ed
		{
				if ("Timothy Murphy, Aaron Poochigian" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="AaronPoochigian.html" title="Timothy Murphy, Aaron Poochigian">Aaron Poochigian</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Aaron Poochigian</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Timothy Murphy, Aaron Poochigian" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="AaronPoochigian.html" title="Timothy Murphy, Aaron Poochigian">Aaron Poochigian</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Aaron Poochigian&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("E. Shaun Russell" == "")	     // ed
		{
				if ("E. Shaun Russell, Gratitude" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Gratitude.html" title="E. Shaun Russell, Gratitude">Gratitude</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Gratitude</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("E. Shaun Russell, Gratitude" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Gratitude.html" title="E. Shaun Russell, Gratitude">Gratitude</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>E. Shaun Russell</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Gratitude&nbsp;';
					menustring += 'by <span class="menubyline"><i>E. Shaun Russell</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Joseph Salemi" == "")	     // ed
		{
				if ("Joseph Salemi, Penny for Thought" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="PennyforThought.html" title="Joseph Salemi, Penny for Thought">Penny for Thought</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Penny for Thought</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Joseph Salemi, Penny for Thought" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="PennyforThought.html" title="Joseph Salemi, Penny for Thought">Penny for Thought</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Joseph Salemi</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Penny for Thought&nbsp;';
					menustring += 'by <span class="menubyline"><i>Joseph Salemi</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Peter Wyton" == "")	     // ed
		{
				if ("Peter Wyton, Lord of Light and Mice" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="LordofLightandMice.html" title="Peter Wyton, Lord of Light and Mice">Lord of Light and Mice</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Lord of Light and Mice</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Peter Wyton, Lord of Light and Mice" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="LordofLightandMice.html" title="Peter Wyton, Lord of Light and Mice">Lord of Light and Mice</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Peter Wyton</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Lord of Light and Mice&nbsp;';
					menustring += 'by <span class="menubyline"><i>Peter Wyton</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Leo Yankevich" == "")	     // ed
		{
				if ("Leo Yankevich, Puddle" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Puddle.html" title="Leo Yankevich, Puddle">Puddle</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Puddle</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Leo Yankevich, Puddle" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Puddle.html" title="Leo Yankevich, Puddle">Puddle</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Leo Yankevich</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Puddle&nbsp;';
					menustring += 'by <span class="menubyline"><i>Leo Yankevich</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Marly Youmans" == "")	     // ed
		{
				if ("Marly Youmans, In the Celtic Twilight" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="IntheCelticTwilight.html" title="Marly Youmans, In the Celtic Twilight">In the Celtic Twilight</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'In the Celtic Twilight</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Marly Youmans, In the Celtic Twilight" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="IntheCelticTwilight.html" title="Marly Youmans, In the Celtic Twilight">In the Celtic Twilight</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Marly Youmans</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'In the Celtic Twilight&nbsp;';
					menustring += 'by <span class="menubyline"><i>Marly Youmans</i></span>';
					}
		   menustring += '</p>';
	   	}
//
	document.write(menustring);

}	