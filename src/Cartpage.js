import logo from './logo.svg';
import React from "react";
import { Link, Router } from "react-router-dom";
import { Helmet } from "react-helmet"
import './assets/cartpage.css'
;
function Cartpage() {
  return (
    <div className='cartpage'>
      <Helmet>
        <title>Cart Page</title>
      </Helmet>
      <div class="container5">
        <div class="cart1"></div>
        <div class="profilepicture"></div>
        <div class="border">
            <div class="borderright"></div>
            <div class="borderleft"></div>
        </div>     
        <div class="vectorgroup1"></div>
        <div class="vectorgroup2"></div>
        <nav class="nav">
            <ul style={{width: '60px',
            height: '60px',
            left: '1240px',
            top: '25px'}}>
                <li>
                    <img src={require('./assets/images/Ellipse 1.png')}/>
                    <ul>
                        <Link to="/profile">
                        <li><img src={require('./assets/images/Profile.png')} /></li>
                        </Link>
                        <Link exact to="/">
                        <li><img className='logout1' src={require('./assets/images/Logout.png')} /></li>
                        </Link>
                    </ul>
                </li>
            </ul>
        </nav>
        <p className='mycart'>My Cart</p>
        <p className='reviewyourorder'>Review Your Order</p>
        <div class="productgroup">
            <div class="line1"></div>
            <div class="line2"></div>
        </div>
        <Link to="/home">
            <div className="icon"></div>
        </Link>
        <div class="cartbook"></div> 
        <p className='cartbooktitle'>My Own Private Mr Cool</p>
        <p className='cartbookauthor'>By. Indah Hanaco</p>
        <p className='cartbookprice'>Rp. 79.000</p>
        <div class="trash"></div>
        <div class="transactionbox">
            <div class="transaction">
                <div class="cashpayment"></div>
            </div>
        </div>
        <p className="attachtransaction">Attache of Transaction</p>
        <a href="#popupmessage">
            <div class="paybox"></div>
        </a>     
    </div>
    <div class="popupmessage1" id="popupmessage">
        <Link to="/profile">
            <div class="popupmessagecontent1">
                <p className='popupmessagetext'>Thank you for ordering in us, please wait 1 x 24 hours to verify you order</p>
            </div>
        </Link>
    </div>
  </div>
  );
}

export default Cartpage;
