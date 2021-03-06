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
                    <div className="image_1">
                        <img src="assets/images/about.jpg" style={{height:'700px'}} alt="about"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about_content_3 mt-45">
                        <h3 className="about_title">About Parth Charitable Society</h3>
                        <p style={{textAlign:'justify'}}>Parth Charitable Society is founded by Mrs Anita Singh Rajput . She is also the winner of “Wheel Smart Shrimati 2005” . She is the top most pillar of this organization . Her positive thinking towards mankind and nature motivated her to form an organization which supports children , women , old age people , disabled people and personnel who needs support. This organization always try to help the needy peoples by all means. Parth Charitable Society also supports “cleaning air” , govt initiatives like “cleaning rivers” , “safai abhiyan” and many more. 
                        </p>
                        <p style={{textAlign:'justify'}}>The main moto of this organization is to help women and empower them to take care of themselves, so that one day each and every woman feels proud. This organization also helped peoples  in covid-19 lockdown period, when people needed food and medicines, Mrs Anita Singh ji decided to help them in this emergency.  She  distributed food in local colonies whether they are poor or not, her team helped each and everyone . Due to support of members of this organization,  this organization is glooming and became  unique among other irganisation. The love of Mrs Anita Rajput Sing Ji for children can be seen in the work areas and pictures of organizations as we can say “The mother knows what their children needs ” and yes their effort for poor children is undoubtedly heart touching like distributing food and clothes in slum areas . Organizing art competitions to encourage children for creativity is the key point of our organization.</p>
                        
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
                        <h3 className="title">Our Members</h3>
                    </div> 
                </div>
            </div> 
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="single_volunteer mt-30 volunteer_color_1">
                        <div className="volunteer_image">
                            <img src="assets/images/Anita Singh Bisen Ji Founder.jpg" alt="Volunteer"/>
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name" style={{textAlign:'left'}}><a href="#">Anita Singh Rajput Ji</a></h5>
                                <p>Founder</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-3 col-sm-12">
                    <div className="single_volunteer mt-30 volunteer_color_4">
                        <div className="volunteer_image">
                            <img src="assets/images/pooja singh Chandel Sachiv( Secretary).jpg" className="center" alt="Volunteer"/>
                             
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name"><a href="#">pooja singh Chandel</a></h5>
                                <p>Sachiv( Secretary)</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single_volunteer mt-30 volunteer_color_3">
                        <div className="volunteer_image">
                            <img src="assets/images/Shalini Pandey Vice President.jpg"  alt="Volunteer"/>
                             
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name"><a href="#">Shalini Pandey</a></h5>
                                <p>Vice President</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-3 col-sm-12">
                    <div className="single_volunteer mt-30 volunteer_color_4">
                        <div className="volunteer_image">
                            <img src="assets/images/Manorama Ji Chief Secreatory.jpg" className="center" alt="Volunteer"/>
                             
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name"><a href="#">Manorama Ji</a></h5>
                                <p>Chief Secreatory</p>
                            </div>
                        </div>
                    </div> 
                </div>
            
                
                
            </div> 
        </div> 
    </section>
    <div className="container" id="center">
        <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="single_volunteer mt-30 volunteer_color_4">
                        <div className="volunteer_image">
                            <img src="assets/images/Pooja Singh.jpg" alt="Volunteer"/>
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name"><a href="#">Pooja Singh</a></h5>
                                <p>Treasurer</p>
                            </div>
                        </div>
                    </div> 
                </div>
                
                <div className="col-lg-3 col-sm-6">
                    <div className="single_volunteer mt-30 volunteer_color_2">
                        <div className="volunteer_image">
                            <img src="assets/images/Kajal Singh Vice President.webp"  alt="Volunteer"/>
                             
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name"><a href="#">Kajal Singh</a></h5>
                                <p>Vice President</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-3 col-sm-12" >
                    <div className="single_volunteer mt-30 volunteer_color_4" >
                        <div className="volunteer_image" >
                            <img src="assets/images/Sunil Singh Chief Incharge.jpg" className="center" alt="Volunteer"/>
                             
                        </div>
                        <div className="volunteer_content d-flex align-items-center justify-content-center">
                            <div className="content_wrapper">
                                <h5 className="volunteer_name"><a href="#">Sunil Singh </a></h5>
                                <p>Chief Incharge</p>
                            </div>
                        </div>
                    </div> 
                </div>
        </div>
        </div>
        &nbsp;
    <section className="video_area_3 pt-80 pb-130 bg_cover" style={{backgroundImage: 'url(assets/images/videobg.jpg)'}}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="video_image mt-50">
                        <img src="assets/images/services-1.jpg" alt="video"/>
                        <Link href="https://www.youtube.com/channel/UCnX181u_1jdMFhaxEFA1Y1w">
                        <a class="video-popup">
                            <i class="fa fa-play"></i>
                            <img src="assets/images/shape/shape-3.png" alt="shape"/>
                        </a>
                        </Link>
                      </div> 
                </div>
                <div className="col-lg-6">
                    <div className="video_content_3 mt-45">
                        <h4 className="video_title">We served more then 50k+ peoples</h4>
                        <p>Parth Charity Society is a nonproﬁt organization supported by community leaders, corporate sponsors, churches and concerned citizens join. There will be a day–in our lifetime–when we get to celebrate.</p>
                        
                    </div> 
                </div>
            </div> 
        </div> 
    </section>
    
        </div>
    )
}
