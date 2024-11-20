import React, { useEffect, useState } from 'react'
import productservice from '../services/productservice';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
  const [Product,setProduct]=useState({
    productName:"",
    description:"",
    price:"",
    status:"",

  });
  const {id} =useParams();
  console.log(id);

  const [msg,setMsg]=useState("");


useEffect(()=>{
productservice
.getProductById(id)
.then((res)=>{
  setProduct(res.data);
}).catch((error)=>{
  console.log(error);
});
},[]);

 
  const handleChange=(e)=>{
    const value=e.target.value;
    setProduct({...Product,[e.target.name]:value });
  };

const ProductUpdate = (e)=>{
  e.preventDefault();
  //console.log(Product);
  productservice.
  editProduct(Product).then((res)=>{
    console.log("Product Update sucessfully");
    setMsg("product Update Sucessfully");
    setProduct({
      productName:"",
      description:"",
      price:"",
      status:"",
  
    });

  }).catch((error)=>{
    console.log(error);
  })
};

  return (
    <>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card">
                <div className="card-header fs-3 text-center"> Edit Product </div>
                   {
                    msg && 
                    <p className="fs-4 text-center text-success">{msg}</p>
                   }
               
                <div className="card-body">
                  <form onSubmit={(e)=> ProductUpdate(e)}>
                    <div className="mb-3">
                      <label>Enter Product Name</label>
                      <input type="text" name="productName" 
                      className="form-control"
                      onChange={(e)=>handleChange(e)}
                      value={Product.productName}
                      />

                    </div>
                   
                    <div className="mb-3">
                      <label>Enter Description</label>
                      <input type="text" name="description" 
                      className="form-control"
                      onChange={(e)=>handleChange(e)}
                      value={Product.description}
                      />

                    </div>
                    <div className="mb-3">
                      <label>Enter Price</label>
                      <input type="text" name="price" 
                      className="form-control"
                      onChange={(e)=>handleChange(e)}
                      value={Product.price}
                      />

                    </div>
                    <div className="mb-3">
                      <label>Enter Status</label>
                      <input type="text" name="status" 
                      className="form-control"
                      onChange={(e)=>handleChange(e)}
                      value={Product.status}
                      />

                    </div>
                    <button className="btn btn-primary col-md-12">Update</button>
                  </form>
                </div>

              </div>

            </div>

          </div>

        </div>
    </>
  );
};

export default EditProduct