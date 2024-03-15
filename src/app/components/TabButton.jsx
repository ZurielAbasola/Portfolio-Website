import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const activeClass = active
    ? "text-blue-700 border-b border-blue-700"
    : "text-black";

  return (
    <button
      onClick={selectTab}
      className={`mr-3 py-2 font-semibold ${activeClass} hover:text-blue-700`}
    >
      {children}
    </button>
  );
};

export default TabButton;
