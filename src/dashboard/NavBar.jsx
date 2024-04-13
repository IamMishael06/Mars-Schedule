import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TbCircleDotFilled } from "react-icons/tb";
import heather from "../dashboard/ssets/heather.png";

const NavBar = () => {
  return (
    <div className=' flex items-center justify-between px-8 gap-6'>
        <div className='flex items-center px-8 gap-10'>
      <h1 className='text-[#FFBA00] font-bold text-[25px]'>Dashboard</h1>
      <div className='relative'>
      <input 
        type="search" 
        name="search" 
        placeholder='Search' 
        className='w-[300px] outline-none pl-10 pr-3 py-2 bg-gray-300 rounded-full text-[#0C3B2E] font-bold' 
      />
      <IoIosSearch size={20} className='absolute top-1/2 left-3 transform -translate-y-1/2 text-[#0C3B2E]' />
    </div>

    
   </div>
   <div className='flex items-center gap-[50px] px-8'>
   <div className='flex items-center gap-5'>
   <TbCircleDotFilled size={24} className='cursor-pointer' />
   <IoIosNotificationsOutline size={24} className='cursor-pointer' />
   </div>
   <div className='flex items-center gap-3'>
    <img src={heather} className='w-[40px] h-[40px] rounded-full' alt="" />
    <h1 className='font-bold text-[#0C3B2E] text-[20px]'>Tola</h1>
    </div>
    </div>
   </div>
  )
}

export default NavBar;
