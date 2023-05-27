
import React from 'react'
import { Container , Row , Col } from "reactstrap";
import "../admin_styles/dashboard.css"
import useGetData from "../custom-hook/useGetData";

const Dashboard = () => {
    const {data : products} = useGetData('products')
    const {data : users} = useGetData('users')
  return   <>
  <section>
   <Container>
    <Row>
       <Col className="lg-3">
       <div className="revenue_box">
        <h5>Totals sale</h5>
        <span>$789</span>
       </div>
       </Col>
       <Col className="lg-3"><div className="order_box">
        <h5>Orders</h5>
        <span>$789</span>
       </div></Col>
       <Col className="lg-3"><div className="products_box">
        <h5>Totals product</h5>
        <span>{products.length} </span>
       </div></Col>
       <Col className="lg-3"><div className="users_box">
        <h5>Totals user</h5>
        <span>{users.length}</span>
       </div></Col>
    </Row>
   </Container>
  </section>
  </>
}

export default Dashboard