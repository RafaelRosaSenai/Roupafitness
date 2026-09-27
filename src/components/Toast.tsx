import React from 'react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#181b25] border border-[#c3f400] text-white px-5 py-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] animate-in slide-in-from-bottom-5 duration-300">
      <span className="material-symbols-outlined text-[#c3f400] text-[20px]">
        check_circle
      </span>
      <span className="text-xs font-semibold">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-[#c4c9ac] hover:text-white"
      >
        <span className="material-symbols-outlined text-[16px]">close</span>
      </button>
    </div>
  );
};
