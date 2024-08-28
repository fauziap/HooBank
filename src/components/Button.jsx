import React from "react";

function Button({
  className = "hover:bg-cyan-600 bg-gradient-to-b from-cyan-200 to-cyan-600",
  children,
  ...props
}) {
  return (
    <button
      {...props}
      className={`${className} text-gray-950 font-medium py-3 px-5 rounded-lg text-md focus:outline-none flex justify-center gap-2  transition duration-300`}
    >
      {children}
    </button>
  );
}

export default Button;
