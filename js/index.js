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
    let promoValue=document.getElementById('promo-value')
    const total=parseInt(netBalance.innerText)
    const promoCode=promoValue.value
    if (promoCode=='stevekaku') {
        netBalance.innerText=total-(total*0.2)
        promoValue.value=''
    }
    
}