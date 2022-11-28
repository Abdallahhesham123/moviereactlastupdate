import React from 'react'
import styled from"./footer.module.scss"
function Footer() {
  return (
    <>
                <section className={`${styled.credit} fixed-bottom`}>
            Created by<span className='text-warning'> Abdallah-Hesham</span> 2022 | all rights reserved!
            </section>
    </>
  )
}

export default Footer