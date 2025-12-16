"use client"
import { url } from 'inspector'
import React from 'react'

const Hero = () => {
  return (
    <div className='min-h-screen min-w-screen mx-auto flex justify-center items-center bg-[url("/assets/images/noise.svg")] bg-black bg-no-repeat md:bg-fixed bg-center bg-cover'>
      <section className="max-w-[70vw] text-2xl text-white animate-fade-up">
        <h3 className=' text-5xl font-extrabold'>Hello Visitor!!</h3></section>
    </div>
  )
}

export default Hero
