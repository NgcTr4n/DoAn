import React, {useState, useRef, useEffect} from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../../assets/data/products'
import Helmet from '../../Components/Helmet/Helmet'
import CommonSection from '../../Components/UI/CommonSection'
import { VscStarFull, VscStarHalf } from "react-icons/vsc";
import '../ProductDetails/ProductDetails.css'
import ProductsList from '../../Components/UI/ProductsList'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'
import { toast } from 'react-toastify';


const ProductDetails = () => {

  const [rating , setRating] = useState(null)
  const reviewUser = useRef('')
  const reviewMsg = useRef('')

  const dispatch = useDispatch()

  const [tab, setTab] = useState('desc')

  const {id} = useParams()
  const product = products.find(item => item.id === id)
  const {imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } = product

  const relatedProducts = products.filter(item => item.category === category);
  const submitHandler = (e)=>{
    e.preventDefault()

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };

    console.log(reviewObj);
    toast('Review Submitted');

  }

  const addToCart = ()=> {
    dispatch(cartActions.addItem({
      id,
      image:imgUrl,
      productName,
      price
    }))
    toast('Product Added Successfully');
  }

  useEffect(()=>{
    window.scrollTo(0,0)
  }, [product])
  return <Helmet title={productName}>
    <CommonSection title={productName} />

    <section className='pt-0'>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='product__img'><img src={imgUrl} alt="" /></div>
          </Col>
          <Col lg='6'>
            <div className="product__details">
              <h2>
                {productName}
              </h2>
              <div className='product__rating d-flex align-items-center gap-5 mb-3'>
                <div>
                  <span><VscStarFull /></span>
                  <span><VscStarFull /></span> 
                  <span><VscStarFull /></span>
                  <span><VscStarFull /></span>
                  <span><VscStarHalf /></span>
                  </div>
                 <div>(<span>{avgRating}</span> ratings)</div>
              </div>
              <div className='d-flex align-items-center gap-5'>
              <span className='product__price'>${price}</span>
              <span>Category: {category.toUpperCase()}</span>
              </div>
              <p className='mt-3'>{shortDesc}</p>

              <button className='buyproduct__btn' onClick={addToCart}>Add to cart</button>
            </div>

          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className="tap__wrapper d-flex align-items-center gap-5">
              <h6 className={`${tab === 'desc' ? 'active__tab' :''}`}
              onClick={() => setTab('desc')}>Description</h6>
              <h6 className={`${tab === 'rev' ? 'active__tab' :''}`}
              onClick={() => setTab('rev')}>Reviews ({reviews.length})</h6>
            </div>

            {
              tab=== 'desc' ? <div className="tab__content mt-3">
              <p>{description}</p>
            </div> : <div className='product__review mt-3'>
              <div className="review__wrapper">
                <ul>
                  {
                    reviews?.map((item, index) => (
                      <li key={index} className='mb-4'> <h6>Name</h6>
                        <span>{item.rating} (rating)</span>
                        <p>{item.text}</p>
                      </li>
                    ))
                  }
                </ul>

                <div className="review__form">
                    <form action="" onSubmit={submitHandler}>
                      <div className="form__group">
                        <input type="text" placeholder='Enter Name' ref={reviewUser} required/>
                      </div>

                      <div className="form__group d-flex align-items-center gap-5">
                        <span  onClick={() => setRating(1)}>1 <VscStarFull /></span>
                        <span  onClick={() => setRating(2)}>2 <VscStarFull /></span>
                        <span  onClick={() => setRating(3)}>3 <VscStarFull /></span>
                        <span  onClick={() => setRating(4)}>4 <VscStarFull /></span>
                        <span  onClick={() => setRating(5)}>5 <VscStarFull /></span>
                      </div>

                      <div className="form__group">
                        <textarea ref={reviewMsg} type="text" placeholder='Review Massage...' required/>
                      </div>
                      <button className='buy__btn'>Submit</button>
                    </form>
                </div>
              </div>
            </div>
            }

            
          </Col>

          <Col lg='12' className='mt-5'>
            <h2 className='related__title'>You might also like</h2>
          </Col>

          <ProductsList data={relatedProducts}/>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default ProductDetails