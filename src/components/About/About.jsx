import React from 'react'
import img from './../../Assets/images/profile.jpg'
import styled from './about.module.scss'
import {Helmet} from "react-helmet";
const About = () => {
  return (
<div className="container">

       <Helmet>
            <meta charSet="utf-8" />
            <title>About Page</title>

        </Helmet>
        <div className="row justify-content-between align-items-center">

          <div className="col-md-3">
          <div className={`${styled.img_container}`}>
    
    <img src={img} alt=""  className='w-75'/>
    <div className={`${styled.overlay}`}>

      <ul>
          <li> <a href="#" className="fab fa-facebook-f"></a></li>
          <li> <a href="#" className="fab fa-twitter"></a></li>
          <li> <a href="#" className="fab fa-instagram"></a></li>
          <li><a href="#" className="fab fa-linkedin"></a></li>
      </ul>
</div></div>
          </div>
          <div className="col-md-8">
          <div className={`${styled.img_caption}`}>
  <h2><span>I</span>Hello,</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim

  </p>
  <ul>
    <li><a href=""> Name: Abdallah Hesham</a></li>
    <li><a href=""> Age	: 35 Year</a></li>
    <li><a href=""> Job Title	: Web Developer UI</a></li>
    <li><a href=""> Location:Egypt_Behaira_Itay</a> </li>
    <li><a href=""> Freelance: Available</a> </li>
    <li><a href=""> mail:Abdallahhesham2@gmail.com</a></li>
  </ul>
  <button className='btn btn-outline-info'>send </button>

</div>

          </div>
        </div>
      


</div>

  )
}

export default About