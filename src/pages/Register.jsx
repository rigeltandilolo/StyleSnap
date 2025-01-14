import { useState } from "react";
import { register } from "../services/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleFormChange = (e) => {
    const { name, value } = e.target

    setData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleRegister = async (e) => {
    e.preventDefault()

    const response = await register({
      ...data
    })

    if (response) navigate('/')
  }

  return (
    <form className="flex flex-col gap-6 min-h-screen bg-white px-6 py-8" onSubmit={handleRegister}>
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-black mb-2 text-left">Get Started</h1>
        <p className="text-gray-400 text-left mb-7">
          Silahkan mengisi kelengkapan data untuk mendaftarkan akun anda.
        </p>
        <div className="flex justify-center mb-6">
          <img
            src="Register.png"
            alt="Illustration"
            className="w-60 h-auto"
          />
        </div>

        {/* Full Name Fields */}
        <div className="mb-4">
          <label className="text-left mb-2 text-gray-700 font-bold block">Full Name</label>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 p-3 border-2 border-[#737373] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c4214]"
              name="firstName"
              maxLength={50}
              onChange={handleFormChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 p-3 border-2 border-[#737373] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c4214]"
              name="lastName"
              maxLength={50}
              onChange={handleFormChange}
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="text-left mb-2 text-gray-700 font-bold block">E-mail</label>
          <input
            type="email"
            placeholder="youremail@gmail.com"
            className="w-full p-3 border-2 border-[#737373] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c4214]"
            name="email"
            onChange={handleFormChange}
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="text-left mb-2 text-gray-700 font-bold block">Password</label>
          <input
            type="password"
            placeholder="*********"
            className="w-full p-3 border-2 border-[#737373] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c4214]"
            name="password"
            onChange={handleFormChange}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mb-4">
          <button className="w-[180px] flex items-center justify-center gap-2 bg-[#2c4214] text-white p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 hover:bg-[#274d1d]"
            type="submit"
          >
            <span className="text-lg">→</span> Create
          </button>
        </div>

        {/* Login Link */}
        <div className="flex justify-center">
          <p className="text-gray-600">
            Have an account?{" "}
            <a href="/login" className="font-bold text-[#2c4214] hover:text-blue-700">
              Log In
            </a>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Register;
