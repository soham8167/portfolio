"use client"
import Link from 'next/link'
import React,{useState} from 'react'
import NavLink from './NavLink'
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay'
import Image from 'next/image'

const navLink = [
    {
        title: "Home",
        path: "#home",
    },
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }
]

const Navbar = () => {
    const [navopen, setnavOpen] = useState(false)

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto p-4 py-2'>
            <Link href={"/"} className='text-2xl md:text-4xl text-white font-semibold'>

            <Image
                                src="/images/Soham-Logo.png"
                                alt='logo'
                                width={100}
                                height={100}
                            />
            
            </Link>
            <div className='mobile-menu block md:hidden'>
                {
                    !navopen ? (
                        <button onClick={()=>setnavOpen(true)}
                         className=' flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white'>
                            <Bars3Icon className='h-5 w-5'/>
                         </button>
                    ) : (
                        <button  onClick={()=>setnavOpen(false)} 
                        className=' flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white'>
                            <XMarkIcon className='h-5 w-5'/>
                        </button>
                    )
                }

            </div>
            <div className="menu hidden md:block md:w-auto" id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {
                        navLink.map((link, index) =>(
                            <li key={index}>
                                <NavLink href={link.path} title={link.title}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
      {navopen ? <MenuOverlay links={navLink}/> : null}
    </nav>
  )
}

export default Navbar











