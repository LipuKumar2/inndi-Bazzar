import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/layout/Footer'
import signup from '../assets/signup.jpg'
import { Link } from 'react-router-dom';
function SignUp() {
    return (
        <div>
            <Navbar />
            <div className=' w-full min-h-screen  flex  '>
                <div className=' w-full  flex items-center justify-center ' >
                    <img src={signup} />
                </div>
                <div className='  w-full pt-24 flex justify-center items-center '>
                    <div className='  flex flex-col gap-7' >
                        <h1 className=' font-semibold text-4xl '>Create An Account</h1>
                        <p className=' text-xl mb-4'>Enter Your Details Below</p>
                        <input className=' border-b border-b-gray-200' type='text' placeholder='Name'/>
                        <input className=' border-b border-b-gray-200' type='text' placeholder='Email or Phone Number' />
                        <input className=' border-b border-b-gray-200' type='text' placeholder='Password' />
                        <button className='bg-[#DB4444] py-3 text-white text-xl'>Sign Up</button>
                        <button className='border-2 border-gray-200 py-3 '>Sign Up with Google</button>
                        <p>Already have Account? <Link to="/signin" className=' text-emerald-500 font-semibold'>Log in</Link> </p>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SignUp
