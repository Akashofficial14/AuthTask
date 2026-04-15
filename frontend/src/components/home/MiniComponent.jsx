import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

const InfoRow = ({ icon, label, value, color }) => (
  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color === 'blue' ? 'bg-blue-100 text-blue-600' : color === 'purple' ? 'bg-purple-100 text-purple-600' : color === 'green' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
      {icon}
    </div>
    <div className="flex-1">
      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">{label}</p>
      <p className="text-sm font-semibold text-gray-900">{value}</p>
    </div>
  </div>
);

const InputBox = ({ label, type = "text", register, showToggle, isVisible, onToggle }) => (
  <div className="space-y-2 relative">
    <label className="text-sm font-bold text-gray-700 ml-1">{label}</label>
    <div className="relative">
      <input
        {...register}
        type={type}
        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
      />
      {showToggle && (
        <button
          type="button"
          onClick={onToggle}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          {isVisible ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  </div>
);

export { InfoRow, InputBox };
