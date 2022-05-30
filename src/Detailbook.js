import logo from './logo.svg';
import './assets/detailbook.css';
import React from "react";
import { Link, Router } from "react-router-dom";
import { Helmet } from "react-helmet"
;
function Detail() {
  return (
    <div className='detail'>
      <Helmet>
        <title>Detail Book</title>
      </Helmet>
      <div className="container3">
        <div className="cart"></div>
        <div className="profilepicture"></div>
        <div className="border">
            <div className="borderright"></div>
            <div className="borderleft"></div>
        </div>  
        <div className="vectorgroup1"></div>
        <div className="vectorgroup2"></div>
        <div className="bookcover"></div>
        <div className="booktitle">
            <div className="booktitlebig">My Own Private Mr Cool</div>
            <div className='bookauthorbig'>By. Indah Hanaco</div>
        </div>
        <div className="bookpublicationdatesection">
            <div className='bookpublicationdate'>Publication Date</div>
            <div className='bookdate'>August 2018</div>
        </div>
        <div className="bookpagessection">
            <div className='bookpages'>Pages</div>
            <div className='bookpagestotal'>264</div>
        </div>
        <div className="bookISBNsection">
            <div className='bookisbn'>ISBN</div>
            <div className='bookisbnnumber'>9786020395227</div>
        </div>
        <div className="bookpricesection">
            <div className='bookpricebig'>Price</div>
            <div className='bookpricetotal'>Rp. 79.000</div>
        </div>
        <div className="bookaboutsection">
            <div className='bookaboutthisbook'>About this Book</div>
            <div className='bookaboutthisbookdetail'>
            Bagi Heidy Theapila, latar belakang keluarga membuatnya tak mudah menemukan pasangan sejiwa. Tapi, ceritanya berbeda dengan Mirza. Heidy meyakini lelaki itu mencintainya dengan tulus. Namun, keyakinannya tumbang. Pertemuan mereka bukan cuma karena campur tangan Allah semata. Melainkan karena skenario rapi yang berkaitan dengan materi. Marah sekaligus patah hati, Heidy membatalkan rencana masa depannya dan memilih kabur ke Italia. Langkahnya mungkin tak dewasa, tapi Heidy butuh ruang untuk meninjau ulang semua rencana dalam hidupnya. 
            Lalu, Allah memberinya kejutan. <br /> <br />Dalam pelayaran menyusuri Venesia, Heidy bertemu raksasa bermata biru. Graeme MacLeod, pria yang mencuri napasnya di pertemuan pertama mereka. Meski ketertarikan di antara mereka begitu besar, Heidy tidak berniat menjalin asmara singkat. Graeme harus dilupakan. Ketika apa yang terjadi di Venesia tidak bisa tetap ditinggal di Venesia, Heidy mulai goyah. Apalagi Graeme ternyata lelaki gigih yang mengejarnya hingga ke Jakarta dan tak putus asa tatkala ditolak. Meski akhirnya satu per satu rahasia kelam lelaki itu terbuka, Heidy justru kian jatuh cinta. Pertanyaannya, apakah cinta memang benar-benar mampu menyatukan mereka?
            </div>
        </div>
        <a href="#popupmessage">
            <div className="addtocartbutton2">
                <div className="addtocartbox"></div>
                <p style={{position: 'absolute',
                width: '100px',
                height: '25px',
                left: '4px',
                top: '-7px',
                
                fontfamily: 'Avenir',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '20px',
                lineHeight: '25px',
                
                color: '#FFFFFF'}}>Add Cart</p>
                <div className="smallcart"></div>
            </div>
        </a>
        <Link to="/home">
            <div className="icon"></div>
        </Link>
        <nav className="nav">
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
    </div>
    <div className="popupmessage" id="popupmessage">
        <Link to="/incrementdetailbook">
            <div className="popupmessagecontent">
                <p style={{position: 'absolute',
                left: '101px',

                fontFamily: 'Avenir',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '24px',
                lineHeight: '33px',

                
                color: '#469F74'}}>The product is successfully added to the cart</p>
            </div>
        </Link>
    </div>
    </div>
  );
}

export default Detail;
