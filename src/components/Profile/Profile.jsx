import React, { useContext } from 'react'
import { AuthContext } from '../../Context/Store'
import profileStyle from "./profile.module.scss"
import {Helmet} from "react-helmet";
const Profile = () => {

  const {Userdata} = useContext(AuthContext)

  return (
    <div className='container py-5'>
               <Helmet>
                <meta charSet="utf-8" />
                <title>Profile Page</title>
                
            </Helmet>
    <div className="row py-5 justify-content-center align-items-center vh-100">
      <div className="col-md-12">

      <div className= {`${profileStyle.profile} w-50  py-4 my-4 m-auto text-center rounded-2`}>
<h1 className={`${profileStyle.header}`}>Profile Page</h1>
<span>Welcome:</span><h4 className={`${profileStyle.text}`}>  {Userdata?.first_name } {Userdata?.last_name }  </h4>
<span> Age:</span><h5 className={`${profileStyle.text}`}>  {Userdata?.age} </h5>
<span> email:</span><h6 className={`${profileStyle.text}`}>  {Userdata?.email} </h6>

      </div>

</div>
    
  
 
    </div>
    </div>
  )
}

export default Profile