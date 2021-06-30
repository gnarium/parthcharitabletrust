// @flow
import * as React from 'react';

import Modal from 'react-awesome-modal';
const EditModal = (props) => {

  const [name,setName] = React.useState(props.editId.name);
  const [alt,setAlt] = React.useState(props.editId.alt);
  const [category,setCategory] = React.useState(props.editId.category);
  const [err,setErr] = React.useState('');
  const [success,setSuccess] = React.useState('');name

  const submitHandler = async (event) => {
    event.preventDefault();

  }


    const clearErr = () => {
      if(err != ''){
        setErr('');
      }
    }

    React.useEffect(()=>{
      if(err != ""){
        setTimeout(()=>{
          setErr("");
        },3000)
      }
      if(success != ""){
        setTimeout(()=>{
          setSuccess("");
        },3000)
      }
    },[err,success])

    const editImg = async (e) => {
      e.preventDefault();
      // let formData = new FormData();
      //   formData.append("name",name);
      //   formData.append("alt",alt);
      //   formData.append("category",category);
      let dt = {
        name,category,alt,
        _id:props.editId._id
      }

       let resp = await fetch(`http://localhost:3001/api/edit-img`, {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(dt)
        })
        const res2 = await resp.json();
        if (res2.error) {
            console.log("Response of login", res2)
        } else {

        }
    }

    return (
      <div className='modal-wrapper' >
             <div className='custom-modal' >
                <div className='close-mod' onClick={()=> props.setModal(false)} >X</div>
                   <form onSubmit={(e)=>editImg(e)}>
                            <div className="row">
                            <div className="col-md-12">
                                <div className="single_form">
                                    <input type="text" placeholder="Image Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                                </div> 
                            </div>
                            <div className="col-md-12">
                                <div className="single_form">
                                    <input type="text" placeholder="Alt" value={alt} onChange={(e)=>setAlt(e.target.value)}/>
                                </div> 
                            </div>
                            <div className="col-md-12">
                                                <div className="single_form">
                                                    <select class="form-control" id="exampleFormControlSelect1" name='category' value={category} onChange={(e)=>setCategory(e.target.value)} >
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

                            <div className="col-md-12">
                                <div className="single_form">
                                    <button className="main-btn" name="submit" type="submit" value="Submit">EDIT</button>
                                </div> 
                            </div>
                            
                        </div> 
                    </form>
             </div>

      </div>
    );

}

export default EditModal;
