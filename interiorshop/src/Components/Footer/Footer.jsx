import React from 'react'
import { Container, Row } from 'reactstrap';
import '../Footer/Footer.css'
import { CgFacebook, CgInstagram, CgTwitter } from "react-icons/cg";


const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
        <div className='Inf_shop'>
          <div className="customer_footer">
            <h2>Client</h2>
            <a href="signup">Register</a>
            <a href="login">Log in</a>
            <a href="cart">Cart</a>
            <a href="payment">Check your order</a>
          </div>
          <div className="information_footer">
            <h2>Information</h2>
            <a href="#">Privacy Policy</a>
            <a href="#">Shipping Policy</a>
            <a href="#">Return Policy</a>
            <a href="#">Usage rules</a>
          </div>
          <div className="connect_footer">
            <h2>Connect</h2>
            <p>Phone number: <span><a href="#">1900 234667</a></span></p>
            <p>Address: <span><a href="#">162 HT17, P. Hiệp Thành, Q. 12, TP. HCM</a></span></p>
            <li className="btn_item">
              <ul><a href="https://www.facebook.com/profile.php?id=100042209655071"><CgFacebook /></a></ul>
              <ul><a href="http://"><CgInstagram /></a></ul>
              <ul><a href="http://"><CgTwitter /></a></ul>
            </li>
          </div>
          </div>
      </Row>
    </Container>
  </footer>
}

export default Footer