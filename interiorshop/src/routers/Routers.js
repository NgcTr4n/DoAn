import React from 'react'
import { Routes, Route , Navigate } from 'react-router-dom'

import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Payment from '../Pages/Payment/Payment'
import ProductDetails from '../Pages/ProductDetails/ProductDetails'
import Projects from '../Pages/Projects/Projects'
import Shop from '../Pages/Shop/Shop'
import Signup from '../Pages/Signup/Signup'
import Cart from '../Pages/Cart/Cart'

import ProtectedRoute from './ProtectedRoute'

//admin
import AddProducts from '../admin/AddProducts'
import AllProducts from '../admin/AllProducts'
import Dashboard from '../admin/Dashboard'
import Users from '../admin/Users'

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to ='/home'/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='shop/:id' element={<ProductDetails/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='cart' element={<Cart/>}/>

        <Route path='payment' element={ <Payment /> 
          
           }/>


        <Route path='/*' element ={<ProtectedRoute/>}>
        <Route path='dashboard' element={<Dashboard />}/>
            <Route path='dashboard/all-products' element={<AllProducts />}/>
            <Route path='dashboard/add-products' element={<AddProducts />}/>
            <Route path="dashboard/users" element={<Users/>} />
        </Route>


        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        

  </Routes>
}

export default Routers