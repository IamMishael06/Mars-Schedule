import React from 'react'
import { GrHome } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { MdMessage } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
const SideNav = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center gap-[50px]'>
      <GrHome size={26} className='cursor-pointer text-[#FFF]' />
      <CgProfile size={26} className='cursor-pointer text-[#FFF]' />
      <MdMessage size={26} className='cursor-pointer text-[#FFF]' />
      <GoClock size={26} className='cursor-pointer text-[#FFF]' />
      <IoSettingsOutline size={26} className='cursor-pointer text-[#FFF]' />
      </div>
    </div>
  )
}

export default SideNav
