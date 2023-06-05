import { Routes, Route } from "react-router-dom";
import "./App.css";
import AlbumContainer from "./AlbumContainer";
import Update from "./Update";
import Addalbum from "./Addalbum";
import { useEffect, useState } from "react";

function App() {
  const [albumarr, setablum] = useState([]);

  // fetching the data fron the server through get request!
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setablum(json);
      });
  }, []);

  return (
    <div className="App">
      {/* applied various Routers in the webapp! */}
      <Routes>
        <Route
          path="/"
          element={<AlbumContainer album={albumarr} setablum={setablum} />}
        ></Route>
        <Route
          path="/add"
          element={<Addalbum albumarr={albumarr} setablum={setablum} />}
        ></Route>
        <Route
          path="/update/:id"
          element={<Update albumarr={albumarr} setablum={setablum} />}
          Route
        />

        <Route path="*" element={<h1>404 Erorr</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
