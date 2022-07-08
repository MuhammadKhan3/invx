import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Chat from '../admin/chat';
import Dashboard from '../admin/dashboard';
import AdminHeader from '../admin/header';
import Purchase from '../admin/Purchase';
import CheckOut from '../checkout/checkout';
import Footer from '../footer/footer';
import Header from '../header/header';
import CardDetail from '../payment/cardDetail';
import Payment from '../payment/payment';
import PaymentCart from '../payment/paymentCart';
import ProductDetail from '../product/productDetail';

const RouterLink = () => {
  return <>
     <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/1/product-detail" element={<ProductDetail/>} />
        <Route path="/checkout" element={<CheckOut/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/payment-cart" element={<PaymentCart/>} />
        <Route path='/card-detail' element={<CardDetail/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/admin-header' element={<AdminHeader/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/purchase' element={<Purchase/>}/>
      
    </Routes>
  </>
}

export default RouterLink