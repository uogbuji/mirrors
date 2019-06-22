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
  
	   if ("Philip Quinlan" == "")	     // ed
		{
				if ("Philip Quinlan, A Plague on All Your Houses" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="APlagueonAllYourHouses.html" title="Philip Quinlan, A Plague on All Your Houses"><em>Epigraphic poem:</em> A Plague on All Your Houses</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += '<em>Epigraphic poem:</em> A Plague on All Your Houses</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Philip Quinlan, A Plague on All Your Houses" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="APlagueonAllYourHouses.html" title="Philip Quinlan, A Plague on All Your Houses"><em>Epigraphic poem:</em> A Plague on All Your Houses</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Philip Quinlan</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += '<em>Epigraphic poem:</em> A Plague on All Your Houses&nbsp;';
					menustring += 'by <span class="menubyline"><i>Philip Quinlan</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Leo Yankevich" == "")	     // ed
		{
				if ("Leo Yankevich, Swallows" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Swallows.html" title="Leo Yankevich, Swallows">Swallows</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Swallows</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Leo Yankevich, Swallows" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Swallows.html" title="Leo Yankevich, Swallows">Swallows</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Leo Yankevich</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Swallows&nbsp;';
					menustring += 'by <span class="menubyline"><i>Leo Yankevich</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Joseph Salemi" == "")	     // ed
		{
				if ("Joseph Salemi, The Starving Poet Ruminates On Air" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheStarvingPoet.html" title="Joseph Salemi, The Starving Poet Ruminates On Air">The Starving Poet Ruminates On Air</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Starving Poet Ruminates On Air</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Joseph Salemi, The Starving Poet Ruminates On Air" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheStarvingPoet.html" title="Joseph Salemi, The Starving Poet Ruminates On Air">The Starving Poet Ruminates On Air</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Joseph Salemi</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Starving Poet Ruminates On Air&nbsp;';
					menustring += 'by <span class="menubyline"><i>Joseph Salemi</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Fr. Robert J. Pecotte" == "")	     // ed
		{
				if ("Fr. Robert J. Pecotte, Behold the Infant" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="BeholdtheInfant.html" title="Fr. Robert J. Pecotte, Behold the Infant">Behold the Infant</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Behold the Infant</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Fr. Robert J. Pecotte, Behold the Infant" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="BeholdtheInfant.html" title="Fr. Robert J. Pecotte, Behold the Infant">Behold the Infant</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Fr. Robert J. Pecotte</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Behold the Infant&nbsp;';
					menustring += 'by <span class="menubyline"><i>Fr. Robert J. Pecotte</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Geoff Page" == "")	     // ed
		{
				if ("Geoff Page, Per Ardua ad Astra" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="PerArduaadAstra.html" title="Geoff Page, Per Ardua ad Astra">Per Ardua ad Astra</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Per Ardua ad Astra</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Geoff Page, Per Ardua ad Astra" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="PerArduaadAstra.html" title="Geoff Page, Per Ardua ad Astra">Per Ardua ad Astra</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Geoff Page</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Per Ardua ad Astra&nbsp;';
					menustring += 'by <span class="menubyline"><i>Geoff Page</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Amit Majmudar" == "")	     // ed
		{
				if ("Amit Majmudar, Seventeens" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Seventeens.html" title="Amit Majmudar, Seventeens">Seventeens</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Seventeens</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Amit Majmudar, Seventeens" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Seventeens.html" title="Amit Majmudar, Seventeens">Seventeens</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Amit Majmudar</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Seventeens&nbsp;';
					menustring += 'by <span class="menubyline"><i>Amit Majmudar</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Rose Kelleher" == "")	     // ed
		{
				if ("Rose Kelleher, Alternating Hymn" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="AlternatingHymn.html" title="Rose Kelleher, Alternating Hymn">Alternating Hymn</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Alternating Hymn</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Rose Kelleher, Alternating Hymn" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="AlternatingHymn.html" title="Rose Kelleher, Alternating Hymn">Alternating Hymn</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Rose Kelleher</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Alternating Hymn&nbsp;';
					menustring += 'by <span class="menubyline"><i>Rose Kelleher</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Nigel Holt" == "")	     // ed
		{
				if ("Nigel Holt, The Resistance of Memory" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheResistanceofMemory.html" title="Nigel Holt, The Resistance of Memory">The Resistance of Memory</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Resistance of Memory</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Nigel Holt, The Resistance of Memory" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheResistanceofMemory.html" title="Nigel Holt, The Resistance of Memory">The Resistance of Memory</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Nigel Holt</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Resistance of Memory&nbsp;';
					menustring += 'by <span class="menubyline"><i>Nigel Holt</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Bill Greenwell" == "")	     // ed
		{
				if ("Bill Greenwell, And Be Damned" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="AndBeDamned.html" title="Bill Greenwell, And Be Damned">And Be Damned</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'And Be Damned</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Bill Greenwell, And Be Damned" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="AndBeDamned.html" title="Bill Greenwell, And Be Damned">And Be Damned</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Bill Greenwell</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'And Be Damned&nbsp;';
					menustring += 'by <span class="menubyline"><i>Bill Greenwell</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Alan Gould" == "")	     // ed
		{
				if ("Alan Gould, On The Cavalier Poets" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="OnTheCavalierPoets.html" title="Alan Gould, On The Cavalier Poets">On The Cavalier Poets</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'On The Cavalier Poets</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Alan Gould, On The Cavalier Poets" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="OnTheCavalierPoets.html" title="Alan Gould, On The Cavalier Poets">On The Cavalier Poets</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Alan Gould</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'On The Cavalier Poets&nbsp;';
					menustring += 'by <span class="menubyline"><i>Alan Gould</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Louis Gallo" == "")	     // ed
		{
				if ("Louis Gallo, Homage to Descartes" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="HomagetoDescartes.html" title="Louis Gallo, Homage to Descartes">Homage to Descartes</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Homage to Descartes</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Louis Gallo, Homage to Descartes" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="HomagetoDescartes.html" title="Louis Gallo, Homage to Descartes">Homage to Descartes</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Louis Gallo</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Homage to Descartes&nbsp;';
					menustring += 'by <span class="menubyline"><i>Louis Gallo</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Angela France" == "")	     // ed
		{
				if ("Angela France, Twenty Minute Walk" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TwentyMinuteWalk.html" title="Angela France, Twenty Minute Walk">Twenty Minute Walk</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Twenty Minute Walk</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Angela France, Twenty Minute Walk" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TwentyMinuteWalk.html" title="Angela France, Twenty Minute Walk">Twenty Minute Walk</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Angela France</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Twenty Minute Walk&nbsp;';
					menustring += 'by <span class="menubyline"><i>Angela France</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Nausheen Eusuf" == "")	     // ed
		{
				if ("Nausheen Eusuf, For a Young Friend Who Believes She is Bad" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="ForaYoungFriend.html" title="Nausheen Eusuf, For a Young Friend Who Believes She is Bad">For a Young Friend Who Believes She is Bad</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'For a Young Friend Who Believes She is Bad</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Nausheen Eusuf, For a Young Friend Who Believes She is Bad" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="ForaYoungFriend.html" title="Nausheen Eusuf, For a Young Friend Who Believes She is Bad">For a Young Friend Who Believes She is Bad</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Nausheen Eusuf</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'For a Young Friend Who Believes She is Bad&nbsp;';
					menustring += 'by <span class="menubyline"><i>Nausheen Eusuf</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Stephen Edgar" == "")	     // ed
		{
				if ("Stephen Edgar, Let Me Forget" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="LetMeForget.html" title="Stephen Edgar, Let Me Forget">Let Me Forget</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Let Me Forget</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Stephen Edgar, Let Me Forget" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="LetMeForget.html" title="Stephen Edgar, Let Me Forget">Let Me Forget</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Stephen Edgar</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Let Me Forget&nbsp;';
					menustring += 'by <span class="menubyline"><i>Stephen Edgar</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Ann Drysdale" == "")	     // ed
		{
				if ("Ann Drysdale, Star-crossed" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Star-crossed.html" title="Ann Drysdale, Star-crossed">Star-crossed</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Star-crossed</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Ann Drysdale, Star-crossed" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Star-crossed.html" title="Ann Drysdale, Star-crossed">Star-crossed</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ann Drysdale</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Star-crossed&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ann Drysdale</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Kevin Cutrer" == "")	     // ed
		{
				if ("Kevin Cutrer, He Says Over His Drink" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="HeSaysOverHisDrink.html" title="Kevin Cutrer, He Says Over His Drink">He Says Over his Drink</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'He Says Over his Drink</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Kevin Cutrer, He Says Over His Drink" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="HeSaysOverHisDrink.html" title="Kevin Cutrer, He Says Over His Drink">He Says Over his Drink</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Kevin Cutrer</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'He Says Over his Drink&nbsp;';
					menustring += 'by <span class="menubyline"><i>Kevin Cutrer</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Peter Coghill" == "")	     // ed
		{
				if ("Peter Coghill, Someone Else in Hyde Park" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="SomeoneElseinHydePark.html" title="Peter Coghill, Someone Else in Hyde Park">Someone Else in Hyde Park</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Someone Else in Hyde Park</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Peter Coghill, Someone Else in Hyde Park" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="SomeoneElseinHydePark.html" title="Peter Coghill, Someone Else in Hyde Park">Someone Else in Hyde Park</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Peter Coghill</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Someone Else in Hyde Park&nbsp;';
					menustring += 'by <span class="menubyline"><i>Peter Coghill</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("C.E. Chaffin" == "")	     // ed
		{
				if ("C.E. Chaffin, For Example" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="ForExample.html" title="C.E. Chaffin, For Example">For Example</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'For Example</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("C.E. Chaffin, For Example" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="ForExample.html" title="C.E. Chaffin, For Example">For Example</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>C.E. Chaffin</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'For Example&nbsp;';
					menustring += 'by <span class="menubyline"><i>C.E. Chaffin</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Jared Carter" == "")	     // ed
		{
				if ("Jared Carter, A Valentine" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Invitation.html" title="Jared Carter, A Valentine">A Valentine</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'A Valentine</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Jared Carter, A Valentine" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Invitation.html" title="Jared Carter, A Valentine">A Valentine</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Jared Carter</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'A Valentine&nbsp;';
					menustring += 'by <span class="menubyline"><i>Jared Carter</i></span>';
					}
		   menustring += '</p>';
	   	}
//
	document.write(menustring);

}	