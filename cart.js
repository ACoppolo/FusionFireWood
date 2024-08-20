document.addEventListener('DOMContentLoaded', ready);

        function ready() {
            var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            displayCartItems(cartItems);
            updateCartTotal();
            document.getElementsByClassName('btn-purchase')[0].addEventListener('click', storeCartDataAndNavigate);
        
        }

        function displayCartItems(cartItems) {
            var cartItemsContainer = document.getElementsByClassName('cart-items')[0];
            cartItemsContainer.innerHTML = '';
            cartItems.forEach(function(item) {
                var cartRow = document.createElement('div');
                cartRow.classList.add('cart-row');
                var cartRowContents = `
                <div class="cart-item cart-column">
                    <img class="cart-item-image" src="${item.imageSrc}" width="100" height="100">
                    <span class="cart-item-title">${item.title}</span>
                </div>       
                <div class="cart-quantity cart-column">
                    <input class="cart-quantity-input" type="number" value="${item.quantity}">
                    <button class="btn btn-danger" type="button">REMOVE</button>
                </div>
                <span class="cart-price cart-column">${item.price}</span>`;
                cartRow.innerHTML = cartRowContents;
                cartItemsContainer.append(cartRow);
                cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
                cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
            });
        }

        function removeCartItem(event) {
            var buttonClicked = event.target;
            var title = buttonClicked.parentElement.parentElement.getElementsByClassName('cart-item-title')[0].innerText;
            var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            cartItems = cartItems.filter(item => item.title !== title);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            buttonClicked.parentElement.parentElement.remove();
            updateCartTotal();
        }

        function quantityChanged(event) {
            var input = event.target;
            if (isNaN(input.value) || input.value <= 0) {
                input.value = 1;
            }
            if (input.value >= 11) {
                input.value = 10;
            }
            var title = input.parentElement.parentElement.getElementsByClassName('cart-item-title')[0].innerText;
            var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            for (var i = 0; i < cartItems.length; i++) {
                if (cartItems[i].title === title) {
                    cartItems[i].quantity = input.value;
                }
            }
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            updateCartTotal();
        }

        
        

         function updateCartTotal() {
            var cartItemsContainer = document.getElementsByClassName('cart-items')[0];
            var cartRows = cartItemsContainer.getElementsByClassName('cart-row');
            var total = 0;
            var discountAmount = 0.95; // Multiplier to apply discount for each even quantity
            var originalTotal = 0; // To keep track of the original total without discounts
            var totalDiscount = 0; // To keep track of the total discount
            var quantities = [];
        
            for (var i = 0; i < cartRows.length; i++) {
                var cartRow = cartRows[i];
                var priceElement = cartRow.getElementsByClassName('cart-price')[0];
                var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
                var price = parseFloat(priceElement.innerText.replace('$', ''));
                var quantity = parseInt(quantityElement.value);
                
                quantities.push(quantity);
        
                var rowTotal = price * quantity;
                originalTotal += rowTotal;
        
                // Apply discount if quantity is even
                if (quantity % 2 === 0) {
                    rowTotal *= discountAmount;
                }
        
                total += rowTotal;
            }
        
            total = Math.round(total * 100) / 100;
            // Calculate total discount
            totalDiscount = Math.round((originalTotal - total) * 100) / 100;
        
        
            document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
            document.getElementsByClassName('cart-total-discount')[0].innerText = '$' + totalDiscount;
        
            // Store total, discount, quantities, and cartItems in localStorage
            localStorage.setItem('total', total);
            localStorage.setItem('totalDiscount', totalDiscount);
            localStorage.setItem('quantities', JSON.stringify(quantities));
            localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Make sure cartItems is updated
        } 

        function storeCartDataAndNavigate() {
            // Call updateCartTotal to ensure the latest data is stored
            updateCartTotal();

            // Navigate to the purchase page
            window.location.href = 'purchase.html';
        }