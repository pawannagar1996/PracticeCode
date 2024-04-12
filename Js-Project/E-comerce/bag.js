function btnAddToBag(itemId){
    mainBag.push(itemId)
    localStorage.setItem("items",JSON.stringify(mainBag))
    displayBagIconCount()
  
}

