let total = 0
function Order( size, topping, crust){
    
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.cost = 0
}
Order.prototype.totalAmount = function(){

    switch (this.pizza){
        case 'large':
            this.cost = 800;
            break;
        case 'medium':
            this.cost = 600;
            break;
        case 'small':
            this.cost = 400;
            break;
        default:
            break;
    }

    switch(this.topping){
        case 'pepparoni':
            this.cost += 150;
            break;
        case 'mushroom':
            this.cost += 150;
            break;
        case 'cheese':
            this.cost += 150;
            break;
        default:
            break;

    }
    
}

let pizzaOrder = [];
let total = 0;

$('btnSubmit').click( function(event){
    event.preventDefault();
    let topping = $("#topping").children("option:selected").val();
    let size = $("#size").children("option:selected").val();   let piza = $("#selectPizza").children("option:selected").val(); 
})

var pizza = newPizza(size,topping, crust);
pizza.totalAmount();

total += pizza.price;


var order = `<div class="alert alert-secondary" role="alert">
${pizza.size} ${pizza.topping} with ${pizza.crust} crust
<span class="float-right font-weight-bold">${pizza.price}/=</span>
</div>`;







