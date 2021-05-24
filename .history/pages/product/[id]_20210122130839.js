import { useRouter } from 'next/router'
import Link from 'next/link'
import baseUrl from '../../helpers/baseUrl'
const Product = ({product})=>
{
    const router = useRouter()
    if(router.isFallback)
    {
        return(
            <h3>Loading.............</h3>
        )
    }
    return(
            <div>
              <section className="page_banner bg_cover" style={{backgroundImage: 'url(assets/images/slider-1.jpg)'}}>
               </section>
              <div className="container center-align">
                <h3>{product.name}</h3>
                  <img src={product.mediaUrl} style={{width:'30%'}}/>
                    <h5>Rs.{product.price}</h5>
                      <p className="left-align">{product.description}</p>
              </div>
          </div>
    )
}

export async function getServerSideProps({params:{id}}) {
  const res = await fetch(`${baseUrl}/api/product/${id}`)
   const data = await res.json()  
  return {

      props: {product:data}
    }
  }

// export async function getStaticProps({params:{id}}) {
//     const res = await fetch(`${baseUrl}/api/product/${id}`)
//      const data = await res.json()  
//     return {
  
//         props: {product:data}
//       }
//     }
    
    // export async function getStaticPaths() {
    //     return { 
    //       paths: [
    //         { params: { id:"5ff4144f3ff188bc68fa8aad" } } 
    //       ],
    //       fallback: true
    //     };
    //   }
  export default Product