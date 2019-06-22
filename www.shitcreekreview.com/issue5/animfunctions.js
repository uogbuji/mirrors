/* 

Example Javascript Animation Techniques by Hesido.com;
4 different, reusable examples

*/
/*
if (document.getElementById && document.getElementsByTagName) {
if (window.addEventListener) window.addEventListener('load', initAnims, false);
else if (window.attachEvent) window.attachEvent('onload', initAnims);
}
*/
function initAnims() {

	//	Init fade animation without memory, single direction
		var animElements = document.getElementById("fadercontainer").getElementsByTagName("p");
		for(var i=0; i<animElements.length; i++) {
			animElements[i].onmouseover = fadeBGCol;
			}
			
		function fadeBGCol() {
			doBGFade(this,[255,100,20],[255,204,204],'rgb(255,204,204)',20,20,1);
			}

		
	//	Init fade animation with memory, both directions
		var animElements = document.getElementById("fadercontainermem").getElementsByTagName("p");
		for(var i=0; i<animElements.length; i++) {
			animElements[i].onmouseover = fadeBGColMem;
			animElements[i].onmouseout = fadeBGColRestore;
			}

		function fadeBGColMem() {
			if (!this.currentbgRGB) this.currentbgRGB = [255,204,204]; //if no mem is set, set it first;
			doBGFadeMem(this,this.currentbgRGB,[255,100,20],4,20,1);
			}

		function fadeBGColRestore() {
			if (!this.currentbgRGB) return;	//avoid error if mouseout an element occurs before the mosueover
												//(e.g. the pointer already in the object when onload)
			doBGFadeMem(this,this.currentbgRGB,[255,204,204],12,20,1);
			}
			
	//	Init size animation with memory, both directions
		var animElements = document.getElementById("resizercontainer").getElementsByTagName("p")
		for(var i=0; i<animElements.length; i++) {
			animElements[i].onmouseover = widthChange;
			animElements[i].onmouseout = widthRestore;
			}

		function widthChange() {
			if (!this.currentWidth) this.currentWidth = 150; //if no mem is set, set it first;
			doWidthChangeMem(this,this.currentWidth,170,10,10,0.333);
			}

		function widthRestore() {
			if (!this.currentWidth) return;	//avoid error if mouseout an element occurs before the mosueover
												//(e.g. the pointer already in the object when onload)
			doWidthChangeMem(this,this.currentWidth,150,10,10,0.5);
			}
	
	//	Init motion animation
		var moveIt = document.getElementById('moveit');
		if (moveIt != null) moveIt.onclick = moveToBottom;
		
		function moveToBottom() {
			if (!this.currentPos) this.currentPos = [15,15]; //if no mem is set, set it first;
			doPosChangeMem(this,this.currentPos,[Math.floor(Math.random()*230+15),Math.floor(Math.random()*145)+15],20,20,0.5);
				//move to a random position for demonstration
			}

		
		
	}

//*******************

function doBGFade(elem,startRGB,endRGB,finalColor,steps,intervals,powr) {
//BG Fader by www.hesido.com
	if (elem.bgFadeInt) window.clearInterval(elem.bgFadeInt);
	var actStep = 0;
	elem.bgFadeInt = window.setInterval(
		function() {
			elem.style.backgroundColor = "rgb("+
				easeInOut(startRGB[0],endRGB[0],steps,actStep,powr)+","+
				easeInOut(startRGB[1],endRGB[1],steps,actStep,powr)+","+
				easeInOut(startRGB[2],endRGB[2],steps,actStep,powr)+")";
			actStep++;
			if (actStep > steps) {
			elem.style.backgroundColor = finalColor;
			window.clearInterval(elem.bgFadeInt);
			}
		}
		,intervals)
}


//*******************

function doBGFadeMem(elem,startRGB,endRGB,steps,intervals,powr) {
//BG Fader with Memory by www.hesido.com
	if (elem.bgFadeMemInt) window.clearInterval(elem.bgFadeMemInt);
	var actStep = 0;
	elem.bgFadeMemInt = window.setInterval(
		function() {
			elem.currentbgRGB = [
				easeInOut(startRGB[0],endRGB[0],steps,actStep,powr),
				easeInOut(startRGB[1],endRGB[1],steps,actStep,powr),
				easeInOut(startRGB[2],endRGB[2],steps,actStep,powr)
				];
			elem.style.backgroundColor = "rgb("+
				elem.currentbgRGB[0]+","+
				elem.currentbgRGB[1]+","+
				elem.currentbgRGB[2]+")";
			actStep++;
			if (actStep > steps) window.clearInterval(elem.bgFadeMemInt);
		}
		,intervals)
}

//*******************

function doWidthChangeMem(elem,startWidth,endWidth,steps,intervals,powr) {
//Width changer with Memory by www.hesido.com
	if (elem.widthChangeMemInt) window.clearInterval(elem.widthChangeMemInt);
	var actStep = 0;
	elem.widthChangeMemInt = window.setInterval(
		function() {
			elem.currentWidth = easeInOut(startWidth,endWidth,steps,actStep,powr);
			elem.style.width = elem.currentWidth+"px";
			actStep++;
			if (actStep > steps) window.clearInterval(elem.widthChangeMemInt);
		}
		,intervals)

}

//*******************

function doPosChangeMem(elem,startPos,endPos,steps,intervals,powr) {
//Position changer with Memory by www.hesido.com
	if (elem.posChangeMemInt) window.clearInterval(elem.posChangeMemInt);
	var actStep = 0;
	elem.posChangeMemInt = window.setInterval(
		function() {
			elem.currentPos = [
				easeInOut(startPos[0],endPos[0],steps,actStep,powr),
				easeInOut(startPos[1],endPos[1],steps,actStep,powr)
				];
			elem.style.left = elem.currentPos[0]+"px";
			elem.style.top = elem.currentPos[1]+"px";
			actStep++;
			if (actStep > steps) window.clearInterval(elem.posChangeMemInt);
		}
		,intervals)

}

//*******************

function easeInOut(minValue,maxValue,totalSteps,actualStep,powr) {
//Generic Animation Step Value Generator By www.hesido.com
	var delta = maxValue - minValue;
	var stepp = minValue+(Math.pow(((1 / totalSteps)*actualStep),powr)*delta);
	return Math.ceil(stepp)
}
