import React from "react";
function handleLogin(){
    window.location.href="/login"
}

function handleRegister(){
    window.location.href="/signup"
}

const Landing = () => {
  return (
    <div className="bg-black text-white h-screen">
      <div className="flex flex-col gap-3 justify-center items-center w-full md:w-3/4 mx-auto text-center">
        <h1 className="text-5xl w-3/4 font-bold mt-8 mb-5">
          Deliver<span className="text-yellow-500"> Real-Time Insights </span> with Your AI in Space
        </h1>
        <p className="text-gray-400 text-xl mb-5">
          Empower your geospatial applications with satellite edge computing
        </p>
        <div>
          <div className="flex gap-5 text-[17px] font-semibold mb-5">
            <button className="outline-none bg-yellow-500 py-2 px-5 text-black rounded-md hover:scale-110" onClick={handleLogin}>
              Login
            </button>
            <button className="outline-none bg-black border-yellow-400 border-2 px-5 py-2 border-double text-yellow-500  rounded-md hover:scale-105" onClick={handleRegister}>
              Register
            </button>
          </div>

          <div>
            <h1>Dummy Credential</h1>
            <p><span className="text-yellow-500">Email:</span>sampleuser@geo.com</p>
            <p><span className="text-yellow-500">Password:</span>12345678</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;


