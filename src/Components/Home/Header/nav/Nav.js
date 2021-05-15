import React from 'react'
import { BasketPopUp } from './Basket/BasketPopUp'
import { LogInPopUp } from "./User/LogInPopUp"

export const Nav = ({products,onDelete}) => {
    return (
        <div>
            <LogInPopUp/>
            <BasketPopUp products = {products} onDelete={onDelete} />
        </div>
    )
}

