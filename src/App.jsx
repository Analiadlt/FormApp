import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Form from './components/Form';
import Responses from './views/Responses';
import "./App.css";

function App() {
 
  return (
    <div className="App">
      {/* <div>
        {location.pathname === "/" ? null : <NavBar onSearch={onSearch} />}
      </div> */}
      <Routes>
        <Route
          path="/"
          element={<Form />}
        ></Route>
        <Route path="/responses/:user" element={<Responses />}></Route>
      </Routes>
    </div>
  );
}

export default App;
