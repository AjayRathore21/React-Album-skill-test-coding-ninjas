import { Routes, Route } from "react-router-dom";
import "./App.css";
import AlbumContainer from "./AlbumContainer";
import Addalbum from "./Addalbum";
import { useEffect, useState } from "react";

function App() {
  const [albumarr, setablum] = useState([]);

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
      <Routes>
        <Route path="/" element={<AlbumContainer album={albumarr} />}></Route>
        <Route path="/add" element={<Addalbum albumarr={albumarr} setablum = {setablum} />}></Route>

        <Route path="*" element={<h1>404 Eror</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
