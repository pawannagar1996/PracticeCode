let bagItemsObject ;
let convenceFee = 99;
onLoad() ;
 
function onLoad(){
    loadBagItemsObject()
    displayBagItem()
    emprtyBag()
   
}

function emprtyBag(){
    if(bagItemsObject===0 || bagItemsObject == ""){
        let bagPage = document.querySelector(".bag-page")
        bagPage.innerHTML = `
        <div class="empty-bag"><p>bag is empty<p></div>
        `
        console.log("working  1")
            }else{
                displayBagSummary()
                console.log("working  2")
            } 
}


function displayBagSummary(){
    let bagSummaryElement = document.querySelector(".bag-summery")
    
    let totalItem = bagItemsObject.length;
    let totalMrp = 0;
    let totalDiscount = 0;
    let finalPayment = 0;

    bagItemsObject.forEach(bagItem =>{totalMrp += bagItem.pricing.orignalPrice 
        totalDiscount += bagItem.pricing.orignalPrice  - bagItem.pricing.currenPrice ;
    })

    finalPayment += totalMrp - totalDiscount + convenceFee
  
    
    bagSummaryElement.innerHTML = `
    <div class="bag-details-container">
    
    <div class="price-header">price details (${totalItem} items)</div>
    <div class="price-item">
        <span class="price-item-tag">total mrp</span>
        <span class="price-item-value">Rs ${totalMrp}</span>
    </div>
    <div class="discount-item">
        <span class="discount-item-tag">discount on mrp</span>
        <span class="discount-item-value">-RS ${totalDiscount}</span>
    </div>
    <div class="conveniece-fee-item">
        <span class="conveniece-fee-item-tag">conveniece fee</span>
        <span class="conveniece-fee-item-value">-RS 99</span>
    </div>
    
    <div class="seprater"></div>
    
    <div class="total-amount-item">
        <span class="total-amount-item-tag">total amount</span>
        <span class="total-amount-item-value">RS ${finalPayment}</span>
    </div>
    
    </div>
    <div class="bag-summery-btn">
    <button>place order</button>
    </div>
    </div>
    `
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
    // console.log(itemId)
    // console.log(bagItemsObject)

    mainBag =mainBag.filter((bagItemId)=> bagItemId != itemId)
    localStorage.setItem("items",JSON.stringify(mainBag))
    loadBagItemsObject()
    displayBagItem()
    displayBagItem()
    displayBagIconCount()
    displayBagSummary()
    emprtyBag()
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