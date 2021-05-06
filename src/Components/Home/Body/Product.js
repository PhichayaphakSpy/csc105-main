import React,{useState} from 'react'
export const Product = ({prod}) => {
    return (
        <div className="product">
            <div className="shopping-cart-items">
                
                <span className="item-name">{prod.flavor} Icecream with {prod.additional} <span class="text-muted ">Size {prod.size}</span><span className="item-price">{prod.price} ฿</span></span>
                
            </div>
        </div>
    )
}
