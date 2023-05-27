import React from 'react'
import '../Cart/Cart.css'
import Helmet from '../../Components/Helmet/Helmet'
import CommonSection from '../../Components/UI/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { AiFillDelete } from "react-icons/ai";
import { cartActions } from '../../redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'



const Cart = () => {
    const cartItem = useSelector((state) => state.cart.cartItem);
    const totalAmount = useSelector((state) => state.cart.totalAmount)

  return <Helmet title='Cart'>
    <CommonSection title='Shopping Cart'/>

    <section>
      <Container>
        <Row>
          <Col lg='9'>
            {
              cartItem.length === 0 ? 
              (<h2 className='fs-4 text-center'>No item added to the cart!</h2> ):(
              <table className='table bordered'>
              <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delete</th>
                  </tr>
              </thead>

              <tbody>
                {
                  cartItem.map((item, index)=>(
                    <Tr item={item} key={index}/>
                  ))
                }
              </tbody>
            </table>
              )
            }
           
          </Col>
          <Col lg='3'>
            <div>
              <h6 className='d-flex align-items-center justify-content-between'>Subtotal  <span className='fs-4 fw-bold'>${totalAmount}</span></h6>
             
            </div>

            <div>
            <button className='buy__btn'><Link to='/payment'>Check Out</Link></button>
              <button className='buy__btn' ><Link to='/shop'>Continue Shopping</Link></button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

const Tr = ({item}) =>{

  const dispatch = useDispatch()

  const deleteProduct = () =>{
    dispatch(cartActions.deleteItem(item.id))
  }
  return  <tr>
  <td><img src={item.imgUrl} alt="" /></td>
  <td className='text'>{item.productName}</td>
  <td className='text'>${item.price}</td>
  <td className='text'>{item.quantity}</td>
  <td className='text'><span onClick={deleteProduct}><AiFillDelete /></span></td>
</tr>
 
}

export default Cart