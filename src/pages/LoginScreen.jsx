import React, { useState } from 'react';
import image1 from '../../public/VectorImage/AsetLogin.png';
import image2 from '../../public/VectorImage/arrowsmal.png';

const LoginScreen = () => {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-left">Welcome Back!</h2>
      <h1 className="text-base text-left mb-6 text-gray-400">Silahkan masuk dengan menggunakan akun
      yang telah didaftarkan.</h1>
        <img src = {image1}/>
        <div className="flex justify-center mb-6">
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className={`w-full p-3 mt-2 rounded-md border ${emailFocused ? 'border-green-800' : 'border-gray-300'} focus:outline-none`}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className={`w-full p-3 mt-2 rounded-md border ${passwordFocused ? 'border-green-800' : 'border-gray-300'} focus:outline-none`}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
          />
        </div>

        {/* Login Button */}
        <button className="w-full py-3 bg-green-800 text-white font-semibold rounded-md hover:bg-green-900 transition duration-200 flex items-center justify-center gap-x-2">
        <img src = {image2} alt="Login Icon" className="h-5 w-5" />
          Login
        </button>

        {/* Create Account Link */}
        <p className="text-center mt-4 text-sm">
          New here?{' '}
          <a href="/create-account" className="text-green-800 font-semibold hover:underline">
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
