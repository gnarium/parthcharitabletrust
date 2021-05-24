import Head from 'next/head'
import {useState} from 'react'
import baseUrl from '../helpers/baseUrl'
import Link from 'next/link'
import cookie from 'js-cookie'
import { useRouter } from 'next/router'
const Login = () =>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const router = useRouter()
    const userLogin = async (e)=>
    {
        e.preventDefault()
        fetch(`${baseUrl}/api/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        })
        const res2 = await resizeBy.json()
        if(res2.error)
        {
            M.toast({html: res2.error,classes:"red"})
        }
        else
        {
            console.log(res2)
            cookie.set('token',res.token)
            router.push('/account')
        }
    }
    return (
        <div>
    <section className="page_banner bg_cover" style={{backgroundImage: 'url(assets/images/slider-1.jpg)'}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="page_banner_content text-center">
                        <h3 className="page_title"> Login for Admin</h3>
                        <ul className="breadcrumb justify-content-center">
                            <li><a href="/">Home</a></li>
                            <li><a className="active" href="#">Login For Admin Panel</a></li>
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
                            <h3 className="title">For Admin Login</h3>
                        </div> 
	                           <form onSubmit={(e)=>userLogin(e)}>
                            <div className="row">
                            <div className="col-md-12">
                                <div className="single_form">
                                    <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                </div> 
                            </div>
                            <div className="col-md-12">
                                <div className="single_form">
                                    <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                </div> 
                            </div>
                            <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
                           <div className="col-md-12">
                                <div className="single_form">
                                    <button className="main-btn" name="submit" type="submit" value="Submit">Login</button>
                                </div> 
                            </div>
                            <Link href="/signup"><a><h5>Don't  Have a Account</h5></a></Link>
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
  
export default Login