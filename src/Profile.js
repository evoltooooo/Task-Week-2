import logo from './logo.svg';
import React from "react";
import { Link, Router } from "react-router-dom";
import { Helmet } from "react-helmet"
import './assets/profilepage.css';
;
function Profile() {
  return (
    <div className='Login'>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="container4">
        <div className="profilepicture"></div>
        <div className='cart'></div>
        <div className="border">
            <div className="borderright"></div>
            <div className="borderleft"></div>
        </div>     
        <div className="vectorgroup1"></div>
        <div className="vectorgroup2"></div>
        <nav className="nav">
            <ul style={{width: '60px',
            height: '60px',
            left: '1240px',
            top: '25px'}}>
                <li>
                    <img src={require('./assets/images/Ellipse 1.png')}/>
                    <ul>
                        <li><img src={require('./assets/images/Profile.png')} /></li>
                        <Link exact to="/">
                        <li><img className='logout1' src={require('./assets/images/Logout.png')} /></li>
                        </Link>
                    </ul>
                </li>
            </ul>
        </nav>
        <div className='profiletitle'>Profile</div>
        <div className="data">
            <div className="profilebox"></div>
            <div className="photocard"></div>
            <div className="editprofilebtn"></div>
            <div className='editprofiletext'>Edit Profile</div>
            <div className="maps">
                <div className="mapsicon"></div>
                <div className='addressdetail'>Perumahan Permata Bintaro Residence C-3</div>
                <div className='addresstitle'>Address</div>
            </div>
            <div className="phone">
                <div className="phoneicon"></div>
                <div className='phonenumber'>0812-8623-8911</div>
                <div className='phonetitle'>Mobile Phone</div>
            </div>
            <div className="gender">
                <div className="gendericon"></div>
                <div className='genderdetail'>Male</div>
                <div className='gendertitle'>Gender</div>
            </div>
            <div className="mail">
                <div className="mailicon"></div>
                <div className='maildetail'>egigans@gmail.com</div>
                <div className='mailtitle'>Email</div>
            </div>
        </div>
        <div className="listbook">
            <div className='mybooks'>My Books</div>
            <Link to="/download">
            <div className="bookbox1">
                <div className="book1_1"></div>
                    <div className='book1_1title'>My Own Private Mr. Cool</div>
                    <p className='book1_1author'>By. Indah Hanaco</p>
                    <div className="downloadbtn"></div>
                    <p className='book1_1download'>Download</p>
                </div>
            </Link>
            <div className="bookbox2">
                <div className="book2_2"></div>
                <p className='book2_2title'>Sebuah Seni untuk bersikap Bodo A...</p>
                <p className='book2_2author'>By. Mark Manson</p>
                <div className="downloadbtn"></div>
                <p className='book2_2download'>Download</p>
            </div>
        </div>
        <Link to="/home">
            <div className="icon"></div>
        </Link>       
    </div>
  </div>
  );
}

export default Profile;
