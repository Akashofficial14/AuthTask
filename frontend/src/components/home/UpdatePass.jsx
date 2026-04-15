import React from "react";
import { ChevronLeft } from "lucide-react";
import { InputBox } from "./MiniComponent";

const UpdatePass = ({
  view,
  setView,
  handleSubmitPass,
  handleChangePassword,
  registerPass,
  showPass,
  toggleVisibility,
  passwordMutation,
}) => {
  return (
    <>
      {view === "password" && (
        <div className="p-8 animate-in slide-in-from-right-8 duration-300">
          <button
            onClick={() => setView("display")}
            className="flex items-center gap-2 text-gray-400 hover:text-blue-600 font-bold mb-6 transition-colors"
          >
            <ChevronLeft size={20} /> Back
          </button>
          <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tighter">
            Update Security
          </h2>
          <form
            onSubmit={handleSubmitPass(handleChangePassword)}
            className="space-y-4"
          >
            <InputBox
              label="Current Password"
              type={showPass.current ? "text" : "password"}
              register={registerPass("currentPassword", { required: true })}
              showToggle
              isVisible={showPass.current}
              onToggle={() => toggleVisibility("current")}
            />
            <InputBox
              label="New Password"
              type={showPass.new ? "text" : "password"}
              register={registerPass("newPassword", { required: true })}
              showToggle
              isVisible={showPass.new}
              onToggle={() => toggleVisibility("new")}
            />
            <InputBox
              label="Confirm Password"
              type={showPass.confirm ? "text" : "password"}
              register={registerPass("confirmPassword", { required: true })}
              showToggle
              isVisible={showPass.confirm}
              onToggle={() => toggleVisibility("confirm")}
            />
            <button
              type="submit"
              disabled={passwordMutation.isPending}
              className="w-full bg-gray-900 text-white py-4 rounded-2xl font-black hover:bg-black shadow-xl mt-4 transition-all disabled:opacity-70"
            >
              {passwordMutation.isPending ? "Updating..." : "Update Password"}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default UpdatePass;
