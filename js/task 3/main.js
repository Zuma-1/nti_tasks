let users = [ 
{name: "Ali", age: 22}, 
{name: "Sara", age: 28}, 
{name: "Mona", age: 35}, 
{name: "Ahmed", age: 45} 
]; 



var reduceOfUser = users.reduce((acc,us)=>{
if(us.age < 25) {
acc["Young"] = acc["Young"] || [];
acc["Young"].push(us);
}else if (us.age > 40){
acc["old"] = acc["old"] || [];
acc["old"].push(us)
}else if( 25 <= us.age <= 40 ) {
acc["middle"] = acc["middle"] || [];
acc["middle"].push(us)
}

return acc;
} , {})


console.log(reduceOfUser);





let categories = [ 
{category: "Fruits", products: ["Apple", "Banana", "Apple"]}, 
{category: "Vegetables", products: ["Carrot", "Apple"]}, 
{category: "Dairy", products: ["Milk", "Cheese"]} 
];


var flatArr = []
categories.forEach((value , index)=>{
flatArr.push(value.products.flat(Infinity));
})






