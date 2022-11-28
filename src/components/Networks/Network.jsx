import React from 'react'
import styled from "./network.module.scss"
const Network = () => {
  return (
    <div className="row justify-content-center align-items-center vh-100 w-50 m-auto">


        <div className= {`${styled.bg} col-md-8  text-center rounded-3`}>

        <h2 >  You Are Offline Please Check Your Connection</h2>

        </div>

    </div>


   
   
  )
}

export default Network