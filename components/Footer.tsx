"use client"
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-white/1 md:h-[45vh] h-[60vh] my-5 rounded-t-4xl flex justify-center items-center flex-col border-t border-white/10'>
            <div className='min-w-[80vw] md:h-[25vh] h-[45vh] flex flex-col md:flex-row justify-around items-center border rounded-4xl border-white/10 bg-black/90'>
                <div className='md:w-1/3 flex justify-center items-center'>
                    <span className='md: mr-2'>&copy;2025</span>
                    <span>Niranjan Dangi</span>
                </div>
                <div className='h-full md:w-1/3 flex justify-center items-center'>
                    <img src="/assets/images/logo.svg" alt="GAY" className='md:h-[80%] h-[50%]'/>
                </div>
                <div className='md:w-1/3'>
                    
                </div>
            </div>
            <div>NIRANJAN</div>
        </div>
    )
}

export default Footer
