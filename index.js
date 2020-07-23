var numberRandom1=Math.floor(Math.random() * 6)+1;

var imageSource1= "dice" + numberRandom1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src" , imageSource1);


var numberRandom2=Math.floor(Math.random() * 6)+1;

var imageSource2= "dice" + numberRandom2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src" , imageSource2);






if(numberRandom1>numberRandom2)
{
	document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}
else if(numberRandom2>numberRandom1)
{
	document.querySelector("h1").innerHTML="Player 2 Wins🚩";
}
else if(numberRandom2===numberRandom1)
{
	document.querySelector("h1").innerHTML="Draw";
}