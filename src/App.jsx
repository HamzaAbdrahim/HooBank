
// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import style from './style'
// eslint-disable-next-line no-unused-vars
import {Navbar,Hero,Billing , Clients , Card, CTA,Footer,Stats,Testimonials, Business,} from './componants'

function App() {
  return (
    <>
    <div className=" bg-primary w-full overflow-hidden">

      <div className={`${style.paddingX}  ${style.flexCenter}`}> 

      <div className={`${style.boxWidth}`}>

        <Navbar />

      </div>

      </div>

      <div className={`bg-primary ${style.flexStart}`}>

      <div className={`${style.boxWidth}`}>

    <Hero />

      </div>

      </div>

      <div className={`bg-primary ${style.paddingX}${style.flexStart}`}> 

      <div className={`${style.boxWidth} mx-auto`}>

      <Stats />
      <Business />
      <Billing />
      <Card />
      <Testimonials />
      <Clients />
      <CTA />

      </div>

      </div>
      <Footer/>

    </div>
    </>
  )
}

export default App
