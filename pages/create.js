import Head from 'next/head'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router';
//import EditModal from '../components/edit-modal/editModal.js';


const Create = ()=>{
    const [name,setName] =useState("")
    const[media,setMedia]=useState("")
    const [category,setCat]=useState("");
    const [resp,setResp] = useState("");
    const [alt,setAlt] = useState("");
    const [modal,setModal] = useState(false);
    const [editId,setEditImg] = useState("");


    const [tableData,setTableData] = useState([]);

    const router = useRouter();

    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log(media);
        let formData = new FormData();
        formData.append("name",media.name);
        formData.append("media",media);
        formData.append("alt",alt);
        formData.append("category",category);
        formData.append("imgName",name);

        let resp = await fetch(`https://www.parthcharitablesociety.org//api/upload-pic`, {
            method: "POST",
            body: formData
        })
        const res2 = await resp.json();
        if (res2.error) {
            console.log("Response of login", res2)
            M.toast({ html: res2.error, classes: "red" })
        } else {
            setResp(res2.msg);
            fetchTableData();
            console.log("Response of login", res2)
        }
    }

    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }
    useEffect(()=> {
        let token = getCookie("token");
        if(!token){
            router.push('/login');
        }
    })
    function delete_cookie(name) {
      document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    const logout = () => {
        delete_cookie('token');
        router.push('/login');   
    }

    const fetchTableData = async () => {
        const res = await  fetch(`${baseUrl}/api/fetch-imgs`)
        const data = await res.json();
        console.log("Image data",data);
        setTableData(data.data);
    }

    useEffect(()=>{
        fetchTableData();
    },[])
   
   const deleteImg = async (_id) => {
    console.log("Iddd",_id)
        let resp = await fetch(`https://www.parthcharitablesociety.org//api/delete-img/${_id}`, {
                method: "DELETE"
            })
        const res2 = await resp.json();
        console.log(res2);
        if(res2.success){
            let tmp = JSON.parse(JSON.stringify(tableData))
            tmp = tmp.filter((item)=>{
                item._id != _id
            });
            setTableData(tmp);
        }
   }

   const editImg = async (_id,name,category,alt) => {
        setEditImg({
            _id,name,category,alt
        });
        setModal(true);
        console.log("ID",_id);

        // let formData = new FormData();
        // formData.append("name",media.name);
        // formData.append("media",media);
        // formData.append("alt",alt);
        // formData.append("category",category);
        // let resp = await fetch(`http://localhost:3001/api/edit-img`, {
        //     method: "POST",
        //     body: formData
        // })
        // const res2 = await resp.json();
        // if (res2.error) {
        //     console.log("Response of login", res2)
        //     M.toast({ html: res2.error, classes: "red" })
        // } else {
        //     setResp(res2.msg);
        //     fetchTableData();
        //     console.log("Response of login", res2)
        // }
   }

  const DataTable = ({id,image,category,_id,name,alt}) => {
    return(
              <tr>
                <td>{id}</td>
                <td><img src={image} width="100" height="80" /></td>
                <td>{name}</td>
                <td>{category}</td>
                <td>{alt}</td>
                <td><button className="btn btn-success" onClick={()=>editImg(_id,name,category,alt)} > Edit </button></td>
                <td><button className="btn btn-danger" onClick={()=>deleteImg(_id)} > DELETE </button></td>
              </tr>

        )
  }

    return(
        <div>
        {modal && <EditModal setModal={setModal} editId={editId} />}
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
	                                <form onSubmit={(e)=>handleSubmit(e)}  enctype="multipart/form-data">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="single_form">
                                                    <input type="text" placeholder="Image Name" value={name} name='name' onChange={(e)=>setName(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="single_form">
                                                    <input type="text" placeholder="Alt Tag" value={alt} name='alt' onChange={(e)=>setAlt(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="single_form">
                                                    <select class="form-control" id="exampleFormControlSelect1" name='category' onChange={(e)=>setCat(e.target.value)} >
                                                      <option>All</option>
                                                      <option>Food Distribution</option>
                                                      <option>Empowering Women Socially and Economically</option>
                                                      <option>Child Development And Their Education</option>
                                                      <option>Fitness Awareness : Daily Yoga</option>
                                                      <option>Tree Plantation</option>
                                                      <option>Helping Animals</option>
                                                      <option>Healthcare</option>
                                                      <option>Sanitization</option>
                                                      <option>Drinking Water</option>
                                                    </select>
                                                </div>
                                            </div>
                                            
                                            <div className="file-field input-field">
                                                <div className="btn">
                                                    <span>File</span>
                                                        <input type="file" accept="image/*" name='imgname'  onChange={(e)=>setMedia(e.target.files[0])}/>
                                                </div>
                                            </div>
                                            <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>

                                            {
                                                resp && <div> {resp} </div>
                                            }
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
            <table style={{"margin-left":"auto","margin-right":"auto","width":"85%"}}>
              <tr>
                <th>ID</th>
                <th>Preview</th>
                <th>Image Name</th>
                <th>Category</th>
                <th>Alt</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            { tableData && tableData.length>0 && tableData.map((data,id)=>{
                return <DataTable id={id+1} _id={data._id} name={data.name} alt={data.alt} image={data.mediaurl} category={data.category} />
            })

            }
            </table>
            &nbsp;
            <div className="container">
                    <button style={{"margin-left":"auto","margin-right":"auto"}} class="btn btn-danger" onClick={()=>logout()} >Logout</button>
            
            </div>
            
            </div>

    )
}

export default Create
