import React from 'react'
import { Container , Row } from 'reactstrap'
import useAuth from "../custom-hook/useAuth";
import { NavLink } from 'react-router-dom';

import "../admin_styles/admin_nav.css"

const admin_nav = [
    {
      display:'Dashboard',
      path:'/dashboard'
    },
    {
      display:'All-Products',
      path:'/dashboard/all-products'
    },
    {
      display:'Orders',
      path:'/dashboard/orders'
    },
    {
      display:'Users',
      path:'/dashboard/users'
    }
  ]

const AdminNav = () => {
    const {currentUser} = useAuth();

  return   <>
  <header className="admin-header">
  <div className="admin_nav-top" >
    <Container>
      <div className="admin_nav-wrapper-top">
        <div className="logo">
          <h2>Admin</h2>
      
        </div>

        {/* <span> <i class="ri-notification-3-line" ></i> </span>
            <span> <i class="ri-setting-2-line" ></i> </span> */}
            <img src={ currentUser && currentUser.photoURL} alt="" />
        </div>
        
        
    </Container>
    </div>

  </header>
   <section className="admin_menu">
    <Container>
      <Row>
         <div className="admin_navigation">
           <ul className="admin_menu-list">
              {
                admin_nav.map((item, index)=>(
                  <li className="admin_menu-item" key={index} >
                    <NavLink to={item.path} className={navClass=> navClass.isActive 
                    ? 'active_adminp-menu'  : ''} >{item.display} </NavLink>
                  </li>
                 
                ))}
           </ul>
         </div>
      </Row>
    </Container>
   </section>
  </>
}

export default AdminNav