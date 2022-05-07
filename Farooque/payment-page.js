// details fill up
var obj = JSON.parse(localStorage.getItem("productData"));
console.log(obj);
document.querySelector("#total-mrp").innerText = obj.MRP;
document.querySelector("#prod-discount").innerText = obj.MRP - obj.price;
var a = document.querySelectorAll(".prod-price");
a[0].innerText = obj.price;

document.querySelector("#savings").innerText = obj.MRP - obj.price;

// REDIRECTING USER
var axisBank = document.querySelector("#axisBank");
axisBank.addEventListener("click", myFunction);
function myFunction() {
  // window.location.href = "cardDetails.html";
  axisBank.style.backgroundColor = "#c4c4c4";
}
var checkout = document.querySelector("#checkout-btn");
checkout.addEventListener("click", checkoutFunction);

function checkoutFunction() {
  window.location.href = "cardDetails.html";
}
