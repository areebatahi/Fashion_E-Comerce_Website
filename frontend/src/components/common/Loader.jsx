import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
