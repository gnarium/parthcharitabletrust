import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
        <div>
            <section className="slider_area slider_area_2 bg_cover d-flex align-items-center" style={{backgroundImage: 'url(assets/images/slider-bg.jpg)'}}>
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-6">
                    <div className="slider_content_2">
                        <h2 className="title wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.2s">We’ve funded <br/> 44,007 Dollars over <br/> 10 million peoples </h2>
                        <a href="#" className="main-btn wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.5s">Leran More</a>
                    </div> 
                </div>
                <div className="col-lg-6 col-md-5">
                    <div className="slider_hero d-flex justify-content-center justify-content-lg-end">
                        <img className="wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.9s" src="assets/images/slider_hero.png" alt="slider hero"/>
                    </div> 
                </div> 
            </div> 
        </div> 
        <div className="slider_shape d-flex align-items-center">
            <img className="shape" src="assets/images/shape/shape-3.png" alt="shape"/>
        </div>
    </section>
    <section className="service_area">
        <div className="container-fluid p-0">
            <div className="row no-gutters justify-content-center">
                <div className="col-lg-4">
                    <div className="single_services text-center services_1">
                        <div className="services_icon">
                            <img src="assets/images/s-icon-1.png" alt="icon"/>
                        </div>
                        <div className="services_content">
                            <h4 className="services_title"><a href="#">Be a Volunteer</a></h4>
                            <p>Helpgrove is a nonproﬁt organization supported by community leaders, corporate sponsors, churches.</p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-4">
                    <div className="single_services active_2 text-center services_2">
                        <div className="services_icon">
                            <img src="assets/images/s-icon-2.png" alt="icon"/>
                        </div>
                        <div className="services_content">
                            <h4 className="services_title"><a href="#">Donate Now</a></h4>
                            <p>Helpgrove is a nonproﬁt organization supported by community leaders, corporate sponsors, churches.</p>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4">
                    <div className="single_services text-center services_3">
                        <div className="services_icon">
                            <img src="assets/images/s-icon-3.png" alt="icon"/>
                        </div>
                        <div className="services_content">
                            <h4 className="services_title"><a href="#">Send Gift</a></h4>
                            <p>Helpgrove is a nonproﬁt organization supported by community leaders, corporate sponsors, churches.</p>
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>


    <section className="campaing_doner_area">
        <div className="campaing_area pt-130 pb-110">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_title text-center pb-30">
                            <img src="assets/images/section_icon.png" alt="Icon"/>
                            <h3 className="title">Featured Camapaign</h3>
                        </div> 
                    </div>
                </div> 
                <div className="row">
                    <div className="col-lg-5">
                        <div className="campaing_nav pt-15">
                            <ul className="nav" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="active" id="hospital-tab" data-toggle="tab" href="#hospital" role="tab" aria-controls="hospital" aria-selected="true">
                                        <div className="campaing_items items_color_1 d-flex">
                                            <div className="items_icon">
                                                <img src="assets/images/c-icon-1.png" alt="icon"/>
                                            </div>
                                            <div className="items_content media-body">
                                                <h4 className="items_title">Hospital Build</h4>
                                                <p>Helpgrove is a nonproﬁt organization supported by community leaders</p>
                                            </div>
                                        </div> 

                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a id="cancer-tab" data-toggle="tab" href="#cancer" role="tab" aria-controls="cancer" aria-selected="false">
                                        <div className="campaing_items items_color_2 d-flex">
                                            <div className="items_icon">
                                                <img src="assets/images/c-icon-2.png" alt="icon"/>
                                            </div>
                                            <div className="items_content media-body">
                                                <h4 className="items_title">Cancer Treatment </h4>
                                                <p>Helpgrove is a nonproﬁt organization supported by community leaders</p>
                                            </div>
                                        </div> 
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a id="environtment-tab" data-toggle="tab" href="#environtment" role="tab" aria-controls="environtment" aria-selected="false">
                                        <div className="campaing_items items_color_3 d-flex">
                                            <div className="items_icon">
                                                <img src="assets/images/c-icon-3.png" alt="icon"/>
                                            </div>
                                            <div className="items_content media-body">
                                                <h4 className="items_title">Environtment Recyle</h4>
                                                <p>Helpgrove is a nonproﬁt organization supported by community leaders</p>
                                            </div>
                                        </div> 
                                    </a>
                                </li>
                            </ul>
                        </div> 
                    </div>

                    <div className="col-lg-7">
                        <div className="campaing_tab_content mt-30">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="hospital" role="tabpanel" aria-labelledby="hospital-tab">
                                    <div className="campaing_content">
                                        <img src="assets/images/campaing-1.png" alt=""/>

                                        <div className="campaing_donate">
                                            <div className="donate_dollar d-flex justify-content-between">
                                                <span>Raised $17000</span>
                                                <span>Goal $37000</span>
                                            </div>
                                            <div className="donate_progress">
                                                <div className="bar_inner">
                                                    <div className="bar progress_line" data-width="59"><span className="percentage">59%</span></div>
                                                </div>
                                            </div> 
                                            <div className="donate_btn">
                                                <a href="#" className="main-btn"><i className="fa fa-heart"></i> Donate  Now</a>
                                            </div> 
                                        </div>
                                    </div> 
                                </div>
                                <div className="tab-pane fade" id="cancer" role="tabpanel" aria-labelledby="cancer-tab">
                                    <div className="campaing_content">
                                        <img src="assets/images/campaing-1.png" alt=""/>

                                        <div className="campaing_donate">
                                            <div className="donate_dollar d-flex justify-content-between">
                                                <span>Raised $17000</span>
                                                <span>Goal $37000</span>
                                            </div> 
                                            <div className="donate_progress">
                                                <div className="bar_inner">
                                                    <div className="bar progress_line" data-width="59"><span className="percentage">59%</span></div>
                                                </div>
                                            </div> 
                                            <div className="donate_btn">
                                                <a href="#" className="main-btn"><i className="fa fa-heart"></i> Donate  Now</a>
                                            </div> 
                                        </div>
                                    </div> 
                                </div>
                                <div className="tab-pane fade" id="environtment" role="tabpanel" aria-labelledby="environtment-tab">
                                    <div className="campaing_content">
                                        <img src="assets/images/campaing-1.png" alt=""/>

                                        <div className="campaing_donate">
                                            <div className="donate_dollar d-flex justify-content-between">
                                                <span>Raised $17000</span>
                                                <span>Goal $37000</span>
                                            </div> 
                                            <div className="donate_progress">
                                                <div className="bar_inner">
                                                    <div className="bar progress_line" data-width="59"><span className="percentage">59%</span></div>
                                                </div>
                                            </div> 
                                            <div className="donate_btn">
                                                <a href="#" className="main-btn"><i className="fa fa-heart"></i> Donate  Now</a>
                                            </div> 
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div> 
                    </div>
                </div> 
            </div> 
        </div> 
        
        <div className="doner_area pb-130">
            <div className="container">
                <div className="doner_title text-center mb-30">
                   <h4 className="title">Our Top Doners</h4>
                </div> 
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="single_doner mt-30 text-center doner_color-1">
                            <div className="doner_image">
                                <img src="assets/images/donor.png" alt="doner" style={{height:'120px',width:'150%'}}/>
                            </div>
                            <div className="doner_content">
                                <h5 className="doner_name">Maria Lodge</h5>
                                <p>Donate- $384</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="single_doner mt-30 text-center doner_color-2">
                            <div className="doner_image">
                                <img src="assets/images/donor2.png" alt="doner" style={{height:'120px',width:'150%'}}/>
                            </div>
                            <div className="doner_content">
                                <h5 className="doner_name">Maria Lodge</h5>
                                <p>Donate- $384</p>
                            </div>
                        </div> 
                    </div>
                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="single_doner mt-30 text-center doner_color-3">
                            <div className="doner_image">
                                <img src="assets/images/donor3.png" alt="doner" style={{height:'120px',width:'150%'}}/>
                            </div>
                            <div className="doner_content">
                                <h5 className="doner_name">Maria Lodge</h5>
                                <p>Donate- $384</p>
                            </div>
                        </div> 

                    </div>
                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="single_doner mt-30 text-center doner_color-4">
                            <div className="doner_image">
                                <img src="assets/images/donor4.png" alt="doner" style={{height:'120px',width:'150%'}}/>
                            </div>
                            <div className="doner_content">
                                <h5 className="doner_name">Maria Lodge</h5>
                                <p>Donate- $384</p>
                            </div>
                        </div> 
                    </div>
                </div> 
            </div> 
        </div> 
    </section>


    <section className="features_area pt-100 pb-130 bg_cover" style={{backgroundImage: 'url(assets/images/gray-bg.jpg)'}}>
        <div className="features_shape_1" style={{backgroundImage: 'url(assets/images/shape/shape-1.png)'}}></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="features_content mt-20">
                        <h3 className="title">We spread helping hand to who are helpless</h3>
                        <p>Helpgrove is a nonproﬁt organization supported by community leaders, corporate sponsors, churches and concerned citizens join. There will be a day–in our lifetime–when we get to celebrate every person.</p>
                        <a href="#" className="main-btn">Read More</a>
                    </div> 
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="single_feature mt-30">
                                <div className="feature_icon">
                                    <img src="assets/images/f-icon-1.png" alt="icon"/>
                                </div>
                                <div className="feature_content">
                                    <h4 className="feature_title">Medical Help</h4>
                                    <p>Helpgrove is a nonproﬁt organization supported by community leaders</p>
                                </div>
                            </div> 
                        </div>
                        <div className="col-sm-6">
                            <div className="single_feature mt-30">
                                <div className="feature_icon">
                                    <img src="assets/images/f-icon-2.png" alt="icon"/>
                                </div>
                                <div className="feature_content">
                                    <h4 className="feature_title">Clean  Water</h4>
                                    <p>Helpgrove is a nonproﬁt organization supported by community leaders</p>
                                </div>
                            </div> 
                        </div>
                        <div className="col-sm-6">
                            <div className="single_feature mt-30">
                                <div className="feature_icon">
                                    <img src="assets/images/f-icon-3.png" alt="icon"/>
                                </div>
                                <div className="feature_content">
                                    <h4 className="feature_title">Cancer Fund</h4>
                                    <p>Helpgrove is a nonproﬁt organization supported by community leaders</p>
                                </div>
                            </div> 
                        </div>
                        <div className="col-sm-6">
                            <div className="single_feature mt-30">
                                <div className="feature_icon">
                                    <img src="assets/images/f-icon-4.png" alt="icon"/>
                                </div>
                                <div className="feature_content">
                                    <h4 className="feature_title">Food Fund</h4>
                                    <p>Helpgrove is a nonproﬁt organization supported by community leaders</p>
                                </div>
                            </div> 
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
        <div className="features_shape_2" style={{backgroundImage: 'url(assets/images/shape/shape-1.png)'}}></div>
    </section>

    <section className="video_area video_area_2 pb-130 bg_cover" style={{backgroundImage: 'url(assets/images/slider-1.jpg)'}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="video_content_2 text-center mt-50">
                        <h4 className="video_title">We served more then 80,000 poor peoples</h4>
                    </div> 
                
                    <div className="video_watch  text-center mt-50">
                        <a href="https://www.youtube.com/watch?v=WKUjCCOcLFY" className="video_play video-popup"><span><i className="fa fa-play"></i></span> Watch video</a>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>



    <section className="causes_area pt-130 pb-130">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title text-center pb-30">
                        <img src="assets/images/section_icon.png" alt="Icon"/>
                        <h3 className="title">Latest Causes</h3>
                    </div> 
                </div>
            </div> 
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="single_causes causes_bg causes_color_1 mt-30">
                        <div className="causes_image">
                            <img src="assets/images/causes-1.jpg" alt="causes"/>
                            <ul className="causes_icon">
                                <li><a href="#"><i className="fa fa-camera"></i></a></li>
                                <li><a href="#"><i className="fa fa-video-camera"></i></a></li>
                            </ul>
                            <div className="causes_shape">
                                <img src="assets/images/shape/shape-4.png" alt="shape"/>
                            </div>
                            <div className="causes_progress">
                                <div className="bar_inner">
                                    <div className="bar progress_line" data-width="59"><span className="percentage">59%</span></div>
                                </div>
                            </div> 
                        </div>
                        <div className="causes_content">
                            <ul className="causes_meta">
                                <li><a href="#"><i className="fa fa-line-chart"></i> <span>Goal</span> : $1900</a></li>
                                <li><a href="#"><i className="fa fa-meh-o"></i> <span>Raised</span> : $900</a></li>
                            </ul>
                            <h4 className="causes_title"><a href="#">Build beutifull school</a></h4>
                            <p>Helpgrove is a nonproﬁt organization supported by community leaders.</p>
                            <a href="#" className="more">Read More</a>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single_causes causes_bg causes_color_2  mt-30">
                        <div className="causes_image">
                            <img src="assets/images/causes-2.jpg" alt="causes"/>
                            <ul className="causes_icon">
                                <li><a href="#"><i className="fa fa-camera"></i></a></li>
                                <li><a href="#"><i className="fa fa-video-camera"></i></a></li>
                            </ul>
                            <div className="causes_shape">
                                <img src="assets/images/shape/shape-4.png" alt="shape"/>
                            </div>
                            <div className="causes_progress">
                                <div className="bar_inner">
                                    <div className="bar progress_line" data-width="59"><span className="percentage">59%</span></div>
                                </div>
                            </div> 
                        </div>
                        <div className="causes_content">
                            <ul className="causes_meta">
                                <li><a href="#"><i className="fa fa-line-chart"></i> <span>Goal</span> : $1900</a></li>
                                <li><a href="#"><i className="fa fa-meh-o"></i> <span>Raised</span> : $900</a></li>
                            </ul>
                            <h4 className="causes_title"><a href="#">Food collect for child</a></h4>
                            <p>Helpgrove is a nonproﬁt organization supported by community leaders.</p>
                            <a href="#" className="more">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single_causes causes_bg causes_color_3  mt-30">
                        <div className="causes_image">
                            <img src="assets/images/causes-3.jpg" alt="causes"/>
                            <ul className="causes_icon">
                                <li><a href="#"><i className="fa fa-camera"></i></a></li>
                                <li><a href="#"><i className="fa fa-video-camera"></i></a></li>
                            </ul>
                            <div className="causes_shape">
                                <img src="assets/images/shape/shape-4.png" alt="shape"/>
                            </div>
                            <div className="causes_progress">
                                <div className="bar_inner">
                                    <div className="bar progress_line" data-width="59"><span className="percentage">59%</span></div>
                                </div>
                            </div> 
                        </div>
                        <div className="causes_content">
                            <ul className="causes_meta">
                                <li><a href="#"><i className="fa fa-line-chart"></i> <span>Goal</span> : $1900</a></li>
                                <li><a href="#"><i className="fa fa-meh-o"></i> <span>Raised</span> : $900</a></li>
                            </ul>
                            <h4 className="causes_title"><a href="#">Home collect for child</a></h4>
                            <p>Helpgrove is a nonproﬁt organization supported by community leaders.</p>
                            <a href="#" className="more">Read More</a>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single_causes causes_bg causes_color_4  mt-30">
                        <div className="causes_image">
                            <img src="assets/images/causes-4.jpg" alt="causes"/>
                            <ul className="causes_icon">
                                <li><a href="#"><i className="fa fa-camera"></i></a></li>
                                <li><a href="#"><i className="fa fa-video-camera"></i></a></li>
                            </ul>
                            <div className="causes_shape">
                                <img src="assets/images/shape/shape-4.png" alt="shape"/>
                            </div>
                            <div className="causes_progress">
                                <div className="bar_inner">
                                    <div className="bar progress_line" data-width="59"><span className="percentage">59%</span></div>
                                </div>
                            </div> 
                        </div>
                        <div className="causes_content">
                            <ul className="causes_meta">
                                <li><a href="#"><i className="fa fa-line-chart"></i> <span>Goal</span> : $1900</a></li>
                                <li><a href="#"><i className="fa fa-meh-o"></i> <span>Raised</span> : $900</a></li>
                            </ul>
                            <h4 className="causes_title"><a href="#">Save blood cancer</a></h4>
                            <p>Helpgrove is a nonproﬁt organization supported by community leaders.</p>
                            <a href="#" className="more">Read More</a>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single_causes causes_bg causes_color_5  mt-30">
                        <div className="causes_image">
                            <img src="assets/images/causes-5.jpg" alt="causes"/>
                            <ul className="causes_icon">
                                <li><a href="#"><i className="fa fa-camera"></i></a></li>
                                <li><a href="#"><i className="fa fa-video-camera"></i></a></li>
                            </ul>
                            <div className="causes_shape">
                                <img src="assets/images/shape/shape-4.png" alt="shape"/>
                            </div>
                            <div className="causes_progress">
                                <div className="bar_inner">
                                    <div className="bar progress_line" data-width="59"><span className="percentage">59%</span></div>
                                </div>
                            </div> 
                        </div>
                        <div className="causes_content">
                            <ul className="causes_meta">
                                <li><a href="#"><i className="fa fa-line-chart"></i> <span>Goal</span> : $1900</a></li>
                                <li><a href="#"><i className="fa fa-meh-o"></i> <span>Raised</span> : $900</a></li>
                            </ul>
                            <h4 className="causes_title"><a href="#">Help ecosytems</a></h4>
                            <p>Helpgrove is a nonproﬁt organization supported by community leaders.</p>
                            <a href="#" className="more">Read More</a>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single_causes causes_bg causes_color_6 mt-30">
                        <div className="causes_image">
                            <img src="assets/images/causes-6.jpg" alt="causes"/>
                            <ul className="causes_icon">
                                <li><a href="#"><i className="fa fa-camera"></i></a></li>
                                <li><a href="#"><i className="fa fa-video-camera"></i></a></li>
                            </ul>
                            <div className="causes_shape">
                                <img src="assets/images/shape/shape-4.png" alt="shape"/>
                            </div>
                            <div className="causes_progress">
                                <div className="bar_inner">
                                    <div className="bar progress_line" data-width="59"><span className="percentage">59%</span></div>
                                </div>
                            </div> 
                        </div>
                        <div className="causes_content">
                            <ul className="causes_meta">
                                <li><a href="#"><i className="fa fa-line-chart"></i> <span>Goal</span> : $1900</a></li>
                                <li><a href="#"><i className="fa fa-meh-o"></i> <span>Raised</span> : $900</a></li>
                            </ul>
                            <h4 className="causes_title"><a href="#">Save poor female</a></h4>
                            <p>Helpgrove is a nonproﬁt organization supported by community leaders.</p>
                            <a href="#" className="more">Read More</a>
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>
    

    

    {/* <section className="event_area_2 pt-130 pb-130 bg_cover" style={{backgroundImage: 'url(assets/images/gray-bg.jpg)'}}>
        <div className="event_shape_1" style={{backgroundImage: 'url(assets/images/shape/shape-1.png)'}}></div>
        <div className="container">
            <div className="row">
                    <div className="col-lg-12">
                        <div className="section_title text-center pb-60">
                            <img src="assets/images/section_icon.png" alt="Icon"/>
                            <h3 className="title">Our Latest Events</h3>
                        </div> 
                    </div>
                </div> 
            <div className="row no-gutters justify-content-center">
                <div className="col-lg-10">
                    <div className="event_active">
                        <div className="single_event_2 d-flex flex-wrap event_color-1">
                            <div className="event_image">
                                <img src="assets/images/event-1.jpg" alt="event"/>
                                <div className="event_date d-flex align-items-center justify-content-center">
                                    <img className="shape" src="assets/images/shape/shape-3.png" alt="shape"/>
                                    <span className="date"><span>13</span> Dec</span>
                                </div>
                            </div>
                            <div className="event_content_wrapper d-flex align-items-center justify-content-center">
                                <div className="event_content">
                                    <h4 className="event_title"><a href="#">4th Annual Schoolyard Dash 5K</a></h4>
                                    <p><img src="assets/images/map-2.png" alt="map"/> <span>2018/12/28 00:00 69 Warren Street, New York, USA</span> </p>
                                    <a href="#" className="more">Read More</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="single_event_2 d-flex flex-wrap event_color-2">
                            <div className="event_image">
                                <img src="assets/images/event-2.jpg" alt="event"/>
                                <div className="event_date d-flex align-items-center justify-content-center">
                                    <img className="shape" src="assets/images/shape/shape-3.png" alt="shape"/>
                                    <span className="date"><span>13</span> Dec</span>
                                </div>
                            </div>
                            <div className="event_content_wrapper d-flex align-items-center justify-content-center">
                                <div className="event_content">
                                    <h4 className="event_title"><a href="#">4th Annual Schoolyard Dash 5K</a></h4>
                                    <p><img src="assets/images/map-2.png" alt="map"/> <span>2018/12/28 00:00 69 Warren Street, New York, USA</span> </p>
                                    <a href="#" className="more">Read More</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="single_event_2 d-flex flex-wrap event_color-3">
                            <div className="event_image">
                                <img src="assets/images/event-3.jpg" alt="event"/>
                                <div className="event_date d-flex align-items-center justify-content-center">
                                    <img className="shape" src="assets/images/shape/shape-3.png" alt="shape"/>
                                    <span className="date"><span>13</span> Dec</span>
                                </div>
                            </div>
                            <div className="event_content_wrapper d-flex align-items-center justify-content-center">
                                <div className="event_content">
                                    <h4 className="event_title"><a href="#">4th Annual Schoolyard Dash 5K</a></h4>
                                    <p><img src="assets/images/map-2.png" alt="map"/> <span>2018/12/28 00:00 69 Warren Street, New York, USA</span> </p>
                                    <a href="#" className="more">Read More</a>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div>
            </div> 
        </div> 
        <div className="event_shape_2" style={{backgroundImage: 'url(assets/images/shape/shape-1.png)'}}></div>
    </section> */}

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
