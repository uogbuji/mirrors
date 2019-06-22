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
  
	   if ("Janet Kenny" == "")	     // ed
		{
				if ("Janet Kenny, Epigraphic Poem" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="EpigraphToAlanSullivan.html" title="Janet Kenny, Epigraphic Poem"><em>Epigraphic Poem:</em> A Poet’s Path—To Alan Sullivan&nbsp;</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += '<em>Epigraphic Poem:</em> A Poet’s Path—To Alan Sullivan&nbsp;</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Janet Kenny, Epigraphic Poem" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="EpigraphToAlanSullivan.html" title="Janet Kenny, Epigraphic Poem"><em>Epigraphic Poem:</em> A Poet’s Path—To Alan Sullivan&nbsp;</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janet Kenny</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += '<em>Epigraphic Poem:</em> A Poet’s Path—To Alan Sullivan&nbsp;&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janet Kenny</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("David, translated by Alan Sullivan" == "")	     // ed
		{
				if ("Psalm 27, Alan Sullivan" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Psalm27.html" title="Psalm 27, Alan Sullivan">Psalm 27</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Psalm 27</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Psalm 27, Alan Sullivan" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Psalm27.html" title="Psalm 27, Alan Sullivan">Psalm 27</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>David, translated by Alan Sullivan</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Psalm 27&nbsp;';
					menustring += 'by <span class="menubyline"><i>David, translated by Alan Sullivan</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Peter Bloxsom" == "")	     // ed
		{
				if ("Peter Bloxsom, Déjà Vu" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="DejaVu.html" title="Peter Bloxsom, Déjà Vu">Déjà Vu</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Déjà Vu</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Peter Bloxsom, Déjà Vu" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="DejaVu.html" title="Peter Bloxsom, Déjà Vu">Déjà Vu</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Peter Bloxsom</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Déjà Vu&nbsp;';
					menustring += 'by <span class="menubyline"><i>Peter Bloxsom</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Catherine Chandler" == "")	     // ed
		{
				if ("Catherine Chandler, ∞" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="8.html" title="Catherine Chandler, ∞">∞</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += '∞</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Catherine Chandler, ∞" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="8.html" title="Catherine Chandler, ∞">∞</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Catherine Chandler</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += '∞&nbsp;';
					menustring += 'by <span class="menubyline"><i>Catherine Chandler</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Cally Conan-Davies" == "")	     // ed
		{
				if ("Cally Conan-Davies, After Seeing Women of Troy" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="WomenofTroy.html" title="Cally Conan-Davies, After Seeing Women of Troy">After Seeing <em>Women of Troy</em></a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'After Seeing <em>Women of Troy</em></p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Cally Conan-Davies, After Seeing Women of Troy" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="WomenofTroy.html" title="Cally Conan-Davies, After Seeing Women of Troy">After Seeing <em>Women of Troy</em></a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Cally Conan-Davies</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'After Seeing <em>Women of Troy</em>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Cally Conan-Davies</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Ann Drysdale" == "")	     // ed
		{
				if ("Ann Drysdale, Rondel" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Rondel.html" title="Ann Drysdale, Rondel">Rondel</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Rondel</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Ann Drysdale, Rondel" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Rondel.html" title="Ann Drysdale, Rondel">Rondel</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ann Drysdale</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Rondel&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ann Drysdale</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Nigel Holt" == "")	     // ed
		{
				if ("Nigel Holt, Foundation Stone" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="FoundationStone.html" title="Nigel Holt, Foundation Stone">Foundation Stone</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Foundation Stone</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Nigel Holt, Foundation Stone" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="FoundationStone.html" title="Nigel Holt, Foundation Stone">Foundation Stone</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Nigel Holt</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Foundation Stone&nbsp;';
					menustring += 'by <span class="menubyline"><i>Nigel Holt</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Jan Iwaszkiewicz" == "")	     // ed
		{
				if ("Jan Iwaszkiewicz, Crossroads" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Crossroads.html" title="Jan Iwaszkiewicz, Crossroads">Crossroads</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Crossroads</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Jan Iwaszkiewicz, Crossroads" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Crossroads.html" title="Jan Iwaszkiewicz, Crossroads">Crossroads</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Jan Iwaszkiewicz</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Crossroads&nbsp;';
					menustring += 'by <span class="menubyline"><i>Jan Iwaszkiewicz</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Rose Kelleher" == "")	     // ed
		{
				if ("Rose Kelleher, Consider" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Consider.html" title="Rose Kelleher, Consider">Consider</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Consider</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Rose Kelleher, Consider" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Consider.html" title="Rose Kelleher, Consider">Consider</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Rose Kelleher</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Consider&nbsp;';
					menustring += 'by <span class="menubyline"><i>Rose Kelleher</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Janet Kenny" == "")	     // ed
		{
				if ("Janet Kenny, Possessed" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Possessed.html" title="Janet Kenny, Possessed">Possessed</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Possessed</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Janet Kenny, Possessed" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Possessed.html" title="Janet Kenny, Possessed">Possessed</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janet Kenny</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Possessed&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janet Kenny</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Janet Kenny" == "")	     // ed
		{
				if ("Janet Kenny, Sightlines" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Sightlines.html" title="Janet Kenny, Sightlines">Sightlines</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Sightlines</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Janet Kenny, Sightlines" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Sightlines.html" title="Janet Kenny, Sightlines">Sightlines</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janet Kenny</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Sightlines&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janet Kenny</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Quincy Lehr" == "")	     // ed
		{
				if ("Quincy Lehr, Hopefuls" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Hopefuls.html" title="Quincy Lehr, Hopefuls">Hopefuls</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Hopefuls</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Quincy Lehr, Hopefuls" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Hopefuls.html" title="Quincy Lehr, Hopefuls">Hopefuls</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Quincy Lehr</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Hopefuls&nbsp;';
					menustring += 'by <span class="menubyline"><i>Quincy Lehr</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Rick Mullin" == "")	     // ed
		{
				if ("Rick Mullin, Huncke Canto One" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="HunckeCantoI.html" title="Rick Mullin, Huncke Canto One">Huncke: <em>Canto One</em></a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Huncke: <em>Canto One</em></p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Rick Mullin, Huncke Canto One" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="HunckeCantoI.html" title="Rick Mullin, Huncke Canto One">Huncke: <em>Canto One</em></a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Rick Mullin</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Huncke: <em>Canto One</em>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Rick Mullin</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Timothy Murphy" == "")	     // ed
		{
				if ("Timothy Murphy, Viaticum" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Viaticum.html" title="Timothy Murphy, Viaticum">Viaticum</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Viaticum</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Timothy Murphy, Viaticum" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Viaticum.html" title="Timothy Murphy, Viaticum">Viaticum</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Viaticum&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Fr Robert Pecotte" == "")	     // ed
		{
				if ("Fr Robert Pecotte, The Desecrats" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheDesecrats.html" title="Fr Robert Pecotte, The Desecrats">The Desecrats</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Desecrats</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Fr Robert Pecotte, The Desecrats" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheDesecrats.html" title="Fr Robert Pecotte, The Desecrats">The Desecrats</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Fr Robert Pecotte</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Desecrats&nbsp;';
					menustring += 'by <span class="menubyline"><i>Fr Robert Pecotte</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Philip Quinlan" == "")	     // ed
		{
				if ("Philip Quinlan, What Light Obscures" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="WhatLightObscures.html" title="Philip Quinlan, What Light Obscures">What Light Obscures</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'What Light Obscures</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Philip Quinlan, What Light Obscures" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="WhatLightObscures.html" title="Philip Quinlan, What Light Obscures">What Light Obscures</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Philip Quinlan</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'What Light Obscures&nbsp;';
					menustring += 'by <span class="menubyline"><i>Philip Quinlan</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Janice D. Soderling" == "")	     // ed
		{
				if ("Janice D. Soderling, Sawing the Woman in Half" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="SawingtheWomaninHalf.html" title="Janice D. Soderling, Sawing the Woman in Half">Sawing the Woman in Half</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Sawing the Woman in Half</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Janice D. Soderling, Sawing the Woman in Half" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="SawingtheWomaninHalf.html" title="Janice D. Soderling, Sawing the Woman in Half">Sawing the Woman in Half</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janice D. Soderling</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Sawing the Woman in Half&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janice D. Soderling</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Janice D. Soderling" == "")	     // ed
		{
				if ("Janice D. Soderling, Sestina for Lost Children" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="SestinaforLostChildren.html" title="Janice D. Soderling, Sestina for Lost Children">Sestina for Lost Children</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Sestina for Lost Children</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Janice D. Soderling, Sestina for Lost Children" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="SestinaforLostChildren.html" title="Janice D. Soderling, Sestina for Lost Children">Sestina for Lost Children</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janice D. Soderling</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Sestina for Lost Children&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janice D. Soderling</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Don Thackrey" == "")	     // ed
		{
				if ("Don Thackrey, Flypaper" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Flypaper.html" title="Don Thackrey, Flypaper">Flypaper</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Flypaper</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Don Thackrey, Flypaper" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Flypaper.html" title="Don Thackrey, Flypaper">Flypaper</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Don Thackrey</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Flypaper&nbsp;';
					menustring += 'by <span class="menubyline"><i>Don Thackrey</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Peter Wyton" == "")	     // ed
		{
				if ("Peter Wyton, Khatun Riding By" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="KhatunRidingBy.html" title="Peter Wyton, Khatun Riding By">Khatun Riding By</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Khatun Riding By</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Peter Wyton, Khatun Riding By" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="KhatunRidingBy.html" title="Peter Wyton, Khatun Riding By">Khatun Riding By</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Peter Wyton</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Khatun Riding By&nbsp;';
					menustring += 'by <span class="menubyline"><i>Peter Wyton</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Peter Wyton" == "")	     // ed
		{
				if ("Peter Wyton, Shifting Sands" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="ShiftingSands.html" title="Peter Wyton, Shifting Sands">Shifting Sands</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Shifting Sands</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Peter Wyton, Shifting Sands" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="ShiftingSands.html" title="Peter Wyton, Shifting Sands">Shifting Sands</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Peter Wyton</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Shifting Sands&nbsp;';
					menustring += 'by <span class="menubyline"><i>Peter Wyton</i></span>';
					}
		   menustring += '</p>';
	   	}
//
	document.write(menustring);

}	