import React from "react";
import Popup from "reactjs-popup";
import { Basket } from "./Basket";
import { Basket3Fill } from 'react-bootstrap-icons';

export const BasketPopUp  = ({products}) => {
  return (
  
  <Popup trigger={<button className="buttonss"><Basket3Fill/> </button>} position="bottom right">
        <div><Basket products = {products}/></div>
  </Popup>);
};