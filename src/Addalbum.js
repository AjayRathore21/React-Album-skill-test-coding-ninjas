import React from "react";
import "./file css/Addalbum.css";
import { useRef } from "react";
import { json, useNavigate } from "react-router-dom";

const Addalbum = (props) => {
  const userId = useRef();
  const title = useRef();

  var arr = props.albumarr;
  const setArr = props.setablum;

  //   const navigate = useNavigate();

  function handleSubmit() {
    fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      body: JSON.stringify({
        title: title.current.value,
        userId: userId.current.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("inside addAlbum", json);
        arr.unshift(json);
        setArr(arr);
      });

    //   navigate('/')
  }

  return (
    <div>
      <div class="center">
        <h1>Enter New Album Details</h1>
        <form>
          <div class="inputbox">
            <input ref={userId} type="number" required="required" />

            <span>Enter UserId:</span>
          </div>
          <div class="inputbox">
            <input ref={title} type="text" required="required" />
            <span>Enter Album Title:</span>
          </div>
          <div class="inputbox">
            <input onClick={handleSubmit} type="button" value="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addalbum;
