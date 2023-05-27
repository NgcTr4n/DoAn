import React , { useRef } from 'react'
import '../Header/Header.css'
import { Container, Row } from 'reactstrap'
import { VscAccount, VscMenu, VscChromeClose } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";
import { BiCartAlt } from "react-icons/bi";

import logo from '../../img/Logo/Logo.png'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigateToCart =() => {
      navigate("/cart")
  }

  const navigate = useNavigate()
  const navRef = useRef();
  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const showNavBar = () =>{
    navRef.current.classList.toggle("responsive_nav")
  }
  return <header className='header'>
    <Container>
      <Row>
        <div className='Main_header'>
        <div className='nav__wrapper'>
          <div className="menu">
            <nav className="menu_list" ref={navRef}>
            <button className='nav-btn nav-close-btn' onClick={showNavBar}><VscChromeClose /></button>
            <a href="/home">Home</a>
              <a href="/contacts">Contacts</a>
              <a href="/shop">Online shop</a>
              <a href="/projects">About us</a>
            </nav>
            <button className='nav-btn' onClick={showNavBar}><VscMenu /></button>
          </div>
        
          <div className='logo'><img src={logo} alt="logo" srcset="" /></div>
          <div className='navigation'>
            <ul className="item">
            <div class="search-container">
        <input type="text" name="search" placeholder="Search........." class="search-input" />
                <IoIosSearch />
       
        </div>
             <div className='account-container'>
              <li className="nav_item"><a href="login"><VscAccount /></a>
              </li>
              </div>
              <div className='cart-container' onClick={navigateToCart}>
              <li className="nav_item">
                <BiCartAlt  />
              <span className='badge'>{totalQuantity}</span>
              </li>
              </div>
            </ul>
          </div>
       
        </div>
        </div>
      </Row>
      </Container>
    </header>
  
};

export default Header