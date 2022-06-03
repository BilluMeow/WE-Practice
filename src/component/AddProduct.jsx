import React from 'react';
import AddProductFrom from "./AddProductForm.jsx";

function AddProduct(props) {

    return (
        <div>
            <AddProductFrom addProductHandler={props.addNewProduct}/>
        </div>
    )
}

export default AddProduct;