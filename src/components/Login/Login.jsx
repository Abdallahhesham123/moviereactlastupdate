import axios from "axios";
import joi from "joi";
import React, { useRef ,useEffect,useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Store";
import styled from "./login.module.scss";
function Login() {
const {SaveUserData} = useContext(AuthContext)
  let emailRef= useRef();
  let navigate =useNavigate();
  const [user, setuser] = useState({

        
            email: "",
            password :""

                        })
    const [errorMsg, seterrorMsg] = useState('')
    const [validateArrList, setvalidateArrList] = useState([])

                        let goToHome =()=>{
                          navigate("/" , { replace: true })
                        }

                        let getData=(e)=>{
                          let newuser= {...user}
                          newuser[e.target.name] = e.target.value
                          // console.log(newuser);
                          setuser(newuser)
                    
                        } 

                        
let validationFormData=()=>{

  const schema=joi.object({


    email: joi.string().required().email({tlds:{allow:['com','net']}}),
    password :joi.string().required().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/)," origin")

  })
  return schema.validate(user,{abortEarly:false})
}


                  let getDataOfAPi = async()=>{

                     const {data}= await axios.post(`https://route-egypt-api.herokuapp.com/signin`,user)
                        if(data.message == 'success'){

                          localStorage.setItem("token",data.token)
                          SaveUserData();
                          goToHome();


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
    emailRef.current.focus();
  }, [])
  
  return (
    <>
    
    <div className={`${styled.login_home} container-fluid my-5`}>
        <form action="" onSubmit={InsertData}>
        <h2 className="text-center my-4 ">LOGIN</h2>
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
                    type="email"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                    placeholder="Name"
                    onChange={getData}
                    name="email"
                    autoComplete="off"
                    ref={emailRef}
                  />
                  <label htmlFor="exampleInputName" className="form-label text-danger">
                   Email
                  </label>
                </div>

              </div>

            </div>

            <div className="col-md-4">
              <div className="mb-3">
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                    placeholder="Name"
                    autoComplete="off"
                    onChange={getData}
                    name="password"

                  />
                  <label htmlFor="exampleInputName" className="form-label text-danger">
                    Password
                  </label>
                </div>

              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center py-5">
           
              <button type="submit" className="btn btn-primary w-25 ">
                Login
              </button>
            
          </div>
        </form>
      </div>
    
    </>
  )
}

export default Login