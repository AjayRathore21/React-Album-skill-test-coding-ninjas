import React from "react";
import "./file css/Addalbum.css";
import { useRef } from "react";

const Addalbum = (props) => {
  const userId = useRef();
  const title = useRef();

  //   taking data from the form using ref variable

  var arr = props.albumarr;
  const setArr = props.setablum;

  function handleSubmit() {
    // creating album on the server!
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
        // pushing the created album at the first of state aarr
        arr.unshift(json);
        setArr(arr);
      });
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
