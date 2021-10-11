"use strict";
window.onload = function()
{
	var slot = document.getElementById("board").children;
	console.log(slot);
	
	for(let i=0; i < 9; i++)
	{
		slot[i].setAttribute("class","square");
	}
	
	var X = 'X';
	var O = 'O';
	var myList = [0,0,0,0,0,0,0,0,0];
	var count = 0;
	var position
	
	slot[0].addEventListener('click',function()
	{
		position = 0
		clickHandler()
	});
	
	slot[1].addEventListener('click',function()
	{
		position = 1;
		clickHandler();
	});
	
	slot[2].addEventListener('click',function()
	{
		position = 2
		clickHandler();
	});

	slot[3].addEventListener('click',function()
	{
		position = 3;
		clickHandler();
	});

	slot[4].addEventListener('click',function()
	{
		position = 4;
		clickHandler();
	});

	slot[5].addEventListener('click',function()
	{
		position = 5;
		clickHandler();
	});

	slot[6].addEventListener('click',function()
	{
		position = 6;
		clickHandler();
	});
	
	slot[7].addEventListener('click',function()
	{
		position = 7;
		clickHandler();
	});
	
	slot[8].addEventListener('click',function()
	{
		position = 8;
		clickHandler();
	});
	
	function clickHandler()
	{
		if(count%2==0)
		{
			console.log(slot[position]);
			slot[position].innerHTML = X;
			slot[position].classList.add('X');
		}
		else
		{
			console.log(slot[position]);
			slot[position].innerHTML = O;
			slot[position].classList.add('O');
		}
		count++
	}

}