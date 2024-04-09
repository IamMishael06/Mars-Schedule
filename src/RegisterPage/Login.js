import React from 'react'
export default function Login() {
  return (
    <React.Fragment>
       <div className='w-[100%] h-[100vh] overflow-hidden flex justify-center md:items-center md:bg-[#BB8A52]'>
        <div className='w-[100%] h-[90%] relative bg-[#BB8A52] rounded-bl-[250px] flex flex-col justify-center relative'>
           <div className='w-[90%] mx-auto h-[95%]'> 
           <hr className='border-4 border-[#6D9773] w-[15%]' />
           {/* ======== FORM AREA ===== */}
           <form action="" className=' mx-auto h-[80%] mt-5' >
            <h1 className='mt-5 font-lato font-[600] text-white flex items-center ml-[1.4rem]'>Sign in</h1>
            {/* ====== INPUTS ====== */}
            <div className='mt-10 gap-[30px] w-[100%] flex flex-col items-center'>
                <input type="text"  className='outline-none bg-transparent border-b-[1.5px] first-letter:uppercase w-[80%] text-[#0C3B2E] font-[600] font-quick pb-2 placeholder:text-white' placeholder='Username'/>
                <input type="email"  className='outline-none bg-transparent border-b-[1.5px] w-[80%] text-[#0C3B2E] font-[600] font-quick pb-2 placeholder:text-white' placeholder='Email Address'/>
                <input type="password"  className='outline-none bg-transparent border-b-[1.5px] w-[80%] text-[#0C3B2E] font-[600] font-quick pb-2 placeholder:text-white' placeholder='Password'/>
                <input type="button" value="Sign in" className='' />


            </div>
           </form>
           <div className='w-[80px] h-[80px] bg-[#0C3B2E] rounded-full absolute bottom-[-3%] right-[2%] flex justify-center items-center'>
            <p className='font-lato text-white font-[700]'>Sign in</p>
           </div>
           </div>
        </div>
       </div>
    </React.Fragment>
  )
}
