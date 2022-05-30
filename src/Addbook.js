import logo from './logo.svg';
import './assets/addbookpage.css';
import React from "react";
import { Link, Router } from "react-router-dom";
import { Helmet } from "react-helmet"
;
function Addbook() {
  return (
    <div className='Addbook'>
      <div class="container8">
        <div class="vectorgroup1"></div>
        <div class="vectorgroup2"></div>
        <div class="adminprofile"></div>
        <p style={{position: 'absolute',
        width: '156px',
        height: '37px',
        left: '223px',
        top: '132px',
        
        fontFamily: 'Times New Roman',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '36px',
        lineHeight: '101.5%',

        color: '#000000'}}>Add Book</p>
        <form>
            <input class="titlebox2" placeholder="Title" />
        </form>
        <form>
            <input class="publicdatebox2" placeholder="Publication Date" />
        </form>
        <form>
            <input class="pagesbox2" placeholder="Pages" />
        </form>
        <form>
            <input class="isbnbox2" placeholder="ISBN" />
        </form>
        <form>
            <input class="pricebox2" placeholder="Price" />
        </form>
        <form>
            <input class="aboutbox2" placeholder="About This Book" />
        </form>
        <div class="attachbox2"></div>
        <Link to="/adminpage">
            <div class="icon"></div>
        </Link>
        <Link to='/adminpage'>
        <div className='addbookbtn2'></div>
        </Link>
    </div>
    </div>
  );
}

export default Addbook;
