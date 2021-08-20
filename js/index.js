
function handleMemoryPrice(isIncrease) {
    let memoryCost=document.getElementById('memory-cost')
    
    
    if (isIncrease) {
        memoryCost.innerText=80
    }else{
        memoryCost.innerText=0
    }
    handleTotalBalance() 
}
// storage cost handle
function storagePrice(method) {
    let storageCost=document.getElementById('storage-cost')
    
    
    if (method=='high') {
        storageCost.innerText=180
    }else if (method=='medium') {
        storageCost.innerText=100
      }
    else{
        storageCost.innerText=0
    }
    handleTotalBalance()
}
// delivery cost handle
function handleDeliveryCost(isIncrease) {
    let deliveryCost=document.getElementById('delivery-cost')
    
    
    if (isIncrease) {
        deliveryCost.innerText=20
    }else{
        deliveryCost.innerText=0
    }

    handleTotalBalance()
}
// handle total cost
function handleTotalBalance() {
    let memoryCost=document.getElementById('memory-cost').innerText
    let storageCost=document.getElementById('storage-cost').innerText
    let deliveryCost=document.getElementById('delivery-cost').innerText
    let totalCost=document.getElementById('total-balance')
    const grandTotal=1299+parseInt(memoryCost)+parseInt(storageCost)+parseInt(deliveryCost)
totalCost.innerText=grandTotal

let netBalance=document.getElementById('net-balance').innerText=grandTotal
}
//  promo code discount handle
function discountHandle() {
    let netBalance=document.getElementById('net-balance')
    const total=parseInt(netBalance.innerText)
    let promoValue=document.getElementById('promo-value')
    const promoCode=promoValue.value
    if (promoCode=='stevekaku') {
        netBalance.innerText=total-(total*0.2)
        promoValue.value=''
    }
    
}

