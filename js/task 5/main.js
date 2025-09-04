var steps = document.getElementById("steps");
var distance = document.getElementById("distance");
var calory = document.getElementById("calory");
var stepOutput = document.getElementById("stepsOutput");
var distanceOuput = document.getElementById("distanceOutput");
var caloryOutput = document.getElementById("caloryOutput");
var addBtn = document.getElementById("addCart");
var deleteCart = document.getElementById("deleteCart");
var alert = document.getElementById("alert");
var alert2 = document.getElementById("alert2");

addBtn.addEventListener("click" , function(){
var stepConvert = Number(steps.value) || 0;
var distanceConvert = Number(distance.value) || 0;
var caloryConvert = Number(calory.value) || 0;
if(distance.value !=="" && calory.value !=="" && steps.value!==""){
stepOutput.innerText = stepConvert;
distanceOuput.innerText = distanceConvert;
caloryOutput.innerText = caloryConvert;
alert.classList.replace("d-none" , "d-block")
alert2.classList.replace("d-block" , 'd-none')
}else{
alert2.classList.replace("d-none" , "d-block");
alert.classList.replace("d-block" , "d-none")
}
})


deleteCart.addEventListener("click" , function(){
steps.value = null;
distance.value = null;
calory.value = null;
})



