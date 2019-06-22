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
  
	   if ("Mike Alexander" == "")	     // ed
		{
				if ("Mike Alexander, Rimbaud’s The Buffet" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheBuffet.html" title="Mike Alexander, Rimbaud’s The Buffet">Arthur Rimbaud, The Buffet</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Arthur Rimbaud, The Buffet</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Mike Alexander, Rimbaud’s The Buffet" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheBuffet.html" title="Mike Alexander, Rimbaud’s The Buffet">Arthur Rimbaud, The Buffet</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Mike Alexander</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Arthur Rimbaud, The Buffet&nbsp;';
					menustring += 'by <span class="menubyline"><i>Mike Alexander</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Thomas Campion" == "")	     // ed
		{
				if ("Thomas Campion, Rose-Cheekt Lawra" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Rose-Cheek_dLaura.html" title="Thomas Campion, Rose-Cheekt Lawra">Rose-Cheekt <em>Lawra</em></a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Rose-Cheekt <em>Lawra</em></p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Thomas Campion, Rose-Cheekt Lawra" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Rose-Cheek_dLaura.html" title="Thomas Campion, Rose-Cheekt Lawra">Rose-Cheekt <em>Lawra</em></a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Thomas Campion</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Rose-Cheekt <em>Lawra</em>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Thomas Campion</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Hannah Carle" == "")	     // ed
		{
				if ("Hannah Carle, Meating" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Meating.html" title="Hannah Carle, Meating">Meating</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Meating</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Hannah Carle, Meating" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Meating.html" title="Hannah Carle, Meating">Meating</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Hannah Carle</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Meating&nbsp;';
					menustring += 'by <span class="menubyline"><i>Hannah Carle</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Catherine Chandler" == "")	     // ed
		{
				if ("Catherine Chandler, Writ" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Writ.html" title="Catherine Chandler, Writ">Writ</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Writ</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Catherine Chandler, Writ" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Writ.html" title="Catherine Chandler, Writ">Writ</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Catherine Chandler</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Writ&nbsp;';
					menustring += 'by <span class="menubyline"><i>Catherine Chandler</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Cally Conan-Davies" == "")	     // ed
		{
				if ("Cally Conan-Davies, The Drift Glass" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheDriftGlass.html" title="Cally Conan-Davies, The Drift Glass">The Drift Glass</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Drift Glass</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Cally Conan-Davies, The Drift Glass" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheDriftGlass.html" title="Cally Conan-Davies, The Drift Glass">The Drift Glass</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Cally Conan-Davies</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Drift Glass&nbsp;';
					menustring += 'by <span class="menubyline"><i>Cally Conan-Davies</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Ann Drysdale" == "")	     // ed
		{
				if ("Ann Drysdale, Sad Villanelle" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="SadVillanelle.html" title="Ann Drysdale, Sad Villanelle">Sad Villanelle</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Sad Villanelle</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Ann Drysdale, Sad Villanelle" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="SadVillanelle.html" title="Ann Drysdale, Sad Villanelle">Sad Villanelle</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ann Drysdale</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Sad Villanelle&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ann Drysdale</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Ann Drysdale" == "")	     // ed
		{
				if ("Ann Drysdale, Thoughts in Warm Water" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="ThoughtsinWarmWater.html" title="Ann Drysdale, Thoughts in Warm Water">Thoughts in Warm Water</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Thoughts in Warm Water</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Ann Drysdale, Thoughts in Warm Water" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="ThoughtsinWarmWater.html" title="Ann Drysdale, Thoughts in Warm Water">Thoughts in Warm Water</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ann Drysdale</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Thoughts in Warm Water&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ann Drysdale</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("R. Nemo Hill" == "")	     // ed
		{
				if ("R. Nemo Hill, Godless Sea Goddess" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="GodlessSeaGoddess.html" title="R. Nemo Hill, Godless Sea Goddess">Godless Sea Goddess</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Godless Sea Goddess</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("R. Nemo Hill, Godless Sea Goddess" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="GodlessSeaGoddess.html" title="R. Nemo Hill, Godless Sea Goddess">Godless Sea Goddess</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>R. Nemo Hill</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Godless Sea Goddess&nbsp;';
					menustring += 'by <span class="menubyline"><i>R. Nemo Hill</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Janet Kenny" == "")	     // ed
		{
				if ("Janet Kenny, Takeoff" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Takeoff.html" title="Janet Kenny, Takeoff">Takeoff</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Takeoff</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Janet Kenny, Takeoff" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Takeoff.html" title="Janet Kenny, Takeoff">Takeoff</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janet Kenny</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Takeoff&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janet Kenny</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Quincy R. Lehr" == "")	     // ed
		{
				if ("Quincy R. Lehr, The Only Thing that Changes Is the Light" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheOnlyThingThatChangesis.html" title="Quincy R. Lehr, The Only Thing that Changes Is the Light">The Only Thing that Changes Is the Light</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Only Thing that Changes Is the Light</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Quincy R. Lehr, The Only Thing that Changes Is the Light" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheOnlyThingThatChangesis.html" title="Quincy R. Lehr, The Only Thing that Changes Is the Light">The Only Thing that Changes Is the Light</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Quincy R. Lehr</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Only Thing that Changes Is the Light&nbsp;';
					menustring += 'by <span class="menubyline"><i>Quincy R. Lehr</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Aaron Poochigian" == "")	     // ed
		{
				if ("Poochigian, Sappho’s ‘That fellow...’" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="SapphoThatfellow.html" title="Poochigian, Sappho’s ‘That fellow...’">Sappho of Lesbos, ‘That fellow...’</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Sappho of Lesbos, ‘That fellow...’</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Poochigian, Sappho’s ‘That fellow...’" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="SapphoThatfellow.html" title="Poochigian, Sappho’s ‘That fellow...’">Sappho of Lesbos, ‘That fellow...’</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Aaron Poochigian</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Sappho of Lesbos, ‘That fellow...’&nbsp;';
					menustring += 'by <span class="menubyline"><i>Aaron Poochigian</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Alec Snoddie" == "")	     // ed
		{
				if ("Mind to Body, Alec Snoddie" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="MindtoBody.html" title="Mind to Body, Alec Snoddie">Mind to Body</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Mind to Body</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Mind to Body, Alec Snoddie" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="MindtoBody.html" title="Mind to Body, Alec Snoddie">Mind to Body</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Alec Snoddie</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Mind to Body&nbsp;';
					menustring += 'by <span class="menubyline"><i>Alec Snoddie</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Alec Snoddie" == "")	     // ed
		{
				if ("Alec Snoddie, Whigmaleerie" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Whigmaleerie.html" title="Alec Snoddie, Whigmaleerie">Whigmaleerie</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Whigmaleerie</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Alec Snoddie, Whigmaleerie" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Whigmaleerie.html" title="Alec Snoddie, Whigmaleerie">Whigmaleerie</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Alec Snoddie</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Whigmaleerie&nbsp;';
					menustring += 'by <span class="menubyline"><i>Alec Snoddie</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("John Whitworth" == "")	     // ed
		{
				if ("John Whitworth, Bless" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Bless.html" title="John Whitworth, Bless">Bless</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Bless</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("John Whitworth, Bless" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Bless.html" title="John Whitworth, Bless">Bless</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>John Whitworth</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Bless&nbsp;';
					menustring += 'by <span class="menubyline"><i>John Whitworth</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("John Whitworth" == "")	     // ed
		{
				if ("John Whitworth, Tuneable Tweak" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TuneableTweak.html" title="John Whitworth, Tuneable Tweak">Tuneable Tweak</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Tuneable Tweak</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("John Whitworth, Tuneable Tweak" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TuneableTweak.html" title="John Whitworth, Tuneable Tweak">Tuneable Tweak</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>John Whitworth</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Tuneable Tweak&nbsp;';
					menustring += 'by <span class="menubyline"><i>John Whitworth</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Peter Wyton" == "")	     // ed
		{
				if ("Peter Wyton, The Fall Guy" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheFallGuy.html" title="Peter Wyton, The Fall Guy">The Fall Guy</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Fall Guy</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Peter Wyton, The Fall Guy" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheFallGuy.html" title="Peter Wyton, The Fall Guy">The Fall Guy</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Peter Wyton</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Fall Guy&nbsp;';
					menustring += 'by <span class="menubyline"><i>Peter Wyton</i></span>';
					}
		   menustring += '</p>';
	   	}
//
	document.write(menustring);

}	