/* eslint-disable no-unused-vars */
import React from 'react'
import style,{layout} from "../style"
import {features} from "../content"

const Business = () => (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo} ${style.CenterText}`}>
        <h1 className={style.heading2}>
        You do the business,<br  className='sm:block hidden'/> we’ll handle the money.
        </h1>
        <p className={`${style.paragraph} max-w-[35.625rem] mt-5`}>With the right credit card,  you can improve your financial 
          life by building credit, earning rewards and saving money.
        But with hundreds of credit cards on the market.</p>
        <button type='button' className=' mx-auto md:mx-0 mt-10 py-4 px-6 bg-blue-gradient rounded-[0.625rem] font-medium font-poppins text-[#00040E] text-[1.125rem]'> Get Started </button>
      </div>
      <div className={`${layout.sectionImg} flex-col gap-9 `}>
          {features.map((feature,index) => (
        <div key={feature.id} className={`flex items-center gap-5 p-3 md:p-5 ${index === 1 ? "feature rounded-[1.25rem]":""} flex-col md:flex-row mx-4 md:mx-0`}>
          <div className={`${style.flexCenter} w-16 h-16 rounded-full bg-dimBlue`}>
            <img src={feature.icon} className='w-[2.4rem] h-[2.4rem]' alt=""  />
          </div>
            <div className=''>
              <h5 className={`mb-2 font-poppins text-white text-[1.125rem] font-medium capitalize tracking-[0.01125rem]`}>{feature.title}</h5>
              <p className={`${style.paragraph} max-w-[25rem]`}>{feature.content}</p>
            </div>
        </div>
          ))}
      </div>
    </section>
  )


export default Business
