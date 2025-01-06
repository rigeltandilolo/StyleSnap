import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-2 text-left">Get Started</h1>
        <p className="text-gray-400 text-left mb-7">
          Silahkan mengisi kelengkapan data untuk mendaftarkan akun anda.
        </p>
        <div className="flex justify-center mb-6">
          <img
            src="Register.png"
            alt="Illustration"
            className="w-80 h-auto"
          />
        </div>

        {/* Full Name and Last Name Fields */}
        <div className="flex gap-4 mb-2">
          <div className="flex flex-col w-[180px]">
            <label className="text-left mb-2 text-gray-700 font-bold">Full Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="p-3 border-2 border-[#737373] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c4214]"
            />
          </div>
          <div className="flex flex-col w-[180px]">
            <label className="text-left mb-2 text-white">L</label>
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 border-2 border-[#737373] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c4214]"
            />
          </div>
        </div>

        {/* Email Fields */}
        <div className="flex gap-4 mb-2">
          <div className="flex flex-col w-full">
            <label className="text-left mb-2 text-gray-700 font-bold">Email</label>
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className="p-3 border-2 border-[#737373] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c4214]"
            />
          </div>  
        </div>

        {/* Password Fields */}
        <div className="flex gap-4 mb-6">
          <div className="flex flex-col w-full">
            <label className="text-left mb-2 text-gray-700 font-bold">Password</label>
            <input
              type="password"
              placeholder="*********"
              className="p-3 border-2 border-[#737373] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c4214]"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mb-3">
          <button className="w-[180px] bg-[#2c4214] text-white p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 hover:bg-[#274d1d]">
            Create
          </button>
        </div>

        {/* Login Link */}
        <div className="flex justify-center">
          <p className="text-gray-600">
            Have an account?{" "}
            <a href="/login" className="font-bold text-[#2c4214] hover:text-blue-700">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
