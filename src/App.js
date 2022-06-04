import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Product from "./component/Product";
import AddProduct from "./component/AddProduct";

function App() {

  const [bili, setproducts] = useState([])
  const [addState, setaddState] = useState("");

  const fetchData = (apiURL) => {
    axios.get(apiURL)
    .then((response) => {
      setproducts(response.data);
    })
  }

  useEffect(() => {
    fetchData("/api/view.php")
  }, []);

  

  return (
    <div className="App">
        <AddProduct fetchData={fetchData} message={addState} messageEditor={setaddState} />
        {bili.map((data) => {
          return (
            <div>
              <Product name={data.name} id={data.id} price={data.price} size={data.size} /> <br />
            </div>
          )
        })}
    </div>
  );
}

export default App;
