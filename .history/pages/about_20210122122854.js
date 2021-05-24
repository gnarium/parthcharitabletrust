import React from 'react'
import Link from 'next/link'
export default function About()
{
    return(
        <div>

            
    <section className="page_banner bg_cover" style={{backgroundImage: 'url(assets/images/slider-1.jpg)'}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="page_banner_content text-center">
                        <h3 className="page_title">About us</h3>
                        <ul className="breadcrumb justify-content-center">
                            <li><a href="#">Home</a></li>
                            <li><a className="active" href="#">About</a></li>
                        </ul>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>
    <section className="about_area pt-80 pb-130">
        <div className="services_shape_1" style={{backgroundImage: 'url(assets/images/shape/shape-12.png)'}}></div>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="about_image mt-50">
                        <div className="image_1">
                            <img src="assets/images/about-2.jpg" alt="about"/>
                        </div>
                        <div className="image_2">
                            <img src="assets/images/about-3.jpg" alt="about"/>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-6">
                    <div className="about_content_3 mt-45">
                        <h3 className="about_title">About Parth Charitable Trust</h3>
                        <p style={{textAlign:'justify'}}>Parth Charitable Society is founded by Mrs Anita Singh Bishen Ji. She is the top most pillar of her organization . Her positive thinking towards mankind and nature motivated her to form
                        an organization which supports children , women , old age people , disable people and any person who needs support this organization helps them by all means they can.
                        Parth Charitable Society also supports “cleaning air” , gov initiatives like “cleaning rivers” , “safai abhiyan” and many more. 
                        </p>
                        <p style={{textAlign:'justify'}}>The main moto of organization is to help women and empower them to take care of themselves 
                        So that one day they each and every woman feels proud. This organization also helped people in covid-19 lockdown period when people need food Mrs Anita Singh ji decided to help people 
                        In this emergency and the distributed food in local colonies either they are poor or not their team help everyone . It is also the support of members of this organization which makes this organization stand among the crowd and become unique .
                        The love of Mrs Anita Bishen Sing Ji for children can be seen in the work areas  and pictures of organizations as we can say “The mother knows what their children needs  ” and yes their effort for poor children is undoubtedly heart touching like distributing food and clothes in slum areas . 
                        Organizing art competitions to encourage children for creativity is the key point of whole organizations </p>
                        
                    </div> 
                </div>
            </div> 
        </div> 
    </section>
    <section className="services_area_2 pt-130 pb-130 bg_cover" style={{backgroundImage: 'url(assets/images/gray-bg.jpg)'}}>
        <div className="services_shape_1" style={{backgroundImage: 'url(assets/images/shape/shape-1.png)'}}></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title text-center pb-30">
                        <img src="assets/images/section_icon.png" alt="Icon"/>
                        <h3 className="title">Our Activities</h3>
                    </div>
                </div>
            </div> 
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-7">
                    <div className="single_services_2 text-center mt-30 services_2_color_1">
                        <div className="services_image">
                            <a href="#"><img src="assets/images/help-1.jpg" alt="help"/></a>
                        </div>
                        <div className="services_content">
                            <h4 className="services_title"><a href="#">Be a Volunteer</a></h4>
                            <p>Logo ka samajik , mansik, natik ,charitrik, adhatmaya, saririk, bodhik vikas karna.</p>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4 col-md-7">
                    <div className="single_services_2 text-center mt-30 services_2_color_2">
                        <div className="services_image">
                            <a href="#"><img src="assets/images/help-2.jpg" alt="help"/></a>
                        </div>
                        <div className="services_content">
                            <h4 className="services_title"><a href="#">Donate Now</a></h4>
                            <p>Balak and balika ki nishiuk shiksha ki vaysatha karna.</p>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4 col-md-7">
                    <div className="single_services_2 text-center mt-30 services_2_color_2">
                        <div className="services_image">
                            <a href="#"><img src="assets/images/help-2.jpg" alt="help"/></a>
                        </div>
                        <div className="services_content">
                            <h4 className="services_title"><a href="#">Donate Now</a></h4>
                            <p style={{textAlign:'justify'}}>silai, kadhai, bunai, beauty parlor , mehandi prashikshad , fashion designing , redimat garments prashikshad.</p>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4 col-md-7">
                    <div className="single_services_2 text-center mt-30 services_2_color_3">
                        <div className="services_image">
                            <a href="#"><img src="assets/images/help-3.jpg" alt="help"/></a>
                        </div>
                        <div className="services_content">
                            <h4 className="services_title"><a href="#">Send Gift</a></h4>
                            <p>swasth ke prati jagruk karna.</p>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4 col-md-7">
                    <div className="single_services_2 text-center mt-30 services_2_color_2">
                        <div className="services_image">
                            <a href="#"><img src="assets/images/help-2.jpg" alt="help"/></a>
                        </div>
                        <div className="services_content">
                            <h4 className="services_title"><a href="#">Donate Now</a></h4>
                            <p style={{textAlign:'justify'}}>Samaj mai shoshit,besahara aur kamjoor varg ki mahilao aur baccho mai samajik , shaksadhik , aarthik uttan ke liye samarpit sanstha.</p>
                        </div>
                    </div> 
                </div>
                
            </div> 
        </div> 
        <div className="services_shape_2" style={{backgroundImage: 'url(assets/images/shape/shape-2.png)'}}></div>
    </section>

    <section className="video_area_3 pt-80 pb-130 bg_cover" style={{backgroundImage: 'url(assets/images/videobg.jpg)'}}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="video_image mt-50">
                        <img src="assets/images/video-image.jpg" alt="video"/>
                        <a href="https://www.youtube.com/watch?v=WKUjCCOcLFY" className="video-popup">
                            <i className="fa fa-play"></i>
                            <img src="assets/images/shape/shape-3.png" alt="shape"/>
                        </a>
                    </div> 
                </div>
                <div className="col-lg-6">
                    <div className="video_content_3 mt-45">
                        <h4 className="video_title">We served more then 80k+ peoples</h4>
                        <p>Helpgrove is a nonproﬁt organization supported by community leaders, corporate sponsors, churches and concerned citizens join. There will be a day–in our lifetime–when we get to celebrate.</p>
                        <a href="#" className="main-btn"><i className="fa fa-heart"></i> Donate  Now</a>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>
    <section className="volunteer_area pt-130 pb-130">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title text-center pb-30">
                        <img src="assets/images/section_icon.png" alt="Icon"/>
                        <h3 className="title">Our Volunteers</h3>
                    </div> 
                </div>
            </div> 
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="single_volunteer mt-30 volunteer_color_1">
                        <div className="volunteer_image">
                            <img src="assets/images/volunteer-1.jpg" alt="Volunteer"/>
                            <div className="volunteer_social">
                                <ul className="social">
                                    <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div> 
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name"><a href="#">Maria Noor</a></h5>
                                <p>Volunteer</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single_volunteer mt-30 volunteer_color_2">
                        <div className="volunteer_image">
                            <img src="assets/images/volunteer-2.jpg" alt="Volunteer"/>
                            <div className="volunteer_social">
                                <ul className="social">
                                    <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div> 
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name"><a href="#">Kiara Roy</a></h5>
                                <p>Volunteer</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single_volunteer mt-30 volunteer_color_3">
                        <div className="volunteer_image">
                            <img src="assets/images/volunteer-3.jpg" alt="Volunteer"/>
                            <div className="volunteer_social">
                                <ul className="social">
                                    <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div> 
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name"><a href="#">Adams Hobes</a></h5>
                                <p>Volunteer</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single_volunteer mt-30 volunteer_color_4">
                        <div className="volunteer_image">
                            <img src="assets/images/donor.jpeg" alt="Volunteer"/>
                            <div className="volunteer_social">
                                <ul className="social">
                                    <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div> 
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name"><a href="#">Adams Hobes</a></h5>
                                <p>Volunteer</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>
    
        </div>
    )
}
