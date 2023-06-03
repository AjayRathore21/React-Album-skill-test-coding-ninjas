import { Routes, Route } from "react-router-dom";
import "./App.css";
import AlbumContainer from "./AlbumContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AlbumContainer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
