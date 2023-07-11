/* eslint-disable no-unused-vars */
import React from 'react'
import style, { layout } from '../style'
import {quotes} from "../assets"
import { feedback } from '../content'

const testimonials = () =>  (
    <section id='testimonials' className={`${style.paddingY} ${style.flexCenter} flex-col relative`}>
          <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className={`flex items-center w-full flex-col md:flex-row  text-center md:text-left gap-8 md:gap-[8.06rem]`}>
        <h1 className={`${style.heading2} max-w-[30rem]`}>What people are <br  className='md:block hidden'/> saying about us</h1>
        <p className={`${style.paragraph}`}>Everything you need to accept card payments <br  className='md:block hidden'/> and grow your business anywhere on the planet.</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center w-full mx-auto gap-16 mt-10 md:mt-20 '>
        {feedback.map((feed,index) => (

          <div key={feed.id} className= {`cursor-pointer ${ index === 0 ? "feature":""} mx-4 md:mx-0  py-[3.75rem] px-10 flex flex-col justify-between rounded-[1.5rem] `} >
            <img src={quotes} alt="quotes" 
            className='w-[2.6625rem] h-[1.725rem] mb-[2.52rem]' />
            <p className='font-poppins text-white text-lg font-normal tracking-[0.0225rem] leading-[180%]'>{feed.content}</p>
            <div className='flex items-center justify-center md:justify-start gap-4 mt-6'>
              <img src={feed.img} alt="porsone" className='rounded-full h-12' />
              <div className='font-poppins text-white '>
                <span className='text-xl leading-8'>{feed.name}</span>
                <p className='opacity-50 text-base leading-normal'>{feed.title}</p>
              </div>
            </div>
          </div>
            )
        )}
      </div>
    </section>
  )


export default testimonials
