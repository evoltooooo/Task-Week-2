import logo from './logo.svg';
import './assets/afterlogincart.css';
import React from "react";
import { Link, Router } from "react-router-dom";
import { Helmet } from "react-helmet"
;
function Home() {
  return (
    <div className='Home'>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className='container'>
      <div className="profilepicture"></div>
      <div className="headerpage">
            <div className="titlepage1">With us, you can shop online & help</div>
            <div className="titlepage2">save your high street at the same time</div>
            <div className="vectorgroup1"></div>
            <div className="vectorgroup2"></div>
      </div>
      <div className="border">
            <div className="borderright"></div>
            <div className="borderleft"></div>
      </div>
      <div className="bookframe">
        <div className="flexbox">
          <div className="product1">
            <div className="book1"></div>
            <div className="book1desc"></div>
            <div className="booktitle">Sebuah Seni untuk Bersikap Bodo Amat</div>
            <div className="bookauthor">By. Mark Manson</div>
            <div className="booksynopsis">"Selama beberapa tahun belakangan, Mark Manson—melalui blognya yang sangat populer tel ...</div>
            <div className="bookprice">Rp. 59.000</div>
            <div className="button1"></div>
            <div className="addtocartbutton">
              <p>Add to Cart</p>
            </div>
          </div>
          <div className="product2">
            <div className="book2"></div>
            <div className="book2desc"></div>
            <div className="booktitle">Warm Heart</div>
            <div className="bookauthor">By. Valerie Patkar</div>
            <div className="booksynopsis">Dua insan manusia harus terjebak dalam dilema cinta yang memaksa salah satu dari mereka pergi me ...</div>
            <div className="bookprice">Rp. 49.000</div>
            <div className="button1"></div>
            <div className="addtocartbutton">
              <p>Add to Cart</p>
            </div>
          </div>
          <div className="product3">
            <div className="book3"></div>
            <div className="book3desc"></div>
            <div className="booktitle">Boys do Write Love Letters</div>
            <div className="bookauthor">By. Kansa Airlangga</div>
            <div className="booksynopsis">Shenaya mulai percaya, bahwa bukan hanya anak perempuan yang suka menulis. Sebab gadis itu me...</div>
            <div className="bookprice">Rp. 59.000</div>
            <div className="button1"></div>
            <div className="addtocartbutton">
              <p>Add to Cart</p>
            </div>
          </div>
        </div>
      </div>
      <p style={{position: 'absolute',
        width: '150px',
        height: '37px',
        left: '101px',
        top: '828px',
        
        fontFamily: 'Times New Roman',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '36px',
        lineHeight: '101.5%',
        
        
        color: '#000000'}}>List Book</p>
        <Link to="/detailbook">
        <div className="booklist1">
          <div className="botbook1"></div>
          <div className="booktitlesmall1">My Own Private Mr. Cool</div>
          <div className="bookauthorsmall1">By. Indah Hanaco</div>
          <div className="bookpricesmall1">Rp. 79.000</div>
        </div>
        </Link>
        <div className="booklist2">
        <div className="botbook2"></div>
          <div className="booktitlesmall1">Garis Waktu : Sebuah Perjalanan</div>
          <div className="bookauthorsmall1">By. Fiersa Besari</div>
          <div className="bookpricesmall1">Rp. 49.300</div>
        </div>
        <div className="booklist3">
        <div className="botbook3"></div>
          <div className="booktitlesmall1">Home Cooking ala Xander’s Kitche ...</div>
          <div className="bookauthorsmall1">By. Junita</div>
          <div className="bookpricesmall1">Rp. 168.000</div>
        </div>
        <div className="booklist4">
        <div className="botbook4"></div>
          <div className="booktitlesmall1">Panduan Resmi Tes Cpns Cat 20 ...</div>
          <div className="bookauthorsmall1">By. Raditya Panji Umbara</div>
          <div className="bookpricesmall1">Rp. 189.000</div>
        </div>
        <div className="booklist5">
        <div className="botbook5"></div>
          <div className="booktitlesmall1">Ayahku (Bukan) Pembohong</div>
          <div className="bookauthorsmall1">By. Tere Liye</div>
          <div className="bookpricesmall1">Rp. 130.000</div>
        </div>
        <div className="icon"></div>
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
        <Link to="/payment">
        <div className="cart1"></div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
