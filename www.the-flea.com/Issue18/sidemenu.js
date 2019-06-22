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
  
	   if ("C.B. Anderson" == "")	     // ed
		{
				if ("C.B. Anderson, Technology Dawning" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TechnologyDawning.html" title="C.B. Anderson, Technology Dawning">Technology Dawning</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Technology Dawning</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("C.B. Anderson, Technology Dawning" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TechnologyDawning.html" title="C.B. Anderson, Technology Dawning">Technology Dawning</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>C.B. Anderson</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Technology Dawning&nbsp;';
					menustring += 'by <span class="menubyline"><i>C.B. Anderson</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Carol Berg" == "")	     // ed
		{
				if ("Carol Berg, Mephistopheles Takes His Daughter to Sunday School" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="MephistophelesTakesHisDau.html" title="Carol Berg, Mephistopheles Takes His Daughter to Sunday School">Mephistopheles Takes His Daughter to Sunday School</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Mephistopheles Takes His Daughter to Sunday School</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Carol Berg, Mephistopheles Takes His Daughter to Sunday School" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="MephistophelesTakesHisDau.html" title="Carol Berg, Mephistopheles Takes His Daughter to Sunday School">Mephistopheles Takes His Daughter to Sunday School</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Carol Berg</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Mephistopheles Takes His Daughter to Sunday School&nbsp;';
					menustring += 'by <span class="menubyline"><i>Carol Berg</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Alison Brackenbury" == "")	     // ed
		{
				if ("Alison Brackenbury, Late July" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="LateJuly.html" title="Alison Brackenbury, Late July">Late July</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Late July</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Alison Brackenbury, Late July" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="LateJuly.html" title="Alison Brackenbury, Late July">Late July</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Alison Brackenbury</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Late July&nbsp;';
					menustring += 'by <span class="menubyline"><i>Alison Brackenbury</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Michael Cantor" == "")	     // ed
		{
				if ("Michael Cantor, The Man Who Painted Women" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheManWhoPaintedWomen.html" title="Michael Cantor, The Man Who Painted Women">The Man Who Painted Women</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Man Who Painted Women</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Michael Cantor, The Man Who Painted Women" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheManWhoPaintedWomen.html" title="Michael Cantor, The Man Who Painted Women">The Man Who Painted Women</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Michael Cantor</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Man Who Painted Women&nbsp;';
					menustring += 'by <span class="menubyline"><i>Michael Cantor</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Catherine Chandler" == "")	     // ed
		{
				if ("Catherine Chandler, Chasubles" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Chasubles.html" title="Catherine Chandler, Chasubles">Chasubles</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Chasubles</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Catherine Chandler, Chasubles" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Chasubles.html" title="Catherine Chandler, Chasubles">Chasubles</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Catherine Chandler</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Chasubles&nbsp;';
					menustring += 'by <span class="menubyline"><i>Catherine Chandler</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Stephen Collington" == "")	     // ed
		{
				if ("Stephen Collington, So Much For You" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="SoMuchForYou.html" title="Stephen Collington, So Much For You">So Much For You</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'So Much For You</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Stephen Collington, So Much For You" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="SoMuchForYou.html" title="Stephen Collington, So Much For You">So Much For You</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Stephen Collington</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'So Much For You&nbsp;';
					menustring += 'by <span class="menubyline"><i>Stephen Collington</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Barbara Lydecker Crane" == "")	     // ed
		{
				if ("Barbara Lydecker Crane, The Undiscovered Ire Lets It Fly" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheUndiscoveredIre.html" title="Barbara Lydecker Crane, The Undiscovered Ire Lets It Fly">The Undiscovered Ire Lets It Fly</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Undiscovered Ire Lets It Fly</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Barbara Lydecker Crane, The Undiscovered Ire Lets It Fly" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheUndiscoveredIre.html" title="Barbara Lydecker Crane, The Undiscovered Ire Lets It Fly">The Undiscovered Ire Lets It Fly</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Barbara Lydecker Crane</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Undiscovered Ire Lets It Fly&nbsp;';
					menustring += 'by <span class="menubyline"><i>Barbara Lydecker Crane</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Kevin Cutrer" == "")	     // ed
		{
				if ("Kevin Cutrer, Current Events" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="CurrentEvents.html" title="Kevin Cutrer, Current Events">Current Events</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Current Events</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Kevin Cutrer, Current Events" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="CurrentEvents.html" title="Kevin Cutrer, Current Events">Current Events</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Kevin Cutrer</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Current Events&nbsp;';
					menustring += 'by <span class="menubyline"><i>Kevin Cutrer</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Martin Elster" == "")	     // ed
		{
				if ("Martin Elster, A Summer Songster" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="ASummerSongster.html" title="Martin Elster, A Summer Songster">A Summer Songster</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'A Summer Songster</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Martin Elster, A Summer Songster" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="ASummerSongster.html" title="Martin Elster, A Summer Songster">A Summer Songster</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Martin Elster</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'A Summer Songster&nbsp;';
					menustring += 'by <span class="menubyline"><i>Martin Elster</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Nausheen Eusuf" == "")	     // ed
		{
				if ("Nausheen Eusuf, Valediction" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Valediction.html" title="Nausheen Eusuf, Valediction">Valediction</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Valediction</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Nausheen Eusuf, Valediction" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Valediction.html" title="Nausheen Eusuf, Valediction">Valediction</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Nausheen Eusuf</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Valediction&nbsp;';
					menustring += 'by <span class="menubyline"><i>Nausheen Eusuf</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Anna Evans" == "")	     // ed
		{
				if ("Anna Evans, The Hen and the Peacock" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheHenandThePeacock.html" title="Anna Evans, The Hen and the Peacock">The Hen and the Peacock</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Hen and the Peacock</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Anna Evans, The Hen and the Peacock" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheHenandThePeacock.html" title="Anna Evans, The Hen and the Peacock">The Hen and the Peacock</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Anna Evans</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Hen and the Peacock&nbsp;';
					menustring += 'by <span class="menubyline"><i>Anna Evans</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Angela France" == "")	     // ed
		{
				if ("Angela France, Being Bertalda" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="BeingBertalda.html" title="Angela France, Being Bertalda">Being Bertalda</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Being Bertalda</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Angela France, Being Bertalda" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="BeingBertalda.html" title="Angela France, Being Bertalda">Being Bertalda</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Angela France</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Being Bertalda&nbsp;';
					menustring += 'by <span class="menubyline"><i>Angela France</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Janet Kenny" == "")	     // ed
		{
				if ("Janet Kenny, Along the Darkening Shore" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="AlongtheDarkeningShore.html" title="Janet Kenny, Along the Darkening Shore">Along the Darkening Shore</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Along the Darkening Shore</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Janet Kenny, Along the Darkening Shore" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="AlongtheDarkeningShore.html" title="Janet Kenny, Along the Darkening Shore">Along the Darkening Shore</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janet Kenny</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Along the Darkening Shore&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janet Kenny</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("T.S. Kerrigan" == "")	     // ed
		{
				if ("T.S. Kerrigan, Et In Arcadia Ego" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="EtInArcadiaEgo.html" title="T.S. Kerrigan, Et In Arcadia Ego">Et In Arcadia Ego</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Et In Arcadia Ego</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("T.S. Kerrigan, Et In Arcadia Ego" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="EtInArcadiaEgo.html" title="T.S. Kerrigan, Et In Arcadia Ego">Et In Arcadia Ego</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>T.S. Kerrigan</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Et In Arcadia Ego&nbsp;';
					menustring += 'by <span class="menubyline"><i>T.S. Kerrigan</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("David W. Landrum" == "")	     // ed
		{
				if ("David W. Landrum, Dereliction" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Dereliction.html" title="David W. Landrum, Dereliction">Dereliction</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Dereliction</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("David W. Landrum, Dereliction" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Dereliction.html" title="David W. Landrum, Dereliction">Dereliction</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>David W. Landrum</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Dereliction&nbsp;';
					menustring += 'by <span class="menubyline"><i>David W. Landrum</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Ralph La Rosa" == "")	     // ed
		{
				if ("Ralph La Rosa, Combustions" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Combustions.html" title="Ralph La Rosa, Combustions">Combustions</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Combustions</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Ralph La Rosa, Combustions" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Combustions.html" title="Ralph La Rosa, Combustions">Combustions</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ralph La Rosa</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Combustions&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ralph La Rosa</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Stephen Mangan" == "")	     // ed
		{
				if ("Stephen Mangan, A Railway Stitch" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="ARailwayStitch.html" title="Stephen Mangan, A Railway Stitch">A Railway Stitch</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'A Railway Stitch</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Stephen Mangan, A Railway Stitch" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="ARailwayStitch.html" title="Stephen Mangan, A Railway Stitch">A Railway Stitch</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Stephen Mangan</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'A Railway Stitch&nbsp;';
					menustring += 'by <span class="menubyline"><i>Stephen Mangan</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Geoff Page" == "")	     // ed
		{
				if ("Geoff Page, Turners of Pages" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TurnersofPages.html" title="Geoff Page, Turners of Pages">Turners of Pages</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Turners of Pages</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Geoff Page, Turners of Pages" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TurnersofPages.html" title="Geoff Page, Turners of Pages">Turners of Pages</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Geoff Page</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Turners of Pages&nbsp;';
					menustring += 'by <span class="menubyline"><i>Geoff Page</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Ed Shacklee" == "")	     // ed
		{
				if ("Ed Shacklee, The Four Horsemen" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheFourHorsemen.html" title="Ed Shacklee, The Four Horsemen">The Four Horsemen</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Four Horsemen</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Ed Shacklee, The Four Horsemen" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheFourHorsemen.html" title="Ed Shacklee, The Four Horsemen">The Four Horsemen</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ed Shacklee</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Four Horsemen&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ed Shacklee</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("J.J. Steinfeld" == "")	     // ed
		{
				if ("J.J. Steinfeld, In Erudition and Befuddlement" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="InEruditionandBefuddlemen.html" title="J.J. Steinfeld, In Erudition and Befuddlement">In Erudition and Befuddlement</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'In Erudition and Befuddlement</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("J.J. Steinfeld, In Erudition and Befuddlement" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="InEruditionandBefuddlemen.html" title="J.J. Steinfeld, In Erudition and Befuddlement">In Erudition and Befuddlement</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>J.J. Steinfeld</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'In Erudition and Befuddlement&nbsp;';
					menustring += 'by <span class="menubyline"><i>J.J. Steinfeld</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Thomas Zimmerman" == "")	     // ed
		{
				if ("Thomas Zimmerman, Winter Light" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="WinterLight.html" title="Thomas Zimmerman, Winter Light">Winter Light</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Winter Light</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Thomas Zimmerman, Winter Light" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="WinterLight.html" title="Thomas Zimmerman, Winter Light">Winter Light</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Thomas Zimmerman</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Winter Light&nbsp;';
					menustring += 'by <span class="menubyline"><i>Thomas Zimmerman</i></span>';
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
		mstring+='<h5><a href="TechnologyDawning.html" title="C.B. Anderson, Technology Dawning">Technology Dawning</a>&nbsp;<span class="menubyline">by <i>C.B. Anderson</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="MephistophelesTakesHisDau.html" title="Carol Berg, Mephistopheles Takes His Daughter to Sunday School">Mephistopheles Takes His Daughter to Sunday School</a>&nbsp;<span class="menubyline">by <i>Carol Berg</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="LateJuly.html" title="Alison Brackenbury, Late July">Late July</a>&nbsp;<span class="menubyline">by <i>Alison Brackenbury</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="TheManWhoPaintedWomen.html" title="Michael Cantor, The Man Who Painted Women">The Man Who Painted Women</a>&nbsp;<span class="menubyline">by <i>Michael Cantor</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Chasubles.html" title="Catherine Chandler, Chasubles">Chasubles</a>&nbsp;<span class="menubyline">by <i>Catherine Chandler</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="SoMuchForYou.html" title="Stephen Collington, So Much For You">So Much For You</a>&nbsp;<span class="menubyline">by <i>Stephen Collington</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="TheUndiscoveredIre.html" title="Barbara Lydecker Crane, The Undiscovered Ire Lets It Fly">The Undiscovered Ire Lets It Fly</a>&nbsp;<span class="menubyline">by <i>Barbara Lydecker Crane</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="CurrentEvents.html" title="Kevin Cutrer, Current Events">Current Events</a>&nbsp;<span class="menubyline">by <i>Kevin Cutrer</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="ASummerSongster.html" title="Martin Elster, A Summer Songster">A Summer Songster</a>&nbsp;<span class="menubyline">by <i>Martin Elster</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Valediction.html" title="Nausheen Eusuf, Valediction">Valediction</a>&nbsp;<span class="menubyline">by <i>Nausheen Eusuf</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="TheHenandThePeacock.html" title="Anna Evans, The Hen and the Peacock">The Hen and the Peacock</a>&nbsp;<span class="menubyline">by <i>Anna Evans</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="BeingBertalda.html" title="Angela France, Being Bertalda">Being Bertalda</a>&nbsp;<span class="menubyline">by <i>Angela France</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="AlongtheDarkeningShore.html" title="Janet Kenny, Along the Darkening Shore">Along the Darkening Shore</a>&nbsp;<span class="menubyline">by <i>Janet Kenny</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="EtInArcadiaEgo.html" title="T.S. Kerrigan, Et In Arcadia Ego">Et In Arcadia Ego</a>&nbsp;<span class="menubyline">by <i>T.S. Kerrigan</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Dereliction.html" title="David W. Landrum, Dereliction">Dereliction</a>&nbsp;<span class="menubyline">by <i>David W. Landrum</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Combustions.html" title="Ralph La Rosa, Combustions">Combustions</a>&nbsp;<span class="menubyline">by <i>Ralph La Rosa</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="ARailwayStitch.html" title="Stephen Mangan, A Railway Stitch">A Railway Stitch</a>&nbsp;<span class="menubyline">by <i>Stephen Mangan</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="TurnersofPages.html" title="Geoff Page, Turners of Pages">Turners of Pages</a>&nbsp;<span class="menubyline">by <i>Geoff Page</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="TheFourHorsemen.html" title="Ed Shacklee, The Four Horsemen">The Four Horsemen</a>&nbsp;<span class="menubyline">by <i>Ed Shacklee</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="InEruditionandBefuddlemen.html" title="J.J. Steinfeld, In Erudition and Befuddlement">In Erudition and Befuddlement</a>&nbsp;<span class="menubyline">by <i>J.J. Steinfeld</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="WinterLight.html" title="Thomas Zimmerman, Winter Light">Winter Light</a>&nbsp;<span class="menubyline">by <i>Thomas Zimmerman</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//

mstring+='</td></tr></table>';
//mstring+='</div>';

document.write(mstring);
//alert('mstring is ' +mstring);

} //End makeMainMenu function
