import React from 'react'
import Link from 'next/link'
import emailjs from 'emailjs-com';
export default function Contact()
{
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_hdi598q', 'template_l2s690q', e.target, 'user_HKb3dPYnKar8VDcq3QE8K')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
        }    
    return(
        <div>
                <section className="page_banner bg_cover" style={{backgroundImage: 'url(assets/images/slider-1.jpg)'}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="page_banner_content text-center">
                        <h3 className="page_title">Contact</h3>
                        <ul className="breadcrumb justify-content-center">
                            <li><a href="">Home</a></li>
                            <li><a className="active" href="#">Event</a></li>
                        </ul>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>
            <section className="contact_area pt-100 pb-130">
        <div className="services_shape_1" style={{backgroundImage: 'url(assets/images/shape/shape-12.png)'}}></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="contact_form mt-50">
                        <div className="section_title pb-30">
                            <img src="assets/images/section_icon.png" alt="Icon"/>
                            <h3 className="title">Get in touch</h3>
                        </div> 
                        <form action="#" onSubmit={sendEmail}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="single_form">
                                        <input type="text" name="name" placeholder="Name"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single_form">
                                        <input type="email" name="email" placeholder="Email"/>
                                    </div> 
                                </div>
                                <div className="col-md-6">
                                    <div className="single_form">
                                        <input type="text"name="message" placeholder="Subject"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single_form">
                                        <input type="text" placeholder="Number"/>
                                    </div> 
                                </div>
                                <div className="col-md-12">
                                    <div className="single_form">
                                        <textarea placeholder="Massage"></textarea>
                                    </div> 
                                </div>
                                <div className="col-md-12">
                                    <div className="single_form">
                                        <button className="main-btn">Send Massage</button>
                                    </div> 
                                </div>
                            </div> 
                        </form>
                    </div> 
                </div>
                <div className="col-lg-4">
                    <div className="contact_info pt-20">
                        <ul>
                            <li>
                                <div className="single_info d-flex align-items-center mt-30">
                                    <div className="info_icon">
                                        <i className="fa fa-home"></i>
                                    </div>
                                    <div className="info_content media-body">
                                        <p>75 , Sainik Nagar , Telibagh <br/>  Lucknow - 226025</p>
                                    </div>
                                </div> 
                            </li>
                            <li>
                                <div className="single_info d-flex align-items-center mt-30">
                                    <div className="info_icon">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <div className="info_content media-body">
                                        <p>+91 7007688968</p>
                                    </div>
                                </div> 
                            </li>
                            <li>
                                <div className="single_info d-flex align-items-center mt-30">
                                    <div className="info_icon">
                                        <i className="fa fa-envelope"></i>
                                    </div>
                                    <div className="info_content media-body">
                                        <p>parthcharity@gmail.com</p>
                                    </div>
                                </div> 
                            </li>
                        </ul>
                    </div> 
                    <div className="contact_map mt-50">
                        <div className="gmap_canvas">                            
                            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>

        </div>
    )
}