"use strict";
window.onload = function()
{
	var slot = document.getElementById("board").children;
	console.log(slot);
	
	for(let i=0; i < 9; i++)
	{
		slot[i].setAttribute("class","square");
	}
}


