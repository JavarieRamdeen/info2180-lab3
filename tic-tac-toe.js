"use strict";
window.onload = function()
{
	var slot = document.getElementById("board").children;
	var state = document.getElementById("status");
	console.log(slot);
	
	for(let i=0; i < 9; i++)
	{
		slot[i].setAttribute("class","square");
	}
	
	var myList = [0,1,2,3,4,5,6,7,8];
	var count = 0;
	var position;
	
	
	slot[0].onmouseover = function() {position = 0; mouseOver()};
	slot[0].onmouseout = function() {position = 0; mouseOut()};
	slot[0].addEventListener('click',function(){position = 0;clickHandler();});
	
	slot[1].onmouseover = function() {position = 1; mouseOver()};
	slot[1].onmouseout = function() {position = 1; mouseOut()};
	slot[1].addEventListener('click',function(){position = 1;clickHandler();});
	
	slot[2].onmouseover = function() {position = 2; mouseOver()};
	slot[2].onmouseout = function() {position = 2; mouseOut()};
	slot[2].addEventListener('click',function(){position = 2;clickHandler();});

	slot[3].onmouseover = function() {position = 3; mouseOver()};
	slot[3].onmouseout = function() {position = 3; mouseOut()};
	slot[3].addEventListener('click',function(){position = 3;clickHandler();});

	slot[4].onmouseover = function() {position = 4; mouseOver()};
	slot[4].onmouseout = function() {position = 4; mouseOut()};
	slot[4].addEventListener('click',function(){position = 4;clickHandler();});

	slot[5].onmouseover = function() {position = 5; mouseOver()};
	slot[5].onmouseout = function() {position = 5; mouseOut()};
	slot[5].addEventListener('click',function(){position = 5;clickHandler();});

	slot[6].onmouseover = function() {position = 6; mouseOver()};
	slot[6].onmouseout = function() {position = 6; mouseOut()};
	slot[6].addEventListener('click',function(){position = 6;clickHandler();});

	slot[7].onmouseover = function() {position = 7; mouseOver()};
	slot[7].onmouseout = function() {position = 7; mouseOut()};
	slot[7].addEventListener('click',function(){position = 7;clickHandler();});
	
	slot[8].onmouseover = function() {position = 8; mouseOver()};
	slot[8].onmouseout = function() {position = 8; mouseOut()};
	slot[8].addEventListener('click',function(){position = 8;clickHandler();});	
	
	
	function clickHandler()
	{
		if (count%2==0)
		{
			console.log(slot[position]);
			slot[position].innerHTML = "X";
			slot[position].classList.add('X');
			myList[position]="X";
			console.log(myList);
			if (Winner() == true)
			{
				state.innerHTML = "Congratulations! X is the Winner!"
			}
		}
		else
		{
			console.log(slot[position]);
			slot[position].innerHTML = "O";
			slot[position].classList.add('O');
			myList[position]="O";
			console.log(myList);
			if (Winner() == true)
			{
				state.innerHTML = "Congratulations! O is the Winner!"
			}
		}
		count++;
	}
	
	function mouseOver() 
	{
		slot[position].classList.add('hover');
	}

	function mouseOut() 
	{
		slot[position].classList.remove('hover');
	}
	
	function Winner()
	{
		if ((checkRows()==true) || (checkDiaganols()==true) || (checkColoumns()== true))
		{
			return true
		}
		else
		{
			return false
		}
	}
	
	function checkRows()
	{
		if ((myList[0] == myList[1] && myList[1] == myList[2]) || (myList[3] == myList[4] && myList[4]== myList[5]) || (myList[6] == myList[7] && myList[7] == myList[8]))
		{
			return true;

		}
		return false
	}
	function checkDiaganols()
	{
		if ((myList[0] == myList[4] && myList[4] == myList[8]) || (myList[2] == myList[4] && myList[4] == myList[6]))
		{
			return true;
		}
		return false
	}
	function checkColoumns()
	{
		if ((myList[0] == myList[3] && myList[3] == myList[6]) || (myList[1] == myList[4] && myList[4]== myList[7]) || (myList[2] == myList[5] && myList[5] == myList[8]))
		{
			return true;
		}
		return false
	}
}