import React from 'react'
import { Link } from "react-router-dom";
import { Product } from '../../../Body/Product';

export const Basket = ({products,onDelete}) => {
  
  const Totalprice = products.reduce((a, c) => a +  c.price, 0);



    return (
      
      <div class="shopping-cart">
        <div class="shopping-cart-header">
          <i class="fa fa-shopping-cart cart-icon"></i><span class="badge">{products.length}</span>
          <div class="shopping-cart-total">
            <span class="lighter-text">Total:</span>
            <span class="main-color-text">{Totalprice}฿</span>
          </div>
        </div> 
        <div className="product-in-cart">
          <div className="shopping-cart-items">
            <div>{products.length === 0 && <div className="element3">Cart is empty</div>}</div>
            { 
            products && products.map((el)=>{
                return <Product prod = {el} onDelete={onDelete}/>
              })
            } 
            
            
          </div>
        </div>
        <Link to="/CheckOut"><button type="submit" class="btn btn-primary btn-ghost">Check Out</button></Link>
      </div>  
        
      
    );
};

