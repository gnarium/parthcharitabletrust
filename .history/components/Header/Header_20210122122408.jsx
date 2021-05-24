import React from 'react'
import Link from 'next/link'
export default function Header()
{
    return(
        <div>
                <header className="header_area">
        <div className="header_navbar navbar_transparent">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <Link href="/">
                    <a className="navbar-brand">
                        <img src="assets/images/logo.png" alt="logo"style={{height:'80px',width:'80px'}}/>
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
                                <a className="active">Home </a></Link>
                                
                            </li>
                            <li>
                                <Link href="/about">
                                <a>About</a>
                                </Link>
                                
                            </li>
                            {/* <li>
                                <Link href="/cause">
                                <a>
                                    Our Cuases 
                                    <i className="fa fa-angle-down"></i>
                                </a>
                                </Link>
                                <ul className="sub-menu">
                                    <li>
                                        <Link href="/cause">
                                        <a>Cuases</a>
                                        </Link>
                                        </li>
                                    <li>
                                        <Link href="/causedetails">
                                        <a>Cuases Details</a>
                                        </Link>
                                        </li>
                                </ul>
                            </li> */}
                            <li>
                                <Link href="/gallery">
                                <a>Gallery</a>
                                </Link>
                            </li>
                            <li>
                            <Link href="/gallery">
                                <a>Causes</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin/login">
                                <a></a>
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
                        <Link href="/https://rzp.io/l/wYm1wmz">
                            <a className="main-btn" ><i className="fa fa-heart"></i> Donate Now</a>
                        </Link>
                    </div>
                
                </nav> 
            </div> 
        </div> 
    </header>

        </div>
    )
}