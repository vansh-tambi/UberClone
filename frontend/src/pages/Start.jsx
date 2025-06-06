import React from 'react'
import {Link} from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className='bg-no-repeat bg-cover bg-center bg-[url("/bg5.jpg")] h-screen pt-4 w-full flex justify-between flex-col'>
        <img src="/DrivOnOrange.png" className='md:w-50 w-30 ml-4'></img>
        <div className='bg-white pb-7 flex justify-center flex-col items-center py-4 px-4'>
          <h2 className='text-3xl font-bold text-center'>Get Started <span className='text-[#FF6A00]'>D</span>riv<span className='text-[#FF6A00]'>O</span>n</h2>
          <Link to="/login" className='w-full cursor-pointer md:w-1/3 flex items-center justify-center bg-black text-white py-3 rounded-md mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start