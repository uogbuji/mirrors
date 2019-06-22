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
  
	   if ("Margaret Griffiths" == "")	     // ed
		{
				if ("Margaret Griffiths, The Pismire Oration" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="EpigraphPismire.html" title="Margaret Griffiths, The Pismire Oration"><em>Epigraph:</em> The Pismire Oration</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += '<em>Epigraph:</em> The Pismire Oration</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Margaret Griffiths, The Pismire Oration" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="EpigraphPismire.html" title="Margaret Griffiths, The Pismire Oration"><em>Epigraph:</em> The Pismire Oration</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Margaret Griffiths</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += '<em>Epigraph:</em> The Pismire Oration&nbsp;';
					menustring += 'by <span class="menubyline"><i>Margaret Griffiths</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Mark Allinson" == "")	     // ed
		{
				if ("Mark Allinson, The Natural Born Bastard" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheNaturalBornBastard.html" title="Mark Allinson, The Natural Born Bastard">The Natural Born Bastard</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Natural Born Bastard</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Mark Allinson, The Natural Born Bastard" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheNaturalBornBastard.html" title="Mark Allinson, The Natural Born Bastard">The Natural Born Bastard</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Mark Allinson</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Natural Born Bastard&nbsp;';
					menustring += 'by <span class="menubyline"><i>Mark Allinson</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("David Gwilym Anthony" == "")	     // ed
		{
				if ("David Gwilym Anthony, Entomologist" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Entomologist.html" title="David Gwilym Anthony, Entomologist">Entomologist</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Entomologist</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("David Gwilym Anthony, Entomologist" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Entomologist.html" title="David Gwilym Anthony, Entomologist">Entomologist</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>David Gwilym Anthony</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Entomologist&nbsp;';
					menustring += 'by <span class="menubyline"><i>David Gwilym Anthony</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Carol Berg" == "")	     // ed
		{
				if ("Carol Berg, Fruit Flies" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="FruitFlies.html" title="Carol Berg, Fruit Flies">Fruit Flies</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Fruit Flies</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Carol Berg, Fruit Flies" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="FruitFlies.html" title="Carol Berg, Fruit Flies">Fruit Flies</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Carol Berg</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Fruit Flies&nbsp;';
					menustring += 'by <span class="menubyline"><i>Carol Berg</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Carol Berg" == "")	     // ed
		{
				if ("Carol Berg, The Swedish Dragonfly Weighing Souls" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheSwedishDragonflyWeighi.html" title="Carol Berg, The Swedish Dragonfly Weighing Souls">The Swedish Dragonfly Weighing Souls</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Swedish Dragonfly Weighing Souls</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Carol Berg, The Swedish Dragonfly Weighing Souls" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheSwedishDragonflyWeighi.html" title="Carol Berg, The Swedish Dragonfly Weighing Souls">The Swedish Dragonfly Weighing Souls</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Carol Berg</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Swedish Dragonfly Weighing Souls&nbsp;';
					menustring += 'by <span class="menubyline"><i>Carol Berg</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Mark Blaeuer" == "")	     // ed
		{
				if ("Mark Blaeuer, Discovery of a Literary Artifact" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="LiteraryArtifact.html" title="Mark Blaeuer, Discovery of a Literary Artifact">Discovery of a Literary Artifact</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Discovery of a Literary Artifact</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Mark Blaeuer, Discovery of a Literary Artifact" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="LiteraryArtifact.html" title="Mark Blaeuer, Discovery of a Literary Artifact">Discovery of a Literary Artifact</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Mark Blaeuer</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Discovery of a Literary Artifact&nbsp;';
					menustring += 'by <span class="menubyline"><i>Mark Blaeuer</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Jared Carter" == "")	     // ed
		{
				if ("Jared Carter. Kriegspiel" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Kriegspiel.html" title="Jared Carter. Kriegspiel">Kriegspiel</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Kriegspiel</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Jared Carter. Kriegspiel" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Kriegspiel.html" title="Jared Carter. Kriegspiel">Kriegspiel</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Jared Carter</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Kriegspiel&nbsp;';
					menustring += 'by <span class="menubyline"><i>Jared Carter</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Catherine Chandler" == "")	     // ed
		{
				if ("Catherine Chandler, To the Lightning Bug" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TotheLightningBug.html" title="Catherine Chandler, To the Lightning Bug">To the Lightning Bug</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'To the Lightning Bug</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Catherine Chandler, To the Lightning Bug" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TotheLightningBug.html" title="Catherine Chandler, To the Lightning Bug">To the Lightning Bug</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Catherine Chandler</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'To the Lightning Bug&nbsp;';
					menustring += 'by <span class="menubyline"><i>Catherine Chandler</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("David Davis" == "")	     // ed
		{
				if ("David Davis, An Eternal Golden Braid" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="AnEternalGoldenBraid.html" title="David Davis, An Eternal Golden Braid">An Eternal Golden Braid</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'An Eternal Golden Braid</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("David Davis, An Eternal Golden Braid" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="AnEternalGoldenBraid.html" title="David Davis, An Eternal Golden Braid">An Eternal Golden Braid</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>David Davis</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'An Eternal Golden Braid&nbsp;';
					menustring += 'by <span class="menubyline"><i>David Davis</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Ann Drysdale" == "")	     // ed
		{
				if ("Ann Drysdale, The Fly..." != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheFly.html" title="Ann Drysdale, The Fly...">The Fly...</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Fly...</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Ann Drysdale, The Fly..." != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheFly.html" title="Ann Drysdale, The Fly...">The Fly...</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ann Drysdale</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Fly...&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ann Drysdale</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Martin Elster" == "")	     // ed
		{
				if ("Martin Elster, A Prayer for the Prayer" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="APrayerforthePrayer.html" title="Martin Elster, A Prayer for the Prayer">A Prayer for the Prayer</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'A Prayer for the Prayer</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Martin Elster, A Prayer for the Prayer" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="APrayerforthePrayer.html" title="Martin Elster, A Prayer for the Prayer">A Prayer for the Prayer</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Martin Elster</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'A Prayer for the Prayer&nbsp;';
					menustring += 'by <span class="menubyline"><i>Martin Elster</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Martin Elster" == "")	     // ed
		{
				if ("Martin Elster, The One Not Eaten" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheOneNotEaten.html" title="Martin Elster, The One Not Eaten">The One Not Eaten</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The One Not Eaten</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Martin Elster, The One Not Eaten" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheOneNotEaten.html" title="Martin Elster, The One Not Eaten">The One Not Eaten</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Martin Elster</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The One Not Eaten&nbsp;';
					menustring += 'by <span class="menubyline"><i>Martin Elster</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Richard Epstein" == "")	     // ed
		{
				if ("Richard Epstein, Raining Rain, You Know" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="RainingRainYouKnow.html" title="Richard Epstein, Raining Rain, You Know">Raining Rain, You Know</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Raining Rain, You Know</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Richard Epstein, Raining Rain, You Know" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="RainingRainYouKnow.html" title="Richard Epstein, Raining Rain, You Know">Raining Rain, You Know</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Richard Epstein</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Raining Rain, You Know&nbsp;';
					menustring += 'by <span class="menubyline"><i>Richard Epstein</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Alan Gould" == "")	     // ed
		{
				if ("Alan Gould, Pliers" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Pliers.html" title="Alan Gould, Pliers">Pliers</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Pliers</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Alan Gould, Pliers" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Pliers.html" title="Alan Gould, Pliers">Pliers</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Alan Gould</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Pliers&nbsp;';
					menustring += 'by <span class="menubyline"><i>Alan Gould</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Nigel Holt" == "")	     // ed
		{
				if ("Nigel Holt, Ba’al Dhubab" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Ba_alDhubab.html" title="Nigel Holt, Ba’al Dhubab">Ba’al Dhubab</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Ba’al Dhubab</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Nigel Holt, Ba’al Dhubab" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Ba_alDhubab.html" title="Nigel Holt, Ba’al Dhubab">Ba’al Dhubab</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Nigel Holt</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Ba’al Dhubab&nbsp;';
					menustring += 'by <span class="menubyline"><i>Nigel Holt</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Clive James" == "")	     // ed
		{
				if ("Clive James, Berowra Waters, New South Wales" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="BerowraWaters.html" title="Clive James, Berowra Waters, New South Wales">Berowra Waters, New South Wales</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Berowra Waters, New South Wales</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Clive James, Berowra Waters, New South Wales" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="BerowraWaters.html" title="Clive James, Berowra Waters, New South Wales">Berowra Waters, New South Wales</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Clive James</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Berowra Waters, New South Wales&nbsp;';
					menustring += 'by <span class="menubyline"><i>Clive James</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Rose Kelleher" == "")	     // ed
		{
				if ("Rose Kelleher, arachne to her love" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="arachnetoherlove.html" title="Rose Kelleher, arachne to her love">arachne to her love</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'arachne to her love</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Rose Kelleher, arachne to her love" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="arachnetoherlove.html" title="Rose Kelleher, arachne to her love">arachne to her love</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Rose Kelleher</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'arachne to her love&nbsp;';
					menustring += 'by <span class="menubyline"><i>Rose Kelleher</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Janet Kenny" == "")	     // ed
		{
				if ("Janet Kenny, Anopheles’ Water Dance" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Anopheles.html" title="Janet Kenny, Anopheles’ Water Dance">Anopheles’ Water Dance</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Anopheles’ Water Dance</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Janet Kenny, Anopheles’ Water Dance" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Anopheles.html" title="Janet Kenny, Anopheles’ Water Dance">Anopheles’ Water Dance</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janet Kenny</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Anopheles’ Water Dance&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janet Kenny</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Janet Kenny" == "")	     // ed
		{
				if ("Janet Kenny, Articulated" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Articulated.html" title="Janet Kenny, Articulated">Articulated</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Articulated</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Janet Kenny, Articulated" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Articulated.html" title="Janet Kenny, Articulated">Articulated</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janet Kenny</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Articulated&nbsp;';
					menustring += 'by <span class="menubyline"><i>Janet Kenny</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("David W. Landrum" == "")	     // ed
		{
				if ("David W. Landrum, The Ant Colonies on Mount Corinth" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheAntColoniesonMountCori.html" title="David W. Landrum, The Ant Colonies on Mount Corinth">The Ant Colonies on Mount Corinth</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Ant Colonies on Mount Corinth</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("David W. Landrum, The Ant Colonies on Mount Corinth" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheAntColoniesonMountCori.html" title="David W. Landrum, The Ant Colonies on Mount Corinth">The Ant Colonies on Mount Corinth</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>David W. Landrum</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Ant Colonies on Mount Corinth&nbsp;';
					menustring += 'by <span class="menubyline"><i>David W. Landrum</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Patti McCarty" == "")	     // ed
		{
				if ("Patti McCarty, Katydid" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Katydid.html" title="Patti McCarty, Katydid">Katydid</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Katydid</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Patti McCarty, Katydid" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Katydid.html" title="Patti McCarty, Katydid">Katydid</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Patti McCarty</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Katydid&nbsp;';
					menustring += 'by <span class="menubyline"><i>Patti McCarty</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Amit Majmudar" == "")	     // ed
		{
				if ("Amit Majmudar, Starfish Harvest" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="StarfishHarvest.html" title="Amit Majmudar, Starfish Harvest">Starfish Harvest</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Starfish Harvest</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Amit Majmudar, Starfish Harvest" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="StarfishHarvest.html" title="Amit Majmudar, Starfish Harvest">Starfish Harvest</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Amit Majmudar</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Starfish Harvest&nbsp;';
					menustring += 'by <span class="menubyline"><i>Amit Majmudar</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("John Milbury-Steen" == "")	     // ed
		{
				if ("John Milbury-Steen, In-sectio" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="In-sect.html" title="John Milbury-Steen, In-sectio">In-sectio</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'In-sectio</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("John Milbury-Steen, In-sectio" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="In-sect.html" title="John Milbury-Steen, In-sectio">In-sectio</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>John Milbury-Steen</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'In-sectio&nbsp;';
					menustring += 'by <span class="menubyline"><i>John Milbury-Steen</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Timothy Murphy" == "")	     // ed
		{
				if ("Timothy Murphy, June Bugs" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="JuneBugs.html" title="Timothy Murphy, June Bugs">June Bugs</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'June Bugs</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Timothy Murphy, June Bugs" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="JuneBugs.html" title="Timothy Murphy, June Bugs">June Bugs</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'June Bugs&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Chris O’Carroll" == "")	     // ed
		{
				if ("Chris O’Carroll, Hummingbird" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Hummingbird.html" title="Chris O’Carroll, Hummingbird">Hummingbird</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Hummingbird</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Chris O’Carroll, Hummingbird" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Hummingbird.html" title="Chris O’Carroll, Hummingbird">Hummingbird</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Chris O’Carroll</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Hummingbird&nbsp;';
					menustring += 'by <span class="menubyline"><i>Chris O’Carroll</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Frank Osen" == "")	     // ed
		{
				if ("Frank Osen, Lines on a Rescue Fly Trap" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="FlyTrap.html" title="Frank Osen, Lines on a Rescue Fly Trap">Lines On a Rescue Fly Trap</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Lines On a Rescue Fly Trap</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Frank Osen, Lines on a Rescue Fly Trap" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="FlyTrap.html" title="Frank Osen, Lines on a Rescue Fly Trap">Lines On a Rescue Fly Trap</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Frank Osen</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Lines On a Rescue Fly Trap&nbsp;';
					menustring += 'by <span class="menubyline"><i>Frank Osen</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Gareth Prunty" == "")	     // ed
		{
				if ("Gareth Prunty, Everything About the Wasp Except Why" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Wasp.html" title="Gareth Prunty, Everything About the Wasp Except Why">Everything About the Wasp Except Why</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Everything About the Wasp Except Why</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Gareth Prunty, Everything About the Wasp Except Why" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Wasp.html" title="Gareth Prunty, Everything About the Wasp Except Why">Everything About the Wasp Except Why</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Gareth Prunty</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Everything About the Wasp Except Why&nbsp;';
					menustring += 'by <span class="menubyline"><i>Gareth Prunty</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Philip Quinlan" == "")	     // ed
		{
				if ("Philip Quinlan, The Mantid Waits" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheMantidWaits.html" title="Philip Quinlan, The Mantid Waits">The Mantid Waits</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Mantid Waits</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Philip Quinlan, The Mantid Waits" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheMantidWaits.html" title="Philip Quinlan, The Mantid Waits">The Mantid Waits</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Philip Quinlan</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Mantid Waits&nbsp;';
					menustring += 'by <span class="menubyline"><i>Philip Quinlan</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("David Rosenthal" == "")	     // ed
		{
				if ("David Rosenthal, Pill Bug" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="PillBug.html" title="David Rosenthal, Pill Bug">Pill Bug</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Pill Bug</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("David Rosenthal, Pill Bug" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="PillBug.html" title="David Rosenthal, Pill Bug">Pill Bug</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>David Rosenthal</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Pill Bug&nbsp;';
					menustring += 'by <span class="menubyline"><i>David Rosenthal</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Don Thackrey" == "")	     // ed
		{
				if ("Don Thackrey, The Ant" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheAnt.html" title="Don Thackrey, The Ant">The Ant</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Ant</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Don Thackrey, The Ant" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheAnt.html" title="Don Thackrey, The Ant">The Ant</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Don Thackrey</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Ant&nbsp;';
					menustring += 'by <span class="menubyline"><i>Don Thackrey</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("John Whitworth" == "")	     // ed
		{
				if ("John Whitworth, I Am a Scorpion" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Scorpion.html" title="John Whitworth, I Am a Scorpion">I Am a Scorpion</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'I Am a Scorpion</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("John Whitworth, I Am a Scorpion" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Scorpion.html" title="John Whitworth, I Am a Scorpion">I Am a Scorpion</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>John Whitworth</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'I Am a Scorpion&nbsp;';
					menustring += 'by <span class="menubyline"><i>John Whitworth</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Peter Wyton" == "")	     // ed
		{
				if ("Peter Wyton, Dragonfly Dogfight" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="DragonflyDogfight.html" title="Peter Wyton, Dragonfly Dogfight">Dragonfly Dogfight</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Dragonfly Dogfight</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Peter Wyton, Dragonfly Dogfight" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="DragonflyDogfight.html" title="Peter Wyton, Dragonfly Dogfight">Dragonfly Dogfight</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Peter Wyton</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Dragonfly Dogfight&nbsp;';
					menustring += 'by <span class="menubyline"><i>Peter Wyton</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Leo Yankevich" == "")	     // ed
		{
				if ("Leo Yankevich, Migrations" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Migrations.html" title="Leo Yankevich, Migrations">Migrations</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Migrations</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Leo Yankevich, Migrations" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Migrations.html" title="Leo Yankevich, Migrations">Migrations</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Leo Yankevich</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Migrations&nbsp;';
					menustring += 'by <span class="menubyline"><i>Leo Yankevich</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Marly Youmans" == "")	     // ed
		{
				if ("Marly Youmans, The Guide to Heaven and Hell" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="GuidetoHeavenandHell.html" title="Marly Youmans, The Guide to Heaven and Hell">The Guide to Heaven and Hell</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Guide to Heaven and Hell</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Marly Youmans, The Guide to Heaven and Hell" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="GuidetoHeavenandHell.html" title="Marly Youmans, The Guide to Heaven and Hell">The Guide to Heaven and Hell</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Marly Youmans</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Guide to Heaven and Hell&nbsp;';
					menustring += 'by <span class="menubyline"><i>Marly Youmans</i></span>';
					}
		   menustring += '</p>';
	   	}
//
	document.write(menustring);

}	