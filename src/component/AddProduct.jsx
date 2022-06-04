import React from 'react';
import AddProductFrom from "./AddProductForm.jsx";

function AddProduct(props) {

    return (
        <div>
            <AddProductFrom fetchData={props.fetchData} message={props.message} messageEditor={props.messageEditor} />
        </div>
    )
}

export default AddProduct;