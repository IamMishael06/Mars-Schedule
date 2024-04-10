import React from "react";
import NavBar from "./NavBar";
import { IoIosSearch } from "react-icons/io";

import SideNav from "./SideNav";

const App = () => {
  return (
    <div className="bg-[#0C3B2E] w-full flex items-center mx-auto  h-screen">
      <div className="bg-[#0C3B2E] flex w-full rounded-[40px] h-[90%] gap-5">
        <div className="w-1/12 flex justify-center pt-[60px]">
          <SideNav />
        </div>
        <div className=" h-full w-[85%] py-4 flex flex-col gap-4 bg-white rounded-[50px]">
          <NavBar />

     
        </div>
      </div>
    </div>
  );
};

export default App;
