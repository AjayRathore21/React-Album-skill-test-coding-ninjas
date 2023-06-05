import React from "react";
import AlbumCard from "./AlbumCard";
import "./file css/AlbumContainer.css";

const AlbumContainer = (props) => {
  const albumarr = props.album;

  console.log("inside alunmcontainer", albumarr);
  return (
    <div className="albumcontainer">
      {albumarr.map((album) => {
        return (
          // rendering all albumcard on the app
          <AlbumCard
            album={album}
            albumarr={albumarr}
            setablum={props.setablum}
          />
        );
      })}
    </div>
  );
};

export default AlbumContainer;
