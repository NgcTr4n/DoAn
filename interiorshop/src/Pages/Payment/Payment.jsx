import React from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Helmet from '../../Components/Helmet/Helmet'
import CommonSection from '../../Components/UI/CommonSection'

import '../Payment/Payment.css'
import { useSelector } from 'react-redux'

const Payment = () => {

  const totalQty = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount )

  return <Helmet title='Payment'>
    <CommonSection title='Checkout'/>

    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <h5 className='shipping__information'>Shipping Information</h5>
            <Form className='shipping__form'>
              <FormGroup className='form__group'>
                  <input type="text" placeholder='Enter your name' />
              </FormGroup>

              <FormGroup className='form__group'>
                  <input type="email" placeholder='Enter your email' />
              </FormGroup>

              <FormGroup className='form__group'>
                  <input type="number" placeholder='Phone number' />
              </FormGroup>

              <FormGroup className='form__group'>
                  <input type="text" placeholder='Street address' />
              </FormGroup>

              <FormGroup className='form__group'>
                  <input type="text" placeholder='City' />
              </FormGroup>

              <FormGroup className='form__group'>
                  <input type="text" placeholder='Country' />
              </FormGroup>
            </Form>
          </Col>

          <Col lg='4'>
              <div className="checkout__cart">
              <h6>Subtotal: <span>${totalAmount}</span></h6>
                <h6>Total Quantity: <span>{totalQty} items</span></h6>
                <h6><span>
                  Shipping: <br /> 
                  Free shipping
                  </span> <span>$0</span></h6>
                <h4>Total Cost: <span>${totalAmount}</span></h4>
              </div>
              <button className="btn_shipping auth__btn">Continue to shipping</button>

          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Payment