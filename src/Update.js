import React from "react";
import "./file css/Update.css";
import { useRef } from "react";
import { useParams } from "react-router-dom";

const Update = (props) => {
  const userIdRef = useRef();
  const titleRef = useRef(); // accessing the form data through ref

  const { id } = useParams(); // getting object id which need to be update

  var arr = props.albumarr;

  const setArr = props.setablum;

  var updateObj = useRef();

  updateObj = arr.filter((val) => val.id == id); // used to show userId and title on the form title

  const { userId, title } = updateObj[0];

  function handleSubmit() {
    fetch(`https://jsonplaceholder.typicode.com/albums/id`, {
      method: "PATCH",
      body: JSON.stringify({
        title: titleRef.current.value,
        userId: userIdRef.current.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("inside Update", json);
        arr.map((val) => {
          if (val.id == id) {
            val.title = json.title; // updating the object by getting the response from the web
            val.userId = json.userId;

            return;
          }
        });
        setArr(arr);
      });
  }

  return (
    <div>
      <div class="center">
        <h1>
          Title:
          <mark>{title}</mark>
          <br></br>{" "}
          <mark style={{ backgroundColor: "pink", margin: "8px" }}>
            UserId:{userId}
          </mark>
        </h1>
        <form>
          <div class="inputbox">
            <input ref={titleRef} type="text" required="required" />

            <span>Enter New Title:</span>
          </div>
          <div class="inputbox">
            <input ref={userIdRef} type="number" required="required" />
            <span>Enter New UserId:</span>
          </div>
          <div class="inputbox">
            <input onClick={handleSubmit} type="button" value="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
