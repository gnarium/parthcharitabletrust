import Head from 'next/head'

import Link from 'next/link'
import React, { useState } from 'react'
import baseUrl from '../helpers/baseUrl'
const Cause = ({products})=>
{
    const [activeImages,setActiveImages] = useState('');

    const ImageComp = ({_id,mediaUrl}) => {

        console.log(_id,mediaUrl)
        return(
            <div className="row">
            <div className="col-lg-10 col-md-6 "> 
                <div className=" causes_bg causes_color_1 mt-30" key={_id}>
                    <div className="causes_image">
                        <img src={mediaUrl} alt="gallery" style={{height:'250px',width:'350px',marginLeft:'35px'}}/>
                        &nbsp;
                    </div>
                </div>
            </div>
            </div>
        )
    }

    const BreadCrumbComp = ({item,_id}) => {
        return(
            <li><a className="active" href="#" onClick={()=>setActiveImages(_id)} >{item}</a></li>
        )
    }

    
    return(
    <div className="rootcard">
    <section className="page_banner bg_cover" style={{backgroundImage: 'url(assets/images/slider-1.jpg)'}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="page_banner_content text-center">
                        <h3 className="page_title">Our Gallery</h3>
                        <ul className="breadcrumb justify-content-center">
                            <li><Link href="/">Home</Link></li>
                            <li><a className="active" href="#">Gallery</a></li>
                        </ul>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>


        <div className="container">
    <div className="row">
        <div className="col-lg-12">
            <div className="page_banner_content text-center">
                <h3 className="page_title">Our Gallery</h3>
                <ul className="breadcrumb justify-content-center">
                    <li><a className="active" href="#" onClick={()=>setActiveImages('all')} >All</a></li>
                    {
                        products.map((item)=>{
                            return <BreadCrumbComp item={item.name} _id={item._id} />
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
    </div>

        {
            activeImages && activeImages!='all' && products.map((product)=>{
                if(product._id==activeImages){
                    return <ImageComp id={product._id} mediaUrl={product.mediaUrl} />
                }
            })
        }
        {
            activeImages && activeImages=='all' &&
            products.map((product)=>{
                return <ImageComp id={product._id} mediaUrl={product.mediaUrl} />
                
            })
        }
        {
            !activeImages &&
            products.map((product)=>{
                return <ImageComp id={product._id} mediaUrl={product.mediaUrl} />
                
            })
        }
    </div>
    )
}


export  async function getServerSideProps()
{
    const res = await  fetch(`${baseUrl}/api/products`)
    const data = await res.json()
    return {
        props:
        {
            products:data
        }
    }
}

export default Cause