import React,{useState} from 'react'


export const Product = ({prod,onDelete}) => {
  
    return (
        <div className="product">
            <div className="shopping-cart-items">
            
                    <span className="item-name">{prod.flavor} Icecream  <input type="submit" value="remove" className="buttonforitem" onClick={()=>onDelete(prod.id)}/><span className="item-price">{prod.price} ฿   &nbsp;&nbsp;</span> </span>
                    <div>with {prod.additional} &nbsp;&nbsp;<span class="text-muted item-size">Size {prod.size}</span></div> 
            </div>
        </div>
    )
}
