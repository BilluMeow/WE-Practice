import React, {useState} from "react";
import axios from "axios";

function AddProductForm (props){

    const [name, setname] = useState("");
    const [size, setsize] = useState("");
    const [price, setprice] = useState("");
    const [id, setid] = useState("");

    function getProductName(event){
        setname(event.target.value)
    }

    function getProductSize(event){
        setsize(event.target.value)
    }

    function getProductId(event){
        setid(event.target.value)
    }

    const getProductPrice = (event) => {
        setprice(event.target.value)
    }

    const addNewProduct = (newproductdata) => {
        axios.post("/api/add.php", JSON.stringify(newproductdata))
        .then(response => {
          //console.log(response.data.message)
          props.fetchData("/api/view.php");
        })
      }
    
    function sendData(event){
        event.preventDefault();

        let data = {};

        data.id = id;
        data.name = name;
        data.size = size;
        data.price= price;

        addNewProduct(data);
    }

    return (
        <div>
            <form onSubmit={sendData}>
                <h2>{props.message}</h2>
                <label> ID : </label>
                <input type="text" value={id} onChange={getProductId}/> <br />

                <label> Name : </label>
                <input type="text" value={name} onChange={getProductName}/> <br />

                <label> Size : </label>
                <input type="text" value={size} onChange={getProductSize}/> <br />

                <label> Price : </label>
                <input type="text" value={price} onChange={getProductPrice}/> <br />

                <input type="submit" />
            </form>
        </div>
    )
}

export default AddProductForm;