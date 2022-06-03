import React, {useState} from "react";

function AddProductForm (props){

    const [name, setname] = useState("");
    const [size, setsize] = useState("");
    const [price, setprice] = useState("");
    const [id, setid] = useState("");

    function getProductName(event){
        setname(event.source.value)
    }

    function getProductSize(event){
        setsize(event.source.value)
    }

    function getProductId(event){
        setid(event.source.value)
    }

    function getProductPrice(event){
        setprice(event.source.value)
    }
    
    function sendData(){
        let data = {};

        data.id = id;
        data.name = name;
        data.size = size;
        data.price= price;

        props.addProductHandler(data);
    }

    return (
        <div>
            <form>
                <label> ID : </label>
                <input type="text" value={id} onChange={getProductId}/> <br />

                <label> Name : </label>
                <input type="text" value={name} onChange={getProductName}/> <br />

                <label> Size : </label>
                <input type="text" value={size} onChange={getProductSize}/> <br />

                <label> Price : </label>
                <input type="text" value={price} onChange={getProductPrice}/> <br />

                <input type="submit" onClick={sendData}/>
            </form>
        </div>
    )
}

export default AddProductForm;