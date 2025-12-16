"use client"
import { url } from 'inspector'
import React from 'react'

const Hero = () => {
  return (
    <div className='min-h-screen max-w-screen mx-auto flex justify-center items-center bg-[url("/assets/images/noise.svg")] bg-black bg-no-repeat bg-center bg-cover rounded-b-3xl border-b border-white/10'>
      <section className="max-w-[70vw] text-2xl text-white animate-fade-up flex flex-col">
        <p className='underline text-5xl font-extrabold text-center'>Hello Visitor!!</p>
        <p className='my-10 text-sm text-white/50 text-center'>The Developer is now finally building the website.</p>
      </section>
    </div>
  )
}

export default Hero
