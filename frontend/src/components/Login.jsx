import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";
import { axiosInstance } from "../config/axiosInstance";
import { toast } from "react-toastify";
const Login = ({ setToggle }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    // console.log("your data is ->>", data);

    // reset()
    try {
      // Use withCredentials to ensure cookies are sent back/forth
      const response = await axiosInstance.post("/api/auth/login", data);
      if (response) {
        localStorage.setItem(
          "userData",
          JSON.stringify(response.data.existedUser),
        );
        // alert("Login Successful!");
        toast.success("Login Successful!");
        reset();
        navigate("/profile");
      }
    } catch (err) {
      // alert(err.response?.data?.message || "Login failed");
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#929FBF] p-4">
      <div className="bg-white border border-gray-100 p-8 rounded-[2rem] w-full max-w-md shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center tracking-tight">
          Log in
        </h2>
        <p className="text-gray-500 text-center mb-10 text-sm">
          Login to access your account
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2 text-sm font-semibold ml-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 text-sm font-semibold ml-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                {...register("password", { required: "Password is required" })}
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1c92ff] hover:bg-[#007ceb] text-white font-bold py-4 rounded-2xl mt-4 shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98]"
          >
            Log in
          </button>

          <div className="pt-4 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <span
                onClick={() => setToggle((prev) => !prev)}
                className="text-blue-500 font-bold cursor-pointer hover:underline underline-offset-4"
              >
                Sign Up
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
