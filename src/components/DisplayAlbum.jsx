import React from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];

  return (
    <>
      <NavBar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img src={albumData.image} className="w-48 rounded" alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img src={assets.logo} className="inline-block w-8" alt="" />
            <b> TuneTrek</b> • 1,346,276 Likes • <b>50 Songs, </b>
            About 2 hr 30 min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>
          Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img src={assets.clock_icon} className="m-auto w-4" alt="" />
      </div>
      <hr />
      {songsData.map((ele, index) => {
        return (
          <div
            key={index}
            className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
          >
            <p className="text-white">
              <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
              <img src={ele.image} className="inline w-10 mr-5" alt="" />
              {ele.name}
            </p>
            <p className="text-[15px]">{albumData.name}</p>
            <p className="text-[15px] hidden sm:block">5 Days Ago</p>
            <p className="text-[15px] text-center">{ele.duration}</p>
          </div>
        );
      })}
    </>
  );
};

export default DisplayAlbum;
