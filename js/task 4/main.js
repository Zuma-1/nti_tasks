var myRow = document.getElementById("myRow");
var counter = document.getElementById("counter");

var Produts = [
{category : "Mobile" ,store : 8 , countInCart : 0  ,rating : "5.0 ",imageSrc : "./imgs/سامسونج.jpeg" ,  nameOfProduct : "Samsung" , price : "5000EGP" , discunt : 80} ,
{category : "Mobile" ,store : 9   ,countInCart : 0 ,rating : "3.0" ,imageSrc : "./imgs/سامسونج2.jpeg", nameOfProduct : "Samsung Galaxy A10s" , price : "10000EGP" , discunt : 50} ,
{category : "Mobile" ,store : 2 , countInCart : 0  ,rating : "4.0",imageSrc : "./imgs/ريدمي.jpeg",  nameOfProduct : "Redmi" , price : "5000EGP" , discunt : 10} ,
{category : "Mobile" ,store : 20 , countInCart : 0 , rating : "3.5",imageSrc : "./imgs/Samsung-Galaxy-A10s-1.webp",  nameOfProduct : "Samsung" , price : "5000EGP" , discunt : 5} ,
{category : "Mobile" ,store : 7 , countInCart : 0 , rating : "3.0", imageSrc : "./imgs/download.jpeg" , nameOfProduct : "Iphone" , price : "5000EGP" , discunt : 40} ,
{category : "Mobile" ,store : 3 ,countInCart : 0 , rating : "4.5",imageSrc : "./imgs/هاواوي.jpeg" , nameOfProduct : "Hawiaw" , price : "5000EGP" , discunt : 35} ,
]


var cartona = ``;
function displayProduct(){

for(var i = 0 ; i<Produts.length;i++){
cartona += `
   <div class="col-md-4">
      <div class="inner position-relative">
        <img class="w-100" src="${Produts[i].imageSrc}" alt="">
        <h2 class="fs-4">${Produts[i].nameOfProduct}</h2>
        <h4 class="text-success fw-normal">${Produts[i].category}</h4>
        <span class="bg-info p-2 position-absolute top-0 end-0">Sale ${Produts[i].discunt}%</span>
        <div class="d-flex align-items-center justify-content-between mb-3">
          <span class="text-black fw-normal">${Produts[i].price}</span>
          <span><i class="fa-solid fa-star text-warning"></i>${Produts[i].rating}</span>
        </div>
        <button class="btn btn-outline-success w-100" onclick="addToCart(${i})">Add To Cart</button>
      </div>
    </div>
`
}


myRow.innerHTML = cartona;

}


displayProduct();



var cartArr = [];
var convertCounter;
var countOfProduct = 0;
function addToCart(index){
cartArr.push(Produts[index]);
var newCartArr = cartArr.find(function(product){
  var existing = product.nameOfProduct == product[index] ? product[index] : prod
})
};


if(localStorage.getItem("counter")){
counter.innerText = localStorage.getItem("counter");
}else{
// counter.innerText = convertCounter;
}





// var MyCart = document.getElementById("cartParent")
// function showCart(){
// localStorage.setItem("cartArr" , JSON.stringify(cartArr))
// console.log("hello");
// var cartona2 = "";
// for(var i = 0 ; i<cartArr.length ; i++){
// cartona2 += `
//    <div class="productInCart border bg-white border-1 border-secondary text-center p-2 rounded">
//       <img style="height:200px; object-fit:cover;" src="${cartArr[i].imageSrc}" class="w-100 " alt="">
//       <div class="priceRating  p-2 d-flex align-items-center justify-content-between">
//         <span>${cartArr[i].price}</span>
//         <span><i class="fa-solid fa-star text-warning fa-sm"></i>${cartArr[i].rating}</span>
//       </div>
//       <div class="btns d-flex  p-2  align-items-center justify-content-center column-gap-2">
//         <div class="btn btn-outline-success" onclick="increamentInCart(${i})">+</div>
//         <div class="counterInCart text-black" class="">${cartArr[i].countInCart}</div>
//         <div class="btn btn-outline-danger" onclick="decreament(${i})">-</div>
//       </div>
//     </div>
// `
// }

// MyCart.innerHTML = cartona2;


// }



// if(localStorage.getItem("cartArr")){
// cartArr = JSON.parse(localStorage.getItem("cartArr"));
// console.log(cartArr)
// showCart()
// }else{
// cartArr = []
// }


// localStorage.clear()


// function increamentInCart(index){
// if(cartArr[index].store > cartArr[index].countInCart){
// console.log("store bigger");
// cartArr[index].countInCart = ++(cartArr[index].countInCart);
// var cartReduce = cartArr.reduce(function(acc,item){
//  acc +=item.countInCart

//  return acc;
// } , 0);
// counter.innerText = cartReduce;
// showCart();
// localStorage.setItem("counter" , counter.innerText )
// }


// }



// function decreament(index){

// cartArr[index].countInCart = --(cartArr[index].countInCart);

// if(cartArr[index].countInCart <= 0){
// cartArr[index].countInCart = 0;
// var cartReduce = cartArr.reduce(function(acc,item){
//  acc +=item.countInCart

//  return acc;
// } , 0);
// console.log(cartReduce)
// counter.innerText = cartReduce;
// showCart();
// localStorage.setItem("counter" , counter.innerText)
// }



// }






// if(localStorage.getItem("counter")){
// counter.innerText = localStorage.getItem("counter");
// showCart()
// }else{
// counter.innerText = 0
// }
