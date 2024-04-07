let mainBag

onLoad()

function onLoad(){
    let mainBagStr = localStorage.getItem("items");
    mainBag = mainBagStr ? JSON.parse(mainBagStr) : [];
    displatItenOnPage();
    displayBagIconCount() ;
}

function btnAddToBag(itemId){
    mainBag.push(itemId)
    localStorage.setItem("items",JSON.stringify(mainBag))
    displayBagIconCount()
  
}

function displayBagIconCount(){
    let bagItemCountElem = document.querySelector(".bag-item-count")
    if(mainBag.length > 0){
     bagItemCountElem.innerHTML = mainBag.length;
     bagItemCountElem.style.visibility = "visible"
    }else{
     bagItemCountElem.style.visibility = "hidden"
    }
 
}

function displatItenOnPage(){
    let itemsContainer = document.querySelector(".items-container");
    let innerHtml = "";
    item.forEach(item => {
        innerHtml +=  `
        <div class="item-container">
          <img class="item-img" src="${item.itemImage}" alt="paint" srcset="">
          <div class="rating">
              ${item.rating.stars} <i class="${item.rating.starIcon}"></i> | ${item.rating.noOfReviews}
          </div>
          <div class="company-name">
              ${item.companyName}
          </div>
          <div class="item-name">
              ${item.itemName}
          </div>
          <div class="pricing">
              <span class="current-price">  
               Rs ${item.pricing.currenPrice}
              </span>
              <span class="orignal-price">
              Rs ${item.pricing.orignalPrice}
              </span>
              <span class="discount">
              (${item.pricing.discountPercentage} off)
              </span>
    
    
          </div>
          <button class="Btn-add-bag" onClick="btnAddToBag(${item.id} )">Add to Bag</button>
      </div>`
    });
    itemsContainer.innerHTML = innerHtml;
}