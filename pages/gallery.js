import Head from 'next/head'

import Link from 'next/link'
import React, { useState,useEffect } from 'react'
import baseUrl from '../helpers/baseUrl'
const Galley = ({products})=>
{
    const [activeImages,setActiveImages] = useState('all');
    const [categories,setCategories] = useState([]);

    const ImageComp = ({_id,mediaUrl,alt}) => {

        console.log(_id,mediaUrl)
        return(
            <div className="row">
            <div className="col-lg-10 col-md-6 "> 
                <div className=" causes_bg causes_color_1 mt-30" key={_id}>
                    <div className="causes_image">
                       <a href={mediaUrl} >
                         <img src={mediaUrl} alt={alt} style={{height:'250px',width:'350px',marginLeft:'auto',marginright:'auto'}}/>
                       </a>
                        &nbsp;
                    </div>
                </div>
            </div>
            </div>
        )
    }

    const BreadCrumbComp = ({item,_id}) => {
        return(
            <li><a className="active" href="#" onClick={()=>setActiveImages(item)} >{item}</a></li>
        )
    }

    useEffect(()=>{
       let tmp = [];
       for(let i=0;i<products.length;i++){
        console.log('dtt',products[i].category,tmp);
        if(!(tmp.some(e => e.category === products[i].category))){
           // debugger;
            tmp.push({category:products[i].category,_id:products[i]._id});
        }
       }
         setCategories(tmp);
    },[])

    useEffect(()=>{
        console.log("DATAAA",activeImages)
    },[activeImages])

    
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
                        categories && categories.map((item,id)=>{
                            return <BreadCrumbComp item={item.category} _id={item._id} />
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
    </div>

        {
            activeImages && activeImages!='all' && products.map((product)=>{
                if(product.category==activeImages){
                    return <ImageComp id={product._id} mediaUrl={product.mediaurl} alt={product.alt} />
                }
            })
        }
        {
            activeImages && activeImages=='all' &&
            products.map((product)=>{
                return <ImageComp id={product._id} mediaUrl={product.mediaurl} alt={product.alt} />
                
            })
        }
        {
            !activeImages &&
            products.map((product)=>{
                return <ImageComp id={product._id} mediaUrl={product.mediaurl} alt={product.alt} />
                
            })
        }
    </div>
    )
}


export  async function getServerSideProps()
{
    const res = await  fetch(`http://localhost:3001/api/fetch-imgs`)
    const data = await res.json()
    console.log('dtttt',data);
    return {
        props:
        {
            products:data.data   
        }
    }
}

export default Galley