/* eslint-disable no-unused-vars */
import React from 'react'
import style from '../style'

import {robot,discount,arrowUp } from "../assets"

const Hero = () => {
  return (
    <section id='home' className={`flex flex-col-reverse xl:flex-row sm:items-center justify-center gap-10 font-poppins ${style.paddingY}`}>
      <div className='w-full md:ml-4 lg:ml-0 '>
        <div className="discount flex items-center py-[0.40rem]  text-[1.125rem] font-poppins gap-[1.125rem] max-w-[25.5rem] max-h-[12rem]  mx-5 lg:mx-0 justify-center bg-discount-gradient  rounded-[0.625rem]">
          <img src={discount} alt="discount" className='w-8 h-8' />
          <p className={`${style.paragraph} `}>
            <span className='text-[#616066] text-[1.125rem] font-normal mr-2'>
              <span className=' text-[#FFFFFF]'>20%</span> DISCOUNT FOR <span className=' text-[#FFFFFF]'>1 MONTH</span> ACCOUNT</span>
          </p>
        </div>
        <div className="text-content relative   sm:w-[145%]  sm:text-left md:flex items-start ">
          <h1 className='text-5xl sm:text-7xl text-center sm:text-left font-semibold text-white font-poppins mt-10  leading-[140%] tracking-[0.045rem]'>
          The Next 
          <span className='block text-gradient'>Generation</span>
          Payment Method.
          </h1>
          <div className= {`font-medium leading-[130%] -ml-40  text-[1.125rem]] flex-col hidden lg:flex justify-center items-center w-[8.75rem] h-[8.75rem]  cursor-pointer hover:scale-90 duration-150  border-gradient rounded-full font-poppins bg-transparent text-gradient`}>
            <div className="flex ">
              <span className='mr-2'>Get</span>
              <img src={arrowUp}
              className='w-[1.4375rem] h-[1.4375rem]'
              alt="arrowUp"/>
              
            </div>
            <span>Started</span>
          </div>
        </div>
        <div className={`${style.paragraph} mt-10 text-baseflex justify-start w-full text-center sm:text-left px-2 md:px-0`}>
          <h1> Our team of experts uses a methodology to identify <br className='hidden sm:block' />
            the credit cards most likely to fit your needs.<br className='hidden sm:block' />
          We  examine annual percentage rates, annual fees.</h1>
        </div>
      </div>
  <img src={robot} alt="binding" className='object-fill relative z-[5] md:mt-0 mt-10 w-full h-[40rem] left-14 md:left-40 lg:left-[12.5rem] md:h-[45rem]' />
    <div className='w-[35%] h-[80%] absolute top-[6rem] right-0 pink__gradient xl:w-[20%]   '></div> 
    <div className='w-[40%] h-[85%] absolute rounded-full bottom-40 white__gradient z-[1] xl:w-[20%]   '></div>  
    <div className='w-[35%] h-[80%] absolute right-20 bottom-20 blue__gradient   xl:w-[20%] '></div>   
    </section>
  );
};

export default Hero

