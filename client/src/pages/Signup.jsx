import { Button, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return ( <div className='min-h-screen mt-20'>
    <div className='flex p-3  max-w-3xl mx-auto  flex-col md:flex-row  md:items-center gap-5'>
      <div className='flex-1'>
      <Link
                    to='/'
                    className=' font-bold dark:text-white text-4xl'
                >
                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                        Amit's
                    </span>
                    Blog
                </Link>
                <p className='text-sm mt-5'> this is .........................</p>
       </div>
      <div className='flex-1'>
           <form className='flex flex-col gap-4'>

            <div>
              <label htmlFor="name" className='block text-sm font-medium text-gray-700'> your username</label>
            <TextInput type='text' placeholder='username ' id='username'/>
              
            </div>
            <div>
              <label htmlFor="name" className='block text-sm font-medium text-gray-700'>your email</label>
            <TextInput type='text' placeholder='email ' id='email'/>
              
            </div>

            <div>
              <label htmlFor="name" className='block text-sm font-medium text-gray-700'>your password</label>
            <TextInput type='text' placeholder='password ' id='password'/>
              
            </div>

            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign Up
            </Button>
           </form>
      <div className='flex gap-2 text-sm mt-5'>

           <span> have a account ? </span>
           <Link to='/sign-in' className=' text-blue-500'>
            Sign in
           </Link>
      </div>

       </div>
    </div>

    </div>
  )
}
