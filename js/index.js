// storage cost handle
function extraPrice(type,prevCost,updateValue) {
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
    let netBalance=document.getElementById('net-balance')
    let promoText=document.getElementById('promo-value')
    const total=parseFloat(netBalance.innerText)
    console.log(total)
    const promoCode=promoText.value
    if (promoCode=='stevekaku') {
        netBalance.innerText=total-(total*0.2)
        promoText.value=''
    }
    
}