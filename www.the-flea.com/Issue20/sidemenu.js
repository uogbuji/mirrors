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
  
	   if ("Ann Drysdale" == "")	     // ed
		{
				if ("Ann Drysdale, The Only Road There Is" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheOnlyRoadThereIs.html" title="Ann Drysdale, The Only Road There Is"><em>Epigraph:</em> The Only Road There Is</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += '<em>Epigraph:</em> The Only Road There Is</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Ann Drysdale, The Only Road There Is" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheOnlyRoadThereIs.html" title="Ann Drysdale, The Only Road There Is"><em>Epigraph:</em> The Only Road There Is</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ann Drysdale</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += '<em>Epigraph:</em> The Only Road There Is&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ann Drysdale</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("John Whitworth" == "")	     // ed
		{
				if ("John Whitworth, Being the Bad Guy" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="BeingtheBadGuy.html" title="John Whitworth, Being the Bad Guy"><em>Epigraph:</em> Being the Bad Guy</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += '<em>Epigraph:</em> Being the Bad Guy</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("John Whitworth, Being the Bad Guy" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="BeingtheBadGuy.html" title="John Whitworth, Being the Bad Guy"><em>Epigraph:</em> Being the Bad Guy</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>John Whitworth</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += '<em>Epigraph:</em> Being the Bad Guy&nbsp;';
					menustring += 'by <span class="menubyline"><i>John Whitworth</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Mike Alexander" == "")	     // ed
		{
				if ("Mike Alexander, Egyptian Sonnet" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="EgyptianSonnet.html" title="Mike Alexander, Egyptian Sonnet">Egyptian Sonnet</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Egyptian Sonnet</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Mike Alexander, Egyptian Sonnet" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="EgyptianSonnet.html" title="Mike Alexander, Egyptian Sonnet">Egyptian Sonnet</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Mike Alexander</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Egyptian Sonnet&nbsp;';
					menustring += 'by <span class="menubyline"><i>Mike Alexander</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Mike Alexander" == "")	     // ed
		{
				if ("Mike Alexander, Monument Park" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="MonumentPark.html" title="Mike Alexander, Monument Park">Monument Park</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Monument Park</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Mike Alexander, Monument Park" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="MonumentPark.html" title="Mike Alexander, Monument Park">Monument Park</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Mike Alexander</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Monument Park&nbsp;';
					menustring += 'by <span class="menubyline"><i>Mike Alexander</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Jesse Anger" == "")	     // ed
		{
				if ("Jesse Anger, Still Life" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="StillLife.html" title="Jesse Anger, Still Life">Still Life</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Still Life</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Jesse Anger, Still Life" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="StillLife.html" title="Jesse Anger, Still Life">Still Life</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Jesse Anger</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Still Life&nbsp;';
					menustring += 'by <span class="menubyline"><i>Jesse Anger</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Catherine Chandler" == "")	     // ed
		{
				if ("Catherine Chandler, Upheavals" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Upheavals.html" title="Catherine Chandler, Upheavals">Upheavals</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Upheavals</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Catherine Chandler, Upheavals" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Upheavals.html" title="Catherine Chandler, Upheavals">Upheavals</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Catherine Chandler</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Upheavals&nbsp;';
					menustring += 'by <span class="menubyline"><i>Catherine Chandler</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Maria DiLorenzo" == "")	     // ed
		{
				if ("Maria DiLorenzo, An Old Bitter Aunt" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="AnOldBitterAunt.html" title="Maria DiLorenzo, An Old Bitter Aunt">An Old Bitter Aunt</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'An Old Bitter Aunt</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Maria DiLorenzo, An Old Bitter Aunt" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="AnOldBitterAunt.html" title="Maria DiLorenzo, An Old Bitter Aunt">An Old Bitter Aunt</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Maria DiLorenzo</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'An Old Bitter Aunt&nbsp;';
					menustring += 'by <span class="menubyline"><i>Maria DiLorenzo</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Ann Drysdale" == "")	     // ed
		{
				if ("Ann Drysdale, The Nit Pickers" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheNitpickers.html" title="Ann Drysdale, The Nit Pickers">The Nit Pickers</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Nit Pickers</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Ann Drysdale, The Nit Pickers" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheNitpickers.html" title="Ann Drysdale, The Nit Pickers">The Nit Pickers</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ann Drysdale</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Nit Pickers&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ann Drysdale</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Stephen Edgar" == "")	     // ed
		{
				if ("Stephen Edgar, Man in a Boat" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="ManinaBoat.html" title="Stephen Edgar, Man in a Boat">Man in a Boat</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Man in a Boat</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Stephen Edgar, Man in a Boat" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="ManinaBoat.html" title="Stephen Edgar, Man in a Boat">Man in a Boat</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Stephen Edgar</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Man in a Boat&nbsp;';
					menustring += 'by <span class="menubyline"><i>Stephen Edgar</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Richard Epstein" == "")	     // ed
		{
				if ("Richard Epstein, Greased Lightning" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="GreasedLightning.html" title="Richard Epstein, Greased Lightning">Greased Lightning</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Greased Lightning</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Richard Epstein, Greased Lightning" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="GreasedLightning.html" title="Richard Epstein, Greased Lightning">Greased Lightning</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Richard Epstein</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Greased Lightning&nbsp;';
					menustring += 'by <span class="menubyline"><i>Richard Epstein</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Anna M. Evans" == "")	     // ed
		{
				if ("Anna M. Evans, Ex-Country" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Ex-Country.html" title="Anna M. Evans, Ex-Country">Ex-Country</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Ex-Country</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Anna M. Evans, Ex-Country" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Ex-Country.html" title="Anna M. Evans, Ex-Country">Ex-Country</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Anna M. Evans</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Ex-Country&nbsp;';
					menustring += 'by <span class="menubyline"><i>Anna M. Evans</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Anna M. Evans" == "")	     // ed
		{
				if ("Anna M. Evans, Tasha" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Tasha.html" title="Anna M. Evans, Tasha">Tasha</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Tasha</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Anna M. Evans, Tasha" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Tasha.html" title="Anna M. Evans, Tasha">Tasha</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Anna M. Evans</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Tasha&nbsp;';
					menustring += 'by <span class="menubyline"><i>Anna M. Evans</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Andrew Frisardi" == "")	     // ed
		{
				if ("Andrew Frisardi, From Dante’s Vita nova" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Vitanova.html" title="Andrew Frisardi, From Dante’s Vita nova">From Dante’s <em>Vita nova</em></a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'From Dante’s <em>Vita nova</em></p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Andrew Frisardi, From Dante’s Vita nova" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Vitanova.html" title="Andrew Frisardi, From Dante’s Vita nova">From Dante’s <em>Vita nova</em></a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Andrew Frisardi</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'From Dante’s <em>Vita nova</em>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Andrew Frisardi</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Lesley Ingram" == "")	     // ed
		{
				if ("Lesley Ingram, Vexed" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Vexed.html" title="Lesley Ingram, Vexed">Vexed</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Vexed</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Lesley Ingram, Vexed" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Vexed.html" title="Lesley Ingram, Vexed">Vexed</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Lesley Ingram</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Vexed&nbsp;';
					menustring += 'by <span class="menubyline"><i>Lesley Ingram</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Janet Kenny" == "")	     // ed
		{
				if ("Janet Kenny, Challenge" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Challenge.html" title="Janet Kenny, Challenge">Challenge</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Challenge</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Janet Kenny, Challenge" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Challenge.html" title="Janet Kenny, Challenge">Challenge</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janet Kenny</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Challenge&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janet Kenny</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("T.S. Kerrigan" == "")	     // ed
		{
				if ("T.S. Kerrigan, La Bella&nbsp; Simonetta" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="LaBellaSimonetta.html" title="T.S. Kerrigan, La Bella&nbsp; Simonetta">La Bella&nbsp; Simonetta</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'La Bella&nbsp; Simonetta</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("T.S. Kerrigan, La Bella&nbsp; Simonetta" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="LaBellaSimonetta.html" title="T.S. Kerrigan, La Bella&nbsp; Simonetta">La Bella&nbsp; Simonetta</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>T.S. Kerrigan</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'La Bella&nbsp; Simonetta&nbsp;';
					menustring += 'by <span class="menubyline"><i>T.S. Kerrigan</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("T.S. Kerrigan" == "")	     // ed
		{
				if ("T.S. Kerrigan, An Old Rake’s Prayer On Easter In Ballina" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="OldRakesPrayer.html" title="T.S. Kerrigan, An Old Rake’s Prayer On Easter In Ballina">An Old Rake’s Prayer On Easter In Ballina</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'An Old Rake’s Prayer On Easter In Ballina</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("T.S. Kerrigan, An Old Rake’s Prayer On Easter In Ballina" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="OldRakesPrayer.html" title="T.S. Kerrigan, An Old Rake’s Prayer On Easter In Ballina">An Old Rake’s Prayer On Easter In Ballina</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>T.S. Kerrigan</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'An Old Rake’s Prayer On Easter In Ballina&nbsp;';
					menustring += 'by <span class="menubyline"><i>T.S. Kerrigan</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("T.S. Kerrigan" == "")	     // ed
		{
				if ("T.S. Kerrigan, A Rejoinder of Sorts in an Old Dispute" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="ARejoinderofSorts.html" title="T.S. Kerrigan, A Rejoinder of Sorts in an Old Dispute">A Rejoinder of Sorts in an Old Dispute</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'A Rejoinder of Sorts in an Old Dispute</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("T.S. Kerrigan, A Rejoinder of Sorts in an Old Dispute" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="ARejoinderofSorts.html" title="T.S. Kerrigan, A Rejoinder of Sorts in an Old Dispute">A Rejoinder of Sorts in an Old Dispute</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>T.S. Kerrigan</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'A Rejoinder of Sorts in an Old Dispute&nbsp;';
					menustring += 'by <span class="menubyline"><i>T.S. Kerrigan</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Robert Mezey" == "")	     // ed
		{
				if ("Robert Mezey, To a Believer in Two Moods" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="ToaBeliever.html" title="Robert Mezey, To a Believer in Two Moods">To a Believer in Two Moods</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'To a Believer in Two Moods</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Robert Mezey, To a Believer in Two Moods" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="ToaBeliever.html" title="Robert Mezey, To a Believer in Two Moods">To a Believer in Two Moods</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Robert Mezey</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'To a Believer in Two Moods&nbsp;';
					menustring += 'by <span class="menubyline"><i>Robert Mezey</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Timothy Murphy" == "")	     // ed
		{
				if ("Timothy Murphy, To Julien" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="ToJulien.html" title="Timothy Murphy, To Julien">To Julien</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'To Julien</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Timothy Murphy, To Julien" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="ToJulien.html" title="Timothy Murphy, To Julien">To Julien</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'To Julien&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Timothy Murphy" == "")	     // ed
		{
				if ("Timothy Murphy, Revolution" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Revolution.html" title="Timothy Murphy, Revolution">Revolution, ca. 1971</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Revolution, ca. 1971</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Timothy Murphy, Revolution" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Revolution.html" title="Timothy Murphy, Revolution">Revolution, ca. 1971</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Revolution, ca. 1971&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Timothy Murphy" == "")	     // ed
		{
				if ("Timothy Murphy, Robert Laliberte" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="RobertLaliberte.html" title="Timothy Murphy, Robert Laliberte">Robert Laliberte</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Robert Laliberte</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Timothy Murphy, Robert Laliberte" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="RobertLaliberte.html" title="Timothy Murphy, Robert Laliberte">Robert Laliberte</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Robert Laliberte&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Timothy Murphy" == "")	     // ed
		{
				if ("Timothy Murphy, The Dark Horse" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheDarkHorse.html" title="Timothy Murphy, The Dark Horse">The Dark Horse</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Dark Horse</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Timothy Murphy, The Dark Horse" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheDarkHorse.html" title="Timothy Murphy, The Dark Horse">The Dark Horse</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Dark Horse&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Rex Plomboste" == "")	     // ed
		{
				if ("Rex Plomboste, Strange Attractor" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="StrangeAttractor.html" title="Rex Plomboste, Strange Attractor">Strange Attractor</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Strange Attractor</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Rex Plomboste, Strange Attractor" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="StrangeAttractor.html" title="Rex Plomboste, Strange Attractor">Strange Attractor</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Rex Plomboste</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Strange Attractor&nbsp;';
					menustring += 'by <span class="menubyline"><i>Rex Plomboste</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Philip Quinlan" == "")	     // ed
		{
				if ("Philip Quinlan, On Revisiting St Mary’s, Prittlewell" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="OnRevisitingStMarys.html" title="Philip Quinlan, On Revisiting St Mary’s, Prittlewell">On Revisiting St Mary’s, Prittlewell</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'On Revisiting St Mary’s, Prittlewell</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Philip Quinlan, On Revisiting St Mary’s, Prittlewell" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="OnRevisitingStMarys.html" title="Philip Quinlan, On Revisiting St Mary’s, Prittlewell">On Revisiting St Mary’s, Prittlewell</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Philip Quinlan</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'On Revisiting St Mary’s, Prittlewell&nbsp;';
					menustring += 'by <span class="menubyline"><i>Philip Quinlan</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Marly Youmans" == "")	     // ed
		{
				if ("Marly Youmans, Fool’s Sacrifice" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="FoolsSacrifice.html" title="Marly Youmans, Fool’s Sacrifice">Fool’s Sacrifice</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Fool’s Sacrifice</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Marly Youmans, Fool’s Sacrifice" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="FoolsSacrifice.html" title="Marly Youmans, Fool’s Sacrifice">Fool’s Sacrifice</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Marly Youmans</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Fool’s Sacrifice&nbsp;';
					menustring += 'by <span class="menubyline"><i>Marly Youmans</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Pablo Estévez y Blanco" == "")	     // ed
		{
				if ("Pablo Estévez y Blanco, Siriusly" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Siriusly.html" title="Pablo Estévez y Blanco, Siriusly">Siriusly</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Siriusly</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Pablo Estévez y Blanco, Siriusly" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Siriusly.html" title="Pablo Estévez y Blanco, Siriusly">Siriusly</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Pablo Estévez y Blanco</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Siriusly&nbsp;';
					menustring += 'by <span class="menubyline"><i>Pablo Estévez y Blanco</i></span>';
					}
		   menustring += '</p>';
	   	}
//
	document.write(menustring);

}	

function makeMainMenu() //Only for "special" cover page with 2-column menu
{
mstring = '<table id="maintoc" width="99%" cellspacing="0" cellpadding="4" border="0"><tr><td width="50%" valign="top" style="padding-top: 8px;padding-bottom:8px">'; 

total=0; count=0;

//
total++;
//
total++;
//
total++;
//
total++;
//
total++;
//
total++;
//
total++;
//
total++;
//
total++;
//
total++;
//
total++;
//
total++;
//
total++;
//
total++;
//
total++;
//
total++;
//
total++;
//
total++;
//
total++;
//
total++;
//
total++;
//
total++;
//
total++;
//
total++;
//
total++;
//
total++;
//
total++;
//
total++;
//
colbreak=Math.ceil(total/2)+1; //alert('total is '+total +'; colbreak is ' + colbreak);

//
// 
mstring+='<h5 class="ed"><a href="Editorial.html" title="Wherein The Editor dilates upon Matters touching the current Broadsheet, or upon any Matters whatever, at his absolute Whim">Editorial</a></h5>'; 
count++;
//

    // 		 


//
//

    //  
		mstring+='<h5><a href="TheOnlyRoadThereIs.html" title="Ann Drysdale, The Only Road There Is"><em>Epigraph:</em> The Only Road There Is</a>&nbsp;<span class="menubyline">by <i>Ann Drysdale</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="BeingtheBadGuy.html" title="John Whitworth, Being the Bad Guy"><em>Epigraph:</em> Being the Bad Guy</a>&nbsp;<span class="menubyline">by <i>John Whitworth</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="EgyptianSonnet.html" title="Mike Alexander, Egyptian Sonnet">Egyptian Sonnet</a>&nbsp;<span class="menubyline">by <i>Mike Alexander</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="MonumentPark.html" title="Mike Alexander, Monument Park">Monument Park</a>&nbsp;<span class="menubyline">by <i>Mike Alexander</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="StillLife.html" title="Jesse Anger, Still Life">Still Life</a>&nbsp;<span class="menubyline">by <i>Jesse Anger</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Upheavals.html" title="Catherine Chandler, Upheavals">Upheavals</a>&nbsp;<span class="menubyline">by <i>Catherine Chandler</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="AnOldBitterAunt.html" title="Maria DiLorenzo, An Old Bitter Aunt">An Old Bitter Aunt</a>&nbsp;<span class="menubyline">by <i>Maria DiLorenzo</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="TheNitpickers.html" title="Ann Drysdale, The Nit Pickers">The Nit Pickers</a>&nbsp;<span class="menubyline">by <i>Ann Drysdale</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="ManinaBoat.html" title="Stephen Edgar, Man in a Boat">Man in a Boat</a>&nbsp;<span class="menubyline">by <i>Stephen Edgar</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="GreasedLightning.html" title="Richard Epstein, Greased Lightning">Greased Lightning</a>&nbsp;<span class="menubyline">by <i>Richard Epstein</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Ex-Country.html" title="Anna M. Evans, Ex-Country">Ex-Country</a>&nbsp;<span class="menubyline">by <i>Anna M. Evans</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Tasha.html" title="Anna M. Evans, Tasha">Tasha</a>&nbsp;<span class="menubyline">by <i>Anna M. Evans</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Vitanova.html" title="Andrew Frisardi, From Dante’s Vita nova">From Dante’s <em>Vita nova</em></a>&nbsp;<span class="menubyline">by <i>Andrew Frisardi</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Vexed.html" title="Lesley Ingram, Vexed">Vexed</a>&nbsp;<span class="menubyline">by <i>Lesley Ingram</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Challenge.html" title="Janet Kenny, Challenge">Challenge</a>&nbsp;<span class="menubyline">by <i>Janet Kenny</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="LaBellaSimonetta.html" title="T.S. Kerrigan, La Bella&nbsp; Simonetta">La Bella&nbsp; Simonetta</a>&nbsp;<span class="menubyline">by <i>T.S. Kerrigan</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="OldRakesPrayer.html" title="T.S. Kerrigan, An Old Rake’s Prayer On Easter In Ballina">An Old Rake’s Prayer On Easter In Ballina</a>&nbsp;<span class="menubyline">by <i>T.S. Kerrigan</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="ARejoinderofSorts.html" title="T.S. Kerrigan, A Rejoinder of Sorts in an Old Dispute">A Rejoinder of Sorts in an Old Dispute</a>&nbsp;<span class="menubyline">by <i>T.S. Kerrigan</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="ToaBeliever.html" title="Robert Mezey, To a Believer in Two Moods">To a Believer in Two Moods</a>&nbsp;<span class="menubyline">by <i>Robert Mezey</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="ToJulien.html" title="Timothy Murphy, To Julien">To Julien</a>&nbsp;<span class="menubyline">by <i>Timothy Murphy</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Revolution.html" title="Timothy Murphy, Revolution">Revolution, ca. 1971</a>&nbsp;<span class="menubyline">by <i>Timothy Murphy</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="RobertLaliberte.html" title="Timothy Murphy, Robert Laliberte">Robert Laliberte</a>&nbsp;<span class="menubyline">by <i>Timothy Murphy</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="TheDarkHorse.html" title="Timothy Murphy, The Dark Horse">The Dark Horse</a>&nbsp;<span class="menubyline">by <i>Timothy Murphy</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="StrangeAttractor.html" title="Rex Plomboste, Strange Attractor">Strange Attractor</a>&nbsp;<span class="menubyline">by <i>Rex Plomboste</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="OnRevisitingStMarys.html" title="Philip Quinlan, On Revisiting St Mary’s, Prittlewell">On Revisiting St Mary’s, Prittlewell</a>&nbsp;<span class="menubyline">by <i>Philip Quinlan</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="FoolsSacrifice.html" title="Marly Youmans, Fool’s Sacrifice">Fool’s Sacrifice</a>&nbsp;<span class="menubyline">by <i>Marly Youmans</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Siriusly.html" title="Pablo Estévez y Blanco, Siriusly">Siriusly</a>&nbsp;<span class="menubyline">by <i>Pablo Estévez y Blanco</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//

mstring+='</td></tr></table>';
//mstring+='</div>';

document.write(mstring);
//alert('mstring is ' +mstring);

} //End makeMainMenu function
