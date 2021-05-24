import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
const Create = ()=>{
    const [name,setName] =useState("")
    const[media,setMedia]=useState("")
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(name,media)
    }
    return(
        <div>
            <section className="page_banner bg_cover" style={{backgroundImage: 'url(assets/images/slider-1.jpg)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page_banner_content text-center">
                                <h3 className="page_title"> Gallery for Admin</h3>
                                    <ul className="breadcrumb justify-content-center">
                                        <li><a href="/">Home</a></li>
                                        <li><a className="active" href="#">Upload Images From Admin Panel</a></li>
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
                            <div className="col-lg-12">
                                <div className="contact_form mt-50">
                                    <div className="section_title pb-30">
                                        <img src="assets/images/section_icon.png" alt="Icon"/>
                                        <h3 className="title">Upload Image</h3>
                                    </div> 
	                                <form onSubmit={(e)=>handleSubmit(e)}>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="single_form">
                                                    <input type="text" placeholder="Image Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="file-field input-field">
                                                <div className="btn">
                                                    <span>File</span>
                                                        <input type="file" accept="image/*" onChange={(e)=>setMedia(e.target.files[0])}/>
                                                </div>
                                            </div>
                                            <img className="responsive-img" src={media?URL.createObjectURL(media):""}/>
                                            <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
                                            <div className="col-md-12">
                                                <div className="single_form">
                                                    <button className="main-btn" name="submit" type="submit" value="Submit">Upload</button>
                                                </div> 
                                            </div>
                                        </div> 
                                    </form>
                                </div> 
                            </div>
                        </div> 
                    </div> 
                </section>
            </div>
    )
}

export default Create