import React from "react";

export default function Hero({ title, subtitle, image } ) {
  return (
    <div>
      <div style={{ backgroundImage: `url(${image})` }} className="w-full h-[500px] flex justify-center flex-col items-center text-orange-00 font-bold text-5xl bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gray-600/50"></div>
        <h1 className="text-5xl text-white mb-4 relative z-10">{title}</h1>
        <p className="text-lg font-normal text-white max-w-xl relative z-10">
          {subtitle}

        </p>
      </div>
    </div>
  );
}
