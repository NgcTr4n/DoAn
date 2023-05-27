import React from 'react'
// import productImg from '../../img/Products/SP1/1.png'
import '../UI/ProductCart.css'
import { VscAdd } from "react-icons/vsc";
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import { useDispatch } from "react-redux";
import { cartActions } from '../../redux/slices/cartSlice';
import { toast } from 'react-toastify';


const ProductCart = ({item}) => {

    const dispatch = useDispatch()

    const addToCart =()=>{
        dispatch(cartActions.addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            imgUrl: item.imgUrl,
        }));
        toast('Product Added Successfully')
    }
  return (
    <Col lg='3' md='4'>
    <div className="product_item">
        <div className="product_img">
            <img src={item.imgUrl} alt="" />
        </div>
        <div className='p-2 product__info'>
        <h3 className="product_name">
            <Link to = {`/shop/${item.id}`}>{item.productName}</Link></h3>
        <span>{item.category}</span>
        </div>
        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
            <p className='price'>${item.price}</p>
            <span onClick={addToCart}><br/><VscAdd /></span>
        </div>
    </div>
    </Col>
  )
}

export default ProductCart