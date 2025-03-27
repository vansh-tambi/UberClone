/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
const UserSignup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});
  const submitHandler= (e)=>{
    e.preventDefault();
    setUserData({
      email:email,
      password:password,
      fullname:{
        firstName:firstName,
        lastName:lastName
      },
    })

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  }

  return (
    <div className='p-7 flex flex-col justify-between items-center bg-[#262f39] h-screen'>

      <div>
      <img src="/DrivOn.png" className='w-30 mb-13'></img>
      <form onSubmit={(e)=>{submitHandler(e)}}>
        <h3 className='text-lg mb-2 text-white'>What's Your Name</h3>
        <div className='flex gap-4 mb-6'>
        
        <input className='w-1/2 bg-[#eeeeee]  rounded-md px-2 py-2 border text-lg placeholder:text-base'
            required type='text' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} placeholder='First name'/>
        <input className='w-1/2 bg-[#eeeeee] rounded-md px-2 py-2 border text-lg placeholder:text-base'
            required type='text' value={lastName} onChange={(e)=>{setLastName(e.target.value)}} placeholder='Last name'/>
            </div>
          <h3 className='text-lg mb-2 text-white'>What's Your email</h3>
          <input className='w-full bg-[#eeeeee] rounded-md mb-5 px-2 py-2 border text-lg placeholder:text-base'
            required type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='email@example.com'/>

        <h3 className='text-white text-lg mb-2'>Enter Password</h3>

        <input className='bg-[#eeeeee] mb-6 rounded-md px-2 py-2 border w-full text-lg placeholder:text-base' 
           required type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
    
        <button onClick={(e)=>{submitHandler(e)}} className='bg-[#111] mb-3 text-white rounded-md px-2 py-2 w-full text-lg'>Signup</button>
      </form>
        <p className='text-center mb-6 text-white'>Already have a account? <Link to="/login" className='text-[#3A86FF]'>Login in here</Link></p>
      </div>

      
        <p className='text-[10px] leading-tight text-gray-600'>This site is protected by reCaptcha and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Services</span> apply.</p>
      

    </div>
  )
}

export default UserSignup