import React from "react";

export const MainContent = (param: {
  children: React.ReactNode;
}) => {
  const { children } = param;
  return (
    <div className="min-h-screen bg-black">
      {children}
    </div>
  )
};
