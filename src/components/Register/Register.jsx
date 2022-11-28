import axios from "axios";
import joi from "joi";
import React, { useRef ,useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "./register.module.scss";


function Register() {

  let nameRef= useRef();
  let navigate =useNavigate();
  const [user, setuser] = useState({
            first_name : '',
            last_name : '',
            age : "",
            email: "",
            password :""

                        })
    const [errorMsg, seterrorMsg] = useState('')
    const [validateArrList, setvalidateArrList] = useState([])

                        let goToLogin =()=>{
                          navigate("/login")
                        }

                        let getData=(e)=>{
                          let newuser= {...user}
                          newuser[e.target.name] = e.target.value
                          // console.log(newuser);
                          setuser(newuser)
                    
                        } 

                        
let validationFormData=()=>{

  const schema=joi.object({

    first_name : joi.string().alphanum().required().min(4).max(24),
    last_name : joi.string().alphanum().required().min(4).max(24),
    age :joi.number().required().min(20).max(50),
    email: joi.string().required().email({tlds:{allow:['com','net']}}),
    password :joi.string().required().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/))

  })
  return schema.validate(user,{abortEarly:false})
}


                  let getDataOfAPi = async()=>{

                     const {data}= await axios.post(`https://route-egypt-api.herokuapp.com/signup`,user)
                        if(data.message == 'success'){
                          goToLogin();


                        }else{
                          seterrorMsg(data.message)
                        }
                      }


    let  InsertData =(e)=>{

      e.preventDefault();
     let Validationresponse = validationFormData();
     console.log(Validationresponse);
     if(Validationresponse.error){
      setvalidateArrList(Validationresponse.error.details)

     }else{

 getDataOfAPi();
     }
     


    }


  useEffect(() => {
    nameRef.current.focus();
  }, [])
  
  return (
    <>
      <div className={`${styled.register_home} container-fluid my-5`}>
        <form action="" onSubmit={InsertData}>
        <h2 className="text-center my-4 ">REGISTER</h2>
            <div className="row justify-content-center align-items-center">
            <div className="col-md-8">
            { (validateArrList.length > 0) && <div className="alert alert-danger">
              <ul>

              {validateArrList.map((error ,index)=>{

                return <li key={index}>{error.message}</li>
              })}
              </ul>
              </div>}
            {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
            </div>

            </div>
          <div className="row justify-content-center align-items-center ">

            <div className="col-md-4">
              <div className="mb-3">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                    placeholder="Enter your first name"
                    ref={nameRef}
                    autoComplete="off"
                    name="first_name"
                    onChange={getData}
                    // onFocus={()=>setnameFocus(true)}
                    // onBlur={()=>setnameFocus(false)}
                  />
                  <label htmlFor="exampleInputName" className="form-label text-danger">
                    First_Name
                  </label>
                </div>
                {/* <div className="my-2">
                  <div className="alert alert-danger" >
                  4 to 24 characters,
                  <span style={{color:"red"}}>Ex:Abdallah</span>
                  </div>
                </div> */}
              </div>

              <div className="mb-3">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                    placeholder="Enter your last name"
                   name="last_name"
                    autoComplete="off"
                    onChange={getData}

                    // onChange={(e)=>setname(e.target.value)}
                    // onFocus={()=>setnameFocus(true)}
                    // onBlur={()=>setnameFocus(false)}
                  />
                  <label htmlFor="exampleInputName" className="form-label text-danger">
                    Last_Name
                  </label>
                </div>
                                {/* <div className="my-2">
                  <div className="alert alert-danger" >
                  4 to 24 characters,
                  <span style={{color:"red"}}>Ex:Abdallah</span>
                  </div>
                </div> */}
                {/* <div className="my-2">
               <div 
                                
                  className={`${ nameFocus && name && !validname ? 
                  `${contactStayled.onscreen}`:`${contactStayled.offscreen}`}  alert alert-danger `} ref={errRef} >
                  4 to 24 characters.<br />
                  Must begin with a letter.<br />
                  Letters, numbers, underscores, hyphens allowed.<br />
                  <span style={{color:"red"}}>Ex:Abdallah</span>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                    placeholder="enter your mail"
                    name="email"
                    autoComplete="off"
                    onChange={getData}

                    // onChange={(e)=>setname(e.target.value)}
                    // onFocus={()=>setnameFocus(true)}
                    // onBlur={()=>setnameFocus(false)}
                  />
                  <label htmlFor="exampleInputName" className="form-label text-danger">
                   Email
                  </label>
                </div>
                {/* <div className="my-2">
                  <div className="alert alert-danger" >
                  4 to 24 characters,
                  <span style={{color:"red"}}>Ex:Abdallah</span>
                  </div>
                </div> */}
              </div>
              <div className="mb-3">
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                    placeholder="Enter your Age"
                  name="age"
                    autoComplete="off"
                    onChange={getData}

                    // onChange={(e)=>setname(e.target.value)}
                    // onFocus={()=>setnameFocus(true)}
                    // onBlur={()=>setnameFocus(false)}
                  />
                  <label htmlFor="exampleInputName" className="form-label text-danger">
                   Age
                  </label>
                </div>
                {/* <div className="my-2">
                  <div className="alert alert-danger" >
                  4 to 24 characters,
                  <span style={{color:"red"}}>Ex:Abdallah</span>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="col-md-5">
              <div className="mb-3">
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                    placeholder="Enter your Password"
                    name="password"
                    autoComplete="off"
                    onChange={getData}

                    // onChange={(e)=>setname(e.target.value)}
                    // onFocus={()=>setnameFocus(true)}
                    // onBlur={()=>setnameFocus(false)}
                  />
                  <label htmlFor="exampleInputName" className="form-label text-danger">
                    Password
                  </label>
                </div>
                {/* <div className="my-2">
                  <div className="alert alert-danger" >
                  4 to 24 characters,
                  <span style={{color:"red"}}>Ex:Abdallah</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center py-5">
           
              <button type="submit" className="btn btn-outline-success w-25 ">
                REGISTER
              </button>
            
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
