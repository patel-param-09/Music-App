import React from "react";

const SongItems = ({ songName, image, description, id }) => {
  return (
    <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img src={image} alt="" className="rounded" />
      <p className="font-bold mt-2 mb-1">{songName}</p>
      <p className="text-slate-200 text-sm">{description}</p>
    </div>
  );
};

export default SongItems;
