import React from "react";

function Card({ children, className }) {
  return (
    <div className={`rounded-xl hover:bg-gradient-to-br from-gray-700 to-gray-950 ${className} shadow-md`}>{children}</div>
  );
}

function Testimoni({ img, pendapat, nama, alt = '', jabatan }) {
  return (
    <div className="p-8" >
      <p className="flex -mb-24 -mt-5 items-center text-cyan-400 text-[9rem]">"</p>
      <p className="text-gray-400 text-md mb-6">{pendapat}</p>
      <div className="flex items-center">
        <img className="w-10 h-10 rounded-full mr-4" src={img} alt={alt} />
        <div>
          <h5 className="font-bold text-white">{nama}</h5>
          <p className="text-gray-400">{jabatan}</p>
        </div>
      </div>
    </div>
  );
}

Card.Testimoni = Testimoni;

export default Card;
