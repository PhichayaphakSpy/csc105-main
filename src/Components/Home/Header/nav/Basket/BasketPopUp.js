import React from "react";
import { Basket } from "./Basket";
import { Basket3Fill } from 'react-bootstrap-icons';
import { Button, Popup } from 'semantic-ui-react';

export const BasketPopUp  = ({products,onDelete}) => { 
  
  
  return (<>
 
  <Popup style={{zIndex:999}} on='click'
    positionFixed pinned trigger={<Button className="buttonss"><Basket3Fill/> </Button>} position="bottom right" >
        <div><Basket products = {products} onDelete={onDelete}/></div>
  </Popup></>);
};