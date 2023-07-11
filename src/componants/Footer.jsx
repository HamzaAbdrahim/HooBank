/* eslint-disable no-unused-vars */
import React from 'react'
import style from "../style"
import {footerLinks} from "../content"
import {socialMedia} from "../content"
import { logo } from '../assets'

const footer = () => (
    <section id='footer' className={`bg-black ${style.paddingXForFooter}`} >
      <div className='flex justify-between md:flex-row flex-col flex-wrap lg:grid-cols-4 pt-[4.5rem] mb-4 '>
        <div className='one ml-4 md:ml-0'>
          <img src={logo} alt="ogo" className=' mb-8 object-contain' />
          <p className={`${style.paragraph} max-w-[20rem] mb-4 md:mb-0`}>A new way to make the payments easy, reliable and secure.</p>
        </div>
          {footerLinks.map((footer,index) =>  (

          <div key={footer.key} className='flex flex-col text-center md:text-left'>
          <h3 className={`font-poppins font-medium text-white text-lg leading-[150%]  mb-4 md:mb-6`}>{footer.title}</h3>
          <ul>
          {footer.links.map(link => {
            return (
              <li key={link.name} className={` ${index !== footer.links.length - 1 ? "mb-4":""} font-poppins font-normal text-base text-dimWhite leading-[150%] cursor-pointer duration-200 hover:text-secondary`}>
              <a href={link.link}>{link.name}</a>
              </li>
              )
          })}
          </ul>
        </div>
          )
          )}
      </div>
      <div className='flex items-center justify-between flex-col md:flex-row py-4 md:py-8 border-solid  border-t-2 border-t-[#3F3E45;]'>
        <p className='font-poppins font-medium text-dimWhite  text-lg leading-[150%]'>2021 HooBank. All Rights Reserved.</p>
      <div className={`flex item-center gap-6 mt-4 md:mt-0`}>
        {socialMedia.map(social => (
          <img src={social.icon}
          key={social.id}
          alt={social.id}
          className={`cursor-pointer w-[21px] h-[21px] object-contain`}/>
          ))}
          </div>

      </div>
    </section>
  )


export default footer
