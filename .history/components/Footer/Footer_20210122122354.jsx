import React from 'react'
import Link from 'next/link'
export default function Footer()
{
 return(
     <div>
            <footer className="footer_area">
        <div className="footer_widget pt-80 pb-130">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 order-md-1 order-lg-1">
                        <div className="footer_about mt-50">
                            <a href="#">
                                <img src="assets/images/logo.png" alt="Logo" style={{height:'80px',width:'80px'}}/>
                            </a>
                            
                            <p>A fresh and modern theme for all charity, fundrising websites</p>
                            
                            <div className="footer_contact mt-20">
                                <h5 className="footer_title">Contact us</h5>
                                <p>75 , Sainik Nagar , Telibagh, Lucknow - 226025</p>
                            </div> 
                        </div> 
                    </div>
                    <div className="col-lg-5 col-md-12 order-md-3 order-lg-2">
                        <div className="footer_link_wrapper d-flex flex-wrap">
                            <div className="footer_link mt-50">
                                <h5 className="footer_title">Useful links</h5>
                                <ul className="link">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Our Causes</a></li>
                                    <li><a href="#">Our Events</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>

                            <div className="footer_link mt-50">
                                <h5 className="footer_title">Our Causes</h5>
                                <ul className="link">
                                    <li><a href="#">Water Purify</a></li>
                                    <li><a href="#">Food Collect</a></li>
                                    <li><a href="#">Health Fund</a></li>
                                    <li><a href="#">Free Education</a></li>
                                    <li><a href="#">Poor Health</a></li>
                                </ul>
                            </div> 
                        </div> 
                    </div>
                    <div className="col-lg-3 col-md-6 order-md-2 order-lg-3">
                        <div className="footer_subscribe mt-50">
                            <h5 className="footer_title">Subscribe</h5>
                            <p>Parth Charitable Trust is a nonproﬁt organization supported by community leaders,</p>
                            <div className="subscribe_form">
                                <form action="#">
                                    <input type="text" placeholder="Email"/>
                                    <button><i className="fa fa-paper-plane"></i></button>
                                </form>
                            </div>
                            
                        </div> 
                    </div>
                </div> 
            </div> 
        </div> 
        <div className="footer_copyright text-center">
            <div className="container">
                <div className="copyright">
                    <p>Copyright  Parth Charitable Trust. All Rights Reserved.</p>
                </div> 
            </div> 
        </div> 
        <div className="go-top-area">
        <div className="go-top-wrap">
            <div className="go-top-btn-wrap">
                <div className="go-top go-top-btn">
                    <i className="fa fa-angle-double-up"></i>
                    <i className="fa fa-angle-double-up"></i>
                </div>
            </div>
        </div>
    </div>

    </footer>

     </div>
 )
}