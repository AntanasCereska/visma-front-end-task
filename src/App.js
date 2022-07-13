import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users/Users";
import Register from "./pages/Register/Register";
import NavDesktop from "./components/Layout/NavDesktop/NavDesktop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavDesktop />
        <Routes>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
