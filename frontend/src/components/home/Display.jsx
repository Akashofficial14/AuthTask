import React from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Edit3,
  Lock,
  LogOut,
} from "lucide-react";
import { InfoRow } from "./MiniComponent";

const Display = ({ view, data, setView, handleLogout }) => {
    // console.log("Profile Data:", data.name); // Debugging line to check data structure
  return (
    <>
      {" "}
      {view === "display" && (
        <div className="p-8 animate-in fade-in zoom-in-95 duration-300">
          <div className="flex flex-col items-center mb-6">
            <div className="w-17 h-17 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2.5rem] flex items-center justify-center text-4xl font-black text-white mb-2 shadow-xl">
              {data?.name?.charAt(0).toUpperCase()}
            </div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">
              Profile Details
            </h1>
            <p className="text-gray-400 font-medium italic">
              Welcome back, {data?.name || "User"}!
            </p>
          </div>

          <div className="space-y-2.5">
            <InfoRow
              icon={<User size={18} />}
              label="Full Name"
              value={data?.name}
              color="blue"
            />
            <InfoRow
              icon={<Mail size={18} />}
              label="Email Address"
              value={data?.email}
              color="purple"
            />
            <InfoRow
              icon={<Phone size={18} />}
              label="Mobile"
              value={data?.mobileNumber}
              color="green"
            />
            <InfoRow
              icon={<MapPin size={18} />}
              label="City"
              value={data?.city}
              color="orange"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <button
              onClick={() => setView("edit")}
              className="flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold py-4 rounded-2xl border border-gray-100 transition-all"
            >
              <Edit3 size={18} /> Edit Profile
            </button>
            <button
              onClick={() => setView("password")}
              className="flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold py-4 rounded-2xl border border-gray-100 transition-all"
            >
              <Lock size={18} /> Password
            </button>
          </div>

          <button
            onClick={handleLogout}
            className="w-full mt-3 flex items-center justify-center gap-2 bg-red-50 text-red-500 font-bold py-4 rounded-2xl hover:bg-red-500 hover:text-white transition-all group"
          >
            <LogOut
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />{" "}
            Logout Session
          </button>
        </div>
      )}
    </>
  );
};

export default Display;
