import React from "react";

function handleLogin(){
    window.location.href="/login"
}

function handleRegister(){
    window.location.href="/signup"
}
const NavBar = () => {
  return (
    <div className="bg-black text-white p-10">
      <div className="flex flex-row justify-between px-10 items-center w-3/4 mx-auto bg-gray-900 py-4 rounded-xl">
        <div className=" overflow-hidden">
          <img src={'https://cdn.prod.website-files.com/660e7952369feece9a6c0e45/66462aabb0f40bbb2a9c6709_LOGO%2520WHITE-p-2000.png'} alt="logo" width={150}/>
        </div>
<div className="flex flex-row justify-between items-center">
        <div className="gap-3 hidden md:flex">
          <p className="px-3 py-2 text-gray-300 font-semibold text-[17px] hover:text-yellow-500">About</p>
          <p className="px-3 py-2 text-gray-300 font-semibold text-[17px] hover:text-yellow-500">Project</p>
          <p className="px-3 py-2 text-gray-300 font-semibold text-[17px] hover:text-yellow-500">Updates</p>
          <p className="px-3 py-2 text-gray-300 font-semibold text-[17px] hover:text-yellow-500">Mission</p>
        </div>

        <div className="flex gap-5 text-[17px] font-semibold">
          <button className="outline-none bg-yellow-500 py-2 px-5 text-black rounded-md hover:scale-105" onClick={handleLogin}>Login</button>
          <button className="outline-none bg-gray-900 border-yellow-400 border-2 px-5 py-2 border-double text-yellow-500  rounded-md hover:scale-105" onClick={handleRegister}>Register</button>
        </div>
      </div>

      </div>
    </div>
  );
};

export default NavBar;
