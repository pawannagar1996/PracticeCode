
onLoad() ;
 
function onLoad(){
    displayBagItem()
}

function displayBagItem(){

    const containerElement = document.querySelector(".bag-items-container")

    containerElement.innerHTML = `
    <div class="bag-item-container">
                    <div class="item-left-part">
                        <img src="img/1.jpg" alt="" class="bag-item-imag">
                    </div>

                    <div class="item-right-part">
                        <div class="company">addidas</div>
                        <div class="item-name">men printed polo color indian criket odi jersey</div>
                        <div class="price-container">
                            <span class="current-price">Rs 999</span>
                            <span class="original-price">Rs 999</span>
                            <span class="discount-price">(0% OFF)</span>
                        </div>
                        <div class="return-peried">
                            <span class="return-peried-days">14 days</span>
                            return avilable
                        </div>
                        <div class="delivery-details">Deliverd by
                            <span class="delivery-details-days">10 oct 2023</span>
                        </div>
                    </div>
                    <div class="remove-from-cart">X</div>
                </div>
    `

}