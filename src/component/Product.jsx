import React from 'react';
import "./Product.css";


function Product (props){

    return (
            <div class="product-label">
                Id : {props.id}<br />
                Name : {props.name}<br />
                Size : {props.size}<br />
                Price : {props.price}<br />
            </div>
    )
}

export default Product;