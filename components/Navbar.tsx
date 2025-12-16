"use client"
import React from 'react'

const Navbar = () => {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <>
            <nav className='z-10 border-b border-white/10 rounded-b-3xl w-screen h-13 flex justify-between items-center fixed font-bold text-white/70 bg-black/50 backdrop-blur-2xl md:backdrop-blur-sm'>
                <div className='w-[30%] flex justify-center items-center'>
                    <button
                        onClick={() => scrollTo("home")}
                        className="font-semibold mx-16 hover:text-white transition-colors"
                    >/</button>
                </div>
                <div className="flex justify-center items-center gap-5 mx-16 w-[30%] text-xs">
                    <button
                        onClick={() => scrollTo("home")}
                        className="hover:text-white transition-colors"
                    >Projects</button>
                    <button
                        onClick={() => scrollTo("home")}
                        className="hover:text-white transition-colors"
                    >Contact</button>
                </div>
            </nav>
            <div className='fixed z-10 bottom-10 right-10'>LOL</div>
        </>
    )
}

export default Navbar
