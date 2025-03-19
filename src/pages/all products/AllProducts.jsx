import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Products from '../../components/products/Products'
import Footer from '../../components/footer/Footer'
import {allProducts} from '../../data'
const AllProducts = () => {
  return (
    <div>
        <Navbar/>
        <Products heading='Products' items={allProducts}/>
        <Footer/>
    </div>
  )
}

export default AllProducts