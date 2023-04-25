import React from 'react';

    let cartArray = new Array();
    // cartArray = JSON.parse(localStorage.getItem("cartItem"));
function Services(obj) {
    obj.quantity = 1;
    cartArray = JSON.parse(localStorage.getItem("cartItem"));
    // console.log(cartArray);
    if(cartArray != null ){
        cartArray.push(obj)
        // console.log(cartArray);
        localStorage.setItem("cartItem",JSON.stringify(cartArray));
    }
    else{
        cartArray = [obj]
        localStorage.setItem("cartItem",JSON.stringify(cartArray));
    }
}
export function removeItems(id){
    
    let filteredArray = new Array();
    
    cartArray = JSON.parse(localStorage.getItem("cartItem"));
    filteredArray = cartArray.filter((item) => item._id !== id);
    localStorage.setItem("cartItem",JSON.stringify(filteredArray));
}

    
export function countTotalPrice(cartArray){
    let totalPrice = 0;
    let Quantity = 0;    
    if(cartArray != null ){
    for (let i = 0; i < cartArray.length; i++) {
        const element = cartArray[i];
        totalPrice+=element.priceAfter*element.quantity;
        Quantity += element.quantity;
    }}
    return [totalPrice,Quantity]
}
export function addMoreThanProduct(obj){
    obj.priceAfter = 0
    cartArray = JSON.parse(localStorage.getItem("cartItem"));
        for (let i = 0; i < cartArray.length; i++) {
            const element = cartArray[i];
            if(element._id == obj._id){
                element.quantity++;
                element.priceAfter += obj.priceAfter;
            }
            
        }
        localStorage.setItem("cartItem",JSON.stringify(cartArray));
        
}
export function minusProduct(obj){
    
    cartArray = JSON.parse(localStorage.getItem("cartItem"));
        for (let i = 0; i < cartArray.length; i++) {
            const element = cartArray[i];
            if(element._id == obj._id){
                if(element.quantity <= 1){
                    removeItems(element._id)
                }
                element.quantity--;
                obj.priceAfter -= element.priceAfter;
            }
            
        }
        localStorage.setItem("cartItem",JSON.stringify(cartArray));
}

export default Services;