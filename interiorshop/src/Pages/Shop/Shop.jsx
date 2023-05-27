import React, {useState} from 'react'
import CommonSection from '../../Components/UI/CommonSection'
import Helmet from '../../Components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'

import products from '../../assets/data/products'
import ProductsList from '../../Components/UI/ProductsList'
import '../Shop/Shop.css'
import { IoIosSearch } from "react-icons/io";


const Shop = () => {

  const [productsData, setProductsData] = useState(products)

  const handleFilter = e =>{
    const filterValue = e.target.value
    if (filterValue === 'chair'){
      const filteredProducts = products.filter(item=> item.category==='Chair')

      setProductsData(filteredProducts)
    }
    else if (filterValue === 'table'){
      const filteredProducts = products.filter(item=> item.category==='Table')

      setProductsData(filteredProducts)
    }

  }

  const handleSearch = e =>{
    const searchTerm = e.target.value

    const searchedProducts = products.filter(item=> item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setProductsData(searchedProducts)
  }


  return <Helmet title={'Shop'}>
      <CommonSection title='Products'/>

      <section>
        <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className="filter_widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="chair">Chair</option>
                  <option value="table">Table</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='12'>
            <div className="filter_widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className='search__box'>
                <input type="text" placeholder='Search......' class="search__input" onChange={handleSearch}/>
                <IoIosSearch />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {
              productsData.length === 0? <h1 className='text-center fs-4'>
                No products are found!
              </h1> :<ProductsList data={productsData}/>
            }
          </Row>
        </Container>
      </section>

  </Helmet>
}

export default Shop