import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, description, id }) => {
  const navigate = useNavigate();

  return (
    <div
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
      onClick={() => {
        navigate(`/album/${id}`);
      }}
    >
      <img src={image} className="rounded" alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-salte-200 text-sm">{description}</p>
    </div>
  );
};

export default AlbumItem;
