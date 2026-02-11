import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children }) => {
  const baseStyles = "px-6 py-2 rounded-lg font-medium transition-all duration-300";
  const variants = {
    primary: "bg-[#7B92FF] text-white hover:bg-[#6A7EE5]", // Колір підібрано візуально
    outline: "border border-[#1A1C46] text-[#1A1C46] hover:bg-gray-50"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
};