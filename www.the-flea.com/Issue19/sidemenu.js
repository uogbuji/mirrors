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
  
	   if ("Christopher Barnes" == "")	     // ed
		{
				if ("Christopher Barnes, Panto" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Panto.html" title="Christopher Barnes, Panto">Panto</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Panto</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Christopher Barnes, Panto" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Panto.html" title="Christopher Barnes, Panto">Panto</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Christopher Barnes</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Panto&nbsp;';
					menustring += 'by <span class="menubyline"><i>Christopher Barnes</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Mark Blaeuer" == "")	     // ed
		{
				if ("Mark Blaeuer, The Peasant Skims His Glossy Catalogue" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="ThePeasantSkims.html" title="Mark Blaeuer, The Peasant Skims His Glossy Catalogue">The Peasant Skims His Glossy Catalogue</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Peasant Skims His Glossy Catalogue</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Mark Blaeuer, The Peasant Skims His Glossy Catalogue" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="ThePeasantSkims.html" title="Mark Blaeuer, The Peasant Skims His Glossy Catalogue">The Peasant Skims His Glossy Catalogue</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Mark Blaeuer</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Peasant Skims His Glossy Catalogue&nbsp;';
					menustring += 'by <span class="menubyline"><i>Mark Blaeuer</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Kim Bridgford" == "")	     // ed
		{
				if ("Kim Bridgford, Ace in the Hole" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="AceintheHole.html" title="Kim Bridgford, Ace in the Hole">Ace in the Hole</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Ace in the Hole</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Kim Bridgford, Ace in the Hole" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="AceintheHole.html" title="Kim Bridgford, Ace in the Hole">Ace in the Hole</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Kim Bridgford</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Ace in the Hole&nbsp;';
					menustring += 'by <span class="menubyline"><i>Kim Bridgford</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Anne Bryant-Hamon" == "")	     // ed
		{
				if ("Anne Bryant-Hamon, Aubade" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Aubade.html" title="Anne Bryant-Hamon, Aubade">Aubade</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Aubade</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Anne Bryant-Hamon, Aubade" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Aubade.html" title="Anne Bryant-Hamon, Aubade">Aubade</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Anne Bryant-Hamon</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Aubade&nbsp;';
					menustring += 'by <span class="menubyline"><i>Anne Bryant-Hamon</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Michael R. Burch" == "")	     // ed
		{
				if ("Michael R. Burch, War is Obsolete" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="WarisObsolete.html" title="Michael R. Burch, War is Obsolete">War is Obsolete</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'War is Obsolete</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Michael R. Burch, War is Obsolete" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="WarisObsolete.html" title="Michael R. Burch, War is Obsolete">War is Obsolete</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Michael R. Burch</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'War is Obsolete&nbsp;';
					menustring += 'by <span class="menubyline"><i>Michael R. Burch</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("C.E. Chaffin" == "")	     // ed
		{
				if ("C.E. Chaffin, Flowers of Heraclitus" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="FlowersofHeraclitus.html" title="C.E. Chaffin, Flowers of Heraclitus">Flowers of Heraclitus</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Flowers of Heraclitus</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("C.E. Chaffin, Flowers of Heraclitus" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="FlowersofHeraclitus.html" title="C.E. Chaffin, Flowers of Heraclitus">Flowers of Heraclitus</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>C.E. Chaffin</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Flowers of Heraclitus&nbsp;';
					menustring += 'by <span class="menubyline"><i>C.E. Chaffin</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Wesli Court" == "")	     // ed
		{
				if ("Wesli Court, From <em>Uncle Wesli’s Epitaphs for the Poets</em>" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Epitaphs.html" title="Wesli Court, From <em>Uncle Wesli’s Epitaphs for the Poets</em>">From <em>Uncle Wesli’s Epitaphs for the Poets</em></a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'From <em>Uncle Wesli’s Epitaphs for the Poets</em></p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Wesli Court, From <em>Uncle Wesli’s Epitaphs for the Poets</em>" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Epitaphs.html" title="Wesli Court, From <em>Uncle Wesli’s Epitaphs for the Poets</em>">From <em>Uncle Wesli’s Epitaphs for the Poets</em></a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Wesli Court</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'From <em>Uncle Wesli’s Epitaphs for the Poets</em>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Wesli Court</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Ann Drysdale" == "")	     // ed
		{
				if ("Ann Drysdale, Slutfest!" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Slutfest.html" title="Ann Drysdale, Slutfest!">Slutfest!</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Slutfest!</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Ann Drysdale, Slutfest!" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Slutfest.html" title="Ann Drysdale, Slutfest!">Slutfest!</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ann Drysdale</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Slutfest!&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ann Drysdale</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Stephen Edgar" == "")	     // ed
		{
				if ("Stephen Edgar, Worl(l)d" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Word.html" title="Stephen Edgar, Worl(l)d">Wor(l)d</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Wor(l)d</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Stephen Edgar, Worl(l)d" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Word.html" title="Stephen Edgar, Worl(l)d">Wor(l)d</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Stephen Edgar</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Wor(l)d&nbsp;';
					menustring += 'by <span class="menubyline"><i>Stephen Edgar</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Will Kemp" == "")	     // ed
		{
				if ("Will Kemp, The Fat Lady Sings" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheFatLadySings.html" title="Will Kemp, The Fat Lady Sings">The Fat Lady Sings</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Fat Lady Sings</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Will Kemp, The Fat Lady Sings" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheFatLadySings.html" title="Will Kemp, The Fat Lady Sings">The Fat Lady Sings</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Will Kemp</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Fat Lady Sings&nbsp;';
					menustring += 'by <span class="menubyline"><i>Will Kemp</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Quincy R. Lehr" == "")	     // ed
		{
				if ("Quincy R. Lehr, ‘Empire’, from <em>Heimat</em>" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Empire.html" title="Quincy R. Lehr, ‘Empire’, from <em>Heimat</em>">‘Empire’, from <em>Heimat</em></a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += '‘Empire’, from <em>Heimat</em></p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Quincy R. Lehr, ‘Empire’, from <em>Heimat</em>" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Empire.html" title="Quincy R. Lehr, ‘Empire’, from <em>Heimat</em>">‘Empire’, from <em>Heimat</em></a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Quincy R. Lehr</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += '‘Empire’, from <em>Heimat</em>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Quincy R. Lehr</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Dennis Loney" == "")	     // ed
		{
				if ("Dennis Loney, The Stations (for Ordinary Time)" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheStations.html" title="Dennis Loney, The Stations (for Ordinary Time)">The Stations (for Ordinary Time)</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Stations (for Ordinary Time)</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Dennis Loney, The Stations (for Ordinary Time)" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheStations.html" title="Dennis Loney, The Stations (for Ordinary Time)">The Stations (for Ordinary Time)</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Dennis Loney</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Stations (for Ordinary Time)&nbsp;';
					menustring += 'by <span class="menubyline"><i>Dennis Loney</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Richard Meyer" == "")	     // ed
		{
				if ("Richard Meyer, Swagman" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Swagman.html" title="Richard Meyer, Swagman">Swagman</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Swagman</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Richard Meyer, Swagman" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Swagman.html" title="Richard Meyer, Swagman">Swagman</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Richard Meyer</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Swagman&nbsp;';
					menustring += 'by <span class="menubyline"><i>Richard Meyer</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Damon Moore" == "")	     // ed
		{
				if ("Damon Moore, On the State Opening of Parliament<br />" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="StateOpeningofParliament.html" title="Damon Moore, On the State Opening of Parliament<br />">On the State Opening of Parliament<br /></a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'On the State Opening of Parliament<br /></p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Damon Moore, On the State Opening of Parliament<br />" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="StateOpeningofParliament.html" title="Damon Moore, On the State Opening of Parliament<br />">On the State Opening of Parliament<br /></a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Damon Moore</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'On the State Opening of Parliament<br />&nbsp;';
					menustring += 'by <span class="menubyline"><i>Damon Moore</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Timothy Murphy" == "")	     // ed
		{
				if ("Timothy Murphy, Mushrooming in the Sandhills" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Mushrooming.html" title="Timothy Murphy, Mushrooming in the Sandhills">Mushrooming in the Sandhills</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Mushrooming in the Sandhills</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Timothy Murphy, Mushrooming in the Sandhills" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Mushrooming.html" title="Timothy Murphy, Mushrooming in the Sandhills">Mushrooming in the Sandhills</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Mushrooming in the Sandhills&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Uche Ogbuji" == "")	     // ed
		{
				if ("Uche Ogbuji, Supervillain in Training" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="SupervillaininTraining.html" title="Uche Ogbuji, Supervillain in Training">Supervillain in Training</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Supervillain in Training</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Uche Ogbuji, Supervillain in Training" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="SupervillaininTraining.html" title="Uche Ogbuji, Supervillain in Training">Supervillain in Training</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Uche Ogbuji</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Supervillain in Training&nbsp;';
					menustring += 'by <span class="menubyline"><i>Uche Ogbuji</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("E. Shaun Russell" == "")	     // ed
		{
				if ("E. Shaun Russell, Heir Apparent" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="HeirApparent.html" title="E. Shaun Russell, Heir Apparent">Heir Apparent</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Heir Apparent</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("E. Shaun Russell, Heir Apparent" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="HeirApparent.html" title="E. Shaun Russell, Heir Apparent">Heir Apparent</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>E. Shaun Russell</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Heir Apparent&nbsp;';
					menustring += 'by <span class="menubyline"><i>E. Shaun Russell</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Maggie Sawkins" == "")	     // ed
		{
				if ("Maggie Sawkins, Death in the Morning" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="DeathintheMorning.html" title="Maggie Sawkins, Death in the Morning">Death in the Morning</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Death in the Morning</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Maggie Sawkins, Death in the Morning" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="DeathintheMorning.html" title="Maggie Sawkins, Death in the Morning">Death in the Morning</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Maggie Sawkins</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Death in the Morning&nbsp;';
					menustring += 'by <span class="menubyline"><i>Maggie Sawkins</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Janice D. Soderling" == "")	     // ed
		{
				if ("Janice D. Soderling, A Silver Flash" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="ASilverFlash.html" title="Janice D. Soderling, A Silver Flash">A Silver Flash</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'A Silver Flash</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Janice D. Soderling, A Silver Flash" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="ASilverFlash.html" title="Janice D. Soderling, A Silver Flash">A Silver Flash</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janice D. Soderling</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'A Silver Flash&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janice D. Soderling</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Janice D. Soderling" == "")	     // ed
		{
				if ("Janice D. Soderling, If" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="If.html" title="Janice D. Soderling, If">If</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'If</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Janice D. Soderling, If" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="If.html" title="Janice D. Soderling, If">If</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janice D. Soderling</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'If&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janice D. Soderling</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Susan Taylor" == "")	     // ed
		{
				if ("Susan Taylor, Jus’ lookin’" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Jus_lookin_.html" title="Susan Taylor, Jus’ lookin’">Jus’ lookin’</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Jus’ lookin’</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Susan Taylor, Jus’ lookin’" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Jus_lookin_.html" title="Susan Taylor, Jus’ lookin’">Jus’ lookin’</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Susan Taylor</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Jus’ lookin’&nbsp;';
					menustring += 'by <span class="menubyline"><i>Susan Taylor</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Don Thackrey" == "")	     // ed
		{
				if ("Don Thackrey, Who Is My Brother?" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="WhoismyBrother.html" title="Don Thackrey, Who Is My Brother?">Who Is My Brother?</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Who Is My Brother?</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Don Thackrey, Who Is My Brother?" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="WhoismyBrother.html" title="Don Thackrey, Who Is My Brother?">Who Is My Brother?</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Don Thackrey</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Who Is My Brother?&nbsp;';
					menustring += 'by <span class="menubyline"><i>Don Thackrey</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Desmond Kon Zhicheng-Mingdé" == "")	     // ed
		{
				if ("Desmond Kon Zhicheng-Mingdé, holy noise" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="holynoise.html" title="Desmond Kon Zhicheng-Mingdé, holy noise">holy noise, etchings across this year’s chinese garden</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'holy noise, etchings across this year’s chinese garden</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Desmond Kon Zhicheng-Mingdé, holy noise" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="holynoise.html" title="Desmond Kon Zhicheng-Mingdé, holy noise">holy noise, etchings across this year’s chinese garden</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Desmond Kon Zhicheng-Mingdé</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'holy noise, etchings across this year’s chinese garden&nbsp;';
					menustring += 'by <span class="menubyline"><i>Desmond Kon Zhicheng-Mingdé</i></span>';
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
		mstring+='<h5><a href="Panto.html" title="Christopher Barnes, Panto">Panto</a>&nbsp;<span class="menubyline">by <i>Christopher Barnes</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="ThePeasantSkims.html" title="Mark Blaeuer, The Peasant Skims His Glossy Catalogue">The Peasant Skims His Glossy Catalogue</a>&nbsp;<span class="menubyline">by <i>Mark Blaeuer</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="AceintheHole.html" title="Kim Bridgford, Ace in the Hole">Ace in the Hole</a>&nbsp;<span class="menubyline">by <i>Kim Bridgford</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Aubade.html" title="Anne Bryant-Hamon, Aubade">Aubade</a>&nbsp;<span class="menubyline">by <i>Anne Bryant-Hamon</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="WarisObsolete.html" title="Michael R. Burch, War is Obsolete">War is Obsolete</a>&nbsp;<span class="menubyline">by <i>Michael R. Burch</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="FlowersofHeraclitus.html" title="C.E. Chaffin, Flowers of Heraclitus">Flowers of Heraclitus</a>&nbsp;<span class="menubyline">by <i>C.E. Chaffin</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Epitaphs.html" title="Wesli Court, From <em>Uncle Wesli’s Epitaphs for the Poets</em>">From <em>Uncle Wesli’s Epitaphs for the Poets</em></a>&nbsp;<span class="menubyline">by <i>Wesli Court</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Slutfest.html" title="Ann Drysdale, Slutfest!">Slutfest!</a>&nbsp;<span class="menubyline">by <i>Ann Drysdale</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Word.html" title="Stephen Edgar, Worl(l)d">Wor(l)d</a>&nbsp;<span class="menubyline">by <i>Stephen Edgar</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="TheFatLadySings.html" title="Will Kemp, The Fat Lady Sings">The Fat Lady Sings</a>&nbsp;<span class="menubyline">by <i>Will Kemp</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Empire.html" title="Quincy R. Lehr, ‘Empire’, from <em>Heimat</em>">‘Empire’, from <em>Heimat</em></a>&nbsp;<span class="menubyline">by <i>Quincy R. Lehr</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="TheStations.html" title="Dennis Loney, The Stations (for Ordinary Time)">The Stations (for Ordinary Time)</a>&nbsp;<span class="menubyline">by <i>Dennis Loney</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Swagman.html" title="Richard Meyer, Swagman">Swagman</a>&nbsp;<span class="menubyline">by <i>Richard Meyer</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="StateOpeningofParliament.html" title="Damon Moore, On the State Opening of Parliament<br />">On the State Opening of Parliament<br /></a>&nbsp;<span class="menubyline">by <i>Damon Moore</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Mushrooming.html" title="Timothy Murphy, Mushrooming in the Sandhills">Mushrooming in the Sandhills</a>&nbsp;<span class="menubyline">by <i>Timothy Murphy</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="SupervillaininTraining.html" title="Uche Ogbuji, Supervillain in Training">Supervillain in Training</a>&nbsp;<span class="menubyline">by <i>Uche Ogbuji</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="HeirApparent.html" title="E. Shaun Russell, Heir Apparent">Heir Apparent</a>&nbsp;<span class="menubyline">by <i>E. Shaun Russell</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="DeathintheMorning.html" title="Maggie Sawkins, Death in the Morning">Death in the Morning</a>&nbsp;<span class="menubyline">by <i>Maggie Sawkins</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="ASilverFlash.html" title="Janice D. Soderling, A Silver Flash">A Silver Flash</a>&nbsp;<span class="menubyline">by <i>Janice D. Soderling</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="If.html" title="Janice D. Soderling, If">If</a>&nbsp;<span class="menubyline">by <i>Janice D. Soderling</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="Jus_lookin_.html" title="Susan Taylor, Jus’ lookin’">Jus’ lookin’</a>&nbsp;<span class="menubyline">by <i>Susan Taylor</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="WhoismyBrother.html" title="Don Thackrey, Who Is My Brother?">Who Is My Brother?</a>&nbsp;<span class="menubyline">by <i>Don Thackrey</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//
//

    //  
		mstring+='<h5><a href="holynoise.html" title="Desmond Kon Zhicheng-Mingdé, holy noise">holy noise, etchings across this year’s chinese garden</a>&nbsp;<span class="menubyline">by <i>Desmond Kon Zhicheng-Mingdé</i></span></h5>';
count++;
if (count==colbreak) {mstring+='</td><td style="padding-top: 15px;padding-bottom:8px"><img src="../images/mermaidtavern.jpg" width="160" height="240" alt="Mermaid Tavern" border="0" align="right">'}
 // 		 


//

mstring+='</td></tr></table>';
//mstring+='</div>';

document.write(mstring);
//alert('mstring is ' +mstring);

} //End makeMainMenu function
