var myRow = document.getElementById("myRow");
var counter = document.getElementById("counter");
var convertCounter = Number(counter.value) || 1;
var Produts = [
{category : "Mobile" ,store : 50 , rating : "5.0 ",imageSrc : "./imgs/سامسونج.jpeg" ,  nameOfProduct : "Samsung" , price : "5000EGP" , discunt : 80} ,
{category : "Mobile" ,store : 20  ,rating : "3.0" ,imageSrc : "./imgs/سامسونج2.jpeg", nameOfProduct : "Samsung Galaxy A10s" , price : "10000EGP" , discunt : 50} ,
{category : "Mobile" ,store : 5 , rating : "4.0",imageSrc : "./imgs/ريدمي.jpeg",  nameOfProduct : "Redmi" , price : "5000EGP" , discunt : 10} ,
{category : "Mobile" ,store : 10 , rating : "3.5",imageSrc : "./imgs/Samsung-Galaxy-A10s-1.webp",  nameOfProduct : "Samsung" , price : "5000EGP" , discunt : 5} ,
{category : "Mobile" ,store : 10 , rating : "3.0", imageSrc : "./imgs/download.jpeg" , nameOfProduct : "Iphone" , price : "5000EGP" , discunt : 40} ,
{category : "Mobile" ,store : 10 , rating : "4.5",imageSrc : "./imgs/هاواوي.jpeg" , nameOfProduct : "Hawiaw" , price : "5000EGP" , discunt : 35} ,
]


var cartona = ``;
function displayProduct(){

for(var i = 0 ; i<Produts.length;i++){
cartona += `
   <div class="col-md-4">
      <div class="inner">
        <img class="w-100" src="${Produts[i].imageSrc}" alt="">
        <h2 class="fs-4">${Produts[i].nameOfProduct}</h2>
        <h4 class="text-success fw-normal">${Produts[i].category}</h4>
        <div class="d-flex align-items-center justify-content-between mb-3">
          <span class="text-black fw-normal">${Produts[i].price}</span>
          <span><i class="fa-solid fa-star text-warning"></i>${Produts[i].rating}</span>
        </div>
        <button class="btn btn-outline-danger w-100 mb-2">Delete</button>
        <button class="btn btn-outline-success w-100">Add To Cart</button>
      </div>
    </div>
`
}


myRow.innerHTML = cartona;

}


displayProduct()



var age = +window.prompt("Enter Your Age....");


if(age>=60){
console.log("Older");
}else if(age>=20){
console.log("middle");
}else{
console.log("child");
}

// age >= 60 ? console.log("older") : age>=20? console.log("middle") : console.log("child");



// const x = 10;
// x = 15 ;
// console.log(x);


let person = [
"one" ,
"two" ,
"three",
"four"
]


person[0] = 10;
console.log(person[0])