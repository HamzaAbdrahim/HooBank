/* eslint-disable no-unused-vars */
import React from 'react'
import style from '../style'
import { stats } from '../content'

const Stats = () => (
  <section className={`${style.flexCenter} font-poppins  flex-col md:flex-row flex-wrap sm:mb-20 mb-6  md:gap-[6.5rem]`}>
    {stats.map((stat) => (
      <div key={stat.id} className='flex items-center gap-[1.6rem]  flex-1 md:p-0 p-3 justify-start flex-row'>
        <h3 className='text-white text-[2.55581rem] font-semibold'>{stat.value}</h3>
        <p className='text-gradient text-[1.27788rem] font-normal uppercase'>{stat.title}</p>
      </div>
    ))}
  </section>
)

export default Stats