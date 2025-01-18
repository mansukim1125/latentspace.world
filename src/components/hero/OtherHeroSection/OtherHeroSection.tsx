import React from "react";

export const OtherHeroSection = (param: {
  title: string;
  text: string;
}) => {
  const { title, text } = param;

  return (
    <div className="border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl text-gray-400">
          {text}
        </p>
      </div>
    </div>
  );
}
