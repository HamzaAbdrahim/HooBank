/* eslint-disable no-unused-vars */
import React from "react"
import { card } from "../assets"
import style,{layout} from "../style"

const Card = () =>  (
        <section id='prodects' className={`${layout.section} gap-[5.44rem]  ${style.CenterText}`}>
      <div className={layout.sectionInfo}>
        <h1 className={`${style.heading2}`}>
        Find a better card deal in few easy steps.        </h1>
        <p className={`${style.paragraph} max-w-[30rem] mt-6`}>
        Arcu tortor, purus in mattis at sed integer faucibus.
         Aliquet quis aliquet eget mauris tortor.
         ç Aliquet ultrices ac, ametau.
        </p>
        <button type='button' className=' mt-[1.06rem] md:mx-0 mx-auto py-4 px-6 bg-blue-gradient rounded-[0.625rem] font-medium font-poppins text-[#00040E] text-[1.125rem]'> Get Started </button>
      </div>
      <div className={layout.sectionImgReverse}>
      <img src={card} 
      alt="card"
      className='w-[100%] h-[100%]' />
      </div>
    </section>
)


export default Card


