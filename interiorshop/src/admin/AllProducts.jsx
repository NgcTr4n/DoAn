
import React from 'react'
import { Container , Row , Col } from "reactstrap";
import useGetData from "../custom-hook/useGetData";
import db from "../firebase.config";
import { doc , deleteDoc} from "firebase/firestore";
import {toast} from 'react-toastify'

import "../admin_styles/all_products.css"

const AllProducts = () => {
    const {data: productsdata} = useGetData("products");
    const deleteProduct = async(id)=>{
    await deleteDoc(doc(db,'products', id));
  toast.success("Deleted");
 }
  return <section>
  <Container>
    <Row>
    <Col lg='12'> <h4 className="fw-bold">All Products

</h4>
</Col>
      <Col lg='12'>
<table className="table">
<thead>
    <tr>
<th>Image</th>
<th>Title</th>
<th>Category</th>
<th>Price</th>
<th>
  Update
</th>
<th>
  Delete
</th>
</tr>
</thead>
<tbody>
 {
  productsdata.map(item => (
    <tr key={item.id}>
    <td><img src={item.imgUrl} alt=""/></td>
    <td>{item.title}</td>
    <td>{item.category}</td>
    <td>${item.price}</td>
    <td>    <button onClick={()=>{deleteProduct(item.id)} } className="btn-btn-danger">Update</button></td>
    <td>    <button onClick={()=>{deleteProduct(item.id)} } className="btn-btn-danger">Delete</button>
</td>
  </tr>
  ))
 }
</tbody>
</table>
      </Col>
    </Row>
  </Container>
</section>
}

export default AllProducts