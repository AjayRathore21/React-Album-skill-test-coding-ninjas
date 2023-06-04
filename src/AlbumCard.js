import React from "react";
import "./file css/AlbumCard.css";

const AlbumCard = (props) => {

    const album = props.album;

    console.log("inside albumcard", album);

  return (
    <div className="albumcard">
      <div className="title">{album.title}</div>

      <div
        style={{ position: "absolute", bottom: "0px", left: "0px" }}
        className="button"
      >
        Update
      </div>
      <div
        style={{ position: "absolute", bottom: "0px", right: "0px" }}
        className="button"
      >
        Delete
      </div>
    </div>
  );
};

export default AlbumCard;
