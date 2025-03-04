import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submitted');
    setUserData({
      fullName:{
        firstName:firstName,
        lastName:lastName
      },
      email:email, 
      password:password,
    })

    console.log(userData);
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }
  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className= 'w-16 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png ' alt=' ' />
        <form onSubmit={(e) => submitHandler(e)}>

            <h3 className='text-lg font-medium mb-2'>What's your name</h3>
            <div className='flex gap-4 mb-6'>
            <input 
            required            
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base'
            type="text" 
            placeholder="First name" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            />
             <input 
            required            
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base'
            type="text" 
            placeholder="Last name" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            />
            </div>

            <h3 className='text-lg font-medium mb-2'>What's your email</h3>

            <input 
            required           
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            type="email" 
            placeholder="email@example.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

            <input 
            required 
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 w-full text-base placeholder:text-sm'
            type="password" 
            placeholder="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <button 
            type='submit'
            className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-base placeholder:text-sm'>
            Login</button>
        </form>
        <p className='text-center'>Already have a account?<Link to='/login' className='text-blue-600'>Login Here</Link></p>
        </div>
        <div>
        <p className='text-[10px] leading-tight'>We respect your privacy and are committed to protecting your personal data. Your information is securely stored and used only for its intended purpose. We do not share, sell, or misuse your data. By using our services, you consent to our data practices in compliance with applicable laws.</p>
        </div>
 
    </div>
    </div>
  )
}

export default UserSignup