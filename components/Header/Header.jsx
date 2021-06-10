import React from 'react'
import Link from 'next/link'
import Popup from 'reactjs-popup';
import  { useRef } from 'react';
const Header = () => {
  const ref = useRef();
  const openTooltip = () => ref.current.open();
  const closeTooltip = () => ref.current.close();
  const toggleTooltip = () => ref.current.toggle();
    return(
        <div>
                <header className="header_area">
        <div className="header_navbar navbar_transparent">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <Link href="/">
                    <a className="navbar-brand">
                        <img src="assets/images/Parth_Charitable_Society_Logo.webp" alt="logo"style={{height:'80px',width:'80px'}}/>
                    </a> 
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="toggler-icon"></span>
                        <span className="toggler-icon"></span>
                        <span className="toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                             <li>
                                 <Link href="/">
                                <a >Home </a></Link>
                                
                            </li>
                            <li>
                                <Link href="/about">
                                <a>About</a>
                                </Link>
                                
                            </li>
                            <li>
                            <Link href="/cause">
                                <a>Gallery</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                <a>Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div> 

                    <div className="navbar_btn d-none d-sm-block">
                              
      <Popup
        ref={ref}
        trigger={
          <button type="button" className="btn btn-danger">
            Donate Now
          </button>
        }
      >
        <div>
            <b>Account Number:</b>40089328010

        </div>
        <div>
            <b>IFSC Code:</b>SBIN0012830
            
        </div>
      </Popup>
                    </div>
                
                </nav> 
            </div> 
        </div> 
    </header>

        </div>
    )
}
export default Header
