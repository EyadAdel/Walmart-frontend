import React from 'react';
import axios from 'axios';

let cartArray = new Array();
// cartArray = JSON.parse(localStorage.getItem("cartItem"));
const token = localStorage.getItem('Token');
async function Services(obj) {
    console.log(obj);
    obj.quantity = 1;
    if (token) {
        let productId = obj._id;
        let quantity = obj.quantity;
        obj = { productId, quantity };
        // User is logged in, add product to cart in the database
        const response = await axios.post('http://localhost:5000/customer/cart',
            obj, {
            // method: 'POST',
            headers: {
                //   'Content-Type': 'application/json',
                Authorization: token
            },

        });
        console.log(response.data);
    } else {
        cartArray = JSON.parse(localStorage.getItem("cartItem"));
        // console.log(cartArray);
        if (cartArray != null) {
            cartArray.push(obj)
            // console.log(cartArray);
            localStorage.setItem("cartItem", JSON.stringify(cartArray));
        }
        else {
            cartArray = [obj]
            localStorage.setItem("cartItem", JSON.stringify(cartArray));
        }
    }
    // console.log(cartArray);
}
export async function removeItems(id) {
    if (token) {
        console.log(id);
        // User is logged in, add product to cart in the database
        const response = await axios.delete(`http://localhost:5000/customer/cart/${id}`, {
            headers: {
                Authorization: token
            },

        });
        console.log(response.data);
    } else {
        let filteredArray = new Array();

        cartArray = JSON.parse(localStorage.getItem("cartItem"));
        filteredArray = cartArray.filter((item) => item._id !== id);
        localStorage.setItem("cartItem", JSON.stringify(filteredArray));
    }
}

export async function editQuantity(obj,id){
    if(token){
        // if(obj<=1){
        //     removeItems(id)
        // }
        let quantity = obj;
        if (quantity <= 1) {
            removeItems(obj._id);
        }
        console.log(obj);
        obj = { quantity };
        
        const response = await axios.put(`http://localhost:5000/customer/cart/${obj._id}`, 
        obj,{
              headers: {
                Authorization: token
            },

        });
        console.log(response.data);
    }
}

export function countTotalPrice(cartArray) {
    let totalPrice = 0;
    let Quantity = 0;
    if (cartArray != null) {
        // console.log(cartArray);
        for (let i = 0; i < cartArray.length; i++) {
            const element = cartArray[i];
            // console.log(element);
            totalPrice += element.priceAfter * element.quantity;
            Quantity += element.quantity;
        }
    }
    return [totalPrice, Quantity]
}
export function addMoreThanProduct(obj) {
    obj.priceAfter = 0
    cartArray = JSON.parse(localStorage.getItem("cartItem"));
    for (let i = 0; i < cartArray.length; i++) {
        const element = cartArray[i];
        if (element._id == obj._id) {
            element.quantity++;
            element.priceAfter += obj.priceAfter;
        }

    }
    localStorage.setItem("cartItem", JSON.stringify(cartArray));

}
export function minusProduct(obj) {

    cartArray = JSON.parse(localStorage.getItem("cartItem"));
    for (let i = 0; i < cartArray.length; i++) {
        const element = cartArray[i];
        if (element._id == obj._id) {
            if (element.quantity <= 1) {
                removeItems(element._id)
            }
            element.quantity--;
            obj.priceAfter -= element.priceAfter;
        }

    }
    localStorage.setItem("cartItem", JSON.stringify(cartArray));
}

export default Services;