import Head from 'next/head'
import {useState} from 'react'
import baseUrl from '../helpers/baseUrl'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { route } from 'next/dist/next-server/server/router'
const Signup = () =>{
    const [name,setName]= useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const router = useRouter()
    
    const userSignup = async(e)=>
    {
        e.preventDefault()
      const res=  await fetch(`${baseUrl}/api/signup`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify
            ({
                name,
                email,
                password
            })
        })
        const res2 = await res.json()
        if(res2.error)
        {
            M.toast({html: res2.error,classes:"red"})
        }
        else
        {
            M.toast({html: res2.message,classes:"green"})
            router.push('/login')
        }
    }
    return (
        <div>
    <section className="page_banner bg_cover" style={{backgroundImage: 'url(assets/images/slider-1.jpg)'}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="page_banner_content text-center">
                        <h3 className="page_title"> Signup for Admin</h3>
                        <ul className="breadcrumb justify-content-center">
                            <li><a href="/">Home</a></li>
                            <li><a className="active" href="#">Signup For Admin Panel</a></li>
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
                            <h3 className="title">For Admin Signup</h3>
                        </div> 
	                    <form onSubmit={(e)=>userSignup(e)}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="single_form">
                                    <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                                </div>
                            </div>
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
                                    <button className="main-btn" name="submit" type="submit" value="Submit">Signup</button>
                                </div> 
                            </div>
                            <Link href="/login"><a><h5>Already Have a Account</h5></a></Link>
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
  
export default Signup