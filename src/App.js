import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Product from "./component/Product";
import AddProduct from "./component/AddProduct";

function App() {

  const [bili, setproducts] = useState([])
  const [addState, setaddState] = useState("");

  function fetchData(apiURL) {
    axios.get(apiURL)
    .then((response) => {
      setproducts(response.data);
    })
  }

  useEffect(() => {
    fetchData("/api/view.php")
  }, []);

  const addNewProduct = (newproductdata) => {
    axios.post("/api/add.php", JSON.stringify(newproductdata))
    .then(response => {
      console.log(response)
      if(response.message === "successful"){
        fetchData();
        setaddState("successful");
      }
      else{
        setaddState("unsuccessful");
      }
    })
  }

  return (
    <div className="App">
        <AddProduct onSendData={addNewProduct}/>
        {bili.map((data) => {
          return (
            <div>
              <Product class="App-header" name={data.name} id={data.id} price={data.price} size={data.size} /> <br />
            </div>
          )
        })}
    </div>
  );
}

export default App;
