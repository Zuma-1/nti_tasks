function CollectData() {
  var productName = document.getElementById("productName");
  var productPrice = document.getElementById("productPrice");
  var productDescription = document.getElementById("productDescription");
  var result = document.getElementById("result");
  var cartona = "";
  cartona += `product Name : ${productName.value} <br><br>`;
  cartona += `product Price : ${productPrice.value} <br><br>`;
  cartona += `product Description : ${productDescription.value} <br><br>`;
  result.innerHTML += cartona;
  productName.value = "";
  productPrice.value = null;
  productDescription.value = null;
}
