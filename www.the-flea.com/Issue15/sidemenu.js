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
				if ("Mary Alexandra Agner, What I Would Bring You If I Could" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="WhatIWouldBringYou.html" title="Mary Alexandra Agner, What I Would Bring You If I Could">What I Would Bring You If I Could</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'What I Would Bring You If I Could</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Mary Alexandra Agner, What I Would Bring You If I Could" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="WhatIWouldBringYou.html" title="Mary Alexandra Agner, What I Would Bring You If I Could">What I Would Bring You If I Could</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Mary Alexandra Agner</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'What I Would Bring You If I Could&nbsp;';
					menustring += 'by <span class="menubyline"><i>Mary Alexandra Agner</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Peter Bloxsom" == "")	     // ed
		{
				if ("Peter Bloxsom, Down to Earth" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="DowntoEarth.html" title="Peter Bloxsom, Down to Earth">Down to Earth</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Down to Earth</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Peter Bloxsom, Down to Earth" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="DowntoEarth.html" title="Peter Bloxsom, Down to Earth">Down to Earth</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Peter Bloxsom</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Down to Earth&nbsp;';
					menustring += 'by <span class="menubyline"><i>Peter Bloxsom</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Kim Bridgford" == "")	     // ed
		{
				if ("Kim Bridgford, Some Like It Hot" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="SomeLikeitHot.html" title="Kim Bridgford, Some Like It Hot">Some Like It Hot</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Some Like It Hot</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Kim Bridgford, Some Like It Hot" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="SomeLikeitHot.html" title="Kim Bridgford, Some Like It Hot">Some Like It Hot</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Kim Bridgford</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Some Like It Hot&nbsp;';
					menustring += 'by <span class="menubyline"><i>Kim Bridgford</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Michael Cantor" == "")	     // ed
		{
				if ("Michael Cantor, Freshly Shaved and Barbered Well" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="FreshlyShaved.html" title="Michael Cantor, Freshly Shaved and Barbered Well">Freshly Shaved and Barbered Well</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Freshly Shaved and Barbered Well</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Michael Cantor, Freshly Shaved and Barbered Well" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="FreshlyShaved.html" title="Michael Cantor, Freshly Shaved and Barbered Well">Freshly Shaved and Barbered Well</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Michael Cantor</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Freshly Shaved and Barbered Well&nbsp;';
					menustring += 'by <span class="menubyline"><i>Michael Cantor</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("John Donne" == "")	     // ed
		{
				if ("John Donne, The Flea" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheFlea.html" title="John Donne, The Flea">The Flea</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Flea</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("John Donne, The Flea" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheFlea.html" title="John Donne, The Flea">The Flea</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>John Donne</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Flea&nbsp;';
					menustring += 'by <span class="menubyline"><i>John Donne</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Stephen Edgar" == "")	     // ed
		{
				if ("Stephen Edgar, The Representation of Reality in Western Art" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheRepresentationofRealit.html" title="Stephen Edgar, The Representation of Reality in Western Art">The Representation of Reality in Western Art*</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Representation of Reality in Western Art*</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Stephen Edgar, The Representation of Reality in Western Art" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheRepresentationofRealit.html" title="Stephen Edgar, The Representation of Reality in Western Art">The Representation of Reality in Western Art*</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Stephen Edgar</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Representation of Reality in Western Art*&nbsp;';
					menustring += 'by <span class="menubyline"><i>Stephen Edgar</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Richard Epstein" == "")	     // ed
		{
				if ("Richard Epstein, Theseus &amp; Antithesis" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheseusAntithesis.html" title="Richard Epstein, Theseus &amp; Antithesis">Theseus &amp; Antithesis</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Theseus &amp; Antithesis</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Richard Epstein, Theseus &amp; Antithesis" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheseusAntithesis.html" title="Richard Epstein, Theseus &amp; Antithesis">Theseus &amp; Antithesis</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Richard Epstein</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Theseus &amp; Antithesis&nbsp;';
					menustring += 'by <span class="menubyline"><i>Richard Epstein</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Anna Evans" == "")	     // ed
		{
				if ("Anna Evans, Malum Prohibitum" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="MalumProhibitum.html" title="Anna Evans, Malum Prohibitum">Malum Prohibitum</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Malum Prohibitum</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Anna Evans, Malum Prohibitum" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="MalumProhibitum.html" title="Anna Evans, Malum Prohibitum">Malum Prohibitum</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Anna Evans</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Malum Prohibitum&nbsp;';
					menustring += 'by <span class="menubyline"><i>Anna Evans</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Angela France" == "")	     // ed
		{
				if ("Angela France, Voyager" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Voyager.html" title="Angela France, Voyager">Voyager</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Voyager</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Angela France, Voyager" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Voyager.html" title="Angela France, Voyager">Voyager</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Angela France</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Voyager&nbsp;';
					menustring += 'by <span class="menubyline"><i>Angela France</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("R. Nemo Hill" == "")	     // ed
		{
				if ("R. Nemo Hill, Count Unicorn and Countess Fish Skin" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="CountUnicornandCountessFi.html" title="R. Nemo Hill, Count Unicorn and Countess Fish Skin">Count Unicorn and Countess Fish Skin</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Count Unicorn and Countess Fish Skin</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("R. Nemo Hill, Count Unicorn and Countess Fish Skin" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="CountUnicornandCountessFi.html" title="R. Nemo Hill, Count Unicorn and Countess Fish Skin">Count Unicorn and Countess Fish Skin</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>R. Nemo Hill</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Count Unicorn and Countess Fish Skin&nbsp;';
					menustring += 'by <span class="menubyline"><i>R. Nemo Hill</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Tim Love" == "")	     // ed
		{
				if ("Tim Love, Wordbound" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Wordbound.html" title="Tim Love, Wordbound">Wordbound</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Wordbound</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Tim Love, Wordbound" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Wordbound.html" title="Tim Love, Wordbound">Wordbound</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Tim Love</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Wordbound&nbsp;';
					menustring += 'by <span class="menubyline"><i>Tim Love</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Corey Mesler" == "")	     // ed
		{
				if ("Corey Mesler, Parabolic Parable" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="ParabolicParable.html" title="Corey Mesler, Parabolic Parable">Parabolic Parable</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Parabolic Parable</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Corey Mesler, Parabolic Parable" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="ParabolicParable.html" title="Corey Mesler, Parabolic Parable">Parabolic Parable</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Corey Mesler</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Parabolic Parable&nbsp;';
					menustring += 'by <span class="menubyline"><i>Corey Mesler</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Rick Mullin" == "")	     // ed
		{
				if ("Rick Mullin, The Stones in Morocco" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheStonesinMorocco.html" title="Rick Mullin, The Stones in Morocco">The Stones in Morocco</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Stones in Morocco</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Rick Mullin, The Stones in Morocco" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheStonesinMorocco.html" title="Rick Mullin, The Stones in Morocco">The Stones in Morocco</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Rick Mullin</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Stones in Morocco&nbsp;';
					menustring += 'by <span class="menubyline"><i>Rick Mullin</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Timothy Murphy" == "")	     // ed
		{
				if ("Timothy Murphy, Psalms 30 and 32" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="EssayonPsalms30and32.html" title="Timothy Murphy, Psalms 30 and 32">Essay on Psalms 30 and 32</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Essay on Psalms 30 and 32</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Timothy Murphy, Psalms 30 and 32" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="EssayonPsalms30and32.html" title="Timothy Murphy, Psalms 30 and 32">Essay on Psalms 30 and 32</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Essay on Psalms 30 and 32&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Timothy Murphy" == "")	     // ed
		{
				if ("Timothy Murphy, The Confessor" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheConfessor.html" title="Timothy Murphy, The Confessor">The Confessor</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Confessor</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Timothy Murphy, The Confessor" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheConfessor.html" title="Timothy Murphy, The Confessor">The Confessor</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Confessor&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Stephen S. Power" == "")	     // ed
		{
				if ("Stephen S. Power, The Righting Moment" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheRightingMoment.html" title="Stephen S. Power, The Righting Moment">The Righting Moment</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Righting Moment</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Stephen S. Power, The Righting Moment" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheRightingMoment.html" title="Stephen S. Power, The Righting Moment">The Righting Moment</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Stephen S. Power</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Righting Moment&nbsp;';
					menustring += 'by <span class="menubyline"><i>Stephen S. Power</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Philip Quinlan" == "")	     // ed
		{
				if ("Philip Quinlan, After the Harvest" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="AftertheHarvest.html" title="Philip Quinlan, After the Harvest">After the Harvest</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'After the Harvest</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Philip Quinlan, After the Harvest" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="AftertheHarvest.html" title="Philip Quinlan, After the Harvest">After the Harvest</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Philip Quinlan</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'After the Harvest&nbsp;';
					menustring += 'by <span class="menubyline"><i>Philip Quinlan</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("David Rosenthal" == "")	     // ed
		{
				if ("David Rosenthal, Taut Logic" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TautLogic.html" title="David Rosenthal, Taut Logic">Taut Logic</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Taut Logic</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("David Rosenthal, Taut Logic" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TautLogic.html" title="David Rosenthal, Taut Logic">Taut Logic</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>David Rosenthal</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Taut Logic&nbsp;';
					menustring += 'by <span class="menubyline"><i>David Rosenthal</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Richard Schiffman" == "")	     // ed
		{
				if ("Richard Schiffman, Lament of the Cactus" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="LamentoftheCactus.html" title="Richard Schiffman, Lament of the Cactus">Lament of the Cactus</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Lament of the Cactus</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Richard Schiffman, Lament of the Cactus" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="LamentoftheCactus.html" title="Richard Schiffman, Lament of the Cactus">Lament of the Cactus</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Richard Schiffman</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Lament of the Cactus&nbsp;';
					menustring += 'by <span class="menubyline"><i>Richard Schiffman</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Ed Shacklee" == "")	     // ed
		{
				if ("Ed Shacklee, A Pace of Asses" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="APaceofAsses.html" title="Ed Shacklee, A Pace of Asses">A Pace of Asses</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'A Pace of Asses</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Ed Shacklee, A Pace of Asses" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="APaceofAsses.html" title="Ed Shacklee, A Pace of Asses">A Pace of Asses</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ed Shacklee</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'A Pace of Asses&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ed Shacklee</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Don Thackrey" == "")	     // ed
		{
				if ("Don Thackrey, No Longer a Planet" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="NoLongeraPlanet.html" title="Don Thackrey, No Longer a Planet">No Longer a Planet</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'No Longer a Planet</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Don Thackrey, No Longer a Planet" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="NoLongeraPlanet.html" title="Don Thackrey, No Longer a Planet">No Longer a Planet</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Don Thackrey</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'No Longer a Planet&nbsp;';
					menustring += 'by <span class="menubyline"><i>Don Thackrey</i></span>';
					}
		   menustring += '</p>';
	   	}
//
	document.write(menustring);

}	