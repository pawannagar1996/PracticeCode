let bagItemsObject ;
onLoad() ;
 
function onLoad(){
    loadBagItemsObject()
    displayBagItem()
}

function loadBagItemsObject(){
    bagItemsObject = mainBag.map((itemId)=>{
       for(var i = 0 ; i < item.length ; i++){
if(itemId == item[i].id){
return item[i]
}
       }
       
    })
}

function displayBagItem(){

    const containerElement = document.querySelector(".bag-items-container");
    let innerHtml = "" ;

    bagItemsObject.forEach(bagItem => {
         //console.log(bagItem)
        innerHtml += genrateBagItemsHtml(bagItem)
    });


    containerElement.innerHTML = innerHtml ;

}
function removeFromBag(itemId){
    console.log(itemId)
    console.log(bagItemsObject)

    mainBag =mainBag.filter((bagItemId)=> bagItemId != itemId)
    localStorage.setItem("items",JSON.stringify(mainBag))
    loadBagItemsObject()
    displayBagItem()
    displayBagItem()
    displayBagIconCount()
}
function genrateBagItemsHtml (bagItem){

    return `
    <div class="bag-item-container">
                    <div class="item-left-part">
                        <img src="${bagItem.itemImage}" alt="" class="bag-item-imag">
                    </div>

                    <div class="item-right-part">
                        <div class="company">${bagItem.companyName}</div>
                        <div class="item-name">${bagItem.itemName}</div>
                        <div class="price-container">
                            <span class="current-price">Rs ${bagItem.pricing.currenPrice}</span>
                            <span class="original-price">Rs ${bagItem.pricing.orignalPrice}</span>
                            <span class="discount-price">(${bagItem.pricing.discountPercentage}% OFF)</span>
                        </div>
                        <div class="return-peried">
                            <span class="return-peried-days">14 days</span>
                            return avilable
                        </div>
                        <div class="delivery-details">Deliverd by
                            <span class="delivery-details-days">10 oct 2023</span>
                        </div>
                    </div>
                    <div class="remove-from-cart" onClick="removeFromBag(${bagItem.id})">X</div>
                </div>
    `
}