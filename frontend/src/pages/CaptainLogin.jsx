/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {

  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captainData, setCaptainData] = useState({});
  
    const submitHandler =(e)=>{
      e.preventDefault();
      setEmail('');
      setPassword('');
      setCaptainData({email:email,password:password});
    }

  return (
    <div className='p-7 flex flex-col justify-between items-center bg-[#262f39] h-screen'>

      <div>
      <img src="/DrivOnCaptain.png" className='w-30 mb-13'></img>
      <form onSubmit={(e)=>{submitHandler(e)}}>
        <h3 className='text-lg mb-2 text-white'>What's Your email</h3>
        <input className='bg-[#eeeeee] mb-7 rounded-md px-2 py-2 border w-full text-lg placeholder:text-lg'
          value={email} onChange={(e)=>{setEmail(e.target.value)}}  required type='email' placeholder='email@example.com'/>

        <h3 className='text-white text-lg mb-2'>Enter Password</h3>

        <input className='bg-[#eeeeee] mb-7 rounded-md px-2 py-2 border w-full text-lg placeholder:text-lg' 
          value={password} onChange={(p)=>{setPassword(p.target.value)}} required type='password' placeholder='Password'/>
    
        <button className='bg-[#111] mb-3 text-white rounded-md px-2 py-2 w-full text-lg'>Login</button>
      </form>
        <p className='text-center mb-7 text-white'>Join a fleet? <Link to="/captain-signup" className='text-[#3A86FF]'>Register as Captain</Link></p>
      </div>

      <div className='w-full'>
        <Link to="/login" className='flex justify-center bg-[#008ab0] mb-7 font-medium text-black rounded-md px-2 py-2 w-full text-lg'>Sign in as User</Link>
      </div>

    </div>
  )
}

export default CaptainLogin