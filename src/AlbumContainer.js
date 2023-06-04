import React from "react";
import AlbumCard from "./AlbumCard";
import "./file css/AlbumContainer.css";

const AlbumContainer = (props) => {
  const albumarr = props.album;

  console.log("inside alunmcontainer", albumarr);
  return (
    <div className="albumcontainer">
      {albumarr.map((album) => {
        return <AlbumCard album={album} />;
      })}
    </div>
  );
};

export default AlbumContainer;
