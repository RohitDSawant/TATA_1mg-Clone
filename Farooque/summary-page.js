// details fill up
var obj = JSON.parse(localStorage.getItem("productData"));
console.log(obj);
document.querySelector("#total-mrp").innerText = obj.MRP;
document.querySelector("#prod-discount").innerText = obj.MRP - obj.price;
var a = document.querySelectorAll(".prod-price");
a[0].innerText = obj.price;
a[1].innerText = obj.price;
document.querySelector("#savings").innerText = obj.MRP - obj.price;
// REDIRECT USER
var payment = document.querySelector("#payment-btn");
payment.addEventListener("click", paymentFunction);

function paymentFunction() {
  window.location.href = "payment-page.html";
}
