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
  
	   if ("Mark Allinson" == "")	     // ed
		{
				if ("Mark Allinson, Emergency" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Emergency.html" title="Mark Allinson, Emergency">Emergency</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Emergency</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Mark Allinson, Emergency" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Emergency.html" title="Mark Allinson, Emergency">Emergency</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Mark Allinson</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Emergency&nbsp;';
					menustring += 'by <span class="menubyline"><i>Mark Allinson</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Maureen Almond" == "")	     // ed
		{
				if ("Maureen Almond, Ode to Poets (as a last resort)" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="OdetoPoets.html" title="Maureen Almond, Ode to Poets (as a last resort)">Ode to Poets (as a last resort)</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Ode to Poets (as a last resort)</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Maureen Almond, Ode to Poets (as a last resort)" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="OdetoPoets.html" title="Maureen Almond, Ode to Poets (as a last resort)">Ode to Poets (as a last resort)</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Maureen Almond</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Ode to Poets (as a last resort)&nbsp;';
					menustring += 'by <span class="menubyline"><i>Maureen Almond</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("C.B. Anderson" == "")	     // ed
		{
				if ("C.B. Anderson, Our Father" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="OurFather.html" title="C.B. Anderson, Our Father">Our Father</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Our Father</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("C.B. Anderson, Our Father" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="OurFather.html" title="C.B. Anderson, Our Father">Our Father</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>C.B. Anderson</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Our Father&nbsp;';
					menustring += 'by <span class="menubyline"><i>C.B. Anderson</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Jared Carter" == "")	     // ed
		{
				if ("Jared Carter" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Discovery.html" title="Jared Carter">Discovery</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Discovery</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Jared Carter" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Discovery.html" title="Jared Carter">Discovery</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Jared Carter</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Discovery&nbsp;';
					menustring += 'by <span class="menubyline"><i>Jared Carter</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Temple Cone" == "")	     // ed
		{
				if ("Temple Cone, Nettles" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Nettles.html" title="Temple Cone, Nettles">Nettles</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Nettles</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Temple Cone, Nettles" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Nettles.html" title="Temple Cone, Nettles">Nettles</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Temple Cone</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Nettles&nbsp;';
					menustring += 'by <span class="menubyline"><i>Temple Cone</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Nicola Daly" == "")	     // ed
		{
				if ("Nicola Daly, And The Men Kept Coming" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="AndTheMenKeptComing.html" title="Nicola Daly, And The Men Kept Coming">And The Men Kept Coming</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'And The Men Kept Coming</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Nicola Daly, And The Men Kept Coming" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="AndTheMenKeptComing.html" title="Nicola Daly, And The Men Kept Coming">And The Men Kept Coming</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Nicola Daly</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'And The Men Kept Coming&nbsp;';
					menustring += 'by <span class="menubyline"><i>Nicola Daly</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Ann Drysdale" == "")	     // ed
		{
				if ("Ann Drysdale, Metre-wanker" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="ShakespeareinLove.html" title="Ann Drysdale, Metre-wanker">Shakespeare in Love</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Shakespeare in Love</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Ann Drysdale, Metre-wanker" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="ShakespeareinLove.html" title="Ann Drysdale, Metre-wanker">Shakespeare in Love</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ann Drysdale</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Shakespeare in Love&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ann Drysdale</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Louis Gallo" == "")	     // ed
		{
				if ("Louis Gallo, The Despair That Knows It Is Despair" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="TheDespairThatKnows.html" title="Louis Gallo, The Despair That Knows It Is Despair">The Despair That Knows It Is Despair</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'The Despair That Knows It Is Despair</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Louis Gallo, The Despair That Knows It Is Despair" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="TheDespairThatKnows.html" title="Louis Gallo, The Despair That Knows It Is Despair">The Despair That Knows It Is Despair</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Louis Gallo</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'The Despair That Knows It Is Despair&nbsp;';
					menustring += 'by <span class="menubyline"><i>Louis Gallo</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Ray Givans" == "")	     // ed
		{
				if ("Ray Givans, Doctor Donne’s Blessing" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="DoctorDonne_sBlessing.html" title="Ray Givans, Doctor Donne’s Blessing">Doctor Donne’s Blessing</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Doctor Donne’s Blessing</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Ray Givans, Doctor Donne’s Blessing" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="DoctorDonne_sBlessing.html" title="Ray Givans, Doctor Donne’s Blessing">Doctor Donne’s Blessing</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ray Givans</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Doctor Donne’s Blessing&nbsp;';
					menustring += 'by <span class="menubyline"><i>Ray Givans</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Patricia Wallace Jones" == "")	     // ed
		{
				if ("Patricia Wallace Jones, Chagall" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Chagall.html" title="Patricia Wallace Jones, Chagall">Chagall</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Chagall</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Patricia Wallace Jones, Chagall" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Chagall.html" title="Patricia Wallace Jones, Chagall">Chagall</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Patricia Wallace Jones</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Chagall&nbsp;';
					menustring += 'by <span class="menubyline"><i>Patricia Wallace Jones</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Patricia Wallace Jones" == "")	     // ed
		{
				if ("Patricia Wallace Jones, Days She Was Queen" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="DaysSheWasQueen.html" title="Patricia Wallace Jones, Days She Was Queen">Days She Was Queen</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Days She Was Queen</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Patricia Wallace Jones, Days She Was Queen" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="DaysSheWasQueen.html" title="Patricia Wallace Jones, Days She Was Queen">Days She Was Queen</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Patricia Wallace Jones</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Days She Was Queen&nbsp;';
					menustring += 'by <span class="menubyline"><i>Patricia Wallace Jones</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Jan Iwaskiewicz" == "")	     // ed
		{
				if ("Jan Iwaszkiewicz, Beneath Julia’s Clothes" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="BeneathJulia_sClothes.html" title="Jan Iwaszkiewicz, Beneath Julia’s Clothes">Beneath Julia’s Clothes</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Beneath Julia’s Clothes</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Jan Iwaszkiewicz, Beneath Julia’s Clothes" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="BeneathJulia_sClothes.html" title="Jan Iwaszkiewicz, Beneath Julia’s Clothes">Beneath Julia’s Clothes</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Jan Iwaskiewicz</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Beneath Julia’s Clothes&nbsp;';
					menustring += 'by <span class="menubyline"><i>Jan Iwaskiewicz</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("KJ" == "")	     // ed
		{
				if ("KJ, Unaddressed" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Unaddressed.html" title="KJ, Unaddressed">Unaddressed</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Unaddressed</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("KJ, Unaddressed" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Unaddressed.html" title="KJ, Unaddressed">Unaddressed</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>KJ</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Unaddressed&nbsp;';
					menustring += 'by <span class="menubyline"><i>KJ</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Abby Millager" == "")	     // ed
		{
				if ("Abby Millager, In Which I Employ Anatomy to Enact Myself" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="InWhichIEmployAnatomytoEn.html" title="Abby Millager, In Which I Employ Anatomy to Enact Myself">In Which I Employ Anatomy to Enact Myself</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'In Which I Employ Anatomy to Enact Myself</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Abby Millager, In Which I Employ Anatomy to Enact Myself" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="InWhichIEmployAnatomytoEn.html" title="Abby Millager, In Which I Employ Anatomy to Enact Myself">In Which I Employ Anatomy to Enact Myself</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Abby Millager</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'In Which I Employ Anatomy to Enact Myself&nbsp;';
					menustring += 'by <span class="menubyline"><i>Abby Millager</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Rick Mullin" == "")	     // ed
		{
				if ("Rick Mullin, Triduum" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Triduum.html" title="Rick Mullin, Triduum">Triduum</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Triduum</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Rick Mullin, Triduum" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Triduum.html" title="Rick Mullin, Triduum">Triduum</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Rick Mullin</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Triduum&nbsp;';
					menustring += 'by <span class="menubyline"><i>Rick Mullin</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Timothy Murphy" == "")	     // ed
		{
				if ("Timothy Murphy, Small Game on the Prairie" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="SmallGameonthePrairie-2.html" title="Timothy Murphy, Small Game on the Prairie">Small Game on the Prairie</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Small Game on the Prairie</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Timothy Murphy, Small Game on the Prairie" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="SmallGameonthePrairie-2.html" title="Timothy Murphy, Small Game on the Prairie">Small Game on the Prairie</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Small Game on the Prairie&nbsp;';
					menustring += 'by <span class="menubyline"><i>Timothy Murphy</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Frank Osen" == "")	     // ed
		{
				if ("Frank Osen, Mindful" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Mindful.html" title="Frank Osen, Mindful">Mindful</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Mindful</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Frank Osen, Mindful" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Mindful.html" title="Frank Osen, Mindful">Mindful</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Frank Osen</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Mindful&nbsp;';
					menustring += 'by <span class="menubyline"><i>Frank Osen</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("James S. Wilk" == "")	     // ed
		{
				if ("James S. Wilk, Cruising" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="Cruising.html" title="James S. Wilk, Cruising">Cruising</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Cruising</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("James S. Wilk, Cruising" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="Cruising.html" title="James S. Wilk, Cruising">Cruising</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>James S. Wilk</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Cruising&nbsp;';
					menustring += 'by <span class="menubyline"><i>James S. Wilk</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Peter Wyton" == "")	     // ed
		{
				if ("Peter Wyton, Observe the Muslin Footman" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="ObservetheMuslinFootman.html" title="Peter Wyton, Observe the Muslin Footman">Observe the Muslin Footman</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Observe the Muslin Footman</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Peter Wyton, Observe the Muslin Footman" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="ObservetheMuslinFootman.html" title="Peter Wyton, Observe the Muslin Footman">Observe the Muslin Footman</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Peter Wyton</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Observe the Muslin Footman&nbsp;';
					menustring += 'by <span class="menubyline"><i>Peter Wyton</i></span>';
					}
		   menustring += '</p>';
	   	}
// 
  
	   if ("Peter Wyton" == "")	     // ed
		{
				if ("Peter Wyton, Suspicion Falls On The Seat Of The Hamza" != thisteaser) //don't link to self
					{
					menustring += '<p class="menulink" style="margin-bottom: 1.0em;">';
		            menustring += '<a href="SuspicionFallsOnTheSeatOf.html" title="Peter Wyton, Suspicion Falls On The Seat Of The Hamza">Suspicion Falls On The Seat Of The Hamza</a></p>'; 
					}
				else
				   {
				   menustring += '<p class="selected" style="margin-bottom: 1.0em;">';
		            menustring += 'Suspicion Falls On The Seat Of The Hamza</p>'; 
				   }	
					
		}
		else //author name present
		{
			 if ("Peter Wyton, Suspicion Falls On The Seat Of The Hamza" != thisteaser) //don't link to self
					{
			        menustring+= '<p class="menulink">';
                    menustring += '<a href="SuspicionFallsOnTheSeatOf.html" title="Peter Wyton, Suspicion Falls On The Seat Of The Hamza">Suspicion Falls On The Seat Of The Hamza</a>&nbsp;';
					menustring += 'by <span class="menubyline"><i>Peter Wyton</i></span>';
			       }
			else	
					{
					menustring+= '<p class="selected">';
                    menustring += 'Suspicion Falls On The Seat Of The Hamza&nbsp;';
					menustring += 'by <span class="menubyline"><i>Peter Wyton</i></span>';
					}
		   menustring += '</p>';
	   	}
//
	document.write(menustring);

}	