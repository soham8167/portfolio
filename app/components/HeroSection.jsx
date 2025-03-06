"use client"
import React from 'react'
import Image from 'next/image'

import { TypeAnimation } from 'react-type-animation';


    


const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
      <div className='col-span-7 place-self-center'>
      <h1 className='text-white mb-4 text-4xl font-bold'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello I am{""} </span>
    <br></br>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'UI/UX Designer',
        1000,
        'Mobile Developer',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  
        </h1>
    <p className='text-lg lg:text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At nihil voluptate architecto provident sapiente. Id temporibus aspernatur, qui quos, accusantium commodi totam sunt consequuntur quam.</p>
    <div>
        <button className='px-6 py-3 rounded-full bg-gradient-to-br from-blue-200 via-purple-300 to-pink-300  mr-4 bg-white  text-black'>Hire me</button>
        <button className='px-6 py-3 rounded-full bg-gradient-to-br from-blue-200 via-purple-300 to-pink-300  text-black border border-white mt-4 '>Download CV</button>
    </div>
      </div>
      <div className='col-span-5 flex justify-center items-center p-5'>
        
        <div className='rounded-full bg-[#181818] w-[300px] h-[300px] relative overflow-hidden'>
        <Image
        src="/images/my-img.jpg"
        alt="my-image"
        width={300}
        height={300}
        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
        />
        </div>
      </div>
      </div>
    </section>
  )
}

export default HeroSection
