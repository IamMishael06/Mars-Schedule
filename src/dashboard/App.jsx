import React from 'react'
import NavBar from './NavBar'
import { IoIosSearch } from "react-icons/io";
import SideNav from './SideNav';

const App = () => {
  return (
    <div className='bg-white w-full flex py-4 px-10 items-center mx-auto  h-screen'>
      <div className='bg-[#BB8A52] flex w-full px-5 py-6 rounded-3xl h-full'>
     <div className='w-1/12 flex justify-center pt-[60px]'><SideNav/></div>
     <div className=' h-full w-11/12 py-4 bg-white rounded-2xl'>
      <NavBar/>
     </div>
    </div>
    </div>
  )
}

export default App
