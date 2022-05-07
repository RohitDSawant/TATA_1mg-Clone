// // DATA
// var data = {
//   name: "Organic India Ashwagandha Veg Capsule",
//   price: 195,
//   detail: "bottle of 60 vegicaps",
//   mrp: 205,
// };
// localStorage.setItem("productData", JSON.stringify(data));
var obj = JSON.parse(localStorage.getItem("productData"));
console.log(obj);
var actualMrp = 205;
var actualPrice = 195;
// CHANGING THE PRODUCTS DATA
var prod_name = document.querySelector("#prod-name");
prod_name.innerText = obj.name;
var prod_price = document.querySelectorAll(".prod-price");
prod_price[0].innerText = obj.price;
prod_price[1].innerText = obj.price;
var prod_detail = document.querySelector("#prod-detail");
prod_detail.innerText = obj.detail;
var prod_mrp = document.querySelectorAll(".prod-mrp");
prod_mrp[0].innerText = obj.mrp;
prod_mrp[1].innerText = obj.mrp;
var prod_discount = document.querySelector("#prod-discount");
var prodDiscountValue = obj.mrp - obj.price;
prod_discount.innerText = prodDiscountValue;
var savings = document.querySelector("#savings");
savings.innerText = prodDiscountValue;
var counter_value = JSON.parse(localStorage.getItem("prod-count")) || 1;
document.querySelector("#counter-value").innerText = counter_value;
// COUNTER DECREASE AND CHANGING

document.querySelector("#decrease").addEventListener("click", function () {
  counter_value--;
  obj.mrp -= actualMrp;
  obj.price -= actualPrice;
  localStorage.setItem("productData", JSON.stringify(obj));
  document.querySelector("#counter-value").innerText = counter_value;
  // change the price
  // mrp , discount , to be paid changed
  prod_mrp[0].innerText = obj.mrp;
  prod_mrp[1].innerText = obj.mrp;

  prod_price[0].innerText = obj.price;
  prod_price[1].innerText = obj.price;
  // prodDiscountValue = prod_mrp[0].innerText - prod_price[0].innerText;
  prodDiscountValue = obj.mrp - obj.price;
  prod_discount.innerText = prodDiscountValue;
  savings.innerText = prod_discount.innerText;
  // set to local storage
  localStorage.setItem("prod-count", counter_value);
});
// COUNTER INCREASE
var counter_value = JSON.parse(localStorage.getItem("prod-count")) || 1;
document.querySelector("#increase").addEventListener("click", function () {
  counter_value++;
  obj.mrp += actualMrp;
  obj.price += actualPrice;
  localStorage.setItem("productData", JSON.stringify(obj));
  // changing INNER TEXT
  document.querySelector("#counter-value").innerText = counter_value;
  // change the mrp
  prod_mrp[0].innerText = obj.mrp;
  prod_mrp[1].innerText = obj.mrp;
  // change the price
  prod_price[0].innerText = obj.price;
  prod_price[1].innerText = obj.price;

  prodDiscountValue = obj.mrp - obj.price;
  prod_discount.innerText = prodDiscountValue;
  // prod_discount.innerText = prod_mrp[0].innerText - prod_price[0].innerText;
  savings.innerText = prod_discount.innerText;
  // set to local storage
  localStorage.setItem("prod-count", counter_value);
});
// CHECKOUT LINKED
var checkout = document.querySelector("#checkout-btn");
checkout.addEventListener("click", checkoutFunction);

function checkoutFunction() {
  console.log("clicked");
  window.location.href = "summary-page.html";
}
// STYLING
document.querySelector("#decrease").style.cursor = "pointer";
document.querySelector("#increase").style.cursor = "pointer";
document.querySelector("#checkout-btn").style.cursor = "pointer";
// new changes

var applyCoupon = document.querySelector("#applyCoupon");
applyCoupon.addEventListener("click", applyCouponFunction);
function applyCouponFunction() {
  applyCoupon.innerHTML = "";
  var input = document.createElement("input");
  input.placeholder = "Enter the Code";
  input.value = "discount-10";
  var btn = document.createElement("button");
  btn.innerText = "Apply";
  applyCoupon.append(input, btn);

  btn.addEventListener("click", applyDiscountFunction);
  function applyDiscountFunction() {
    var a = document.querySelectorAll(".prod-price");
    prodDiscountValue -= 10;
    obj.price -= 10;
    a[0].innerText = obj.price;
    a[1].innerText = obj.price;
    document.querySelector("#prod-discount").innerText = prodDiscountValue + 20;
    savings.innerText = prodDiscountValue + 20;
    localStorage.setItem("productData", JSON.stringify(obj));
  }
}
