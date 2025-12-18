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
            <nav className='z-10 w-screen mt-2 h-13 fixed font-bold'>
                <div className='border border-white/10 rounded-2xl md:w-[70vw] h-12 flex items-center justify-between m-auto text-white/70 bg-black/50 backdrop-blur-2xl md:backdrop-blur-sm'>
                    <div className='flex justify-center items-center ml-10'>
                        <button
                            onClick={() => scrollTo("home")}
                            className="font-semibold hover:text-white transition-colors"
                        >/</button>
                    </div>
                    <div className="flex justify-center items-center gap-5 text-xs mr-10">
                        <button
                            onClick={() => scrollTo("home")}
                            className="hover:text-white transition-colors"
                        >Projects</button>
                        <button
                            onClick={() => scrollTo("home")}
                            className="hover:text-white transition-colors"
                        >Contact</button>
                    </div>
                </div>
            </nav>
            <div className='fixed z-10 bottom-10 right-10'>LOL</div>
        </>
    )
}

export default Navbar
