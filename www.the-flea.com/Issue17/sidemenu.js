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
  
	   if ("Gene Auprey" == "")	     // ed
		{
				if ("Gene Auprey, Always a Stranger" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="AlwaysaStranger.html" title="Gene Auprey, Always a Stranger">Always a Stranger</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Always a Stranger</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Gene Auprey, Always a Stranger" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="AlwaysaStranger.html" title="Gene Auprey, Always a Stranger">Always a Stranger</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Gene Auprey</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Always a Stranger&nbsp;';
					menustring += 'by <span class="menubyline"><i>Gene Auprey</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Michael Burch" == "")	     // ed
		{
				if ("Michael R. Burch, Love Has a Southern Flavor" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="SouthernFlavor.html" title="Michael R. Burch, Love Has a Southern Flavor">Love Has a Southern Flavor</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Love Has a Southern Flavor</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Michael R. Burch, Love Has a Southern Flavor" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="SouthernFlavor.html" title="Michael R. Burch, Love Has a Southern Flavor">Love Has a Southern Flavor</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Michael Burch</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Love Has a Southern Flavor&nbsp;';
					menustring += 'by <span class="menubyline"><i>Michael Burch</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Stephen Collington" == "")	     // ed
		{
				if ("Stephen Collington, Counting Greguerías Sheep" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="GreguariusSheep.html" title="Stephen Collington, Counting Greguerías Sheep">Counting Greguerías Sheep</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Counting Greguerías Sheep</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Stephen Collington, Counting Greguerías Sheep" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="GreguariusSheep.html" title="Stephen Collington, Counting Greguerías Sheep">Counting Greguerías Sheep</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Stephen Collington</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Counting Greguerías Sheep&nbsp;';
					menustring += 'by <span class="menubyline"><i>Stephen Collington</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("John Donne" == "")	     // ed
		{
				if ("John Donne, A Hymne to God the Father" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="HymntoGodtheFather.html" title="John Donne, A Hymne to God the Father">A Hymne to God the Father</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'A Hymne to God the Father</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("John Donne, A Hymne to God the Father" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="HymntoGodtheFather.html" title="John Donne, A Hymne to God the Father">A Hymne to God the Father</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>John Donne</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'A Hymne to God the Father&nbsp;';
					menustring += 'by <span class="menubyline"><i>John Donne</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Stephen Edgar" == "")	     // ed
		{
				if ("Stephen Edgar, Sight-Reading" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="SightReading.html" title="Stephen Edgar, Sight-Reading">Sight-Reading</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Sight-Reading</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Stephen Edgar, Sight-Reading" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="SightReading.html" title="Stephen Edgar, Sight-Reading">Sight-Reading</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Stephen Edgar</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Sight-Reading&nbsp;';
					menustring += 'by <span class="menubyline"><i>Stephen Edgar</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Martin Elster" == "")	     // ed
		{
				if ("Martin Elster, Leatherback" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Leatherback.html" title="Martin Elster, Leatherback">Leatherback</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Leatherback</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Martin Elster, Leatherback" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Leatherback.html" title="Martin Elster, Leatherback">Leatherback</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Martin Elster</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Leatherback&nbsp;';
					menustring += 'by <span class="menubyline"><i>Martin Elster</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Angela France" == "")	     // ed
		{
				if ("Angela France, Saving the World" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="SavingtheWorld.html" title="Angela France, Saving the World">Saving the World</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Saving the World</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Angela France, Saving the World" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="SavingtheWorld.html" title="Angela France, Saving the World">Saving the World</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Angela France</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Saving the World&nbsp;';
					menustring += 'by <span class="menubyline"><i>Angela France</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Tracey Gratch" == "")	     // ed
		{
				if ("Tracey Gratch, A Sort of Homecoming" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Homecoming.html" title="Tracey Gratch, A Sort of Homecoming">A Sort of Homecoming</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'A Sort of Homecoming</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Tracey Gratch, A Sort of Homecoming" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Homecoming.html" title="Tracey Gratch, A Sort of Homecoming">A Sort of Homecoming</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Tracey Gratch</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'A Sort of Homecoming&nbsp;';
					menustring += 'by <span class="menubyline"><i>Tracey Gratch</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("R. Nemo Hill" == "")	     // ed
		{
				if ("R. Nemo Hill, The Banyan Tree and the Bathers" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheBanyanTree.html" title="R. Nemo Hill, The Banyan Tree and the Bathers">The Banyan Tree And The Bathers</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Banyan Tree And The Bathers</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("R. Nemo Hill, The Banyan Tree and the Bathers" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheBanyanTree.html" title="R. Nemo Hill, The Banyan Tree and the Bathers">The Banyan Tree And The Bathers</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>R. Nemo Hill</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Banyan Tree And The Bathers&nbsp;';
					menustring += 'by <span class="menubyline"><i>R. Nemo Hill</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Juleigh Howard-Hobson" == "")	     // ed
		{
				if ("Juleigh Howard-Hobson, Apostrophe to Death" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="ApostrophetoDeath.html" title="Juleigh Howard-Hobson, Apostrophe to Death">Apostrophe to Death</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Apostrophe to Death</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Juleigh Howard-Hobson, Apostrophe to Death" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="ApostrophetoDeath.html" title="Juleigh Howard-Hobson, Apostrophe to Death">Apostrophe to Death</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Juleigh Howard-Hobson</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Apostrophe to Death&nbsp;';
					menustring += 'by <span class="menubyline"><i>Juleigh Howard-Hobson</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Janet Kenny" == "")	     // ed
		{
				if ("Janet Kenny, Powerless" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Powerless.html" title="Janet Kenny, Powerless">Powerless</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Powerless</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Janet Kenny, Powerless" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Powerless.html" title="Janet Kenny, Powerless">Powerless</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janet Kenny</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Powerless&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janet Kenny</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Jean L. Kreiling" == "")	     // ed
		{
				if ("Jean L. Kreiling, Perchance to Run" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="PerchancetoRun.html" title="Jean L. Kreiling, Perchance to Run">Perchance to Run</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Perchance to Run</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Jean L. Kreiling, Perchance to Run" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="PerchancetoRun.html" title="Jean L. Kreiling, Perchance to Run">Perchance to Run</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Jean L. Kreiling</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Perchance to Run&nbsp;';
					menustring += 'by <span class="menubyline"><i>Jean L. Kreiling</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Ralph La Rosa" == "")	     // ed
		{
				if ("Ralph La Rosa, Communicants" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Communicants.html" title="Ralph La Rosa, Communicants">Communicants</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Communicants</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Ralph La Rosa, Communicants" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Communicants.html" title="Ralph La Rosa, Communicants">Communicants</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ralph La Rosa</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Communicants&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ralph La Rosa</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("David W. Landrum" == "")	     // ed
		{
				if ("David W. Landrum, Athens" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Athens.html" title="David W. Landrum, Athens">Athens</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Athens</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("David W. Landrum, Athens" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Athens.html" title="David W. Landrum, Athens">Athens</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>David W. Landrum</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Athens&nbsp;';
					menustring += 'by <span class="menubyline"><i>David W. Landrum</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Tim Love" == "")	     // ed
		{
				if ("Tim Love, Lost Letters" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="LostLetters.html" title="Tim Love, Lost Letters">Lost Letters</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Lost Letters</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Tim Love, Lost Letters" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="LostLetters.html" title="Tim Love, Lost Letters">Lost Letters</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Tim Love</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Lost Letters&nbsp;';
					menustring += 'by <span class="menubyline"><i>Tim Love</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Damon Moore" == "")	     // ed
		{
				if ("Damon Moore, Three Songs from the South Bank" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="ThreeSongs.html" title="Damon Moore, Three Songs from the South Bank">Three Songs from the South Bank</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Three Songs from the South Bank</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Damon Moore, Three Songs from the South Bank" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="ThreeSongs.html" title="Damon Moore, Three Songs from the South Bank">Three Songs from the South Bank</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Damon Moore</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Three Songs from the South Bank&nbsp;';
					menustring += 'by <span class="menubyline"><i>Damon Moore</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Eric Norris" == "")	     // ed
		{
				if ("Eric Norris, The Furnace" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheFurnace.html" title="Eric Norris, The Furnace">The Furnace</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Furnace</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Eric Norris, The Furnace" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheFurnace.html" title="Eric Norris, The Furnace">The Furnace</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Eric Norris</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Furnace&nbsp;';
					menustring += 'by <span class="menubyline"><i>Eric Norris</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Geoff Page" == "")	     // ed
		{
				if ("Geoff Page, Vellum" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Vellum.html" title="Geoff Page, Vellum">Vellum</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Vellum</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Geoff Page, Vellum" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Vellum.html" title="Geoff Page, Vellum">Vellum</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Geoff Page</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Vellum&nbsp;';
					menustring += 'by <span class="menubyline"><i>Geoff Page</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Stephen S. Power" == "")	     // ed
		{
				if ("Stephen S. Power, The Glassblower" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheGlassblower.html" title="Stephen S. Power, The Glassblower">The Glassblower</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Glassblower</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Stephen S. Power, The Glassblower" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheGlassblower.html" title="Stephen S. Power, The Glassblower">The Glassblower</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Stephen S. Power</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Glassblower&nbsp;';
					menustring += 'by <span class="menubyline"><i>Stephen S. Power</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Philip Quinlan" == "")	     // ed
		{
				if ("Philip Quinlan, Learning to Paint Clouds" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="LearningtoPaintClouds.html" title="Philip Quinlan, Learning to Paint Clouds">Learning to Paint Clouds</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Learning to Paint Clouds</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Philip Quinlan, Learning to Paint Clouds" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="LearningtoPaintClouds.html" title="Philip Quinlan, Learning to Paint Clouds">Learning to Paint Clouds</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Philip Quinlan</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Learning to Paint Clouds&nbsp;';
					menustring += 'by <span class="menubyline"><i>Philip Quinlan</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Philip Quinlan" == "")	     // ed
		{
				if ("Philip Quinlan, I, Hokusai, Reply" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="IHokusaiReply.html" title="Philip Quinlan, I, Hokusai, Reply">I, Hokusai, Reply</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'I, Hokusai, Reply</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Philip Quinlan, I, Hokusai, Reply" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="IHokusaiReply.html" title="Philip Quinlan, I, Hokusai, Reply">I, Hokusai, Reply</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Philip Quinlan</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'I, Hokusai, Reply&nbsp;';
					menustring += 'by <span class="menubyline"><i>Philip Quinlan</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Marybeth Rua-Larsen" == "")	     // ed
		{
				if ("Marybeth Rua-Larsen, Bearded" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Bearded.html" title="Marybeth Rua-Larsen, Bearded">Bearded</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Bearded</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Marybeth Rua-Larsen, Bearded" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Bearded.html" title="Marybeth Rua-Larsen, Bearded">Bearded</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Marybeth Rua-Larsen</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Bearded&nbsp;';
					menustring += 'by <span class="menubyline"><i>Marybeth Rua-Larsen</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Elsa Louise von Schreiber" == "")	     // ed
		{
				if ("Elsa Louise von Schreiber, Three Wishes" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="ThreeWishes.html" title="Elsa Louise von Schreiber, Three Wishes">Three Wishes</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Three Wishes</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Elsa Louise von Schreiber, Three Wishes" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="ThreeWishes.html" title="Elsa Louise von Schreiber, Three Wishes">Three Wishes</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Elsa Louise von Schreiber</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Three Wishes&nbsp;';
					menustring += 'by <span class="menubyline"><i>Elsa Louise von Schreiber</i></span>';
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
		mstring+='<h5><a href="AlwaysaStranger.html" title="Gene Auprey, Always a Stranger">Always a Stranger</a>&nbsp;<span class="menubyline">by <i>Gene Auprey</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="SouthernFlavor.html" title="Michael R. Burch, Love Has a Southern Flavor">Love Has a Southern Flavor</a>&nbsp;<span class="menubyline">by <i>Michael Burch</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="GreguariusSheep.html" title="Stephen Collington, Counting Greguerías Sheep">Counting Greguerías Sheep</a>&nbsp;<span class="menubyline">by <i>Stephen Collington</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="HymntoGodtheFather.html" title="John Donne, A Hymne to God the Father">A Hymne to God the Father</a>&nbsp;<span class="menubyline">by <i>John Donne</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="SightReading.html" title="Stephen Edgar, Sight-Reading">Sight-Reading</a>&nbsp;<span class="menubyline">by <i>Stephen Edgar</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Leatherback.html" title="Martin Elster, Leatherback">Leatherback</a>&nbsp;<span class="menubyline">by <i>Martin Elster</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="SavingtheWorld.html" title="Angela France, Saving the World">Saving the World</a>&nbsp;<span class="menubyline">by <i>Angela France</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Homecoming.html" title="Tracey Gratch, A Sort of Homecoming">A Sort of Homecoming</a>&nbsp;<span class="menubyline">by <i>Tracey Gratch</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="TheBanyanTree.html" title="R. Nemo Hill, The Banyan Tree and the Bathers">The Banyan Tree And The Bathers</a>&nbsp;<span class="menubyline">by <i>R. Nemo Hill</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="ApostrophetoDeath.html" title="Juleigh Howard-Hobson, Apostrophe to Death">Apostrophe to Death</a>&nbsp;<span class="menubyline">by <i>Juleigh Howard-Hobson</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Powerless.html" title="Janet Kenny, Powerless">Powerless</a>&nbsp;<span class="menubyline">by <i>Janet Kenny</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="PerchancetoRun.html" title="Jean L. Kreiling, Perchance to Run">Perchance to Run</a>&nbsp;<span class="menubyline">by <i>Jean L. Kreiling</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Communicants.html" title="Ralph La Rosa, Communicants">Communicants</a>&nbsp;<span class="menubyline">by <i>Ralph La Rosa</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Athens.html" title="David W. Landrum, Athens">Athens</a>&nbsp;<span class="menubyline">by <i>David W. Landrum</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="LostLetters.html" title="Tim Love, Lost Letters">Lost Letters</a>&nbsp;<span class="menubyline">by <i>Tim Love</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="ThreeSongs.html" title="Damon Moore, Three Songs from the South Bank">Three Songs from the South Bank</a>&nbsp;<span class="menubyline">by <i>Damon Moore</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="TheFurnace.html" title="Eric Norris, The Furnace">The Furnace</a>&nbsp;<span class="menubyline">by <i>Eric Norris</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Vellum.html" title="Geoff Page, Vellum">Vellum</a>&nbsp;<span class="menubyline">by <i>Geoff Page</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="TheGlassblower.html" title="Stephen S. Power, The Glassblower">The Glassblower</a>&nbsp;<span class="menubyline">by <i>Stephen S. Power</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="LearningtoPaintClouds.html" title="Philip Quinlan, Learning to Paint Clouds">Learning to Paint Clouds</a>&nbsp;<span class="menubyline">by <i>Philip Quinlan</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="IHokusaiReply.html" title="Philip Quinlan, I, Hokusai, Reply">I, Hokusai, Reply</a>&nbsp;<span class="menubyline">by <i>Philip Quinlan</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Bearded.html" title="Marybeth Rua-Larsen, Bearded">Bearded</a>&nbsp;<span class="menubyline">by <i>Marybeth Rua-Larsen</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="ThreeWishes.html" title="Elsa Louise von Schreiber, Three Wishes">Three Wishes</a>&nbsp;<span class="menubyline">by <i>Elsa Louise von Schreiber</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//

mstring+='</td></tr></table>';
//mstring+='</div>';

document.write(mstring);
//alert('mstring is ' +mstring);

} //End makeMainMenu function
