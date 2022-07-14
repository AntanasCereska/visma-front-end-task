import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users/Users";
import Register from "./pages/Register/Register";
import NavDesktop from "./components/Layout/NavDesktop/NavDesktop";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavDesktop />
        <Routes>
          <Route index element={<Users />} />
          <Route path="/users" element={<Users />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
