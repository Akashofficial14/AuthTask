import React from 'react';
import { useForm } from 'react-hook-form';
import { axiosInstance } from '../config/axiosInstance';
import { toast } from 'react-toastify';

const Register = ({ setToggle }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    // console.log("Form Data:", data);
    try {
      const response = await axiosInstance.post("/api/auth/register", data);
      toast.success("Registration Successful! Please verify your email.");
      reset();
      console.log(response.data);
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#929FBF] p-4"
  >
<div className="bg-white border border-gray-100 p-8 rounded-[2.5rem] w-full max-w-md shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
  <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center tracking-tight">Create Account</h2>

  <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
    {/* Name Field */}
    <div>
      <label className="block text-gray-700 mb-1.5 text-sm font-semibold ml-1">Full Name</label>
      <input
        {...register("name", { required: "Name is required" })}
        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-2xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
        placeholder="Akash..."
      />
      {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name.message}</p>}
    </div>

    {/* Mobile Number Field */}
    <div>
      <label className="block text-gray-700 mb-1.5 text-sm font-semibold ml-1">Mobile Number</label>
      <input
        type="tel"
        {...register("mobileNumber", {
          required: "Mobile number is required",
          pattern: {
            value: /^[0-9]{10}$/,
            message: "Enter a valid 10-digit mobile number"
          }
        })}
        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-2xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
        placeholder="9876543210"
      />
      {errors.mobileNumber && <p className="text-red-500 text-xs mt-1 ml-1">{errors.mobileNumber.message}</p>}
    </div>

    {/* City Field */}
    <div>
      <label className="block text-gray-700 mb-1.5 text-sm font-semibold ml-1">City</label>
      <input
        {...register("city", { required: "City is required" })}
        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-2xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
        placeholder="Indore..."
      />
      {errors.city && <p className="text-red-500 text-xs mt-1 ml-1">{errors.city.message}</p>}
    </div>

    {/* Email Field */}
    <div>
      <label className="block text-gray-700 mb-1.5 text-sm font-semibold ml-1">Email Address</label>
      <input
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
        })}
        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-2xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
        placeholder="you@example.com"
      />
      {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>}
    </div>

    {/* Password Field */}
    <div>
      <label className="block text-gray-700 mb-1.5 text-sm font-semibold ml-1">Password</label>
      <input
        type="password"
        {...register("password", {
          required: "Password is required",
          minLength: { value: 6, message: "Minimum 6 characters" }
        })}
        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-2xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
        placeholder="••••••••"
      />
      {errors.password && <p className="text-red-500 text-xs mt-1 ml-1">{errors.password.message}</p>}
    </div>

    <button type="submit" className="w-full bg-[#1c92ff] hover:bg-[#007ceb] text-white font-bold py-4 rounded-2xl mt-4 transition-all shadow-lg shadow-blue-500/30 active:scale-[0.98]">
      Sign Up
    </button>
    
    <p onClick={() => (setToggle(prev => !prev))} className='text-sm text-center text-gray-500 mt-6 cursor-pointer'>
      Already have an account? <span className='text-blue-500 font-bold hover:underline underline-offset-4'>Sign In</span>
    </p>
  </form>
</div>
    </div>
  );
};

export default Register;