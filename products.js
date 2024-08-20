document.addEventListener('DOMContentLoaded', ready);

function ready() {
    var addToCartButton = document.getElementById('twoCord');
    addToCartButton.addEventListener('click', addToCartClicked);
}

function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('product-title')[0].innerText;
    var price = shopItem.getElementsByClassName('product-price')[0].innerText;
    var imageSrc = shopItem.querySelector('#product-img').src;
    var quantity = shopItem.querySelector('.cart-quantity-input').value;
    addItemToCart(title, price, imageSrc, quantity);
    alert('Item added to cart!');
}

function addItemToCart(title, price, imageSrc, quantity) {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    for (var i = 0; i < cartItems.length; i++) {
        if (cartItems[i].title === title) {
            alert('This item is already added to the cart. You may change the quantity in the cart.');
            return;
        }
    }
    var item = { title: title, price: price, imageSrc: imageSrc, quantity: quantity };
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}