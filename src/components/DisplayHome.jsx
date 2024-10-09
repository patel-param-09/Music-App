import React from "react";
import NavBar from "./NavBar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItems from "./SongItems";

const DisplayHome = () => {
  return (
    <>
      <NavBar />
      <div className="my-5 font-bold text-2xl">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((ele, index) => {
            return (
              <AlbumItem
                key={index}
                image={ele.image}
                name={ele.name}
                description={ele.desc}
                id={ele.id}
              />
            );
          })}
        </div>
      </div>
      <div className="my-5 font-bold text-2xl">
        <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((ele, index) => {
            return (
              <SongItems
                key={index}
                songName={ele.name}
                image={ele.image}
                id={ele.id}
                description={ele.desc}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
