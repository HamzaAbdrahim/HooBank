/* eslint-disable no-unused-vars */
import React from 'react'
import style,{layout} from "../style"
import {apple,bill,google} from "../assets"

function billing() {
  return (
    <section id='prodects' className={`${layout.sectionReverse} gap-20 md:gap-40 ${style.CenterText}`}>
      <div className={layout.sectionImgReverse}>
      <img src={bill} 
      alt="bill"
      className='w-[100%] h-[100%] relative z-[5]' />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h1 className={`${style.heading2}`}>
        Easily control your billing & invoicing.
        </h1>
        <p className={`${style.paragraph} max-w-[30rem] mt-6`}>
        Elit enim sed massa etiam. Mauris 
        eu adipiscing ultrices ametodio aenean neque.
        Fusce ipsum orci 
        rhoncus aliporttitor integer platea placerat.
        </p>
        <div className='flex items-center mx-auto md:mx:0 mt-12 gap-[2.01rem]' >
          <img src={apple} alt="apple" className='cursor-pointer object-contain' />
          <img src={google} alt="google" className='cursor-pointer object-contain' />
        </div>
      </div>
    </section>
  )
}

export default billing
