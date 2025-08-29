var descInput = document.getElementById("descInput");
var count = document.getElementById("timeInput");
var btn = document.getElementById("btn");
var showResult = document.getElementById("showResult");
var showCounter = document.getElementById("showCounter");
function showInterval(){
var counter = +count.value;
var clear = setInterval(function(){
counter--;
showResult.innerText = descInput.value;
showCounter.innerText = counter;
if(count == 0){
clearInterval(clear)
}


}, 5000 )





}
