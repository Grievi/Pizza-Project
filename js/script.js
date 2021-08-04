let list = document.getElementById('list');
let order = document.getElementById('order');
let addButton = document.getElementById('add-btn');
let priceInput = document.getElementById('price');
let quantityInput = document.getElementById('quantity');
let totalPrice = document.getElementById('total-price');
let cart = document.getElementById('cart');
let totalDiv = document.getElementById('total-div');

let cartList = [];
let total = 0;

let state = {};

addButton.addEventListener('click', (e)=> {
    e.preventDefault();
    let meal = capitalize(order.value);
    let mealPrice = priceInput;
    let mealQuantity = quantityInput.value;
    if(meal !== '' && !cartList.includes(meal)) {
        state[`${meal}`] = { 
            price: `${mealPrice}`,

            quantity: `${mealQuantity}`
        };

        cartList.push(meal);
        
        renderList();
        

        total += parseFloat(mealPrice) * parseInt(mealQuantity);
        order.value = '';
        quantityInput.value = '1';
        priceInput = '';
        renderTotal();
    }
});

list.addEventListener('click', (e)=>{
    let element = e.target;
    if(element.classList[0] === 'button') {
        let elementNode = element.parentElement;
        let elementDataName = element.dataset.name;
        let elementDataPrice = parseFloat(element.dataset.price);
        let elementDataQuantity = parseInt(element.dataset.quantity);
        total = total - (parseFloat(elementDataPrice) * parseInt(elementDataQuantity));
        elementNode.remove();
        if(cartList.includes(elementDataName))
        {
            let index = cartList.indexOf(elementDataName);
            cartList.splice(index,1);
            delete state[`${elementDataName}`];
        }

        renderList();
        renderTotal();
    }
});

totalPrice.addEventListener('click', () => {

    totalDiv.classList.toggle('hidden');
    renderTotal();
    
})



cart.addEventListener('click', () => {
    list.classList.toggle('hidden');
})

let renderList = () => {
    list.innerHTML = '';
    

    cartList.sort();
    cartList.forEach((orderedMeal) => {        

        itemHtml = `
            <div class="mt-sm-3 bg-light alert flexview">
                <p class="large">${orderedMeal}</p>
                <button type="button" class="btn btn-danger col-sm-2 remove-btn" data-name="${orderedMeal}" data-price="${state[`${orderedMeal}`].price}" data-quantity="${state[`${orderedMeal}`].quantity}">Remove</button>
            </div>`;    
        list.insertAdjacentHTML('beforeend', itemHtml);
    })
}


let crustOptions = document.querySelector('#crust-type');
let Toppings = document.querySelector('#toppings');

let renderTotal = () => {
  
  

    let crustCost;
    let Toppings = 200;

    if (crustOptions.value === 'crispy')
    {
        crustCost = 200;
        alert('Your order will be delivered after processing...');
    } else if (crustOptions.value === 'stuffed')
    {
        crustCost = 270;
        alert('Your order will be delivered after processing...');
    } else if (crustOptions.value === 'gluten-free')
    {
        crustCost = 300;
        alert('Your order will be delivered after processing...');
    }

  



    totalDiv.innerHTML = '';
 
    let html = `<p class="display-4">Your total is: <span>KES${total + crustCost + Toppings}</span></p>`;
    totalDiv.insertAdjacentHTML('afterbegin', html);
}

let capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}






