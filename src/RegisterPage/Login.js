import React from 'react'
import { useState } from 'react';
import { FaUser, FaEnvelope, FaKey } from 'react-icons/fa';
export default function Login() {
    const [moveDiv, setMoveDiv] = useState(0)
    const moveLeft = () => {
        setMoveDiv(-100)
    }
    return (
        <React.Fragment>
            <div className='w-[100%] h-[100vh] overflow-hidden md:flex justify-center md:items-center md:bg-[#BB8A52]'>
                <div className='w-[100%] h-[90%]  bg-[#BB8A52] rounded-bl-[250px] flex flex-col justify-center absolute right-full transition-[0.3s] ease-out'>
                    <div className='w-[90%] mx-auto h-[70%] '>
                        <hr className='border-4 border-[#6D9773] w-[15%] ml-[1.4rem]' />
                        {/* ======== FORM AREA ===== */}
                        <form action="" className=' mx-auto h-[80%] mt-5' >
                            <h1 className='mt-5 font-lato font-[600] text-white flex items-center ml-[1.4rem]'>Sign Up</h1>
                            {/* ====== INPUTS ====== */}
                            <div className= 'mt-10 gap-[30px] h-[100%] w-[100%] flex flex-col items-center'>
                                <div className='w-[80%] mx-auto border-b-[1.5px]  flex items-center'>
                                <input type="text" className='outline-none bg-transparent first-letter:uppercase w-[90%] text-[#0C3B2E] font-[600] font-quick pb-2 placeholder:text-white' placeholder='Username' />
                                <FaUser className='text-white icon'/>
                                </div>
                                <div className='w-[80%] mx-auto flex items-center  border-b-[1.5px]'>
                                <input type="email" className='outline-none bg-transparent w-[90%] text-[#0C3B2E] font-[600] font-quick pb-2 placeholder:text-white' placeholder='Email Address' />
                                <FaEnvelope className='text-white icon'/>
                                </div>
                                <div className='w-[80%] mx-auto flex items-center  border-b-[1.5px]'>
                                <input type="password" className='outline-none bg-transparent w-[90%] text-[#0C3B2E] font-[600] font-quick pb-2 placeholder:text-white' placeholder='Password' />
                                <FaKey className='text-white icon'/>
                                </div>
                                <input type="button" value="Sign in" className='w-[80%] h-[40px] bg-[#6D9773] rounded-[5px] text-white font-lato font-[700]' />


                            </div>
                        </form>
                        {/* ===== Sign-up link ======= */}
                        <div className='w-[80px] h-[80px] bg-[#0C3B2E] cursor-pointer rounded-full absolute bottom-[-3%] right-[2%] flex justify-center items-center'>
                            <p className='font-lato text-white font-[700]'>Sign in</p>
                        </div>
                    </div>
                </div>
                {/* ==========================  Sign In ================================ */}
                <div className='w-[100%] h-[90%] bg-[#6D9773] rounded-br-[250px] flex flex-col justify-center absolute left-0' style={{ left: `${moveDiv}%` }}>
                <div className='w-[90%] mx-auto h-[70%] '>
                        <hr className='border-4 border-[#FFB600] w-[15%] ml-[1.4rem]' />
                        {/* ======== FORM AREA ===== */}
                        <form action="" className=' mx-auto h-[80%] mt-5' >
                            <h1 className='mt-5 font-lato font-[600] text-white flex items-center ml-[1.4rem]'>Sign in</h1>
                            {/* ====== INPUTS ====== */}
                            <div className= 'mt-10 gap-[30px] h-[100%] w-[100%] flex flex-col items-center'>
                                <div className='w-[80%] mx-auto border-b-[1.5px]  flex items-center'>
                                <input type="text" className='outline-none bg-transparent first-letter:uppercase w-[90%] text-[#0C3B2E] font-[700] font-quick pb-2 placeholder:text-white' placeholder='Username' />
                                <FaUser className='text-white icon'/>
                                </div>
                                <div className='w-[80%] mx-auto flex items-center  border-b-[1.5px]'>
                                <input type="email" className='outline-none bg-transparent w-[90%] text-[#0C3B2E] font-[700] font-quick pb-2 placeholder:text-white' placeholder='Email Address' />
                                <FaEnvelope className='text-white icon'/>
                                </div>
                                <div className='w-[80%] mx-auto flex items-center  border-b-[1.5px]'>
                                <input type="password" className='outline-none bg-transparent w-[90%] text-[#0C3B2E] font-[700] font-quick pb-2 placeholder:text-white' placeholder='Password' />
                                <FaKey className='text-white icon'/>
                                </div>
                                <input type="button" value="Sign in" className='w-[80%] h-[40px] bg-[#FFB600] rounded-[5px] text-white font-lato font-[700]' />


                            </div>
                        </form>
                    </div>

                <div className='w-[80px] h-[80px] bg-[#0C3B2E] cursor-pointer rounded-full absolute bottom-[-3%] left-[2%] flex justify-center items-center' onClick={() => setMoveDiv(0)}>
                            <p className='font-lato text-white font-[700]'>Sign Up</p>
                </div>
                </div>
            </div>

        </React.Fragment>
    )
}
