// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
// eslint-disable-next-line no-unused-vars
import {logo,close,menu} from "../assets"
// eslint-disable-next-line no-unused-vars
import {navLinks} from "../content/index"

console.log(navLinks);

const navbar = () => {
  const [open,setopen] = useState(false);
  return (
    <nav className='flex justify-between sm:px-0 px-5 py-6 items-center w-full'>
      <img src={logo} alt="" className="w-[124px] h-[32px]"/>
      <ul 
      className="sm:flex hidden items-center justify-end gap-6 font-poppins font-normal text-dimWhite"
      >
        {navLinks.map( (link) => (
          <li 
          key={link.id}>
          <a href={`# ${link.id}`}
          className="cursor-pointer duration-150 hover:text-[#FFFFFF]"
          >{link.title}</a>
            </li>
        ))}
      </ul>
      <div className="cursor-pointer sm:hidden ">
      <img src={open ? close : menu} 
      alt="menu" 
      className=" h-5 object-contain" 
      onClick = { () => setopen(prev => (!prev)) }
      />
    {open &&
    <ul 
      className="flex flex-col gap-6 font-poppins font-normal z-[100] justify-center items-center bg-primary fixed left-0 w-full p-10 top-[4rem] h-screen text-dimWhite" 
      >
        {navLinks.map( (link) => (
          <li 
          key={link.id}>
          <a href={`# ${link.id}`}
          className="cursor-pointer duration-150 hover:text-[#FFFFFF] text-2xl  sm:text-base"
          >{link.title}</a>
            </li>
        ))}
      </ul>} 
      </div>
    </nav>
  )
}

export default navbar

