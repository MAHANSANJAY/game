var randomnumber1=Math.floor(Math.random()*6)+1;
var random="images/"+"dice"+randomnumber1+".png";
var value=document.querySelectorAll("img")[0];
var result=value.setAttribute("src",random);


var randomnumber2=Math.floor(Math.random()*6)+1;

var random1="images/"+"dice"+randomnumber2+".png";
var value1=document.querySelectorAll("img")[1];
var result2=value1.setAttribute("src",random1);
if(randomnumber1 > randomnumber2)
{
  document.querySelectorAll("h1")[0].innerHTML="PLAYER1 WINS";
}
else if(randomnumber1 < randomnumber2)
{
  document.querySelectorAll("h1")[0].innerHTML="PLAYER2 WINS";
}
else
 {
  document.querySelectorAll("h1")[0].innerHTML="draw";
}
