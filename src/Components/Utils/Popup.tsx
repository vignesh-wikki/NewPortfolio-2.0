import type { ReactNode } from "react";

interface popup {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
  position:string
}

export default function Popup({ show, onClose, children,position }: popup) {
  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 bg-black opacity-90 flex ${position} items-center z-50`}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-xl p-6 w-96 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-black text-lg"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
