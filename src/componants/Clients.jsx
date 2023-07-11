/* eslint-disable no-unused-vars */
import React from 'react'
import { clients } from "../content"

const Clientest = () => (
  <section id='clients' className='flex flex-row w-full flex-wrap justify-center my-4 gap-[6.75rem]'>
    {clients.map(clien => (
      <div key={clien.id}>
        <img src={clien.logo} alt="clients" className='h-[3.75rem] w-48 object-contain' />
      </div>
    ))}
  </section>
)

export default Clientest