import React from "react";
import AdminHomeNavigation from "../../Navigation/AdminHomeNavigation";
import { useState } from "react";
import axios from "axios";

export default function AddProducts() {
  const [Id , SetId]= useState("");
  const [productName, setproductName] = useState("");
  const [productPric, setproductPrice] = useState(0);
  const [prodQuantity, setprodQuan] = useState(1);
  const [image, setimage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription]=  useState("");

function prodId(event){
  SetId(event.target.value)
};


  function prodname(event) {
    setproductName(event.target.value);
  }
  function prodPrice(event) {
    setproductPrice(event.target.value);
  }
  function cat(event){
    setCategory(event.target.value);
  }
  function prodDes(event){
    setDescription(event.target.value);
  }
  function prodQuan(event) {
    setprodQuan(event.target.value);
  }

  function imageval(event) {
    setimage(event.target.value);
  }

  function add(e) {
    e.preventDefault();
    let ele = {
      id:Id,
      name: productName,
      description:description,
      price: productPric,
      categoryName:category,
      quantity: prodQuantity,
      imageUrl: image,
    };

    axios.post("http://localhost:8079/api/products", ele).then((res) => {
      if (res.data === "Product Added to DB.") {
        alert("Product is Added ...!");
      }
    });

    document.getElementById("prodname").value = "";
    document.getElementById("prodpri").value = "";
    document.getElementById("prodquan").value = "";
    document.getElementById("text").value = "";
    document.getElementById("prodDes").value="";
    document.getElementById("category").value="";
  }

  return (
    <>
      <AdminHomeNavigation />
      <form style={{ marginTop: "100px" }}>
        <div class="form-group">
          <label>PRODUCT ID</label>
          <input
            type="text"
            class="form-control"
            id="prodname"
            placeholder="ID"
            onChange={prodId}
            required
          />

      
          <label>PRODUCT NAME</label>
          <input
            type="text"
            class="form-control"
            id="prodname"
            placeholder="Product Name"
            onChange={prodname}
            required
          />
        </div>
        <div class="form-group">
          <label>Product Description</label>
          <input
            type="text"
            class="form-control"
            id="prodpri"
            placeholder="Description"
           onChange={prodDes}
            required
          />
        </div>
        <label>PRODUCT Quantity</label>
          <input
            type="number"
            class="form-control"
            id="prodname"
            placeholder="Product Quantity"
            onChange={prodQuan}
            required
          />
        <div class="form-group">
          <label>Price</label>
          <input
            type="number"
            class="form-control"
            id="prodquan"
            placeholder="$"
            onChange={prodPrice}
            required
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Category</label>
          <textarea
            class="form-control"
            id="text"
            rows="3"
            onChange={cat}
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Image URL</label>
          <textarea
            class="form-control"
            id="text"
            rows="3"
            onChange={imageval}
            required
          ></textarea>
        </div>

        <button
          className="addcart"
          style={{ marginTop: "20px" }}
          onClick={(e) => add(e)}
        >
          Add Product
        </button>
      </form>
    </>
  );
}

