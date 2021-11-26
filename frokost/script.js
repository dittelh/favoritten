var categoryPrice = 29;
var persons = 2;
var meals = 3;
var delivery = 20;
var price = 0;
var totalPrice = 0;

var priceElement = document.getElementById('price');
var totalPriceElement = document.getElementById('totalPrice')
var mealsElement = document.getElementById('output');
var pId = document.getElementById('pId');


function categoryValue(e){

    categoryPrice = e.target.value;
    setPrice();
}

function personsValue(e){
    persons = e.target.value;
    setPrice();
}

function mealsValue(){
    meals = document.getElementById("slider").value;
    mealsElement.innerHTML = meals;

    setPrice();
}

function setPrice(){
    price = persons * (meals * categoryPrice);
    totalPrice = price + delivery

    priceElement.innerHTML = price;
    totalPriceElement.innerHTML = totalPrice

    pId.innerHTML = meals + " måltider for " + persons + " personer per uge";
}
setPrice();