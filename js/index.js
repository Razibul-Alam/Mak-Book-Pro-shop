// storage cost handle
function handleExtraCharge(type,prevCost,updateValue) {
    let extraCost=document.getElementById(prevCost)
    
    // handle storage cost
    if (type=='storage') {
        if (updateValue=='high') {
            extraCost.innerText=180
        }else if (updateValue=='low') {
            extraCost.innerText=100
          }else{
            extraCost.innerText=0  
          }
    }
// handle memory cost
    else if (type=='memory') {
        if (updateValue=='high') {
            extraCost.innerText=180
        }else{
            extraCost.innerText=0
        }
      }
    //   handle delivery cost
    else{
        if (updateValue=='high') {
            extraCost.innerText=20
        }else{
            extraCost.innerText=0
        }
    }
    handleTotalBalance(prevCost)
}

// handle total cost
function handleTotalBalance() {
    let memoryText=document.getElementById('memory-cost').innerText
    let storageText=document.getElementById('storage-cost').innerText
    let deliveryText=document.getElementById('delivery-cost').innerText
    let totalCost=document.getElementById('total-balance')
    const memoryCost=parseInt(memoryText)
    const storageCost=parseInt(storageText)
    const deliveryCost=parseInt(deliveryText)
    const grandTotal=1299+memoryCost+storageCost+deliveryCost
     totalCost.innerText=grandTotal
     document.getElementById('net-balance').innerText=grandTotal
}

//  promo code discount handle
function discountHandle() {
    let discountBalance=document.getElementById('net-balance')
    let totalCost=document.getElementById('total-balance')
    let promoText=document.getElementById('promo-value')
     const totalBalance=parseFloat(totalCost.innerText)
    const promoCode=promoText.value
    if (promoCode=='stevekaku') {
        discountBalance.innerText=totalBalance-(totalBalance*0.2)
        promoText.value=''
    }
    
}