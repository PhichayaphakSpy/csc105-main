import React from 'react'

export default function AddtoCart({onAdd}) {
    return (
        <div className="element3">
            <button className="AddToCartButton" onClick={onAdd}>Add to cart!</button>
        </div>
    )
}



