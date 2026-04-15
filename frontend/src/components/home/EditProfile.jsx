import React from "react";
import { ChevronLeft, Save } from "lucide-react";
import { InputBox } from "./MiniComponent";

const EditProfile = ({
  view,
  setView,
  handleSubmitEdit,
  handleEditProfile,
  registerEdit,
  profileMutation,
}) => {
  return (
    <>
      {view === "edit" && (
        <div className="p-8 animate-in slide-in-from-right-8 duration-300">
          <button
            onClick={() => setView("display")}
            className="flex items-center gap-2 text-gray-400 hover:text-blue-600 font-bold mb-6 transition-colors"
          >
            <ChevronLeft size={20} /> Back
          </button>
          <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tighter">
            Edit Information
          </h2>
          <form
            onSubmit={handleSubmitEdit(handleEditProfile)}
            className="space-y-5"
          >
            <div className="grid grid-cols-2 gap-4">
              <InputBox label="Full Name" register={registerEdit("name")} />
              <InputBox
                label="Current City"
                register={registerEdit("city")}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <InputBox
                label="Mobile Number"
                register={registerEdit("mobileNumber")}
              />
              <InputBox
                label="Email Address"
                register={registerEdit("email")}
              />
            </div>
            <button
              type="submit"
              disabled={profileMutation.isPending}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black shadow-lg hover:bg-blue-700 flex items-center justify-center gap-2 transition-all disabled:opacity-70"
            >
              <Save size={20} />{" "}
              {profileMutation.isPending ? "Saving..." : "Save Changes"}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default EditProfile;
