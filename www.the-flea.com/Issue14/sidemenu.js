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
  
	   if ("Mary Alexandra Agner" == "")	     // ed
		{
				if ("Mary Alexandra Agner, Keeper of the Skies" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="KeeperoftheSkies.html" title="Mary Alexandra Agner, Keeper of the Skies">Keeper of the Skies</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Keeper of the Skies</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Mary Alexandra Agner, Keeper of the Skies" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="KeeperoftheSkies.html" title="Mary Alexandra Agner, Keeper of the Skies">Keeper of the Skies</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Mary Alexandra Agner</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Keeper of the Skies&nbsp;';
					menustring += 'by <span class="menubyline"><i>Mary Alexandra Agner</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Peter Bloxsom" == "")	     // ed
		{
				if ("Peter Bloxsom, Way Station" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="WayStation.html" title="Peter Bloxsom, Way Station">Way Station</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Way Station</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Peter Bloxsom, Way Station" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="WayStation.html" title="Peter Bloxsom, Way Station">Way Station</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Peter Bloxsom</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Way Station&nbsp;';
					menustring += 'by <span class="menubyline"><i>Peter Bloxsom</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Michael Cantor" == "")	     // ed
		{
				if ("Michael Cantor, Hexagram" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Hexagram.html" title="Michael Cantor, Hexagram">Hexagram</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Hexagram</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Michael Cantor, Hexagram" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Hexagram.html" title="Michael Cantor, Hexagram">Hexagram</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Michael Cantor</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Hexagram&nbsp;';
					menustring += 'by <span class="menubyline"><i>Michael Cantor</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Ann Drysdale" == "")	     // ed
		{
				if ("Ann Drysdale, When Mister Nifty Plays the Bones" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="WhenMisterNiftyPlaystheBo.html" title="Ann Drysdale, When Mister Nifty Plays the Bones">When Mister Nifty Plays the Bones</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'When Mister Nifty Plays the Bones</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Ann Drysdale, When Mister Nifty Plays the Bones" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="WhenMisterNiftyPlaystheBo.html" title="Ann Drysdale, When Mister Nifty Plays the Bones">When Mister Nifty Plays the Bones</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ann Drysdale</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'When Mister Nifty Plays the Bones&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ann Drysdale</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Earl Haig II" == "")	     // ed
		{
				if ("Earl Haig II, Turn Over Stones II" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TurnOverStones.html" title="Earl Haig II, Turn Over Stones II">Turn Over Stones II: Researching Reptiles</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Turn Over Stones II: Researching Reptiles</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Earl Haig II, Turn Over Stones II" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TurnOverStones.html" title="Earl Haig II, Turn Over Stones II">Turn Over Stones II: Researching Reptiles</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Earl Haig II</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Turn Over Stones II: Researching Reptiles&nbsp;';
					menustring += 'by <span class="menubyline"><i>Earl Haig II</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Juleigh Howard-Hobson" == "")	     // ed
		{
				if ("Juleigh Howard-Hobson, Perspicacity" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Perspicacity.html" title="Juleigh Howard-Hobson, Perspicacity">Perspicacity</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Perspicacity</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Juleigh Howard-Hobson, Perspicacity" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Perspicacity.html" title="Juleigh Howard-Hobson, Perspicacity">Perspicacity</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Juleigh Howard-Hobson</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Perspicacity&nbsp;';
					menustring += 'by <span class="menubyline"><i>Juleigh Howard-Hobson</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Patricia Wallace jones" == "")	     // ed
		{
				if ("Patricia Wallace Jones, She Tells Him Her Secrets" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="SheTellsHimHerSecrets.html" title="Patricia Wallace Jones, She Tells Him Her Secrets">She Tells Him Her Secrets</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'She Tells Him Her Secrets</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Patricia Wallace Jones, She Tells Him Her Secrets" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="SheTellsHimHerSecrets.html" title="Patricia Wallace Jones, She Tells Him Her Secrets">She Tells Him Her Secrets</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Patricia Wallace jones</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'She Tells Him Her Secrets&nbsp;';
					menustring += 'by <span class="menubyline"><i>Patricia Wallace jones</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Karen Kelsay" == "")	     // ed
		{
				if ("Karen Kelsay, Amytis Leaves Her Garden" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="AmytisLeavesHerGarden.html" title="Karen Kelsay, Amytis Leaves Her Garden">Amytis Leaves Her Garden</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Amytis Leaves Her Garden</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Karen Kelsay, Amytis Leaves Her Garden" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="AmytisLeavesHerGarden.html" title="Karen Kelsay, Amytis Leaves Her Garden">Amytis Leaves Her Garden</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Karen Kelsay</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Amytis Leaves Her Garden&nbsp;';
					menustring += 'by <span class="menubyline"><i>Karen Kelsay</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Janet Kenny" == "")	     // ed
		{
				if ("Janet Kenny, Forgotten Ones" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="ForgottenOnes.html" title="Janet Kenny, Forgotten Ones">Forgotten Ones</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Forgotten Ones</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Janet Kenny, Forgotten Ones" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="ForgottenOnes.html" title="Janet Kenny, Forgotten Ones">Forgotten Ones</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janet Kenny</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Forgotten Ones&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janet Kenny</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("T.S. Kerrigan" == "")	     // ed
		{
				if ("T.S. Kerrigan, Mr. Heaney" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="MrHeaney.html" title="T.S. Kerrigan, Mr. Heaney">Mr. Heaney</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Mr. Heaney</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("T.S. Kerrigan, Mr. Heaney" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="MrHeaney.html" title="T.S. Kerrigan, Mr. Heaney">Mr. Heaney</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>T.S. Kerrigan</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Mr. Heaney&nbsp;';
					menustring += 'by <span class="menubyline"><i>T.S. Kerrigan</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("David W. Landrum" == "")	     // ed
		{
				if ("David W. Landrum, The Mysteries Are Written Down" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheMysteriesAreWrittenDow.html" title="David W. Landrum, The Mysteries Are Written Down">The Mysteries Are Written Down</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Mysteries Are Written Down</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("David W. Landrum, The Mysteries Are Written Down" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheMysteriesAreWrittenDow.html" title="David W. Landrum, The Mysteries Are Written Down">The Mysteries Are Written Down</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>David W. Landrum</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Mysteries Are Written Down&nbsp;';
					menustring += 'by <span class="menubyline"><i>David W. Landrum</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Ralph La Rosa" == "")	     // ed
		{
				if ("Ralph La Rosa, They Flee from Me" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheyFleefromMe.html" title="Ralph La Rosa, They Flee from Me">They Flee from Me</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'They Flee from Me</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Ralph La Rosa, They Flee from Me" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheyFleefromMe.html" title="Ralph La Rosa, They Flee from Me">They Flee from Me</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ralph La Rosa</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'They Flee from Me&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ralph La Rosa</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Dennis Loney" == "")	     // ed
		{
				if ("Dennis Loney, The Rose" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheRose.html" title="Dennis Loney, The Rose">The Rose</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Rose</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Dennis Loney, The Rose" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheRose.html" title="Dennis Loney, The Rose">The Rose</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Dennis Loney</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Rose&nbsp;';
					menustring += 'by <span class="menubyline"><i>Dennis Loney</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Duncan Gillies MacLaurin" == "")	     // ed
		{
				if ("Duncan Gillies MacLaurin, No Bloody Way!" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="NoBloodyWay.html" title="Duncan Gillies MacLaurin, No Bloody Way!">No Bloody Way!</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'No Bloody Way!</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Duncan Gillies MacLaurin, No Bloody Way!" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="NoBloodyWay.html" title="Duncan Gillies MacLaurin, No Bloody Way!">No Bloody Way!</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Duncan Gillies MacLaurin</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'No Bloody Way!&nbsp;';
					menustring += 'by <span class="menubyline"><i>Duncan Gillies MacLaurin</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Amit Majmudar" == "")	     // ed
		{
				if ("Amit Majmudar, Design" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Design.html" title="Amit Majmudar, Design">Design</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Design</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Amit Majmudar, Design" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Design.html" title="Amit Majmudar, Design">Design</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Amit Majmudar</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Design&nbsp;';
					menustring += 'by <span class="menubyline"><i>Amit Majmudar</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Robert Mezey" == "")	     // ed
		{
				if ("Robert Mezey, Please?" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Please.html" title="Robert Mezey, Please?">Please?</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Please?</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Robert Mezey, Please?" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Please.html" title="Robert Mezey, Please?">Please?</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Robert Mezey</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Please?&nbsp;';
					menustring += 'by <span class="menubyline"><i>Robert Mezey</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Timothy Murphy" == "")	     // ed
		{
				if ("Timothy Murphy, Community of Saints" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="CommunityofSaints.html" title="Timothy Murphy, Community of Saints">Community of Saints</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Community of Saints</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Timothy Murphy, Community of Saints" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="CommunityofSaints.html" title="Timothy Murphy, Community of Saints">Community of Saints</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Community of Saints&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Timothy Murphy" == "")	     // ed
		{
				if ("Timothy Murphy, To Sean Safranski" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="ToSeanSafranski.html" title="Timothy Murphy, To Sean Safranski">To Sean Safranski</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'To Sean Safranski</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Timothy Murphy, To Sean Safranski" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="ToSeanSafranski.html" title="Timothy Murphy, To Sean Safranski">To Sean Safranski</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'To Sean Safranski&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Les Murray" == "")	     // ed
		{
				if ("Les Murray, Nuclear Family Bees, Barrington River" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="NuclearFamilyBees.html" title="Les Murray, Nuclear Family Bees, Barrington River">Nuclear Family Bees, Barrington River</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Nuclear Family Bees, Barrington River</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Les Murray, Nuclear Family Bees, Barrington River" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="NuclearFamilyBees.html" title="Les Murray, Nuclear Family Bees, Barrington River">Nuclear Family Bees, Barrington River</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Les Murray</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Nuclear Family Bees, Barrington River&nbsp;';
					menustring += 'by <span class="menubyline"><i>Les Murray</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Richard Schiffman" == "")	     // ed
		{
				if ("Richard Schiffman, Karmic Laundromat" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="KarmicLaundromat.html" title="Richard Schiffman, Karmic Laundromat">Karmic Laundromat</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Karmic Laundromat</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Richard Schiffman, Karmic Laundromat" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="KarmicLaundromat.html" title="Richard Schiffman, Karmic Laundromat">Karmic Laundromat</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Richard Schiffman</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Karmic Laundromat&nbsp;';
					menustring += 'by <span class="menubyline"><i>Richard Schiffman</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Salli Shepherd" == "")	     // ed
		{
				if ("Salli Shepherd, Mammoth" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Mammoth.html" title="Salli Shepherd, Mammoth">Mammoth</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Mammoth</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Salli Shepherd, Mammoth" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Mammoth.html" title="Salli Shepherd, Mammoth">Mammoth</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Salli Shepherd</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Mammoth&nbsp;';
					menustring += 'by <span class="menubyline"><i>Salli Shepherd</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Janice D. Soderling" == "")	     // ed
		{
				if ("Janice D. Soderling, The Turf Labyrinth at Saffron Waldon" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheTurfLabyrinth.html" title="Janice D. Soderling, The Turf Labyrinth at Saffron Waldon">The Turf Labyrinth at Saffron Waldon</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Turf Labyrinth at Saffron Waldon</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Janice D. Soderling, The Turf Labyrinth at Saffron Waldon" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheTurfLabyrinth.html" title="Janice D. Soderling, The Turf Labyrinth at Saffron Waldon">The Turf Labyrinth at Saffron Waldon</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janice D. Soderling</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Turf Labyrinth at Saffron Waldon&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janice D. Soderling</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Don Thackrey" == "")	     // ed
		{
				if ("Don Thackrey, Pondering Singularity" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="PonderingSingularity.html" title="Don Thackrey, Pondering Singularity">Pondering Singularity</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Pondering Singularity</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Don Thackrey, Pondering Singularity" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="PonderingSingularity.html" title="Don Thackrey, Pondering Singularity">Pondering Singularity</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Don Thackrey</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Pondering Singularity&nbsp;';
					menustring += 'by <span class="menubyline"><i>Don Thackrey</i></span>';
					}
		   menustring += '</p>';
	   	}
//
	document.write(menustring);

}	