import logo from './logo.svg';
import './assets/adminmainpage.css';
import React from "react";
import { Link, Router } from "react-router-dom";
import { Helmet } from "react-helmet"
;
function Admin() {
  return (
    <div className='Admin'>
      <Helmet>
        <title>Transaction List</title>
      </Helmet>
      <div className="container6">
        <div className="icon"></div>
        <div className="vectorgroup1"></div>
        <div className="vectorgroup2"></div>
        <p className='transactiontitle'>Incoming Transaction</p>
        <div className="transactiontable">
            <table>
                <tr>
                    <th>No</th>
                    <th>Users</th>
                    <th>Evidence of Transfer</th>
                    <th>Product Purchased</th>
                    <th>Total Payment</th>
                    <th>Status Payment</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Radif Ganteng</td>
                    <td style={{color: '#1C9CD2'}}>bca.jpg</td>
                    <td>My Own Private Mr. Cool</td>
                    <td style={{color: '#0ACF83'}}>Rp. 75.000</td>
                    <td style={{color: '#0ACF83'}}>Approve</td>
                    <td><img src={require('./assets/images/Polygon 2.png')} /></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Haris Rahman</td>
                    <td style={{color: '#1C9CD2'}}>bni.jpg</td>
                    <td>Garis Waktu : Sebuah Perjalanan</td>
                    <td style={{color: '#0ACF83'}}>Rp. 49.300</td>
                    <td style={{color: '#0ACF83'}}>Approve</td>
                    <td><img src={require('./assets/images/Polygon 2.png')} /></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Amin Subagiyo</td>
                    <td style={{color: '#1C9CD2'}}>permata.jpg</td>
                    <td>Ayahku (Bukan) Pembohong</td>
                    <td style={{color: '#FF0742'}}>Rp. 130.000</td>
                    <td style={{color: '#FF0742'}}>Cancel</td>
                    <td><img src={require('./assets/images/Polygon 2.png')} /></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Haris Astina</td>
                    <td style={{color: '#1C9CD2'}}>permata.jpg</td>
                    <td>Panduan Resmi Tes CPNS Cat 2019 / 2020</td>
                    <td style={{color: '#FF0742'}}>Rp. 184.000</td>
                    <td style={{color: '#F7941E'}}>Pending</td>
                    <td><img src={require('./assets/images/Polygon 2.png')} /></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Aziz Oni On</td>
                    <td style={{color: '#1C9CD2'}}>bi.jpg</td>
                    <td>Warm Heart</td>
                    <td style={{color: '#FF0742'}}>Rp. 49.000</td>
                    <td style={{color: '#F7941E'}}>Pending</td>
                    <td><img src={require('./assets/images/Polygon 2.png')} /></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Egi Ganteng</td>
                    <td style={{color: '#1C9CD2'}}>bni.jpg</td>
                    <td className="order6">My Own Private Mr Cool, Sebuah Seni Untuk Bersikap Bodo Amat</td>
                    <td style={{color: '#FF0742'}}>Rp. 134.000</td>
                    <td style={{color: '#F7941E'}}>Pending</td>
                    <td><img src={require('./assets/images/Polygon 2.png')} /></td>
                </tr>
            </table>
        </div>
        <div className="adminprofile"></div>
        <nav className="nav">
            <ul style={{width: '60px',
            height: '60px',
            left: '1200px',
            top: '30px'}}>
                <li>
                    <img src={require('./assets/images/adminpp.png')}/>
                    <ul>
                        <Link to="/addbook">
                        <li><img src={require('./assets/images/knowledge 1.png')} /><img src={require('./assets/images/Add Book.png')} /></li>
                        </Link>
                        <Link exact to="/">
                        <li><img className='logout1' src={require('./assets/images/Logout.png')} /></li>
                        </Link>
                    </ul>
                </li>
            </ul>
        </nav>
        <nav2>
            <ul style={{top: '697.5px',
            left: '1192px'}}>
                <li>
                    <img src={require('./assets/images/Polygon 2.png')} />
                    <ul>
                        <li><img src={require('./assets/images/Approved.png')} /></li>
                        <li><img src={require('./assets/images/Cancel.png')} /></li>
                    </ul>
                </li>
            </ul>
        </nav2> 
    </div>
    </div>
  );
}

export default Admin;
