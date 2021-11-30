var categoryPrice = 29;
var persons = 2;
var meals = 3;
var delivery = 20;
var price = 0;
var totalPrice = 0;

var priceElement = document.getElementById("price");
var totalPriceElement = document.getElementById("totalPrice");
var mealsElement = document.getElementById("output");
var pId = document.getElementById("pId");

function categoryValue(e) {
  categoryPrice = e.target.value;
  setPrice();
}

function personsValue(e) {
  persons = e.target.value;
  setPrice();
}

function mealsValue() {
  meals = document.getElementById("slider").value;
  mealsElement.innerHTML = meals;

  setPrice();
}

function setPrice() {
  price = persons * (meals * categoryPrice);
  totalPrice = price + delivery;

  priceElement.innerHTML = price;
  totalPriceElement.innerHTML = totalPrice;

  pId.innerHTML = meals + " måltider for " + persons + " personer per uge";
}
setPrice();

function highlightedFoodChoice(id) {
    // Remove all classes
  document.getElementById("vegetarisk").classList.remove("highlightedChoice");
  document.getElementById("fisk").classList.remove("highlightedChoice");
  document.getElementById("kaloriefattigt").classList.remove("highlightedChoice");
  document.getElementById("boernevenligt").classList.remove("highlightedChoice");
  document.getElementById("glutenfrit").classList.remove("highlightedChoice");
  document.getElementById("proteinrigt").classList.remove("highlightedChoice");

    // Set highlight class on the clicked option
  document.getElementById(id).classList.add("highlightedChoice");
}


function highlightedPersonChoice(id) {
    // Remove all classes
  document.getElementById("1").classList.remove("highlightedChoice");
  document.getElementById("2").classList.remove("highlightedChoice");
  document.getElementById("3").classList.remove("highlightedChoice");
  document.getElementById("4").classList.remove("highlightedChoice");

    // Set highlight class on the clicked option
  document.getElementById(id).classList.add("highlightedChoice");
}