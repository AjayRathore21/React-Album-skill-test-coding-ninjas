import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./file css/AlbumCard.css";

const AlbumCard = (props) => {
  const navigate = useNavigate();
  const album = props.album;
  const albumarr = props.albumarr;

  function handleDelete() {
    //deleting the data on server using id
    fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data, "deleted data!"));

    const filteredArr = albumarr.filter((val) => val.id !== album.id);
    props.setablum(filteredArr);

    navigate("/");
  }

  return (
    <div className="albumcard">
      <div className="title">{album.title}</div>

      <Link
        to={`/update/${album.id}`}
        style={{ position: "absolute", bottom: "0px", left: "0px" }}
        className="button"
      >
        Update
      </Link>
      <button
        onClick={handleDelete}
        style={{ position: "absolute", bottom: "0px", right: "0px" }}
        className="button"
      >
        Delete
      </button>
    </div>
  );
};

export default AlbumCard;
