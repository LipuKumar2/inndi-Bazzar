import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/layout/Footer'
import signup from '../assets/signup.jpg'
import { Link } from 'react-router-dom';
function SignIn() {
    return (
        <div>
            <Navbar />
            <div className=' w-full min-h-screen  flex  '>
                <div className=' w-full pt-16 flex items-center justify-center ' >
                    <img src={signup} />
                </div>
                <div className='  w-full pt-24 flex justify-center items-center '>
                    <div className='  flex flex-col gap-7' >
                        <h1 className=' font-semibold text-4xl '>log in to Exclusive</h1>
                        <p className=' text-xl mb-4'>Enter Your Details Below</p>
                        <input className=' border-b border-b-gray-200' type='text' placeholder='Email or Phone Number' />
                        <input className=' border-b border-b-gray-200' type='text' placeholder='Password' />
                        <button className='bg-[#DB4444] py-3 text-white text-xl'>Log in</button>
                        <Link to="/Forgot Passward" className='text-[#DB4444]'>Forgot Password?</Link>
                        <p> If you don,t have Account? <Link to="/signup" className='text-emerald-500 font-semibold'>Create Account</Link> </p>                        
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SignIn
