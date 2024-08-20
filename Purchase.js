

document.addEventListener('DOMContentLoaded', function() {
    var total = localStorage.getItem('total');
    var totalDiscount = localStorage.getItem('totalDiscount');
    var quantities = JSON.parse(localStorage.getItem('quantities'));
    var cartItems = JSON.parse(localStorage.getItem('cartItems'));

    displayPurchaseDetails(total, totalDiscount, quantities, cartItems);
    document.getElementById('payment-form').addEventListener('submit', handleFormSubmit);
});

function displayPurchaseDetails(total, totalDiscount, quantities, cartItems) {
    document.getElementById('total').innerText = 'Total: $' + total;
    document.getElementById('totalDiscount').innerText = 'Saved: $' + totalDiscount;

    var cartItemsContainer = document.getElementById('cart-items-container');
    cartItemsContainer.innerHTML = '';
    cartItems.forEach(function(item, index) {
        var cartRow = document.createElement('div');
        cartRow.classList.add('cart-row');
        var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${item.imageSrc}" width="100" height="100">
            <span class="cart-item-title">${item.title}</span>
        </div>       
        <div class="cart-quantity cart-column">
            <span class="cart-quantity-input">${quantities[index]}</span>
        </div>
        <span class="cart-price cart-column">${item.price}</span>`;
        cartRow.innerHTML = cartRowContents;
        cartItemsContainer.append(cartRow);
    });
}

function toggleAreaSelection() {
    var deliveryMethod = document.getElementById('delivery-method').value;
    var deliveryArea = document.getElementById('delivery-area');
    var deliveryFee = document.getElementById('delivery-fee');
    
    if (deliveryMethod === 'delivery') {
        deliveryArea.style.display = 'block';
        deliveryFee.style.display = 'block';
        updateDeliveryDetails();
    } else {
        deliveryArea.style.display = 'none';
        deliveryFee.style.display = 'none';
        document.getElementById('area-image').src = 'e:\\Fusion Firewood\\homebase.jpg';
        document.getElementById('fee-amount').innerText = '';
    }
}

function updateDeliveryDetails() {
    var area = document.getElementById('area').value;
    var areaImage = document.getElementById('area-image');
    var feeAmount = document.getElementById('fee-amount');
    var fee;
    var miles;

    switch(area) {
        case 'area0':
            areaImage.src = 'e:\\Fusion Firewood\\homebase.jpg';
            fee = 0;
            break;
        case 'area1':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\aaburg.png';
            fee = 21.70;
            break;
        case 'area2':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\abd.png';
            fee = 18.70;
            break;
        case 'area3':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\air.png';
            fee = 28.16;
            break;
        case 'area4':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\alsp.png';
            fee = 20.87;
            break;
        case 'area5':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\alia.png';
            fee = 26.10;
            break;
        case 'area6':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\alf.png';
            fee = 26.75;
            break;
        case 'area7':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\allen.png';
            fee = 24.76;
            break;
        case 'area8':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\allp.png';
            fee = 18.12;
            break;
        case 'area9':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\alm.png';
            fee = 29.16;
            break;
        case 'area10':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\am.png';
            fee = 28.09;
            break;
        case 'area11':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\and.png';
            fee = 27.00;
            break;
        case 'area12':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\arch.png';
            fee = 26.40;
            break;
        case 'area13':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\axe.png';
            fee = 5.67;
            break;
        case 'area14':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\bail.png';
            fee = 14.09;
            break;
        case 'area15':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\bald.png';
            fee = 20.30;
            break;
        case 'area16':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\baldhil.png';
            fee = 25.65;
            break;
        case 'area17':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\bann.png';
            fee = 29.39;
            break;
        case 'area18':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\barree.png';
            fee = 24.42;
            break;
        case 'area19':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\barrett.png';
            fee = 28.35;
            break;
        case 'area20':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\barrv.png';
            fee = 18.74;
            break;
        case 'area21':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\bear.png';
            fee = 20.64;
            break;
        case 'area22':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\beav.png';
            fee = 8.85;
            break;
        case 'area23':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\beavdam.png';
            fee = 17.14;
            break;
        case 'area24':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\beavtown.png';
            fee = 23.08;
            break;
        case 'area25':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\beech.png';
            fee = 19.36;
            break;
        case 'area26':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\belford.png';
            fee = 19.77;
            break;
        case 'area27':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\bellefonte.png';
            fee = 4.95;
            break;
        case 'area28':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\belleville.png';
            fee = 21.19;
            break;
        case 'area29':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\belltown.png';
            fee = 26.69;
            break;
        case 'area30':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\betz.png';
            fee = 29.81;
            break;
        case 'area31':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\beulah.png';
            fee = 28.87;
            break;
        case 'area32':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\bigs.png';
            fee = 4.73;
            break;
        case 'area33':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\bigler.png';
            fee = 23.72;
            break;
        case 'area34':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\birch.png';
            fee = 21.70;
            break;
        case 'area35':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\birm.png';
            fee = 24.02;
            break;
        case 'area36':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\bish.png';
            fee = 27.25;
            break;
        case 'area37':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\bitu.png';
            fee = 28.17;
            break;
        case 'area38':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\blairf.png';
            fee = 29.38;
            break;
        case 'area39':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\blanch.png';
            fee = 18.47;
            break;
        case 'area40':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\bloomsdorf.png';
            fee = 9.38;
            break;
        case 'area41':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\boalsb.png';
            fee = 8.98;
            break;
        case 'area42':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\booker.png';
            fee = 29.84;
            break;
        case 'area43':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\boonville.png';
            fee = 28.10;
            break;
        case 'area44':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\briarly.png';
            fee = 3.19;
            break;
        case 'area45':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\brisbin.png';
            fee = 25.65;
            break;
        case 'area46':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\buffalor.png';
            fee = 6.57;
            break;
        case 'area47':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\burly.png';
            fee = 24.94;
            break;
        case 'area48':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\burnham.png';
            fee = 23.52;
            break;
        case 'area49':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\bush.png';
            fee = 4.26;
            break;
        case 'area50':
            areaImage.src = 'e:\\Fusion Firewood\\locations\\butts.png';
            fee = 9.60;
            break;
        case 'area51':
            areaImage.src = 'path/to/area1.jpg';
            fee = 28.15;
            break;
        case 'area52':
            areaImage.src = 'path/to/area2.jpg';
            fee = 16.19;
            break;
        case 'area53':
            areaImage.src = 'path/to/area3.jpg';
            fee = 27.97;
            break;
        case 'area54':
            areaImage.src = 'path/to/area1.jpg';
            fee = 20.65;
            break;
        case 'area55':
            areaImage.src = 'path/to/area1.jpg';
            fee = 24.14;
            break;
        case 'area56':
            areaImage.src = 'path/to/area1.jpg';
            fee = 24.90;
            break;
        case 'area57':
            areaImage.src = 'path/to/area1.jpg';
            fee = 10.02;
            break;
        case 'area58':
            areaImage.src = 'path/to/area1.jpg';
            fee = 12.66;
            break;
        case 'area59':
            areaImage.src = 'path/to/area1.jpg';
            fee = 27.35;
            break;
        case 'area60':
            areaImage.src = 'path/to/area1.jpg';
            fee = 14.95;
            break;
        case 'area61':
            areaImage.src = 'path/to/area1.jpg';
            fee = 27.03;
            break;
        case 'area62':
            areaImage.src = 'path/to/area2.jpg';
            fee = 18.78;
            break;
        case 'area63':
            areaImage.src = 'path/to/area3.jpg';
            fee = 7.37;
            break;
        case 'area64':
            areaImage.src = 'path/to/area1.jpg';
            fee = 11.41;
            break;
        case 'area65':
            areaImage.src = 'path/to/area1.jpg';
            fee = 28.59;
            break;
        case 'area66':
            areaImage.src = 'path/to/area1.jpg';
            fee = 20.11;
            break;
        case 'area67':
            areaImage.src = 'path/to/area1.jpg';
            fee = 21.21;
            break;
        case 'area68':
            areaImage.src = 'path/to/area1.jpg';
            fee = 22.43;
            break;
        case 'area69':
            areaImage.src = 'path/to/area1.jpg';
            fee = 3.94;
            break;
        case 'area70':
            areaImage.src = 'path/to/area1.jpg';
            fee = 12.54;
            break;
        case 'area71':
            areaImage.src = 'path/to/area1.jpg';
            fee = 25.79;
            break;
        case 'area72':
            areaImage.src = 'path/to/area2.jpg';
            fee = 26.87;
            break;
        case 'area73':
            areaImage.src = 'path/to/area3.jpg';
            fee = 15.76;
            break;
        case 'area74':
            areaImage.src = 'path/to/area1.jpg';
            fee = 19.69;
            break;
        case 'area75':
            areaImage.src = 'path/to/area1.jpg';
            fee = 22.97;
            break;
        case 'area76':
            areaImage.src = 'path/to/area1.jpg';
            fee = 27.51;
            break;
        case 'area77':
            areaImage.src = 'path/to/area1.jpg';
            fee = 29.72;
            break;
        case 'area78':
            areaImage.src = 'path/to/area1.jpg';
            fee = 8.56;
            break;
        case 'area79':
            areaImage.src = 'path/to/area1.jpg';
            fee = 5.52;
            break;
        case 'area80':
            areaImage.src = 'path/to/area1.jpg';
            fee = 6.96;
            break;
        case 'area81':
            areaImage.src = 'path/to/area1.jpg';
            fee = 25.64;
            break;
        case 'area82':
            areaImage.src = 'path/to/area2.jpg';
            fee = 20.57;
            break;
        case 'area83':
            areaImage.src = 'path/to/area3.jpg';
            fee = 22.77;
            break;
        case 'area84':
            areaImage.src = 'path/to/area1.jpg';
            fee = 25.83;
            break;
        case 'area85':
            areaImage.src = 'path/to/area1.jpg';
            fee = 21.49;
            break;
        case 'area86':
            areaImage.src = 'path/to/area1.jpg';
            fee = 15.48;
            break;
        case 'area87':
            areaImage.src = 'path/to/area1.jpg';
            fee = 5.85;
            break;
        case 'area88':
            areaImage.src = 'path/to/area1.jpg';
            fee = 16.86;
            break;
        case 'area89':
            areaImage.src = 'path/to/area1.jpg';
            fee = 29.18;
            break;
        case 'area90':
            areaImage.src = 'path/to/area1.jpg';
            fee = 24.64;
            break;
        case 'area91':
            areaImage.src = 'path/to/area1.jpg';
            fee = 21.85;
            break;
        case 'area92':
            areaImage.src = 'path/to/area2.jpg';
            fee = 20.97;
            break;
        case 'area93':
            areaImage.src = 'path/to/area3.jpg';
            fee = 26.64;
            break;
        case 'area94':
            areaImage.src = 'path/to/area1.jpg';
            fee = 21.15;
            break;
        case 'area95':
            areaImage.src = 'path/to/area1.jpg';
            fee = 26.79;
            break;
        case 'area96':
            areaImage.src = 'path/to/area1.jpg';
            fee = 17.72 ;
            break;
        case 'area97':
            areaImage.src = 'path/to/area1.jpg';
            fee = 21.33;
            break;
        case 'area98':
            areaImage.src = 'path/to/area1.jpg';
            fee = 11.94;
            break;
        case 'area99':
            areaImage.src = 'path/to/area1.jpg';
            fee = 13.77;
            break;
        case 'area100':
            areaImage.src = 'path/to/area1.jpg';
            fee = 26.96;
            break;
        case 'area101':
            areaImage.src = 'path/to/area1.jpg';
            fee = 29.63;
            break;
        case 'area102':
            areaImage.src = 'path/to/area2.jpg';
            fee = 27.93;
            break;
        case 'area103':
            areaImage.src = 'path/to/area3.jpg';
            fee = 7.03;
            break;
        case 'area104':
            areaImage.src = 'path/to/area1.jpg';
            fee = 24.97;
            break;
        case 'area105':
            areaImage.src = 'path/to/area1.jpg';
            fee = 2.32;
            break;
        case 'area106':
            areaImage.src = 'path/to/area1.jpg';
            fee = 4.05;
            break;
        case 'area107':
            areaImage.src = 'path/to/area1.jpg';
            fee = 13.25;
            break;
        case 'area108':
            areaImage.src = 'path/to/area1.jpg';
            fee = 26.28;
            break;
        case 'area109':
            areaImage.src = 'path/to/area1.jpg';
            fee = 9.64;
            break;
        case 'area110':
            areaImage.src = 'path/to/area1.jpg';
            fee = 20.55;
            break;
        case 'area111':
            areaImage.src = 'path/to/area1.jpg';
            fee = 23.48;
            break;
        case 'area112':
            areaImage.src = 'path/to/area1.jpg';
            fee = 13.27;
            break;
        case 'area113':
            areaImage.src = 'path/to/area1.jpg';
            fee = 23.46;
            break;
        case 'area114':
            areaImage.src = 'path/to/area1.jpg';
            fee = 21.47;
            break;
        case 'area115':
            areaImage.src = 'path/to/area1.jpg';
            fee = 12.42;
            break;
        case 'area116':
            areaImage.src = 'path/to/area1.jpg';
            fee = 19.99;
            break;
        case 'area117':
            areaImage.src = 'path/to/area1.jpg';
            fee = 13.88;
            break;
        case 'area118':
            areaImage.src = 'path/to/area1.jpg';
            fee = 27.89;
            break;
        case 'area119':
            areaImage.src = 'path/to/area1.jpg';
            fee = 11.59;
            break;
        case 'area120':
            areaImage.src = 'path/to/area1.jpg';
            fee = 28.07;
            break;
        case 'area121':
            areaImage.src = 'path/to/area1.jpg';
            fee = 18.14;
            break;
        case 'area122':
            areaImage.src = 'path/to/area2.jpg';
            fee = 28.38;
            break;
        case 'area123':
            areaImage.src = 'path/to/area3.jpg';
            fee = 29.12;
            break;
        case 'area124':
            areaImage.src = 'path/to/area1.jpg';
            fee = 11.41;
            break;
        case 'area125':
            areaImage.src = 'path/to/area1.jpg';
            fee = 24.57;
            break;
        case 'area126':
            areaImage.src = 'path/to/area1.jpg';
            fee = 19.82;
            break;
        case 'area127':
            areaImage.src = 'path/to/area1.jpg';
            fee = 26.62;
            break;
        case 'area128':
            areaImage.src = 'path/to/area1.jpg';
            fee = 14.93;
            break;
        case 'area129':
            areaImage.src = 'path/to/area1.jpg';
            fee = 26.47;
            break;
        case 'area130':
            areaImage.src = 'path/to/area1.jpg';
            fee = 16.58;
            break;
        case 'area131':
            areaImage.src = 'path/to/area1.jpg';
            fee = 27.97;
            break;
        case 'area132':
            areaImage.src = 'path/to/area2.jpg';
            fee = 19.36;
            break;
        case 'area133':
            areaImage.src = 'path/to/area3.jpg';
            fee = 6.18;
            break;
        case 'area134':
            areaImage.src = 'path/to/area1.jpg';
            fee = 25.87;
            break;
        case 'area135':
            areaImage.src = 'path/to/area1.jpg';
            fee = 14.75;
            break;
        case 'area136':
            areaImage.src = 'path/to/area1.jpg';
            fee = 8.33;
            break;
        case 'area137':
            areaImage.src = 'path/to/area1.jpg';
            fee = 17.75;
            break;
        case 'area138':
            areaImage.src = 'path/to/area1.jpg';
            fee = 28.13;
            break;
        case 'area139':
            areaImage.src = 'path/to/area1.jpg';
            fee = 22.06;
            break;
        case 'area140':
            areaImage.src = 'path/to/area1.jpg';
            fee = 21.40;
            break;
        case 'area141':
            areaImage.src = 'path/to/area1.jpg';
            fee = 28.04;
            break;
        case 'area142':
            areaImage.src = 'path/to/area2.jpg';
            fee = 5.14;
            break;
        case 'area143':
            areaImage.src = 'path/to/area3.jpg';
            fee = 25.63;
            break;
        case 'area144':
            areaImage.src = 'path/to/area1.jpg';
            fee = 13.86;
            break;
        case 'area145':
            areaImage.src = 'path/to/area1.jpg';
            fee = 14.32;
            break;
        case 'area146':
            areaImage.src = 'path/to/area1.jpg';
            fee = 14.33;
            break;
        case 'area147':
            areaImage.src = 'path/to/area1.jpg';
            fee = 1.63;
            break;
        case 'area148':
            areaImage.src = 'path/to/area1.jpg';
            fee = 29.10;
            break;
        case 'area149':
            areaImage.src = 'path/to/area1.jpg';
            fee = 20.70;
            break;
        case 'area150':
            areaImage.src = 'path/to/area1.jpg';
            fee = 23.26;
            break;
        case 'area151':
            areaImage.src = 'path/to/area1.jpg';
            fee = 20.42;
            break;
        case 'area152':
            areaImage.src = 'path/to/area2.jpg';
            fee = 26.86;
            break;
        case 'area153':
            areaImage.src = 'path/to/area3.jpg';
            fee = 4.16;
            break;
        case 'area154':
            areaImage.src = 'path/to/area1.jpg';
            fee = 26.07;
            break;
        case 'area155':
            areaImage.src = 'path/to/area1.jpg';
            fee = 20.33;
            break;
        case 'area156':
            areaImage.src = 'path/to/area1.jpg';
            fee = 13.32;
            break;
        case 'area157':
            areaImage.src = 'path/to/area1.jpg';
            fee = 25.41;
            break;
        case 'area158':
            areaImage.src = 'path/to/area1.jpg';
            fee = 20.95;
            break;
        case 'area159':
            areaImage.src = 'path/to/area1.jpg';
            fee = 27.24;
            break;
        case 'area160':
            areaImage.src = 'path/to/area1.jpg';
            fee = 20.63;
            break;
        case 'area161':
            areaImage.src = 'path/to/area1.jpg';
            fee = 25.07;
            break;
        case 'area162':
            areaImage.src = 'path/to/area2.jpg';
            fee = 21.49;
            break;
        case 'area163':
            areaImage.src = 'path/to/area3.jpg';
            fee = 28.81;
            break;
        case 'area164':
            areaImage.src = 'path/to/area1.jpg';
            fee = 6.28;
            break;
        case 'area165':
            areaImage.src = 'path/to/area1.jpg';
            fee = 17.08;
            break;
        case 'area166':
            areaImage.src = 'path/to/area1.jpg';
            fee = 19.59;
            break;
        case 'area167':
            areaImage.src = 'path/to/area1.jpg';
            fee = 14.77;
            break;
        case 'area168':
            areaImage.src = 'path/to/area1.jpg';
            fee = 25.33;
            break;
        case 'area169':
            areaImage.src = 'path/to/area1.jpg';
            fee = 6.21;
            break;
        case 'area170':
            areaImage.src = 'path/to/area1.jpg';
            fee = 29.86;
            break;
        case 'area171':
            areaImage.src = 'path/to/area1.jpg';
            fee = 25.53;
            break;
        case 'area172':
            areaImage.src = 'path/to/area2.jpg';
            fee = 25.82;
            break;
        case 'area173':
            areaImage.src = 'path/to/area3.jpg';
            fee = 8.66;
            break;
        case 'area174':
            areaImage.src = 'path/to/area1.jpg';
            fee = 28.09;
            break;
        case 'area175':
            areaImage.src = 'path/to/area1.jpg';
            fee = 17.24;
            break;
        case 'area176':
            areaImage.src = 'path/to/area1.jpg';
            fee = 27.74;
            break;
        case 'area177':
            areaImage.src = 'path/to/area1.jpg';
            fee = 21.99;
            break;
        case 'area178':
            areaImage.src = 'path/to/area1.jpg';
            fee = 28.16;
            break;
        case 'area179':
            areaImage.src = 'path/to/area1.jpg';
            fee = 26.56;
            break;
        case 'area180':
            areaImage.src = 'path/to/area1.jpg';
            fee = 28.66;
            break;
        case 'area181':
            areaImage.src = 'path/to/area1.jpg';
            fee = 7.30;
            break;
        case 'area182':
            areaImage.src = 'path/to/area2.jpg';
            fee = 29.53;
            break;
        case 'area183':
            areaImage.src = 'path/to/area3.jpg';
            fee = 24.03;
            break;
        case 'area184':
            areaImage.src = 'path/to/area1.jpg';
            fee = 29.91;
            break;
        case 'area185':
            areaImage.src = 'path/to/area1.jpg';
            fee = 18.50;
            break;
        case 'area186':
            areaImage.src = 'path/to/area1.jpg';
            fee = 26.33;
            break;
        case 'area187':
            areaImage.src = 'path/to/area1.jpg';
            fee = 19.08;
            break;
        case 'area188':
            areaImage.src = 'path/to/area1.jpg';
            fee = 13.99;
            break;
        case 'area189':
            areaImage.src = 'path/to/area1.jpg';
            fee = 8.25;
            break;
        case 'area190':
            areaImage.src = 'path/to/area1.jpg';
            fee = 16.35;
            break;
        case 'area191':
            areaImage.src = 'path/to/area1.jpg';
            fee = 28.31;
            break;
        case 'area192':
            areaImage.src = 'path/to/area2.jpg';
            fee = 6.62;
            break;
        case 'area193':
            areaImage.src = 'path/to/area3.jpg';
            fee = 17.54;
            break;
        case 'area194':
            areaImage.src = 'path/to/area1.jpg';
            fee = 27.95;
            break;
        case 'area195':
            areaImage.src = 'path/to/area1.jpg';
            fee = 22.28;
            break;
        case 'area196':
            areaImage.src = 'path/to/area1.jpg';
            fee = 5.56;
            break;
        case 'area197':
            areaImage.src = 'path/to/area1.jpg';
            fee = 24.95;
            break;
        case 'area198':
            areaImage.src = 'path/to/area1.jpg';
            fee = 20.47;
            break;
        case 'area199':
            areaImage.src = 'path/to/area1.jpg';
            fee = 19.05;
            break;
        case 'area200':
            areaImage.src = 'path/to/area1.jpg';
            fee = 26.84;
            break;
        case 'area201':
            areaImage.src = 'path/to/area1.jpg';
            fee = 11.85;
            break;
        case 'area202':
            areaImage.src = 'path/to/area2.jpg';
            fee = 13.53;
            break;
        case 'area203':
            areaImage.src = 'path/to/area3.jpg';
            fee = 17.39;
            break;
        case 'area204':
            areaImage.src = 'path/to/area1.jpg';
            fee = 18.26;
            break;
        case 'area205':
            areaImage.src = 'path/to/area1.jpg';
            fee = 27.04;
            break;
        case 'area206':
            areaImage.src = 'path/to/area1.jpg';
            fee = 19.03;
            break;
        case 'area207':
            areaImage.src = 'path/to/area1.jpg';
            fee = 12.02;
            break;
        case 'area208':
            areaImage.src = 'path/to/area1.jpg';
            fee = 10.54;
            break;
        case 'area209':
            areaImage.src = 'path/to/area1.jpg';
            fee = 16.47;
            break;
        case 'area210':
            areaImage.src = 'path/to/area1.jpg';
            fee = 14.01;
            break;
        case 'area211':
            areaImage.src = 'path/to/area1.jpg';
            fee = 12.96;
            break;
        case 'area212':
            areaImage.src = 'path/to/area1.jpg';
            fee = 21.06;
            break;
        case 'area213':
            areaImage.src = 'path/to/area1.jpg';
            fee = 24.08;
            break;
        case 'area214':
            areaImage.src = 'path/to/area1.jpg';
            fee = 26.48;
            break;
        case 'area215':
            areaImage.src = 'path/to/area1.jpg';
            fee = 26.58;
            break;
        case 'area216':
            areaImage.src = 'path/to/area1.jpg';
            fee = 18.39;
            break;
        case 'area217':
            areaImage.src = 'path/to/area1.jpg';
            fee = 19.97;
            break;
        case 'area218':
            areaImage.src = 'path/to/area1.jpg';
            fee = 20.73;
            break;
        case 'area219':
            areaImage.src = 'path/to/area1.jpg';
            fee = 17.87;
            break;
        case 'area220':
            areaImage.src = 'path/to/area1.jpg';
            fee = 17.74;
            break;
        case 'area221':
            areaImage.src = 'path/to/area1.jpg';
            fee = 23.67;
            break;
        case 'area222':
            areaImage.src = 'path/to/area2.jpg';
            fee = 7.61;
            break;
        case 'area223':
            areaImage.src = 'path/to/area3.jpg';
            fee = 11.02;
            break;
        case 'area224':
            areaImage.src = 'path/to/area1.jpg';
            fee = 12.29;
            break;
        case 'area225':
            areaImage.src = 'path/to/area1.jpg';
            fee = 16.01;
            break;
        case 'area226':
            areaImage.src = 'path/to/area1.jpg';
            fee = 21.19;
            break;
        case 'area227':
            areaImage.src = 'path/to/area1.jpg';
            fee = 5.92;
            break;
        case 'area228':
            areaImage.src = 'path/to/area1.jpg';
            fee = 27.49;
            break;
        case 'area229':
            areaImage.src = 'path/to/area1.jpg';
            fee = 20.51;
            break;
        case 'area230':
            areaImage.src = 'path/to/area1.jpg';
            fee = 11.36;
            break;
        case 'area231':
            areaImage.src = 'path/to/area1.jpg';
            fee = 8.06;
            break;
        case 'area232':
            areaImage.src = 'path/to/area2.jpg';
            fee = 14.95;
            break;
        case 'area233':
            areaImage.src = 'path/to/area3.jpg';
            fee = 17.78;
            break;
        case 'area234':
            areaImage.src = 'path/to/area1.jpg';
            fee = 6.41;
            break;
        case 'area235':
            areaImage.src = 'path/to/area1.jpg';
            fee = 6.72;
            break;
        case 'area236':
            areaImage.src = 'path/to/area1.jpg';
            fee = 6.05;
            break;
        case 'area237':
            areaImage.src = 'path/to/area1.jpg';
            fee = 24.42;
            break;
        case 'area238':
            areaImage.src = 'path/to/area1.jpg';
            fee = 21.74;
            break;
        case 'area239':
            areaImage.src = 'path/to/area1.jpg';
            fee = 13.29;
            break;
        case 'area240':
            areaImage.src = 'path/to/area1.jpg';
            fee = 24.37;
            break;
        case 'area241':
            areaImage.src = 'path/to/area1.jpg';
            fee = 21.38;
            break;
        case 'area242':
            areaImage.src = 'path/to/area2.jpg';
            fee = 16.40;
            break;
        case 'area243':
            areaImage.src = 'path/to/area3.jpg';
            fee = 21.97;
            break;
        case 'area244':
            areaImage.src = 'path/to/area1.jpg';
            fee = 20.43;
            break;
        case 'area245':
            areaImage.src = 'path/to/area1.jpg';
            fee = 14.67;
            break;
        case 'area246':
            areaImage.src = 'path/to/area1.jpg';
            fee = 5.92;
            break;
        case 'area247':
            areaImage.src = 'path/to/area1.jpg';
            fee = 23.97;
            break;
        case 'area248':
            areaImage.src = 'path/to/area1.jpg';
            fee = 18.38;
            break;
        case 'area249':
            areaImage.src = 'path/to/area1.jpg';
            fee = 16.76;
            break;
        case 'area250':
            areaImage.src = 'path/to/area1.jpg';
            fee = 10.98;
            break;
        case 'area251':
            areaImage.src = 'path/to/area1.jpg';
            fee = 8.05;
            break;
        case 'area252':
            areaImage.src = 'path/to/area2.jpg';
            fee = 25.08;
            break;
        case 'area253':
            areaImage.src = 'path/to/area3.jpg';
            fee = 24.84;
            break;
        case 'area254':
            areaImage.src = 'path/to/area1.jpg';
            fee = 6.59;
            break;
        case 'area255':
            areaImage.src = 'path/to/area1.jpg';
            fee = 12.19;
            break;
        case 'area256':
            areaImage.src = 'path/to/area1.jpg';
            fee = 11.61;
            break;
        case 'area257':
            areaImage.src = 'path/to/area1.jpg';
            fee = 14.35;
            break;
        case 'area258':
            areaImage.src = 'path/to/area1.jpg';
            fee = 21.44;
            break;
        case 'area259':
            areaImage.src = 'path/to/area1.jpg';
            fee = 28.60;
            break;
        case 'area260':
            areaImage.src = 'path/to/area1.jpg';
            fee = 12.78;
            break;
        case 'area261':
            areaImage.src = 'path/to/area1.jpg';
            fee = 28.37;
            break;
        case 'area262':
            areaImage.src = 'path/to/area2.jpg';
            fee = 22.42;
            break;
        case 'area263':
            areaImage.src = 'path/to/area3.jpg';
            fee = 21.26;
            break;
        case 'area264':
            areaImage.src = 'path/to/area1.jpg';
            fee = 8.15;
            break;
        case 'area265':
            areaImage.src = 'path/to/area1.jpg';
            fee = 22.70;
            break;
        case 'area266':
            areaImage.src = 'path/to/area1.jpg';
            fee = 6.08;
            break;
        case 'area267':
            areaImage.src = 'path/to/area1.jpg';
            fee = 13.66;
            break;
        case 'area268':
            areaImage.src = 'path/to/area1.jpg';
            fee = 18.68;
            break;
        case 'area269':
            areaImage.src = 'path/to/area1.jpg';
            fee = 14.75;
            break;
        case 'area270':
            areaImage.src = 'path/to/area1.jpg';
            fee = 19.25;
            break;
        case 'area271':
            areaImage.src = 'path/to/area1.jpg';
            fee = 26.71;
            break;
        case 'area272':
            areaImage.src = 'path/to/area2.jpg';
            fee = 5.23;
            break;
        case 'area273':
            areaImage.src = 'path/to/area3.jpg';
            fee = 24.98;
            break;
        case 'area274':
            areaImage.src = 'path/to/area1.jpg';
            fee = 27.61;
            break;
        case 'area275':
            areaImage.src = 'path/to/area1.jpg';
            fee = 19.90;
            break;
        case 'area276':
            areaImage.src = 'path/to/area1.jpg';
            fee = 18.80;
            break;
        case 'area277':
            areaImage.src = 'path/to/area1.jpg';
            fee = 29.52;
            break;
        case 'area278':
            areaImage.src = 'path/to/area1.jpg';
            fee = 22.70;
            break;
        case 'area279':
            areaImage.src = 'path/to/area1.jpg';
            fee = 7.55;
            break;
        case 'area280':
            areaImage.src = 'path/to/area1.jpg';
            fee = 14.49;
            break;
        case 'area281':
            areaImage.src = 'path/to/area1.jpg';
            fee = 26.51;
            break;
        case 'area282':
            areaImage.src = 'path/to/area2.jpg';
            fee = 27.96;
            break;
        case 'area283':
            areaImage.src = 'path/to/area3.jpg';
            fee = 28.30;
            break;
        case 'area284':
            areaImage.src = 'path/to/area1.jpg';
            fee = 13.01;
            break;
        case 'area285':
            areaImage.src = 'path/to/area1.jpg';
            fee = 28.35;
            break;
        case 'area286':
            areaImage.src = 'path/to/area1.jpg';
            fee = 9.17;
            break;
        case 'area287':
            areaImage.src = 'path/to/area1.jpg';
            fee = 28.90;
            break;
        case 'area288':
            areaImage.src = 'path/to/area1.jpg';
            fee = 24.39;
            break;
        case 'area289':
            areaImage.src = 'path/to/area1.jpg';
            fee = 21.25;
            break;
        case 'area290':
            areaImage.src = 'path/to/area1.jpg';
            fee = 20.50;
            break;
        case 'area291':
            areaImage.src = 'path/to/area1.jpg';
            fee = 28.12;
            break;
        case 'area292':
            areaImage.src = 'path/to/area2.jpg';
            fee = 29.97;
            break;
        case 'area293':
            areaImage.src = 'path/to/area3.jpg';
            fee = 22.61;
            break;
        case 'area294':
            areaImage.src = 'path/to/area1.jpg';
            fee = 28.11;
            break;
        case 'area295':
            areaImage.src = 'path/to/area1.jpg';
            fee = 10.48;
            break;
        case 'area296':
            areaImage.src = 'path/to/area1.jpg';
            fee = 28.01;
            break;
        case 'area297':
            areaImage.src = 'path/to/area1.jpg';
            fee = 18.40;
            break;
        case 'area298':
            areaImage.src = 'path/to/area1.jpg';
            fee = 21.14;
            break;
        case 'area299':
            areaImage.src = 'path/to/area1.jpg';
            fee = 20.26;
            break;
        case 'area300':
            areaImage.src = 'path/to/area1.jpg';
            fee = 15.96;
            break;
        case 'area301':
            areaImage.src = 'path/to/area1.jpg';
            fee = 19.00;
            break;
        case 'area302':
            areaImage.src = 'path/to/area2.jpg';
            fee = 24.00;
            break;
        case 'area303':
            areaImage.src = 'path/to/area3.jpg';
            fee = 6.84;
            break;
        case 'area304':
            areaImage.src = 'path/to/area1.jpg';
            fee = 10.31;
            break;
        case 'area305':
            areaImage.src = 'path/to/area1.jpg';
            fee = 22.88;
            break;
        case 'area306':
            areaImage.src = 'path/to/area1.jpg';
            fee = 25.70;
            break;
        case 'area307':
            areaImage.src = 'path/to/area1.jpg';
            fee = 7.56;
            break;
        case 'area308':
            areaImage.src = 'path/to/area1.jpg';
            fee = 20.70;
            break;
        case 'area309':
            areaImage.src = 'path/to/area1.jpg';
            fee = 27.22;
            break;
        case 'area310':
            areaImage.src = 'path/to/area1.jpg';
            fee = 26.94;
            break;
        case 'area311':
            areaImage.src = 'path/to/area1.jpg';
            fee = 17.67;
            break;
        case 'area312':
            areaImage.src = 'path/to/area1.jpg';
            fee = 27.75;
            break;
        case 'area313':
            areaImage.src = 'path/to/area1.jpg';
            fee = 28.51;
            break;
        case 'area314':
            areaImage.src = 'path/to/area1.jpg';
            fee = 11.90;
            break;
        case 'area315':
            areaImage.src = 'path/to/area1.jpg';
            fee = 20.07;
            break;
        case 'area316':
            areaImage.src = 'path/to/area1.jpg';
            fee = 24.14;
            break;
        case 'area317':
            areaImage.src = 'path/to/area1.jpg';
            fee = 24.67;
            break;
        case 'area318':
            areaImage.src = 'path/to/area1.jpg';
            fee = 24.27;
            break;
        case 'area319':
            areaImage.src = 'path/to/area1.jpg';
            fee = 24.69;
            break;
        case 'area320':
            areaImage.src = 'path/to/area1.jpg';
            fee = 21.67;
            break;
        case 'area321':
            areaImage.src = 'path/to/area1.jpg';
            fee = 6.26;
            break;
        case 'area322':
            areaImage.src = 'path/to/area2.jpg';
            fee = 22.05;
            break;
        case 'area323':
            areaImage.src = 'path/to/area3.jpg';
            fee = 20.34;
            break;
        case 'area324':
            areaImage.src = 'path/to/area1.jpg';
            fee = 29.47;
            break;
        case 'area325':
            areaImage.src = 'path/to/area1.jpg';
            fee = 24.18;
            break;
        case 'area326':
            areaImage.src = 'path/to/area1.jpg';
            fee = 5.29;
            break;
        case 'area327':
            areaImage.src = 'path/to/area1.jpg';
            fee = 29.04;
            break;
        case 'area328':
            areaImage.src = 'path/to/area1.jpg';
            fee = 22.43;
            break;
        case 'area329':
            areaImage.src = 'path/to/area1.jpg';
            fee = 25.67;
            break;
        case 'area330':
            areaImage.src = 'path/to/area1.jpg';
            fee = 28.91;
            break;
        case 'area331':
            areaImage.src = 'path/to/area1.jpg';
            fee = 25.61;
            break;
        case 'area332':
            areaImage.src = 'path/to/area2.jpg';
            fee = 18.88;
            break;
        case 'area333':
            areaImage.src = 'path/to/area3.jpg';
            fee = 26.26;
            break;
        case 'area334':
            areaImage.src = 'path/to/area1.jpg';
            fee = 19.05;
            break;
        case 'area335':
            areaImage.src = 'path/to/area1.jpg';
            fee = 21.52;
            break;
        case 'area336':
            areaImage.src = 'path/to/area1.jpg';
            fee = 26.26;
            break;
        case 'area337':
            areaImage.src = 'path/to/area1.jpg';
            fee = 28.34;
            break;
        case 'area338':
            areaImage.src = 'path/to/area1.jpg';
            fee = 29.79;
            break;
        case 'area339':
            areaImage.src = 'path/to/area1.jpg';
            fee = 26.12;
            break;
        case 'area340':
            areaImage.src = 'path/to/area1.jpg';
            fee = 15.30;
            break;
        case 'area341':
            areaImage.src = 'path/to/area1.jpg';
            fee = 4.11;
            break;
        case 'area342':
            areaImage.src = 'path/to/area2.jpg';
            fee = 25.70;
            break;
        case 'area343':
            areaImage.src = 'path/to/area3.jpg';
            fee = 25.74;
            break;
        case 'area344':
            areaImage.src = 'path/to/area1.jpg';
            fee = 26.77;
            break;
        case 'area345':
            areaImage.src = 'path/to/area1.jpg';
            fee = 7.91;
            break;
        case 'area346':
            areaImage.src = 'path/to/area1.jpg';
            fee = 22.87;
            break;
        case 'area347':
            areaImage.src = 'path/to/area1.jpg';
            fee = 18.44;
            break;
        case 'area348':
            areaImage.src = 'path/to/area1.jpg';
            fee = 9.73;
            break;
                                                                                                                                                        
    }
    if(fee == 0){
        fee = 0;
    }
    else{
        miles = fee;
        // subtract the initial 5mile fee
        miles = miles - 5;

        // multiply by 2 to get both way travel
        miles = miles * 2;

        //devide by miles per gallon of truck 
        miles = miles / 8;

        // multiply by the average price of diesel
        miles = miles * 4.5;

        // add the initial fee
        fee = miles + 15;
        fee = Math.round(fee * 100) / 100;
        } 

    feeAmount.innerText = fee;
    var total = parseFloat(localStorage.getItem('total')) + fee;
    document.getElementById('total').innerText = 'Total: $' + total;
    localStorage.setItem('totalWithDelivery', total);
} 

function handleFormSubmit(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var cardNumber = document.getElementById('card-number').value;
    var expDate = document.getElementById('exp-date').value;
    var cvv = document.getElementById('cvv').value;
    var email = document.getElementById('email').value;

    if (validateForm(name, cardNumber, expDate, cvv, email)) {
        var formData = {
            name: name,
            cardNumber: cardNumber,
            expDate: expDate,
            cvv: cvv,
            email: email,
            total: localStorage.getItem('totalWithDelivery'),
            totalDiscount: localStorage.getItem('totalDiscount'),
            cartItems: JSON.parse(localStorage.getItem('cartItems')),
            quantities: JSON.parse(localStorage.getItem('quantities'))
        };

        console.log('Form Data:', formData);

        completePurchase();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function validateForm(name, cardNumber, expDate, cvv, email) {
    var nameValid = name.length > 6;
    var cardNumberValid = /^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumber);
    var expDateValid = /^(0[1-9]|1[0-2])\/\d{2}$/.test(expDate);
    var cvvValid = /^\d{3,4}$/.test(cvv);
    var emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    return nameValid && cardNumberValid && expDateValid && cvvValid && emailValid;
}

function completePurchase() {
    localStorage.removeItem('cartItems');
    localStorage.removeItem('total');
    localStorage.removeItem('totalDiscount');
    localStorage.removeItem('quantities');
    localStorage.removeItem('totalWithDelivery');

    alert('Purchase completed successfully!');

    document.getElementById('purchase-details').innerHTML = '<p>Thank you for your purchase!</p>';
}
