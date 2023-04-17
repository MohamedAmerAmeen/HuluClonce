import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='flex flex-col sm:md:flex-row justify-around mt-10 px-5 '>
        <div>
            <Image className='object-contain animate-spin' src='https://i.ibb.co/54FKmX8/movie-icon-15157.png' alt='' width={200} height={100}/>
        </div>
        <div className='flex flex-col space-y-2'>
            <p className='font-semibold hover:scale-105 transation duration-100 cursor-pointer '>About</p>
            <p className='font-semibold hover:scale-105 transation duration-100 cursor-pointer '>Contact Us</p>
            <p className='font-semibold hover:scale-105 transation duration-100 cursor-pointer '>Support Forums</p>
            <p className='font-semibold hover:scale-105 transation duration-100 cursor-pointer '>System Status</p>
        </div>

        <div className='flex flex-col space-y-2'>
            <p className='font-semibold hover:scale-105 transation duration-100 cursor-pointer '>Contribution bible</p>
            <p className='font-semibold hover:scale-105 transation duration-100 cursor-pointer '>Add New Movie</p>
            <p className='font-semibold hover:scale-105 transation duration-100 cursor-pointer '>Add New TV Show</p>
        </div>

        <div className='flex flex-col space-y-2'>
            <p className='font-semibold hover:scale-105 transation duration-100 cursor-pointer '>Guidelines</p>
            <p className='font-semibold hover:scale-105 transation duration-100 cursor-pointer '>Discussions</p>
            <p className='font-semibold hover:scale-105 transation duration-100 cursor-pointer '>Leaderboard</p>
            <p className='font-semibold hover:scale-105 transation duration-100 cursor-pointer '>Twitter</p>
        </div>

        <div className='flex flex-col space-y-2'>
            <p className='font-semibold hover:scale-105 transation duration-100 cursor-pointer '>Terms of use</p>
            <p className='font-semibold hover:scale-105 transation duration-100 cursor-pointer '>Privacy policy</p>
        </div>
        
    </div>
  )
}

export default Footer