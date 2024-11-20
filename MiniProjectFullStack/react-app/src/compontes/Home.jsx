import React, { useEffect, useState } from 'react'
import productservice from '../services/productservice';
import { Link } from 'react-router-dom';


const Home = () => {
const [productList, setProductList]=useState([]);
const [msg,setMsg]= useState("");

useEffect(()=>{
  init();
},[]);

const init=()=>{
  productservice
  .getAllProduct()
  .then((res)=> {
  console.log(res.data);
  setProductList(res.data);
})
  .catch((error)=>{
    console.log(error);

  });

};

const deleteProduct=(id)=>{
  productservice.deleteProduct(id).then((res)=>{
    setMsg("Delete Successfully");
    init();

  }).catch((error)=>{
    console.log(error);
  });
};

  return (
    <>
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header fs-3 text-center">
              All Product List
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}
            </div>
            <div className="card-body">
            <table class="table">
  <thead>
       < tr>
      <th scope="col">SI No</th>
      <th scope="col">Product Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {productList.map((p, num) => (
    <tr>
     <td>{num+1}</td>
     <td>{p.productName}</td>
     <td>{p.description}</td>
     <td>{p.price}</td>
     <td>{p.status}</td>
     <td>
      <Link to={'editProduct/'+p.id} className="btn btn-sm btn-primary">Edit</Link>
      <button onClick={()=>deleteProduct(p.id)} className=
      "btn btn-sm btn-danger ms-1">Delete</button>
     </td>
    </tr>
  ))}
  </tbody>
</table>

<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
            </div>

          </div>

        </div>

      </div>
    </div>


    </>
  )
}

export default Home