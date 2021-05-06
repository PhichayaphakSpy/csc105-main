import React from 'react'
import { BasketPopUp } from './Basket/BasketPopUp'
import { LogInPopUp } from "./User/LogInPopUp"

export const Nav = ({products}) => {
    return (
        <div>
            <LogInPopUp/>
            <BasketPopUp products = {products}/>
        </div>
    )
}
