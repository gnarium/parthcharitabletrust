import Link from 'next/link'
import React from 'react'
import baseUrl from '../helpers/baseUrl'
const Cause = ({products})=>
{
    const productList =products.map(product=>{
      
        return(
            
        <div className="row">
            <div className="col-lg-10 col-md-6 "> 
                <div className="single_causes causes_bg causes_color_1 mt-30" key={product._id}>
                    <div className="causes_image">
                        <img src={product.mediaUrl} alt="causes" style={{height:'250px',width:'350px',marginLeft:'35px'}}/>
                        <Link href={'/product/[id]'} as= {`/product/${product._id}`}>
                            <ul className="causes_icon">
                                <li><a href="assets/images/gallery.jpeg"><i className="fa fa-camera"></i></a></li>
                                <li><a href="assets/images/gallery.jpeg"><i className="fa fa-video-camera"></i></a></li>
                            </ul>
                        </Link>
                            {/* <span className="card-title black-text">{product.name}</span> */}
                    </div>
                    {/* <div className="causes_shape"> */}
                        {/* <p>Rs{product.price}</p> */}
                    {/* </div> */}
                    {/* <div className="causes_shape">
                        View Product
                    </div> */}
                </div>
            </div>
            </div>
        )
    })
    console.log(products)
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
        {productList}
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