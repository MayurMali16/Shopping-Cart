let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closecart = document.querySelector('#close-cart');

cartIcon.onclick = () => {
    cart.classList.add("active");
};

closecart.onclick = () => {
    cart.classList.remove("active");
};



// cart working js
if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready();
}

function ready() {
    var removeCartButtons = document.getElementsByClassName('Cart-remove');
    console.log(removeCartButtons);
    for (var i=0; i < removeCartButtons.length; i++) {
         var button = removeCartButtons[i];
         button.addEventListener("click",  removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i=0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
   }
   // Add To cart
   var addCart = document.getElementsByClassName("add-cart");
   for (var i=0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener('click', addCartClicked);
   }
}


// remove item from cart
function removeCartItem (event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}


function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
                        
    }    
    updatetotal();
}

//add to cart 
function addCartClicked(event) {
    var button = event.target 
    var shopProducts = button.parentElement
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    addProductTOCart(title, price, productImg);
    updatetotal();
}

function addProductTOCart(title, ) {
    var cartShopBox= document.createElement('div');
    cartShopBox.classlist.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
    for (var i=0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title){
        alert('You already aded this item to the cart');
        return;
    
        }
}

var cartBoxContent = `
                                             <img src="product2.jpg" alt="" class="cart-img">
                                             <div class="details-box" style="color: black;">
                                             <div class="cart-product-title">BLACK T-SHIRT</div>
                                               <div class="cart-price">50$</div>
                                            <input type="number" value="1" class="cart-quantity">
                                                 </div>
                                                 <!-- Remove Cart --!> 
                                             <i class='bx bxs-trash Cart-remove' ></i>`;

                       
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
}

// update the total
function updatetotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i=0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName('cart-price')[0];
    var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total +  price * quantity;


             document.getElementsByClassName ('total-price') [0].innerText = "$" + total;
    }
}




