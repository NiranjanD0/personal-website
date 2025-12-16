"use client"
import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <div className='bg-white/3 md:h-[45vh] h-[60vh] mt-5 rounded-t-4xl flex justify-center items-center flex-col border-t border-white/10'>
            <div className='md:min-w-[50vw] md:h-[25vh] w-[70vw] h-[45vh] flex flex-col-reverse md:flex-row justify-around items-center border rounded-4xl border-white/10 bg-black/90'>
                <div className='md:w-1/3 flex flex-col justify-center items-center md:h-full h-1/3 font-titan text-sm'>
                    <div>
                        <span className='md: mr-1 text-white/40'>&copy;2025</span>
                        <span>Niranjan Dangi</span>
                    </div>
                </div>
                <div className='md:h-full h-1/3 md:w-1/3 flex justify-center items-center'>
                    <img src="/assets/images/logo.svg" alt="logo" className='h-[80%]' />
                </div>
                <div className='md:w-1/3 md:h-full h-1/3 gap-5 flex items-center justify-center text-white/50'>
                    <a target="_blank" href="https://github.com/NiranjanD0"><Github className='hover:text-white transition-colors' /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/niranjand0"><Linkedin className='hover:text-white transition-colors' /></a>
                    <a target="_blank" href="mailto:niranjan@niranjan0.xyz"><Mail className='hover:text-white transition-colors' /></a>
                </div>
            </div>
            {/* <div>NIRANJAN</div> */}
        </div>
    )
}

export default Footer
