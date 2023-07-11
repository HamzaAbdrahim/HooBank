/* eslint-disable no-unused-vars */
import React from 'react'
import style from "../style"

const cta = () =>  (
    <section className={`${style.marginY} ${style.padding} mx-4 md:mx-0 bg-black-gradient-2 box-shadow flex items-center flex-col md:flex-row text-center md:text-left justify-between rounded-[1.25rem]`} >
      <div>
        <h1 className={`${style.heading2}`}>Let’s try our service now!</h1>
        <p className={`${style.paragraph}  mx-auto md:mx-0 max-w-[31rem] mt-6`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <button type='button' className=' mt-10 py-4 px-6 bg-blue-gradient rounded-[0.625rem] font-medium font-poppins text-[#00040E] text-[1.125rem]'> Get Started </button>

    </section>
  )
  export default cta



