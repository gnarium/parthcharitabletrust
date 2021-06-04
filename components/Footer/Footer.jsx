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
                            
                            <p style={{textAlign:'justify'}}>Parth Charitable Society is founded by Mrs Anita Singh Rajput Ji. She is the top most pillar of her organization . Her positive thinking towards mankind and nature motivated her to form an organization which supports children , women , old age people , disable people and any person who needs support this organization helps them by all means they can.</p>
                            
                             
                        </div> 
                    </div>
                    <div className="col-lg-5 col-md-12 order-md-3 order-lg-2">
                        <div className="footer_link_wrapper d-flex flex-wrap">
                            <div className="footer_link mt-50">
                                <h5 className="footer_title">Useful links</h5>
                                <ul className="link">
                                    <li><Link href="/"><a >Home</a></Link></li>
                                    <li><Link href="/about"><a >About us</a></Link></li>
                                    <li><Link href="/cause"><a>Gallery</a></Link></li>
                                    <li><Link href="/contact"><a>Contact</a></Link></li>
                                </ul>
                            </div>

                            <div className="footer_link mt-50">
                                <h5 className="footer_title">Follow Us</h5>
                                <ul className="link">
                                    <li><Link href="https://www.facebook.com/पार्थ-चैरिटेबल-सोसाइटी-101693645043791/"><a ><i class="fa fa-facebook" aria-hidden="true"></i>&nbsp;Facebook</a></Link></li>
                                    <li><Link href="https://in.pinterest.com/anitasinghadhyaksh/_saved/"><a ><i class="fa fa-pinterest" aria-hidden="true"></i>&nbsp;Instagram</a></Link></li>
                                    
                                    <li><Link href="https://twitter.com/AnitaSi41811963"><a><i class="fa fa-twitter" aria-hidden="true"></i>&nbsp;Twitter</a></Link></li>
                                    <li><Link href="https://www.youtube.com/channel/UCnX181u_1jdMFhaxEFA1Y1w"><a><i class="fa fa-youtube" aria-hidden="true"></i>&nbsp;Youtube</a></Link></li>
                                </ul>
                            </div> 
                        </div> 
                    </div>
                    <div className="col-lg-3 col-md-6 order-md-2 order-lg-3">
                        <div className="footer_subscribe mt-50">
                        <h5 className="footer_title">Contact us</h5>
                                
                            <div className="info_icon">
                                <p><i className="fa fa-home"></i> &nbsp;
                                75 , Sainik Nagar , Telibagh <br/>  Lucknow - 226025</p>
                            </div>
                            <div className="info_icon">
                                <p><i className="fa fa-phone"></i>&nbsp;
                                +91 7007688968</p>
                            </div>        
                            <div className="info_icon">
                                <p><i className="fa fa-envelope"></i>&nbsp;
                                parthcharity@gmail.com</p>
                            </div>
                        </div> 
                    </div>
                </div> 
            </div> 
        </div> 
        <div className="footer_copyright text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="copyright">
                            <p>Copyright  Parth Charitable Society. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="copyright">
                            <p><Link href="www.gnariumiqnovatives.com"><a>Designed & Developed By Gnarium Iqnovative Pvt. Ltd.</a></Link></p>
                        </div>
                    </div> 
                </div>

            </div> 
        </div> 
        <div id="fb-root"></div>
        
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
