$(document).ready(function(){
    // alert("ready")

})
let pizza = document.getElementByClassName("pizza")
let number = document.getElementsById("numPizza")
let sizePizza = document.getElementsByClassName("size")
let crust = document.getElementsByClassName("crust")
let topping = document.getElementsByClassName("topping")

if (pizza = document.getElementByClassName("pizza").selected.value){
    return true
}


if (number = document.getElementsById("numPizza").selected.value)


function Order(pizza, number, size, topping, crust){
    this.pizza = pizza;
    this.number = number;
    this.size = size;
    this.topping = topping;
    this.crust = crust;
}



