import React, { useState, useEffect} from 'react'
import Helmet from '../../Components/Helmet/Helmet'
import { Container, Row } from 'reactstrap'
import home_img from '../../img/Main/main.png'
import '../Home/Home.css'
import ProductsList from '../../Components/UI/ProductsList'
import products from '../../assets/data/products'

const Home = () => {

  const [data, setData] =useState(products)
  const year = new Date().getFullYear();

  useEffect (() => {
    const filteredProducts = products.filter(item => item.category === "Chair");
    setData (filteredProducts)
  }, [])
  return  <Helmet title = {"Home"}>
              <section className='home_section'>
          <Container>
            <Row>
             
                <div className='Main'>
                <div className="home_content">
                  <p className="home_subtitle">Trending product in {year}</p>
                  <h2>Let us help you find your dream home</h2>
                  <p>An interior shop is a specialized retail establishment that offers a wide range of products and services related to interior design and home decor. These shops cater to individuals 
                    and businesses seeking to enhance and beautify our living or working spaces. </p>
                    <a href="shop" className="buy_btn">Shop now</a>
                    </div>
                  <div className="home_img">
                  <img src={home_img} alt="" />
                </div>
                </div>

                <div className="text_home">
                  <p>We believe surrounding ourselves with beauty helps us live better.
            That’s why since 1986 we have been carefully selecting the best furniture and accessories for homes, workplaces 
                and public spaces all over the world.
                </p>
                </div>

                <div className="best_product_home">
                  <h3>Products we love</h3>
                </div>
                <ProductsList data = {data}/>     

             
            </Row>
          </Container>
    </section>

  </Helmet>

}

export default Home