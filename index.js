function getTotalProductPrice(event){

    // total product price setup 
    const productPriceField = event.querySelector('.price')
    const productPriceString = productPriceField.innerText
    const productPrice = parseFloat(productPriceString)

    const totalProductPriceField = document.getElementById('total-product-price')
    const totalProductPriceString = totalProductPriceField.innerText
    const totalProductPrice = parseFloat(totalProductPriceString)

    const newTotalProductPrice = (productPrice + totalProductPrice).toFixed(2)
    totalProductPriceField.innerText = newTotalProductPrice
    
    // sub total price setup 
    const subTotalPriceField = document.getElementById('total-price')
    const subTotalPriceString = subTotalPriceField.innerText
    const subTotalPrice = parseFloat(subTotalPriceString)

    const newSubTotalPrice = (productPrice + subTotalPrice).toFixed(2)
    subTotalPriceField.innerText = newSubTotalPrice

    // product name add to list setup 
    const productName = event.querySelector('.product-tittle').innerText
    const li = document.createElement('li')
    li.innerText = productName

    const productTittleArea = document.getElementById('product-tittle-area')
    productTittleArea.appendChild(li)

    // purchase button enabled
    if(newTotalProductPrice > 0){
        const purchaseBtn = document.getElementById('purchase-btn')
        purchaseBtn.removeAttribute('disabled')
    }

    // coupon button enabled
    const couponButton = document.getElementById('coupon-btn')
    if(newTotalProductPrice >= 200){
        couponButton.removeAttribute('disabled')
    }
}


// use coupon code 
document.getElementById('coupon-btn').addEventListener('click', function(){
    const promoCode = document.getElementById('coupon-input').value
    if(promoCode == 'SELL200'){
        const discountField = document.getElementById('total-discount')
        const totalProductPriceString = document.getElementById('total-product-price').innerText
        const totalProductPrice = parseFloat(totalProductPriceString)

        const totalDiscountPrice = totalProductPrice - (totalProductPrice * (20 / 100))

        const totalNewDiscount = totalProductPrice - totalDiscountPrice
        const totalNewDiscountFix = totalNewDiscount.toFixed(2)
        discountField.innerText = totalNewDiscountFix

        const totalDiscountPriceFix = totalDiscountPrice.toFixed(2)
        totalPriceField = document.getElementById('total-price').innerText = totalDiscountPriceFix
    }
})